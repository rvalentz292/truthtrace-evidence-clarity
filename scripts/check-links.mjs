import { request as createHttpRequest } from "node:http";

const baseUrl = new URL(process.argv[2] ?? process.env.SITE_UNDER_TEST ?? "http://127.0.0.1:4173");
const approvedOrigin = "https://truthtrace.ai";
const localTestHosts = new Set(["127.0.0.1", "localhost"]);

if (!localTestHosts.has(baseUrl.hostname) || baseUrl.protocol !== "http:") {
  throw new Error(
    "Link validation is local-only and requires an http://127.0.0.1 or localhost origin.",
  );
}

const entryPaths = ["/", "/technology"];
const requiredPublicPaths = new Map([
  ["/favicon.svg", /^image\/svg\+xml\b/i],
  ["/og.png", /^image\/png\b/i],
  ["/robots.txt", /^text\/plain\b/i],
  ["/site.webmanifest", /^(?:application\/manifest\+json|application\/json)\b/i],
  ["/sitemap.xml", /^(?:application|text)\/xml\b/i],
]);
const checkedDocuments = new Map();
const failures = [];
const securityHeaders = new Map([
  ["cross-origin-opener-policy", "same-origin"],
  ["referrer-policy", "strict-origin-when-cross-origin"],
  ["x-content-type-options", "nosniff"],
  ["x-frame-options", "DENY"],
]);

async function request(url, options = {}) {
  try {
    const response = await fetch(url, {
      ...options,
      redirect: "manual",
      signal: AbortSignal.timeout(10_000),
    });
    const bytes = Buffer.from(await response.arrayBuffer());
    return { body: bytes.toString("utf8"), bytes, response };
  } catch (error) {
    failures.push(`${url.href} request failed: ${error instanceof Error ? error.message : error}`);
    return undefined;
  }
}

async function requestWithHost(path, host) {
  return new Promise((resolve) => {
    const req = createHttpRequest(
      {
        hostname: baseUrl.hostname,
        port: baseUrl.port,
        method: "GET",
        path,
        headers: { host },
      },
      (response) => {
        const chunks = [];
        response.on("data", (chunk) => chunks.push(chunk));
        response.on("end", () => {
          const bytes = Buffer.concat(chunks);
          resolve({
            body: bytes.toString("utf8"),
            bytes,
            response: {
              headers: new Headers(response.headers),
              status: response.statusCode ?? 0,
            },
          });
        });
      },
    );
    req.setTimeout(10_000, () => req.destroy(new Error("request timed out")));
    req.on("error", (error) => {
      failures.push(`${host}${path} request failed: ${error.message}`);
      resolve(undefined);
    });
    req.end();
  });
}

async function fetchDocument(url) {
  const key = url.href;
  if (!checkedDocuments.has(key)) checkedDocuments.set(key, request(url));
  return checkedDocuments.get(key);
}

function hrefsFrom(html) {
  return [...html.matchAll(/\shref=["']([^"']+)["']/gi)].map((match) => match[1]);
}

function expectExact200(document, url, expectedType) {
  if (!document) return false;
  const { response } = document;
  if (response.status !== 200) {
    failures.push(`${url.href} returned ${response.status}, expected 200`);
    return false;
  }
  if (response.url !== url.href) {
    failures.push(`${url.href} resolved as unexpected URL ${response.url}`);
  }
  if (expectedType && !expectedType.test(response.headers.get("content-type") ?? "")) {
    failures.push(
      `${url.href} returned unexpected content type ${response.headers.get("content-type")}`,
    );
  }
  if (response.headers.has("set-cookie")) failures.push(`${url.href} unexpectedly set a cookie`);
  return true;
}

function expectSecurityHeaders(response, label) {
  for (const [name, expected] of securityHeaders) {
    const actual = response.headers.get(name);
    if (actual !== expected)
      failures.push(`${label} ${name}=${actual ?? "MISSING"}, expected ${expected}`);
  }
  const permissions = response.headers.get("permissions-policy") ?? "";
  for (const directive of ["camera=()", "microphone=()", "geolocation=()", "payment=()", "usb=()"])
    if (!permissions.includes(directive))
      failures.push(`${label} permissions-policy omits ${directive}`);
}

