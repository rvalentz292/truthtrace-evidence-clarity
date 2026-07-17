import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const approvedOrigin = "https://truthtrace.ai";
const approvedCompatibilityDate = "2026-07-15";
const failures = [];

if (process.env.VITE_SITE_URL !== approvedOrigin) {
  failures.push(`VITE_SITE_URL must be present and equal the approved origin ${approvedOrigin}.`);
}

const nitroConfig = existsSync(resolve(root, "nitro.config.ts"))
  ? readFileSync(resolve(root, "nitro.config.ts"), "utf8")
  : "";
const viteConfig = existsSync(resolve(root, "vite.config.ts"))
  ? readFileSync(resolve(root, "vite.config.ts"), "utf8")
  : "";
if (!nitroConfig.includes(`compatibilityDate: "${approvedCompatibilityDate}"`)) {
  failures.push(
    `nitro.config.ts must pin compatibilityDate to ${approvedCompatibilityDate} for deterministic Worker builds.`,
  );
}
if (!nitroConfig.includes(`compatibility_date: "${approvedCompatibilityDate}"`)) {
  failures.push(
    `nitro.config.ts must pin Cloudflare Wrangler compatibility_date to ${approvedCompatibilityDate}.`,
  );
}
if (!viteConfig.includes('process.env.TZ = "UTC"')) {
  failures.push("vite.config.ts must set the Nitro build timezone to UTC.");
}

const robotsPath = resolve(root, "public", "robots.txt");
const robots = existsSync(robotsPath) ? readFileSync(robotsPath, "utf8") : "";
if (!robots) {
  failures.push("public/robots.txt is required for publication.");
} else {
  const normalizedRobots = robots.replace(/\r\n/g, "\n").trim();
  const expectedRobots = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${approvedOrigin}/sitemap.xml`,
  ].join("\n");
  if (normalizedRobots !== expectedRobots) {
    failures.push(
      "public/robots.txt must exactly allow the approved candidate and contain no contradictory directives.",
    );
  }
}

for (const asset of ["public/og.png", "public/favicon.svg", "public/sitemap.xml"]) {
  if (!existsSync(resolve(root, asset))) failures.push(`${asset} is required for publication.`);
}

const sitemapPath = resolve(root, "public", "sitemap.xml");
if (existsSync(sitemapPath)) {
  const sitemap = readFileSync(sitemapPath, "utf8");
  const actualLocations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  const expectedLocations = [
    `${approvedOrigin}/`,
    `${approvedOrigin}/technology`,
    `${approvedOrigin}/privacy`,
    `${approvedOrigin}/terms`,
    `${approvedOrigin}/contact`,
  ];
  if (JSON.stringify(actualLocations) !== JSON.stringify(expectedLocations)) {
    failures.push(
      `public/sitemap.xml must contain exactly the candidate routes: ${expectedLocations.join(", ")}.`,
    );
  }
}

const manifestPath = resolve(root, "public", "site.webmanifest");
if (!existsSync(manifestPath)) {
  failures.push("public/site.webmanifest is required for publication.");
} else {
  try {
    const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
    for (const field of ["id", "start_url", "scope"]) {
      if (manifest[field] !== `${approvedOrigin}/`) {
        failures.push(`site.webmanifest ${field} must use ${approvedOrigin}/.`);
      }
    }
  } catch {
    failures.push("public/site.webmanifest must contain valid JSON.");
  }
}

if (failures.length) {
  console.error("Publication configuration is incomplete:\n");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(
  `Publication configuration gate passed for ${approvedOrigin} with Worker compatibility date ${approvedCompatibilityDate}.`,
);
