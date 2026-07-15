import { spawnSync } from "node:child_process";

const result = spawnSync("bun", ["audit", "--json"], {
  encoding: "utf8",
  maxBuffer: 64 * 1024 * 1024,
  shell: process.platform === "win32",
});

let report;
try {
  report = JSON.parse(result.stdout);
} catch {
  console.error("Dependency audit did not return valid JSON.");
  if (result.stderr.trim()) console.error(result.stderr.trim());
  process.exit(1);
}

const counts = { critical: 0, high: 0, moderate: 0, low: 0, unknown: 0 };
for (const advisories of Object.values(report)) {
  if (!Array.isArray(advisories)) continue;
  for (const advisory of advisories) {
    const severity = String(advisory?.severity ?? "unknown").toLowerCase();
    if (severity in counts) counts[severity] += 1;
    else counts.unknown += 1;
  }
}

console.log(
  `Dependency audit: critical=${counts.critical}, high=${counts.high}, moderate=${counts.moderate}, low=${counts.low}, unknown=${counts.unknown}.`,
);

if (counts.critical || counts.high || counts.unknown) {
  console.error(
    "Dependency audit failed: high, critical, or unclassified advisories are forbidden.",
  );
  process.exit(1);
}
