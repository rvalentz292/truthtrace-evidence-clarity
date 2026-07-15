import { execFileSync } from "node:child_process";
import { basename, extname, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const failures = [];

try {
  execFileSync("git", ["diff", "--quiet", "--no-ext-diff"], { cwd: root });
} catch (error) {
  if (error?.status === 1)
    failures.push("Worktree has unstaged tracked changes; stage the exact snapshot first.");
  else failures.push("Worktree/index equality could not be verified.");
}

const untracked = execFileSync("git", ["ls-files", "--others", "--exclude-standard", "-z"], {
  cwd: root,
  encoding: "utf8",
})
  .split("\0")
  .filter(Boolean);
if (untracked.length) {
  failures.push(`Worktree has untracked release files: ${untracked.join(", ")}`);
}

const requiredFiles = [
  ".github/workflows/homepage-release-gate.yml",
  "docs/release/HOMEPAGE_REPOSITORY_MAP_20260715.md",
  "docs/release/HOMEPAGE_PUBLIC_CLAIM_REGISTER_20260715.md",
  "docs/release/HOMEPAGE_PERSONA_SCORECARD_20260715.md",
  "docs/release/HOMEPAGE_RELEASE_AUDIT_20260715.md",
  "docs/release/HOMEPAGE_RELEASE_CHECKLIST_20260715.md",
  "docs/release/HOMEPAGE_DEPLOYMENT_RUNBOOK_20260715.md",
  "docs/release/HOMEPAGE_ROLLBACK_RUNBOOK_20260715.md",
  "docs/release/HOMEPAGE_POST_LAUNCH_CHECKLIST_20260715.md",
  "docs/release/HOMEPAGE_CHANGELOG_20260715.md",
  "docs/release/HOMEPAGE_COMPETING_PR_DISPOSITION_20260715.md",
  "docs/release/HOMEPAGE_PRODUCTION_IDENTITY_20260715.md",
  "docs/release/HOMEPAGE_LEGACY_ROUTE_MIGRATION_20260715.md",
  "docs/release/HOMEPAGE_PUBLIC_HISTORY_COUNSEL_HANDOFF_20260715.md",
  "docs/release/HOMEPAGE_FINAL_PUBLICATION_GATE_20260715.md",
];

const indexEntries = new Map();
const rawIndex = execFileSync("git", ["ls-files", "-s", "-z"], {
  cwd: root,
  encoding: "utf8",
});

for (const record of rawIndex.split("\0").filter(Boolean)) {
  const match = /^(\d+) ([0-9a-f]+) (\d+)\t(.+)$/.exec(record);
  if (!match || match[3] !== "0") {
    failures.push("Git index contains an unreadable or unresolved entry.");
    continue;
  }
  indexEntries.set(match[4], { mode: match[1], object: match[2] });
}

function readIndexBlob(file) {
  return execFileSync("git", ["show", `:${file}`], {
    cwd: root,
    encoding: "buffer",
    maxBuffer: 64 * 1024 * 1024,
  });
}

for (const file of requiredFiles) {
  const entry = indexEntries.get(file);
  if (!entry) {
    failures.push(`Required release file is not staged/tracked: ${file}`);
    continue;
  }
  if (!entry.mode.startsWith("100")) {
    failures.push(`Required release file is not a regular file: ${file}`);
    continue;
  }
  try {
    if (!readIndexBlob(file).toString("utf8").trim()) {
      failures.push(`Required release file is empty: ${file}`);
    }
  } catch {
    failures.push(`Required release file could not be read from the index: ${file}`);
  }
}

const forbiddenCredentialFiles = new Set([".npmrc", ".pypirc", ".netrc"]);
const forbiddenCredentialExtensions = new Set([
  ".jks",
  ".kdbx",
  ".key",
  ".keystore",
  ".p12",
  ".pem",
  ".pfx",
]);

for (const [file, entry] of indexEntries) {
  const normalized = file.replaceAll("\\", "/").toLowerCase();
  const leaf = basename(normalized);

  if (!entry.mode.startsWith("100")) {
    failures.push(`Non-regular tracked entry is forbidden on the release surface: ${file}`);
  }
  if (leaf.startsWith(".env") && leaf !== ".env.example") {
    failures.push(`Forbidden staged environment file: ${file}`);
  }
  if (leaf === ".dev.vars" || leaf.startsWith(".dev.vars.")) {
    failures.push(`Forbidden staged Cloudflare environment file: ${file}`);
  }
  if (
    forbiddenCredentialFiles.has(leaf) ||
    forbiddenCredentialExtensions.has(extname(leaf)) ||
    /(?:^|\/)(?:id_rsa|id_dsa|id_ecdsa|id_ed25519)$/.test(normalized)
  ) {
    failures.push(`Forbidden staged credential/key container: ${file}`);
  }
  if (normalized === "artifacts" || normalized.startsWith("artifacts/")) {
    failures.push(`Generated release artifact must remain untracked: ${file}`);
  }
}

const highConfidencePatterns = [
  ["AWS access key", /\b(?:AKIA|ASIA)[0-9A-Z]{16}\b/],
  ["GitHub token", /\b(?:gh[pousr]_[A-Za-z0-9]{36,255}|github_pat_[A-Za-z0-9_]{40,255})\b/],
  ["OpenAI-style secret key", /\bsk-(?:proj-)?[A-Za-z0-9_-]{20,}\b/],
  ["Slack token", /\bxox[baprs]-[A-Za-z0-9-]{20,}\b/],
  ["Google API key", /\bAIza[0-9A-Za-z_-]{35}\b/],
  ["Stripe live secret", /\bsk_live_[A-Za-z0-9]{20,}\b/],
  ["Supabase secret", /\bsb_secret_[A-Za-z0-9_-]{20,}\b/],
  [
    "Database URL with embedded credential",
    /\b(?:postgres(?:ql)?|mysql|mariadb|mongodb(?:\+srv)?):\/\/[^\s/:@]+:[^\s/@]+@[^\s/]+/i,
  ],
  ["Private key", /-----BEGIN (?:RSA |OPENSSH |EC |DSA )?PRIVATE KEY-----/],
];

function containsSupabaseServiceRoleJwt(text) {
  for (const match of text.matchAll(/\beyJ[A-Za-z0-9_-]+\.eyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\b/g)) {
    try {
      const payload = JSON.parse(Buffer.from(match[0].split(".")[1], "base64url").toString("utf8"));
      if (payload?.role === "service_role") return true;
    } catch {
      // Ignore strings that resemble JWTs but do not contain a decodable JSON payload.
    }
  }
  return false;
}

function scanViews(decodedViews, label) {
  for (const [patternLabel, pattern] of highConfidencePatterns) {
    if (decodedViews.some((text) => pattern.test(text))) {
      failures.push(`${patternLabel} pattern found in ${label}`);
    }
  }
  if (decodedViews.some(containsSupabaseServiceRoleJwt)) {
    failures.push(`Supabase service-role JWT found in ${label}`);
  }
}

for (const file of indexEntries.keys()) {
  let content;
  try {
    content = readIndexBlob(file);
  } catch {
    failures.push(`Tracked index blob could not be scanned: ${file}`);
    continue;
  }

  const decodedViews = [content.toString("utf8"), content.toString("latin1")];
  if (content.includes(0)) decodedViews.push(content.toString("utf16le"));

  scanViews(decodedViews, `staged/tracked file: ${file}`);
}

const reachableObjects = new Map();
const rawReachableObjects = execFileSync("git", ["rev-list", "--objects", "--all"], {
  cwd: root,
  encoding: "utf8",
  maxBuffer: 64 * 1024 * 1024,
});

for (const line of rawReachableObjects.split(/\r?\n/).filter(Boolean)) {
  const separator = line.indexOf(" ");
  const object = separator === -1 ? line : line.slice(0, separator);
  const path = separator === -1 ? undefined : line.slice(separator + 1);
  if (!reachableObjects.has(object)) reachableObjects.set(object, new Set());
  if (path) reachableObjects.get(object).add(path);
}

let reachableBlobCount = 0;
for (const [object, paths] of reachableObjects) {
  let type;
  try {
    type = execFileSync("git", ["cat-file", "-t", object], {
      cwd: root,
      encoding: "utf8",
    }).trim();
  } catch {
    failures.push(`Reachable Git object could not be typed: ${object}`);
    continue;
  }
  if (type !== "blob") continue;

  let content;
  try {
    content = execFileSync("git", ["cat-file", "blob", object], {
      cwd: root,
      encoding: "buffer",
      maxBuffer: 64 * 1024 * 1024,
    });
  } catch {
    failures.push(`Reachable Git blob could not be scanned: ${object}`);
    continue;
  }

  reachableBlobCount += 1;
  const decodedViews = [content.toString("utf8"), content.toString("latin1")];
  if (content.includes(0)) decodedViews.push(content.toString("utf16le"));
  const pathLabel = [...paths].sort().slice(0, 3).join(", ") || "path unavailable";
  scanViews(decodedViews, `reachable Git blob ${object} (${pathLabel})`);
}

if (failures.length) {
  console.error("Release surface validation failed:\n");
  for (const failure of [...new Set(failures)]) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(
  `Release surface validation passed: ${requiredFiles.length} required regular nonempty files, ${indexEntries.size} staged/tracked files, no forbidden environment/artifact/credential paths, and no high-confidence secret patterns.`,
  `Reachable-history scan covered ${reachableBlobCount} unique blobs from ${reachableObjects.size} reachable Git objects.`,
);
