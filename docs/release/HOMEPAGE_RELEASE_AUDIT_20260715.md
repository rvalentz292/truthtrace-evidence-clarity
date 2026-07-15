# TruthTrace Homepage Release Audit — 2026-07-15

## Executive verdict

**BLOCKED**

The approved five-route implementation candidate at `04035bd053d61aec308282a9a861c3da94285fc2` passes the complete local candidate-quality suite and GitHub Actions run `29387686387`. It is locked to the founder-approved `https://truthtrace.ai` canonical origin, excludes `truthtrace.app` at the HTML runtime, has a route-accurate five-URL sitemap, returns 200 for `/`, `/technology`, `/privacy`, `/terms`, and `/contact`, returns a real 410 for `/private-demo`, returns real noindex 404s for unlisted HTML routes, and preserves the approved browse-only no-channel contact boundary.

Publication remains blocked. The current live Lovable service is identified, but no exact PR #4 candidate-to-production-project/branch mapping is proven; no immutable current deployment ID, exact deploy command, exact rollback command, candidate staging deployment, rollback rehearsal, or counsel disposition has been identified and verified. The application-worker `www` path/query-preserving 301 is proven locally, but local Nitro can serve static assets before the SSR host guard, so whole-host/provider behavior for `www`, `.app`, unknown hosts, HTTP→HTTPS, assets, cookies, and response headers is not proven.

No merge, production deployment, DNS change, provider publication, rollback, history rewrite, force push, or tag push is authorized by this audit.

## Release identity

| Field                       | Value                                                                                                                                                     |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Repository                  | `rvalentz292/truthtrace-evidence-clarity`                                                                                                                 |
| Starting `main` SHA         | `1b5530784b564b679f733f77ff40aa7f7da53978`                                                                                                                |
| Audited pre-publication SHA | `df6647616901b2e5eb2dc1d16255ffcc8140a78d`                                                                                                                |
| Starting PR #4 head         | `55b07c4e707bed6e7975bf7dfd78d51a7b10d3ef`                                                                                                                |
| Publication candidate SHA   | `04035bd053d61aec308282a9a861c3da94285fc2`                                                                                                                |
| Release branch              | `homepage-final-publication-gate-20260715`                                                                                                                |
| Candidate tag               | `homepage-public-candidate-20260715` — local annotated tag object `92ddaa075e9ea6b13ed76bf686737986a54a7b62`; peels to the candidate and remains unpushed |
| Candidate CI                | PASS — GitHub Actions run `29387686387`, job `87264243575`, completed `2026-07-15T03:55:45Z`                                                              |
| Final PR head               | Created by the following documentation-only commit; runtime equivalence to the publication candidate must be proven before handoff                        |

PR #3 was inspected, received the exact supersession comment, and was closed without merge or deployment. PR #4 remains the sole draft candidate.

## Candidate surface

| Area                           | Audited result                                                                                                                                                 |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework                      | TanStack Start, React 19, TypeScript, Vite 8, Nitro Cloudflare-module output                                                                                   |
| Public indexable routes        | `/`, `/technology`, `/privacy`, `/terms`, and `/contact`; all return 200                                                                                       |
| Retired route                  | `/private-demo` → 410 with meta/header noindex, no redirect                                                                                                    |
| Unknown HTML routes            | True 404 with meta/header noindex, no homepage redirect                                                                                                        |
| Canonical origin               | Exact `https://truthtrace.ai`                                                                                                                                  |
| Apex / `www` HTML behavior     | Apex serves candidate HTML; `www` returns path/query-preserving 301 to apex in the application worker                                                          |
| Excluded/unknown HTML hosts    | `.app`, trailing-dot `.app`, and arbitrary unknown hosts return 421 without family-law content in the local worker                                             |
| Static asset host behavior     | **P0:** local Cloudflare asset handling can bypass the worker; provider edge rules are required and unproven                                                   |
| Robots                         | Allows `/` and names `https://truthtrace.ai/sitemap.xml`                                                                                                       |
| Sitemap                        | Exactly the five approved URLs for `/`, `/technology`, `/privacy`, `/terms`, and `/contact`                                                                    |
| Manifest                       | Absolute approved `id`, `start_url`, and `scope`                                                                                                               |
| Forms/intake/accounts/uploads  | None                                                                                                                                                           |
| Configured analytics/tracking  | No Lovable reporting hook or concrete Google/Lovable tracking tokens in candidate source or built JavaScript; provider injection remains an exact-staging gate |
| Public secrets/family evidence | None found                                                                                                                                                     |

