import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

const root = resolve(import.meta.dirname, "..");
const read = (path) => readFileSync(resolve(root, path), "utf8");

const homepageShell = read("src/components/site/HomePage.tsx");
const homepageSections = read("src/components/site/HomepageSections.tsx");
const commandCenter = read("src/components/site/EvidenceCommandCenter.tsx");
const evidenceFixtureSource = read("src/content/homepage-evidence.json");
const evidenceFixture = JSON.parse(evidenceFixtureSource);
const homepage = [homepageShell, homepageSections, commandCenter, evidenceFixtureSource].join("\n");
const nav = read("src/components/site/Nav.tsx");
const contact = read("src/routes/contact.tsx");
const privacy = read("src/content/website-privacy.ts");
const terms = read("src/content/website-terms.ts");
const publicSource = [
  homepage,
  nav,
  contact,
  privacy,
  terms,
  read("src/routes/index.tsx"),
  read("src/routes/privacy.tsx"),
  read("src/routes/terms.tsx"),
  read("src/routes/technology.tsx"),
  read("src/routes/__root.tsx"),
].join("\n");
const packageJson = JSON.parse(read("package.json"));
const nitroConfig = read("nitro.config.ts");
const viteConfig = read("vite.config.ts");
const server = read("src/server.ts");
const errorPage = read("src/lib/error-page.ts");
const metadata = read("src/lib/site-metadata.ts");
const styles = read("src/styles.css");
const robots = read("public/robots.txt");
const sitemap = read("public/sitemap.xml");
const manifest = JSON.parse(read("public/site.webmanifest"));

