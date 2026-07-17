import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const expectedCompatibilityDate = "2026-07-15";
const wranglerPath = resolve(root, ".output", "server", "wrangler.json");

let wrangler;
try {
  wrangler = JSON.parse(readFileSync(wranglerPath, "utf8"));
} catch (error) {
  console.error(`Unable to read the generated Worker configuration at ${wranglerPath}.`);
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}

if (wrangler.compatibility_date !== expectedCompatibilityDate) {
  console.error(
    `Generated Worker compatibility_date must equal ${expectedCompatibilityDate}; received ${String(wrangler.compatibility_date)}.`,
  );
  process.exit(1);
}

console.log(
  `Generated Worker artifact passed with compatibility_date ${expectedCompatibilityDate}.`,
);
