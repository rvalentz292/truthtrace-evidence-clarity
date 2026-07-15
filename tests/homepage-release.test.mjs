import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

const root = resolve(import.meta.dirname, "..");
const read = (path) => readFileSync(resolve(root, path), "utf8");

const homepage = read("src/components/site/HomePage.tsx");
const nav = read("src/components/site/Nav.tsx");
const contact = read("src/routes/contact.tsx");
const privateDemo = read("src/routes/private-demo.tsx");
const privacy = read("src/content/website-privacy.ts");
const terms = read("src/content/website-terms.ts");
const publicSource = [
  homepage,
  nav,
  contact,
  privateDemo,
  privacy,
  terms,
  read("src/routes/index.tsx"),
  read("src/routes/privacy.tsx"),
  read("src/routes/terms.tsx"),
  read("src/routes/technology.tsx"),
  read("src/routes/__root.tsx"),
].join("\n");
const packageJson = JSON.parse(read("package.json"));
const server = read("src/server.ts");
const errorPage = read("src/lib/error-page.ts");
const metadata = read("src/lib/site-metadata.ts");
const styles = read("src/styles.css");
const robots = read("public/robots.txt");
const sitemap = read("public/sitemap.xml");
const manifest = JSON.parse(read("public/site.webmanifest"));

test("every homepage navigation hash has a real target", () => {
  const hashes = [...nav.matchAll(/hash="([^"]+)"/g)].map((match) => match[1]);
  assert.ok(hashes.length > 0);

  for (const hash of new Set(hashes)) {
    const hasTarget =
      homepage.includes(`id="${hash}"`) || homepage.includes(`Section id="${hash}"`);
    assert.ok(hasTarget, `Missing homepage target for #${hash}`);
  }
});

