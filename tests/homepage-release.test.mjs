import assert from "node:assert/strict";
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
});

test("the default production build is protected by the publication validator", () => {
  assert.match(packageJson.scripts.build, /release:config/);
  assert.equal(packageJson.scripts["build:artifact"], "vite build");
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
});
