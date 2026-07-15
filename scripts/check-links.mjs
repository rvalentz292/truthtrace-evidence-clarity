import { request as createHttpRequest } from "node:http";
import { readdir, readFile } from "node:fs/promises";
import { join, relative, resolve } from "node:path";

const baseUrl = new URL(process.argv[2] ?? process.env.SITE_UNDER_TEST ?? "http://127.0.0.1:4173");
const approvedOrigin = "https://truthtrace.ai";
const localTestHosts = new Set(["127.0.0.1", "localhost"]);

if (!localTestHosts.has(baseUrl.hostname) || baseUrl.protocol !== "http:") {
  throw new Error(
    "Link validation is local-only and requires an http://127.0.0.1 or localhost origin.",
  );
}

const entryPaths = ["/", "/technology", "/privacy", "/terms", "/contact"];
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
const trackingTokens = new Map([
  ["Google Tag Manager hostname", /googletagmanager\.com/i],
  ["Google Analytics hostname", /google-analytics\.com/i],
  ["Google tag loader", /\bgtag\s*\(/i],
  ["Google tag data layer", /\bdataLayer\b/],
  ["Hotjar hostname", /(?:^|[./])hotjar\.com\b/i],
  ["Segment hostname", /(?:^|[./])segment\.(?:com|io)\b/i],
  ["PostHog hostname", /(?:^|[./])posthog\.com\b/i],
  ["legacy Google Tag Manager ID", /\bGTM-M6QXKM2C\b/],
  ["legacy Google Analytics ID", /\bG-D6SXEJ3K9D\b/],
  ["Lovable browser event hook", /__lovableEvents/],
  ["Lovable event endpoint", /\/__l5e\/events(?:\.js)?\b/i],
  ["Lovable flock loader", /\/~flock(?:\.js)?\b/i],
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

function localizeApprovedUrl(href, documentUrl) {
  const target = new URL(href, documentUrl);
  if (target.origin === approvedOrigin) {
    return new URL(`${target.pathname}${target.search}${target.hash}`, baseUrl);
  }
  return target;
}

function expectNoTrackingTokens(content, label) {
  for (const [token, pattern] of trackingTokens) {
    if (pattern.test(content)) failures.push(`${label} contains forbidden ${token}`);
  }
}

async function builtJavaScriptFiles(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await builtJavaScriptFiles(path)));
    else if (entry.isFile() && /\.m?js$/i.test(entry.name)) files.push(path);
  }
  return files;
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
  expectNoTrackingTokens(body, `${entryPath} HTML`);
  const expectedCanonical = new URL(entryPath, approvedOrigin).toString();
  if (!body.includes(`rel="canonical" href="${expectedCanonical}"`)) {
    failures.push(`${entryPath} is missing canonical ${expectedCanonical}`);
  }
  if (!body.includes(`property="og:url" content="${expectedCanonical}"`)) {
    failures.push(`${entryPath} is missing Open Graph URL ${expectedCanonical}`);
  }

  if (entryPath === "/privacy") {
    for (const marker of [
      "TruthTrace Website Privacy Notice",
      "The website does not currently provide:",
      "TruthTrace does not intentionally use advertising cookies, behavioral tracking, session replay, or marketing analytics on the current browse-only website.",
      "The public website is not a secure case-intake or evidence-transfer system.",
      "TruthTrace does not maintain website user accounts, uploaded evidence, case files, or payment records through the current public website.",
    ]) {
      if (!body.includes(marker)) failures.push(`${entryPath} is missing approved text: ${marker}`);
    }
    if (!/Effective Date:[\s\S]{0,80}July 15, 2026/.test(body)) {
      failures.push(`${entryPath} is missing the approved effective date`);
    }
  }

  if (entryPath === "/terms") {
    for (const marker of [
      "TruthTrace Website Terms of Use",
      "The website does not currently offer:",
      "The public website is not a secure evidence-transfer or case-intake system.",
    ]) {
      if (!body.includes(marker)) failures.push(`${entryPath} is missing approved text: ${marker}`);
    }
    if (!/Effective Date:[\s\S]{0,80}July 15, 2026/.test(body)) {
      failures.push(`${entryPath} is missing the approved effective date`);
    }
    for (const forbidden of ["Stripe", "Kids Mode", "privacy@", "legal@"]) {
      if (body.includes(forbidden))
        failures.push(`${entryPath} contains legacy term: ${forbidden}`);
    }
  }

  if (entryPath === "/contact") {
    for (const marker of [
      "TruthTrace is currently operating this website as a public informational",
      "Do not submit case details, evidence, confidential family information,",
      "A verified contact channel will be published",
    ]) {
      if (!body.includes(marker)) failures.push(`${entryPath} is missing approved text: ${marker}`);
    }
    for (const forbidden of ["<form", "<input", "<textarea", "mailto:", "tel:"]) {
      if (body.toLowerCase().includes(forbidden)) {
        failures.push(`${entryPath} contains forbidden intake markup: ${forbidden}`);
      }
    }
  }

  for (const href of hrefsFrom(body)) {
    if (/^(mailto:|tel:|javascript:|data:)/i.test(href)) continue;

    const target = localizeApprovedUrl(href, entryUrl);
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

let builtScriptCount = 0;
try {
  const builtPublicDirectory = resolve(import.meta.dirname, "..", ".output", "public");
  for (const file of await builtJavaScriptFiles(builtPublicDirectory)) {
    builtScriptCount += 1;
    expectNoTrackingTokens(
      await readFile(file, "utf8"),
      `built JavaScript ${relative(builtPublicDirectory, file).replaceAll("\\", "/")}`,
    );
  }
} catch (error) {
  failures.push(
    `built JavaScript could not be scanned: ${error instanceof Error ? error.message : error}`,
  );
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
      JSON.stringify([
        `${approvedOrigin}/`,
        `${approvedOrigin}/technology`,
        `${approvedOrigin}/privacy`,
        `${approvedOrigin}/terms`,
        `${approvedOrigin}/contact`,
      ])
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
  for (const entryPath of entryPaths) {
    const url = new URL(entryPath, approvedOrigin);
    url.searchParams.set("host", "apex");
    const path = `${url.pathname}${url.search}`;
    const apexProbe = await requestWithHost(path, host);
    if (!apexProbe) continue;
    if (apexProbe.response.status !== 200) {
      failures.push(
        `${host} apex probe ${path} returned ${apexProbe.response.status}, expected 200`,
      );
    }
    if (apexProbe.response.headers.has("set-cookie")) {
      failures.push(`${host} apex probe ${path} unexpectedly set a cookie`);
    }
    expectSecurityHeaders(apexProbe.response, `${host} apex probe ${path}`);
  }
}

for (const host of ["www.truthtrace.ai", "www.truthtrace.ai."]) {
  for (const entryPath of entryPaths) {
    const url = new URL(entryPath, approvedOrigin);
    url.searchParams.set("host", "www");
    const path = `${url.pathname}${url.search}`;
    const probe = await requestWithHost(path, host);
    if (!probe) continue;
    const expectedLocation = url.toString();
    if (probe.response.status !== 301) {
      failures.push(`${host} probe ${path} returned ${probe.response.status}, expected 301`);
    }
    if (probe.response.headers.get("location") !== expectedLocation) {
      failures.push(
        `${host} probe ${path} location=${probe.response.headers.get("location")}, expected ${expectedLocation}`,
      );
    }
    if (probe.response.headers.has("set-cookie")) {
      failures.push(`${host} probe ${path} unexpectedly set a cookie`);
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
    `Link and runtime publication check passed: ${checkedDocuments.size} documents, ${entryPaths.length} entry routes, ${requiredPublicPaths.size} required public paths, ${builtScriptCount} built JavaScript files, one retired-route 410, one true 404, all-five apex probes, all-five www HTML-navigation redirects, and excluded/unknown HTML-host rejection.`,
  );
}
