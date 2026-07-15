import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const failures = [];
const configuredUrl = process.env.VITE_SITE_URL?.trim();

if (!configuredUrl) {
  failures.push("VITE_SITE_URL is required for a publication build.");
} else {
  try {
    const url = new URL(configuredUrl);
    if (url.protocol !== "https:") failures.push("VITE_SITE_URL must use HTTPS.");
    if (url.username || url.password) failures.push("VITE_SITE_URL must not contain credentials.");
    if (["localhost", "127.0.0.1"].includes(url.hostname)) {
      failures.push("VITE_SITE_URL must identify the approved production domain.");
    }
  } catch {
    failures.push("VITE_SITE_URL must be a valid absolute URL.");
  }
}

const robotsPath = resolve(root, "public", "robots.txt");
const robots = existsSync(robotsPath) ? readFileSync(robotsPath, "utf8") : "";
if (!robots || /^\s*Disallow:\s*\/\s*$/im.test(robots)) {
  failures.push("public/robots.txt is still blocking publication.");
}

for (const asset of ["public/og.png", "public/favicon.svg", "public/sitemap.xml"]) {
  if (!existsSync(resolve(root, asset))) failures.push(`${asset} is required for publication.`);
}

if (failures.length) {
  console.error("Publication configuration is incomplete:\n");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Publication configuration gate passed.");