test("every homepage navigation hash has a real target", () => {
  const hashes = [...nav.matchAll(/\{ label: "[^"]+", hash: "([^"]+)" \}/g)].map(
    (match) => match[1],
  );
  assert.deepEqual(hashes, ["platform", "parents", "professionals", "trust"]);

  for (const hash of hashes) {
    assert.ok(homepageSections.includes(`id="${hash}"`), `Missing homepage target for #${hash}`);
  }
});

test("the homepage keeps exactly six primary sections", () => {
  assert.equal([...homepageSections.matchAll(/<section\b/g)].length, 6);
});

test("the public surface does not expose the former private demo", () => {
  assert.equal(existsSync(resolve(root, "src/routes/private-demo.tsx")), false);
  assert.equal(existsSync(resolve(root, "src/components/site/Workspace.tsx")), false);
});

test("the public asset inventory contains only reviewed release files", () => {
  assert.deepEqual(readdirSync(resolve(root, "public")).sort(), [
    "_headers",
    "favicon.svg",
    "og.png",
    "robots.txt",
    "site.webmanifest",
    "sitemap.xml",
  ]);
  assert.equal(existsSync(resolve(root, "public/og-homepage-v2.png")), false);
});

test("representative data and public-site boundaries are explicit", () => {
  assert.match(homepage, /Illustrative product demonstration/i);
  assert.match(homepage, /Illustrative case data/i);
  assert.match(homepage, /No real family information shown/i);
  assert.match(homepage, /No evidence uploads on this site/i);
  assert.match(homepage, /does not provide legal advice/i);
});

test("the homepage passes the five-second value and proof-chain content gate", () => {
  for (const pattern of [
    /Turn scattered evidence into a record you can follow/i,
    /structured chronology with citations back to exact source locations/i,
    /parents and\s+professionals can review the record without losing the evidence trail/i,
    /Built to support evidence review—not replace legal or professional judgment/i,
    /Observation/,
    /Timeline event/,
    /Citation/,
    /Exact excerpt/,
    /Source record/,
    /Source locator/,
    /Evidence identity/,
    /Integrity identifier/,
    /Review state/,
    /Bring order to the record you already have/i,
    /Review the chronology without losing the evidence trail/i,
    /Public informational website · Browse-only product demonstration/i,
  ]) {
    assert.match(homepage, pattern);
  }
});

test("illustrative evidence fixtures are internally consistent and review-bounded", () => {
  assert.ok(evidenceFixture.events.length >= 3);
  assert.ok(evidenceFixture.sources.length >= 3);

  const sourceIds = new Set(evidenceFixture.sources.map((source) => source.id));
  const eventIds = new Set(evidenceFixture.events.map((event) => event.id));
  assert.equal(sourceIds.size, evidenceFixture.sources.length);
  assert.equal(eventIds.size, evidenceFixture.events.length);

  for (const event of evidenceFixture.events) {
    for (const field of [
      "observation",
      "timelineEvent",
      "citation",
      "excerpt",
      "sourceLocator",
      "sourceIdentity",
      "integrityId",
      "reviewState",
      "reviewNote",
    ]) {
      assert.equal(typeof event[field], "string");
      assert.ok(event[field].trim(), `${event.id} is missing ${field}`);
    }
    assert.ok(event.linkedSourceIds.length > 0, `${event.id} has no linked source`);
    for (const sourceId of event.linkedSourceIds) {
      assert.ok(sourceIds.has(sourceId), `${event.id} links to unknown ${sourceId}`);
    }
  }

  assert.ok(evidenceFixture.events.some((event) => event.reviewTone === "linked"));
  assert.ok(evidenceFixture.events.some((event) => event.reviewTone === "review"));
});

test("the command center exposes real selection, linkage, and keyboard contracts", () => {
  assert.match(commandCenter, /role="region"/);
  assert.match(commandCenter, /function PanelHeading[\s\S]*?<h3/);
  for (const pattern of [
    /aria-pressed=\{selected\}/,
    /onClick=\{\(\) => onSelect\(item\.id\)\}/,
    /onKeyDown=\{\(event\) => moveSelection\(event, index\)\}/,
    /ArrowDown/,
    /ArrowUp/,
    /Home/,
    /End/,
    /data-linked=\{linked \? "true" : "false"\}/,
    /aria-live="polite"/,
  ]) {
    assert.match(commandCenter, pattern);
  }
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
    /No citation, no claim/i,
    /Every observation traces/i,
    /TruthTrace transforms/i,
    /Originals preserved/i,
    /Request (?:controlled )?pilot/i,
    /Request a professional briefing/i,
    /Available now/i,
    /source-verifiable/i,
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
  assert.match(missing.stderr, /must be present and equal/i);

  const approved = spawnSync(process.execPath, [validator], {
    cwd: root,
    env: { ...process.env, VITE_SITE_URL: "https://truthtrace.ai" },
    encoding: "utf8",
  });
  assert.equal(approved.status, 0, approved.stderr);
});

test("Worker builds pin the compatibility date supported by the release runtime", () => {
  assert.match(nitroConfig, /compatibilityDate:\s*"2026-07-15"/);
  assert.match(nitroConfig, /compatibility_date:\s*"2026-07-15"/);
  assert.match(viteConfig, /process\.env\.TZ\s*=\s*"UTC"/);
  assert.equal(
    packageJson.scripts["release:artifact"],
    "node scripts/validate-worker-artifact.mjs",
  );
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
  assert.match(server, /retiredRouteResponse/);
  assert.match(server, /status: 410/);
  assert.match(server, /status: 301/);
  assert.doesNotMatch(server, /status: 308/);
  assert.match(errorPage, /function renderGonePage/);
  assert.equal(existsSync(resolve(root, "src/lib/lovable-error-reporting.ts")), false);
  assert.doesNotMatch(publicSource, /__lovableEvents/);
});

test("publication metadata is locked to the approved truthtrace.ai origin", () => {
  assert.match(metadata, /APPROVED_SITE_ORIGIN = "https:\/\/truthtrace\.ai"/);
  assert.match(metadata, /VITE_SITE_URL\?\.trim\(\) !== APPROVED_SITE_ORIGIN/);
  assert.match(metadata, /property: "og:url"/);
  assert.match(metadata, /name: "twitter:image"/);
  assert.match(metadata, /rel: "canonical"/);
  assert.match(metadata, /new URL\("\/og\.png", origin\)/);
  assert.match(metadata, /og:image:width", content: "1731"/);
  assert.match(metadata, /og:image:height", content: "909"/);
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
    "User-agent: *\nAllow: /\n\nSitemap: https://truthtrace.ai/sitemap.xml",
  );

  const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert.deepEqual(locations, [
    "https://truthtrace.ai/",
    "https://truthtrace.ai/technology",
    "https://truthtrace.ai/privacy",
    "https://truthtrace.ai/terms",
    "https://truthtrace.ai/contact",
  ]);

  for (const field of ["id", "start_url", "scope"]) {
    assert.equal(manifest[field], "https://truthtrace.ai/");
  }
});
