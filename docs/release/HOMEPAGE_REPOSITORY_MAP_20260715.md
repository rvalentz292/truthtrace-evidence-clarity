# TruthTrace Homepage Repository Map — 2026-07-15

## Publication verdict

**BLOCKED**

The repository produces a locally and CI-verified publication candidate for founder-approved `https://truthtrace.ai`. It does not establish an authorized provider target for that candidate, an immutable current deployment, exact deploy/rollback commands, approved legal/contact route treatment, exact-SHA staging, a rollback rehearsal, or counsel disposition. Generated Nitro/Wrangler metadata is build evidence only.

## Immutable snapshot

| Item                        | Verified state                                                                                         |
| --------------------------- | ------------------------------------------------------------------------------------------------------ |
| Repository                  | `rvalentz292/truthtrace-evidence-clarity`                                                              |
| Remote                      | `origin` → `https://github.com/rvalentz292/truthtrace-evidence-clarity.git`                            |
| Default branch / baseline   | `main` / `1b5530784b564b679f733f77ff40aa7f7da53978`                                                    |
| Release branch              | `homepage-final-publication-gate-20260715`                                                             |
| Pre-publication SHA         | `df6647616901b2e5eb2dc1d16255ffcc8140a78d`                                                             |
| Publication candidate SHA   | `8fca95f914fe463da89073aa7e97607d59f0a9ad`                                                             |
| Superseded candidate        | `website-100m-final-20260714` / `64aac286beb3df3c898e2f975f27e589d5079456`; PR #3 closed without merge |
| Sole pull-request candidate | Draft PR #4                                                                                            |
| Candidate CI                | PASS — run `29384390019`                                                                               |
| Package/runtime pins        | Bun 1.3.14; CI Node 22.17.0; Wrangler 4.110.0; Ubuntu 24.04                                            |
| Framework                   | React 19, TanStack Start/Router, TypeScript, Vite 8, Nitro Cloudflare-module output                    |

The following release-record commit changes documentation only. Its PR-head SHA must be retained separately; it does not change the public runtime tree relative to the candidate above.

## Runtime topology

| Path                   | Responsibility                                                                                | Release behavior                                                                                                                       |
| ---------------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `vite.config.ts`       | Loads the Lovable TanStack configuration and custom server entry                              | Generated Cloudflare preset is not an authorized provider target                                                                       |
| `src/server.ts`        | SSR fetch entry, host policy, 410, security/noindex headers, catastrophic-error normalization | Apex/local HTML allowed; `www` 308 to apex; excluded/unknown HTML hosts 421; `/private-demo` 410; static assets may bypass this worker |
| `src/start.ts`         | TanStack Start request middleware                                                             | Converts unexpected server errors into controlled HTML                                                                                 |
| `src/router.tsx`       | Router/query construction                                                                     | Scroll restoration and generated route tree                                                                                            |
| `src/routeTree.gen.ts` | Generated route registry                                                                      | Public application routes `/` and `/technology`; former private route absent                                                           |
| `src/styles.css`       | Global design, focus, responsive, reduced-motion, and forced-colors rules                     | System fonts; no external font request                                                                                                 |

## Public routes

| Route/path             | Source / handler                          | Intended result                                                       |
| ---------------------- | ----------------------------------------- | --------------------------------------------------------------------- |
| `/`                    | `src/routes/index.tsx`                    | Canonical 200 family-law product overview and representative workflow |
| `/technology`          | `src/routes/technology.tsx`               | Canonical 200 design principles and public boundaries                 |
| `/private-demo`        | `src/server.ts`                           | 410, `noindex`, no redirect or replacement                            |
| Unknown HTML route     | `src/routes/__root.tsx` + server response | True 404, `noindex`, no homepage redirect                             |
| Catastrophic SSR error | `src/lib/error-page.ts` + `src/server.ts` | Controlled 500 HTML, `noindex`, `no-store`                            |

There is no public account, upload, intake, contact form, pilot form, live workspace, or API-backed evidence flow.

## Page and policy composition

| Path                               | Responsibility                                                                                   |
| ---------------------------------- | ------------------------------------------------------------------------------------------------ |
| `src/components/site/HomePage.tsx` | Qualified product narrative, representative records/workflow, audience views, trust boundaries   |
| `src/components/site/Nav.tsx`      | Desktop/mobile navigation, focus entry, Escape close, trigger-focus restoration                  |
| `src/components/site/Section.tsx`  | Section landmarks, headings, decorative semantics, fixed-header scroll offsets                   |
| `src/lib/site-metadata.ts`         | Exact approved canonical/Open Graph/Twitter URLs; alternate or missing origin throws             |
| `public/robots.txt`                | Exact allow policy plus canonical sitemap                                                        |
| `public/sitemap.xml`               | Exactly `/` and `/technology` on `https://truthtrace.ai`                                         |
| `public/site.webmanifest`          | Absolute approved `id`, `start_url`, and `scope`                                                 |
| `.output/public/_headers`          | Generated baseline static headers; exact provider application and asset-host behavior remains P0 |

The historical `HeroPipeline.tsx`, `Workspace.tsx`, and private-demo route are absent from the candidate tree but remain reachable in public Git history pending counsel disposition.

## Commands and gates