## Implementation controls

- Every `build*` script invokes the exact publication validator before Vite.
- `VITE_SITE_URL` must equal `https://truthtrace.ai`; local, preview, credential-bearing, or alternate origins fail.
- The validator requires exact robots, five-route sitemap, manifest, favicon, and social-card configuration.
- The release-surface gate requires 15 release files (14 release records plus the GitHub workflow), rejects unstaged/untracked snapshot drift, forbidden environment/credential/artifact paths, and high-confidence secrets in the staged tree and all reachable Git blobs.
- The pull-request workflow pins Node 22.17.0, Bun 1.3.14, action commit SHAs, Ubuntu 24.04, and a local-only test origin. It performs frozen install, formatting, lint, typecheck, tests, dependency threshold, both builds, publication validation, source-map/embedded-source rejection, full-history/current-tree secret checks, and link/route/runtime checks.
- The link gate verifies all five 200 routes, the approved 2026-07-15 TruthTrace Website Privacy Notice and TruthTrace Website Terms of Use, the exact `/contact` no-channel boundary, tracking-token absence, security headers, strict host handling, 410, and true 404 behavior on the local application-worker HTML path.

## Validation results

| Gate                                  | Result             | Evidence                                                                                                                                                   |
| ------------------------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Frozen dependency install             | PASS               | Bun 1.3.14; 533 installs across 713 packages; no lockfile change                                                                                           |
| Format                                | PASS               | Prettier                                                                                                                                                   |
| Lint                                  | PASS WITH WARNINGS | 0 errors; 6 pre-existing Fast Refresh warnings in generic UI modules                                                                                       |
| Typecheck                             | PASS               | `tsc --noEmit`                                                                                                                                             |
| Unit/release tests                    | PASS               | 14/14                                                                                                                                                      |
| Publication configuration             | PASS               | Exact approved origin                                                                                                                                      |
| Production artifact build             | PASS               | Candidate `.output` tree                                                                                                                                   |
| Publication build                     | PASS               | Candidate `.output` tree                                                                                                                                   |
| Link/route/runtime validation         | PASS               | 20 documents, 5 entry routes, 5 required assets, 9 JavaScript files, one 410, true 404s, canonical host behavior, and excluded/unknown hosts               |
| Source maps / embedded source markers | PASS               | 0 `.map`; 0 `sourceMappingURL=` or `sourcesContent` markers                                                                                                |
| Exact-candidate browser matrix        | PASS               | Fresh 360×800, 390×844, 768×1024, 1024×768, 1366×768, 1440×900, and 1920×1080 homepage checks; all five public routes also pass at 360 and 1280 px         |
| Keyboard/interactions                 | PASS               | Fresh skip-link focus/activation, mobile-menu focus entry/Escape return, and primary/secondary CTA target checks                                           |
| Reduced motion                        | PASS               | Emulated media active; maximum duration 0.001 ms; scroll behavior auto                                                                                     |
| Forced colors                         | PASS               | Emulated media active; gradient masking removed; critical heading visible                                                                                  |
| 200% reflow equivalent                | PASS               | 640 CSS px layout viewport; no horizontal overflow                                                                                                         |
| Lighthouse performance                | PASS — 98          | Required minimum 95; LCP 1,981 ms, CLS 0, TBT 0 ms                                                                                                         |
| Lighthouse accessibility              | PASS — 100         | Required 100                                                                                                                                               |
| Lighthouse best practices             | PASS — 100         | Required 100                                                                                                                                               |
| Lighthouse SEO                        | PASS — 100         | Required minimum 95                                                                                                                                        |
| Dependency audit                      | THRESHOLD PASS     | 0 critical, 0 high, 2 moderate, 2 low                                                                                                                      |
| High-confidence secret scan           | PASS               | Implementation candidate: 0 staged/current-tree findings and 0 findings across 290 unique blobs / 639 reachable objects; final docs-only CI rescan pending |
| GitHub Actions candidate run          | PASS               | Run `29387686387`, job `87264243575`, completed `2026-07-15T03:55:45Z`; every step passed on exact SHA `04035bd053d61aec308282a9a861c3da94285fc2`          |

