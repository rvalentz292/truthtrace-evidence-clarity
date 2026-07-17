import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const wranglerPath = resolve(root, ".output", "server", "wrangler.json");
const supportedCompatibilityDate = "2026-07-15";

let config;
try {
  config = JSON.parse(readFileSync(wranglerPath, "utf8"));
} catch (error) {
  throw new Error(
    `Generated Wrangler configuration could not be read at ${wranglerPath}: ${
      error instanceof Error ? error.message : error
    }`,
  );
}

if (!config || typeof config !== "object" || Array.isArray(config)) {
  throw new Error("Generated Wrangler configuration must be a JSON object.");
}

config.compatibility_date = supportedCompatibilityDate;
writeFileSync(wranglerPath, `${JSON.stringify(config, null, 2)}\n`, "utf8");

console.log(
  `Pinned generated Worker compatibility date to ${supportedCompatibilityDate} in ${wranglerPath}.`,
);