for (const entryPath of entryPaths) {
  const entryUrl = new URL(entryPath, baseUrl);
  const document = await fetchDocument(entryUrl);
  if (!expectExact200(document, entryUrl, /^text\/html\b/i)) continue;

  const { body, response } = document;
  expectSecurityHeaders(response, entryPath);
  const expectedCanonical = new URL(entryPath, approvedOrigin).toString();
  if (!body.includes(`rel="canonical" href="${expectedCanonical}"`)) {
    failures.push(`${entryPath} is missing canonical ${expectedCanonical}`);
  }
  if (!body.includes(`property="og:url" content="${expectedCanonical}"`)) {
    failures.push(`${entryPath} is missing Open Graph URL ${expectedCanonical}`);
  }

  for (const href of hrefsFrom(body)) {
    if (/^(mailto:|tel:|javascript:|data:)/i.test(href)) continue;

    const target = new URL(href, entryUrl);
    if (target.origin !== baseUrl.origin) continue;

    const fragment = target.hash.slice(1);
    target.hash = "";
    const targetDocument = await fetchDocument(target);
    if (!expectExact200(targetDocument, target)) continue;

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

for (const [publicPath, contentType] of requiredPublicPaths) {
  const publicUrl = new URL(publicPath, baseUrl);
  const document = await fetchDocument(publicUrl);
  if (!expectExact200(document, publicUrl, contentType)) continue;

  if (publicPath === "/favicon.svg" && !/<svg\b/i.test(document.body)) {
    failures.push(`${publicPath} is not an SVG body`);
  }
  if (
    publicPath === "/og.png" &&
    !document.bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
  ) {
    failures.push(`${publicPath} is not a PNG body`);
  }
  if (publicPath === "/robots.txt") {
    const expected = `User-agent: *\nAllow: /\n\nSitemap: ${approvedOrigin}/sitemap.xml`;
    if (document.body.replace(/\r\n/g, "\n").trim() !== expected) {
      failures.push(`${publicPath} does not match the approved production policy`);
    }
  }
  if (publicPath === "/site.webmanifest") {
    try {
      const manifest = JSON.parse(document.body);
      for (const field of ["id", "start_url", "scope"]) {
        if (manifest[field] !== `${approvedOrigin}/`) {
          failures.push(`${publicPath} ${field} does not equal ${approvedOrigin}/`);
        }
      }
    } catch {
      failures.push(`${publicPath} is not valid JSON`);
    }
  }
  if (publicPath === "/sitemap.xml") {
    const locations = [...document.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
    if (
      JSON.stringify(locations) !==
      JSON.stringify([`${approvedOrigin}/`, `${approvedOrigin}/technology`])
    ) {
      failures.push(`${publicPath} contains routes outside the approved candidate surface`);
    }
  }
}

for (const [path, expectedStatus] of new Map([
  ["/private-demo", 410],
  ["/__release_gate_missing_route__", 404],
])) {
  const url = new URL(path, baseUrl);
  const document = await request(url);
  if (!document) continue;
  const { body, response } = document;
  if (response.status !== expectedStatus) {
    failures.push(`${path} returned ${response.status}, expected ${expectedStatus}`);
  }
  if (!/^text\/html\b/i.test(response.headers.get("content-type") ?? "")) {
    failures.push(`${path} did not return HTML`);
  }
  if (!/<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(body)) {
    failures.push(`${path} is missing a robots noindex meta tag`);
  }
  if (!(response.headers.get("x-robots-tag") ?? "").includes("noindex")) {
    failures.push(`${path} is missing an X-Robots-Tag noindex header`);
  }
  expectSecurityHeaders(response, path);
}

for (const host of ["truthtrace.ai", "truthtrace.ai."]) {
  const apexProbe = await requestWithHost("/technology?host=apex", host);
  if (apexProbe && apexProbe.response.status !== 200) {
    failures.push(`${host} apex probe returned ${apexProbe.response.status}, expected 200`);
  }
}

for (const host of ["www.truthtrace.ai", "www.truthtrace.ai."]) {
  for (const path of ["/", "/technology?host=www"]) {
    const url = new URL(path, baseUrl);
    const probe = await requestWithHost(url.pathname + url.search, host);
    if (!probe) continue;
    const expectedLocation = `${approvedOrigin}${path}`;
    if (probe.response.status !== 308) {
      failures.push(`${host} probe ${path} returned ${probe.response.status}, expected 308`);
    }
    if (probe.response.headers.get("location") !== expectedLocation) {
      failures.push(
        `${host} probe ${path} location=${probe.response.headers.get("location")}, expected ${expectedLocation}`,
      );
    }
    expectSecurityHeaders(probe.response, `${host} probe ${path}`);
  }
}

for (const host of [
  "truthtrace.app",
  "www.truthtrace.app",
  "truthtrace.app.",
  "www.truthtrace.app.",
  "unapproved-publication-host.invalid",
]) {
  const probe = await requestWithHost("/?host=excluded", host);
  if (!probe) continue;
  if (probe.response.status !== 421) {
    failures.push(`${host} probe returned ${probe.response.status}, expected 421`);
  }
  if (probe.response.headers.has("location")) {
    failures.push(`${host} probe unexpectedly returned a redirect location`);
  }
  if (!(probe.response.headers.get("x-robots-tag") ?? "").includes("noindex")) {
    failures.push(`${host} probe is missing an X-Robots-Tag noindex header`);
  }
  if (probe.body.includes('rel="canonical"') || probe.body.includes("TruthTrace")) {
    failures.push(`${host} probe exposed family-law publication content`);
  }
  expectSecurityHeaders(probe.response, `${host} probe`);
}

if (failures.length) {
  console.error("Link and runtime publication check failed:");
  for (const failure of [...new Set(failures)]) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(
    `Link and runtime publication check passed: ${checkedDocuments.size} documents, ${entryPaths.length} entry routes, ${requiredPublicPaths.size} required public paths, one retired-route 410, one true 404, apex handling, www HTML-navigation redirects, and excluded/unknown HTML-host rejection.`,
  );
}