Ignored evidence is retained under `artifacts/homepage-cutover-20260715/`. The exact candidate artifact manifest covers 50 build files and 2,930,912 bytes with aggregate SHA-256 `688fc68f5466606c709d0a18033031d4840d6b165b394ea0357b226a023d0ea6`. The evidence directory contains 18 covered files, including the fresh exact-candidate Chrome matrix; `SHA256SUMS.txt` has SHA-256 `15409ace13507e65966643d80a3562b23268060c7bcc24dde4bb9f7dc311db0b`.

## Production identity result

| Required field                       | Status       | Verified value / consequence                                                                  |
| ------------------------------------ | ------------ | --------------------------------------------------------------------------------------------- |
| DNS provider                         | `VERIFIED`   | Hostinger DNS; apex and `www` A records point to `185.158.133.1`                              |
| Hosting provider                     | `VERIFIED`   | Lovable behind Cloudflare                                                                     |
| Authenticated workspace              | `VERIFIED`   | `Ryan's Lovable`, workspace ID `y7ZA6ipwj5Jqti1HCn6I`, operator role owner                    |
| Current live project                 | `VERIFIED`   | `truthtrace-website`, ID `9dc000d6-e489-4b8f-975b-cf1d2bfdf3a7`                               |
| Current live repository              | `VERIFIED`   | Private `rvalentz292/truthtrace-website`                                                      |
| Provider production branch           | `UNVERIFIED` | GitHub default `main` has the live SHA, but Lovable did not expose the active provider branch |
| Current production SHA               | `VERIFIED`   | `84a49ca4e38d21322e137e5135d974c0ddbd2f66`                                                    |
| Current production deployment ID     | `BLOCKED`    | Not exposed                                                                                   |
| Candidate production target          | `BLOCKED`    | No authorized project is proven to contain the PR #4 candidate tree                           |
| Exact deploy command                 | `BLOCKED`    | Not proven                                                                                    |
| Exact rollback command/prior version | `BLOCKED`    | Not proven                                                                                    |

## Legacy-route and legal result

The approved 2026-07-15 first-cutover route decision is implemented in the candidate: `/`, `/technology`, `/privacy`, `/terms`, and `/contact` each return 200 and are the only sitemap entries. `/privacy` and `/terms` publish the approved 2026-07-15 TruthTrace Website Privacy Notice and TruthTrace Website Terms of Use. `/contact` contains the exact approved no-channel boundary and adds no email address, form, upload, account, pilot, analytics, or reporting mechanism. `/private-demo` returns 410, while `/contact-us`, `/about`, and every other unlisted route return a true noindex 404.

The application-worker path/query-preserving 301 from `www` to apex is approved and verified locally. No content-route 301 or 302 is approved: `/features` must not be silently mapped to `/technology`, and unlisted routes must never be redirected to the homepage.

## Patent/public-history result

H-01 through H-11 remain reachable in public commits, branches, or pull-request refs. The repository history was not rewritten and no public reference was deleted. No patent-counsel disposition or authorized-owner waiver is recorded. Status remains `COUNSEL REVIEW REQUIRED`.

## Open publication blockers

| ID    | Blocker                                                                | Required resolution                                                                                                                             |
| ----- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| P0-01 | Candidate production project/repository/branch mapping is absent       | Select the exact provider project and prove that it contains the immutable candidate SHA                                                        |
| P0-02 | Current deployment ID, exact deploy command, and exact rollback absent | Record immutable current/prior deployment identities and provider-native commands with operator permissions                                     |
| P0-04 | Provider edge/static-asset host behavior is unproven                   | On isolated exact-SHA staging, verify apex/`www`, `.app`, unknown hosts, HTTP→HTTPS, static assets, TLS, cache, cookies, analytics, and headers |
| P0-05 | Exact-SHA staging and rollback rehearsal are absent                    | Create isolated staging from the candidate artifact, record deployment/output identity, then restore and verify the immutable prior deployment  |
| P0-06 | Patent/public-history decision is absent                               | Patent counsel or an authorized owner must record a permitted disposition or explicit waiver                                                    |
| P1-01 | Two moderate and two low dependency advisories remain                  | Remediate or record time-bounded security acceptance; high/critical threshold is already clear                                                  |

## Final recommendation

Keep PR #4 draft and blocked. The repository candidate is ready for founder and provider planning, but it is not publication-ready. Do not merge, deploy, change DNS, publish the candidate tag, or represent a local/CI pass as production authorization.