test("the required private-demo route is static, noindex, and disconnected from production", () => {
  assert.equal(existsSync(resolve(root, "src/routes/private-demo.tsx")), true);
  assert.equal(existsSync(resolve(root, "src/components/site/Workspace.tsx")), false);
  assert.match(privateDemo, /name: "robots", content: "noindex, nofollow, noarchive"/);
  assert.match(privateDemo, /illustrative, non-interactive review page/i);
  assert.match(
    privateDemo,
    /does not connect to TruthTrace AI or\s+production evidence processing/i,
  );
  assert.doesNotMatch(privateDemo, /<form|<input|<textarea|fetch\(|createServerFn|useMutation/i);
});

test("representative data and public-site boundaries are explicit", () => {
  assert.match(homepage, /Representative demonstration/i);
  assert.match(homepage, /No real family information shown/i);
  assert.match(homepage, /No evidence uploads on this site/i);
  assert.match(homepage, /does not provide legal advice/i);
});

test("known unsafe operational claims and sensitive email intake are absent", () => {
  const unsafe = [
    /mailto:/i,
    /currently operating in controlled pilot/i,
    /available now/i,
    /every finding traceable/i,
    /every one enforced/i,
    /workspace\s*·\s*live/i,
    /immutable EvidenceObjects/i,
  ];

  for (const pattern of unsafe) assert.doesNotMatch(publicSource, pattern);
});

test("approved website terms replace the conflicting legacy platform terms", () => {
  assert.match(terms, /effectiveDate: "July 15, 2026"/);
  assert.match(terms, /public website at https:\/\/truthtrace\.ai/i);
  assert.match(terms, /The website does not currently offer:/i);
  assert.match(
    terms,
    /The public website is not a secure evidence-transfer or case-intake system/i,
  );
  assert.match(terms, /Nothing on this website is legal, medical, mental-health, clinical/i);

  for (const pattern of [
    /Stripe/i,
    /Kids Mode/i,
    /privacy@/i,
    /legal@/i,
    /fees are non-refundable/i,
  ]) {
    assert.doesNotMatch(terms, pattern);
  }
});

test("approved website privacy notice is browse-only and has the reviewed effective date", () => {
  assert.match(privacy, /title: "TruthTrace Website Privacy Notice"/);
  assert.match(privacy, /effectiveDate: "July 15, 2026"/);
  assert.match(privacy, /public website at truthtrace\.ai/i);
  assert.match(privacy, /The website does not currently provide:/i);
  assert.match(
    privacy,
    /does not intentionally use advertising cookies, behavioral tracking, session replay, or marketing analytics/i,
  );
  assert.match(
    privacy,
    /Cloudflare, through Lovable hosting, uses the __cf_bm cookie as a strictly necessary security and bot-management cookie/i,
  );
  assert.match(
    privacy,
    /distinguish legitimate traffic and protect the hosted site from automated abuse/i,
  );
  assert.match(
    privacy,
    /platform-controlled cookie for the lovable\.app domain and \/ path with an expiration approximately 30 minutes after the response/i,
  );
  assert.match(privacy, /not TruthTrace application code/i);
  assert.match(
    privacy,
    /TruthTrace does not use it for advertising, marketing, personalization, or visitor analytics/i,
  );
  assert.match(privacy, /public website is not a secure case-intake or evidence-transfer system/i);
  assert.match(
    privacy,
    /does not maintain website user accounts, uploaded evidence, case files, or payment records/i,
  );
  assert.match(privacy, /Verified privacy contact information, when available/i);

  for (const pattern of [
    /googletagmanager\.com/i,
    /google-analytics\.com/i,
    /hotjar\.com/i,
    /segment\.(?:com|io)/i,
    /posthog\.com/i,
    /\bGTM-[A-Z0-9]+\b/,
    /\bG-D6SXEJ3K9D\b/,
    /__lovableEvents/,
    /\/__l5e\/events(?:\.js)?/i,
    /\/~flock(?:\.js)?/i,
    /privacy@/i,
    /Kids Mode/i,
    /We apply encryption/i,
  ]) {
    assert.doesNotMatch(privacy, pattern);
  }
});

test("the temporary contact page is browse-only and contains no intake channel", () => {
  assert.match(
    contact,
    /TruthTrace is currently operating this website as a public informational/i,
  );
  assert.match(contact, /Do not submit case details, evidence, confidential family information/i);
  assert.match(contact, /A verified contact channel will be\s+published/i);

  for (const pattern of [
    /<form/i,
    /<input/i,
    /<textarea/i,
    /mailto:/i,
    /tel:/i,
    /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
  ]) {
    assert.doesNotMatch(contact, pattern);
  }
});

test("public source contains no local or preview URLs", () => {
  assert.doesNotMatch(publicSource, /localhost|127\.0\.0\.1|preview--/i);
  assert.doesNotMatch(publicSource, /truthtrace\.app/i);
});

test("every build script is protected by the publication validator", () => {
  for (const name of Object.keys(packageJson.scripts).filter((name) => name.startsWith("build"))) {
    assert.match(
      packageJson.scripts[name],
      /validate-publication\.mjs/,
      `${name} bypasses the gate`,
    );
  }
});

test("publication configuration requires the exact approved origin", () => {
  const validator = resolve(root, "scripts/validate-publication.mjs");
  const missingEnv = { ...process.env };
  delete missingEnv.VITE_SITE_URL;

  const missing = spawnSync(process.execPath, [validator], {
    cwd: root,
    env: missingEnv,
    encoding: "utf8",
  });
  assert.notEqual(missing.status, 0);
  assert.match(missing.stderr, /is required and must equal/i);

  for (const value of [
    "not-a-url",
    "http://truth-trace-forge.lovable.app",
    "https://truth-trace-forge.lovable.app//",
    "https://truth-trace-forge.lovable.app/path",
    "https://example.invalid",
  ]) {
    const invalid = spawnSync(process.execPath, [validator], {
      cwd: root,
      env: { ...process.env, VITE_SITE_URL: value },
      encoding: "utf8",
    });
    assert.notEqual(invalid.status, 0, `${value} unexpectedly passed`);
    assert.match(invalid.stderr, /VITE_SITE_URL/);
  }

  for (const value of [
    "https://truth-trace-forge.lovable.app",
    "https://truth-trace-forge.lovable.app/",
  ]) {
    const approved = spawnSync(process.execPath, [validator], {
      cwd: root,
      env: { ...process.env, VITE_SITE_URL: value },
      encoding: "utf8",
    });
    assert.equal(approved.status, 0, approved.stderr);
  }
});

test("SSR responses receive the public security-header baseline", () => {
  for (const name of [
    "cross-origin-opener-policy",
    "permissions-policy",
    "referrer-policy",
    "x-content-type-options",
    "x-frame-options",
  ]) {
    assert.ok(server.includes(`\"${name}\"`), `Missing ${name}`);
  }
  assert.match(server, /x-robots-tag/);
  assert.match(server, /no-store/);
  assert.match(errorPage, /name="robots" content="noindex, nofollow, noarchive"/);
  assert.match(server, /EXCLUDED_FAMILY_LAW_HOSTS/);
  assert.match(server, /unauthorizedHostResponse/);
  assert.match(server, /status: 421/);
  assert.match(server, /PRIVATE_REVIEW_PATH/);
  assert.match(server, /status: 301/);
  assert.doesNotMatch(server, /status: 308/);
  assert.doesNotMatch(errorPage, /function renderGonePage/);
  assert.equal(existsSync(resolve(root, "src/lib/lovable-error-reporting.ts")), false);
  assert.doesNotMatch(publicSource, /__lovableEvents/);
});

test("publication metadata is locked to the normalized Lovable production origin", () => {
  assert.match(metadata, /APPROVED_SITE_ORIGIN = "https:\/\/truth-trace-forge\.lovable\.app"/);
  assert.match(metadata, /normalizeConfiguredSiteOrigin\(import\.meta\.env\.VITE_SITE_URL\)/);
  assert.match(metadata, /property: "og:url"/);
  assert.match(metadata, /name: "twitter:image"/);
  assert.match(metadata, /rel: "canonical"/);
});

test("reduced-motion, forced-colors, and narrow reflow safeguards remain active", () => {
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(styles, /animation-duration: 0\.001ms !important/);
  assert.match(styles, /transition-duration: 0\.001ms !important/);
  assert.match(styles, /scroll-behavior: auto !important/);
  assert.match(styles, /@media \(forced-colors: active\)/);
  assert.match(styles, /color: CanvasText/);
  assert.match(styles, /min-width: 320px/);
  assert.doesNotMatch(styles, /(?:html|body)[^{]*\{[^}]*overflow-x:\s*hidden/is);
});

test("robots, sitemap, and manifest use the approved publication origin", () => {
  assert.equal(
    robots.replace(/\r\n/g, "\n").trim(),
    "User-agent: *\nAllow: /\n\nSitemap: https://truth-trace-forge.lovable.app/sitemap.xml",
  );

  const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert.deepEqual(locations, [
    "https://truth-trace-forge.lovable.app/",
    "https://truth-trace-forge.lovable.app/technology",
    "https://truth-trace-forge.lovable.app/privacy",
    "https://truth-trace-forge.lovable.app/terms",
    "https://truth-trace-forge.lovable.app/contact",
  ]);

  for (const field of ["id", "start_url", "scope"]) {
    assert.equal(manifest[field], "https://truth-trace-forge.lovable.app/");
  }
});
