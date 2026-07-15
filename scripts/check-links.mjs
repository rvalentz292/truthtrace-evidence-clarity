const baseUrl = new URL(process.argv[2] ?? process.env.SITE_UNDER_TEST ?? "http://127.0.0.1:4173");

const entryPaths = ["/", "/technology"];
const checkedDocuments = new Map();
const failures = [];

async function fetchDocument(url) {
  const key = url.href;
  if (checkedDocuments.has(key)) return checkedDocuments.get(key);

  const response = await fetch(url, { redirect: "follow" });
  const body = await response.text();
  const document = { body, response };
  checkedDocuments.set(key, document);
  return document;
}

function hrefsFrom(html) {
  return [...html.matchAll(/\shref=["']([^"']+)["']/gi)].map((match) => match[1]);
}

for (const entryPath of entryPaths) {
  const entryUrl = new URL(entryPath, baseUrl);
  const { body, response } = await fetchDocument(entryUrl);

  if (!response.ok) {
    failures.push(`${entryUrl.href} returned ${response.status}`);
    continue;
  }

  for (const href of hrefsFrom(body)) {
    if (/^(mailto:|tel:|javascript:|data:)/i.test(href)) continue;

    const target = new URL(href, entryUrl);
    if (target.origin !== baseUrl.origin) continue;

    const fragment = target.hash.slice(1);
    target.hash = "";
    const targetDocument = await fetchDocument(target);

    if (!targetDocument.response.ok) {
      failures.push(`${href} from ${entryUrl.pathname} returned ${targetDocument.response.status}`);
      continue;
    }

    if (
      fragment &&
      !new RegExp(`\\bid=["']${fragment.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["']`).test(
        targetDocument.body,
      )
    ) {
      failures.push(`${href} from ${entryUrl.pathname} has no matching id`);
    }
  }
}

const missingUrl = new URL("/__release_gate_missing_route__", baseUrl);
const missingResponse = await fetch(missingUrl, { redirect: "manual" });
if (missingResponse.status !== 404) {
  failures.push(`${missingUrl.pathname} returned ${missingResponse.status}, expected 404`);
}

if (failures.length) {
  console.error("Link check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(
    `Link check passed: ${checkedDocuments.size} documents, ${entryPaths.length} entry routes, and the 404 route.`,
  );
}