| Script               | Command                                                                         | Meaning                                                                                                        |
| -------------------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `dev`                | `vite dev`                                                                      | Local development only                                                                                         |
| `build`              | `node scripts/validate-publication.mjs && vite build`                           | Exact-origin publication-gated build                                                                           |
| `build:artifact`     | `node scripts/validate-publication.mjs && vite build`                           | Same gate; creates auditable local output without deployment                                                   |
| `build:dev`          | `node scripts/validate-publication.mjs && vite build --mode development`        | Development-mode output; still cannot bypass publication identity                                              |
| `build:publication`  | `node scripts/validate-publication.mjs && vite build`                           | Exact publication build                                                                                        |
| `preview`            | `wrangler dev --config .output/server/wrangler.json --ip 127.0.0.1 --port 4173` | Local generated-worker preview; not provider staging                                                           |
| `format:check`       | `prettier --check .`                                                            | Formatting gate                                                                                                |
| `lint`               | `eslint .`                                                                      | Static lint gate                                                                                               |
| `typecheck`          | `tsc --noEmit`                                                                  | Type gate                                                                                                      |
| `test`               | `node --test tests/*.test.mjs`                                                  | Release regression tests                                                                                       |
| `audit:dependencies` | `node scripts/audit-dependencies.mjs`                                           | Fails on critical/high/unclassified advisories; reports moderate/low                                           |
| `check:links`        | `node scripts/check-links.mjs`                                                  | Local-only document, asset, canonical, host, 410, 404, header, and no-cookie checks                            |
| `release:config`     | `node scripts/validate-publication.mjs`                                         | Exact origin/robots/sitemap/manifest/assets gate                                                               |
| `release:surface`    | `node scripts/validate-release-surface.mjs`                                     | Required docs, exact staged snapshot, forbidden paths, current-tree and reachable-history high-confidence scan |

The GitHub workflow pins the operating system, runtime/package-manager versions, and action revisions. It performs a frozen install and all candidate-quality gates without production secrets or deployment credentials. A green workflow is not a deployment authorization system.

## Configuration and data flow

| Name              | Scope                              | Candidate status                                     |
| ----------------- | ---------------------------------- | ---------------------------------------------------- |
| `VITE_SITE_URL`   | Public build-time canonical origin | Required exact `https://truthtrace.ai`; not a secret |
| `SITE_UNDER_TEST` | Validation-only local origin       | CI uses `http://127.0.0.1:4173`                      |
| `NODE_ENV`        | Conventional runtime mode          | No secret value committed                            |

`DATABASE_URL`, `STRIPE_SECRET_KEY`, and `VITE_FOO` occur only as commented examples and are not dependencies.

- No database, authentication, payment, email, CRM, form endpoint, evidence upload, or model endpoint is wired into the candidate.
- No analytics is configured in candidate source. The optional Lovable browser error hook can run only when a provider injects its expected global; exact staging must determine whether it, analytics, or cookies are injected.
- Unused generic `sidebar.tsx` and `chart.tsx` contain a preference-cookie helper and style HTML injection respectively; neither is in the candidate route bundles and any future use requires renewed review.
- Current-tree and full reachable-history high-confidence scans found no credential match. Public architecture/claims history remains a counsel issue, not a secret-scan pass-through.

## Build and hosting evidence

The candidate build writes `.output/public/` and `.output/server/`, with generated preset `cloudflare-module`, auto-derived worker name `rvalentz292-truthtrace-evidence-clarity`, and generated Wrangler metadata. These are not an approved production account, project, upload target, deploy command, or rollback mechanism.

The exact local candidate artifact manifest covers 41 files and 2,875,558 bytes with aggregate SHA-256 `075b0cc6bf1d245b06b42492987155b8529c5cec3fc0942d403afd0e4e4d7941`.

Current live identity is separately verified as Hostinger DNS plus Lovable project `truthtrace-website` behind Cloudflare, sourced from private repository `rvalentz292/truthtrace-website` at SHA `84a49ca4e38d21322e137e5135d974c0ddbd2f66`. The active Lovable branch and immutable deployment ID were not exposed. This public release repository is not the current production source repository.

## Publication blockers

| Severity | Blocker                                                | Evidence required to clear                                                                                               |
| -------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| P0       | Candidate target/project/branch mapping absent         | Authorized project contains exact candidate SHA and records repository/branch mapping                                    |
| P0       | Current/prior deployment and exact commands absent     | Immutable deployment IDs, provider-native deploy/rollback commands, permissions, and rehearsal                           |
| P0       | Legal/contact legacy-route holds unresolved            | Approved content/owners and implemented treatment for `/privacy`, `/terms`, `/contact`, `/contact-us`, plus `/about`     |
| P0       | Provider edge/static-asset behavior unproven           | Exact-SHA staging proves apex/`www`, `.app`, unknown hosts, HTTP→HTTPS, assets, TLS, headers, caches, cookies, analytics |
| P0       | Public-history counsel decision absent                 | Recorded permitted counsel/authorized-owner disposition or waiver                                                        |
| P1       | Moderate/low dependency advisories remain              | Remediation or time-bounded security acceptance                                                                          |
| P1       | Browse-only contact/observability posture not accepted | Explicit no-contact/no-analytics approval or separately reviewed mechanism                                               |

Until these records exist, the only valid publication verdict is **BLOCKED**.
