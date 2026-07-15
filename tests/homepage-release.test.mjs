import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

const root = resolve(import.meta.dirname, "..");
const read = (path) => readFileSync(resolve(root, path), "utf8");

const homepage = read("src/components/site/HomePage.tsx");
const nav = read("src/components/site/Nav.tsx");
const publicSource = [
  homepage,
  nav,
  read("src/routes/index.tsx"),
  read("src/routes/technology.tsx"),
  read("src/routes/__root.tsx"),
].join("\n");
const packageJson = JSON.parse(read("package.json"));
const server = read("src/server.ts");
const errorPage = read("src/lib/error-page.ts");
const metadata = read("src/lib/site-metadata.ts");
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

test("the public surface does not expose the former private demo", () => {
  assert.equal(existsSync(resolve(root, "src/routes/private-demo.tsx")), false);
  assert.equal(existsSync(resolve(root, "src/components/site/Workspace.tsx")), false);
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
  assert.match(errorPage, /function renderGonePage/);
});

test("publication metadata is locked to the approved truthtrace.ai origin", () => {
  assert.match(metadata, /APPROVED_SITE_ORIGIN = "https:\/\/truthtrace\.ai"/);
  assert.match(metadata, /VITE_SITE_URL\?\.trim\(\) !== APPROVED_SITE_ORIGIN/);
  assert.match(metadata, /property: "og:url"/);
  assert.match(metadata, /name: "twitter:image"/);
  assert.match(metadata, /rel: "canonical"/);
});

test("robots, sitemap, and manifest use the approved publication origin", () => {
  assert.equal(
    robots.replace(/\r\n/g, "\n").trim(),
    "User-agent: *\nAllow: /\n\nSitemap: https://truthtrace.ai/sitemap.xml",
  );

  const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert.deepEqual(locations, ["https://truthtrace.ai/", "https://truthtrace.ai/technology"]);

  for (const field of ["id", "start_url", "scope"]) {
    assert.equal(manifest[field], "https://truthtrace.ai/");
  }
});
