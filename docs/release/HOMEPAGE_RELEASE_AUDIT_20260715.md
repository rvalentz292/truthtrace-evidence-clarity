# TruthTrace Homepage Release Audit — 2026-07-15

## Executive verdict

**BLOCKED**

The implementation candidate at `8fca95f914fe463da89073aa7e97607d59f0a9ad` passes the complete local candidate-quality suite and GitHub Actions run `29384390019`. It is locked to the founder-approved `https://truthtrace.ai` canonical origin, excludes `truthtrace.app` at the HTML runtime, has a route-accurate two-URL sitemap, returns a real 410 for `/private-demo`, returns real noindex 404s for unknown HTML routes, and preserves the browse-only source posture.

Publication remains blocked. The current live Lovable service is identified, but the exact PR #4 candidate is not mapped to an authorized production project or branch; no immutable current deployment ID, exact deploy command, exact rollback command, candidate staging deployment, rollback rehearsal, approved legal/contact route treatment, or counsel disposition exists. Local Nitro also serves static assets before the SSR host guard, so provider edge behavior for `www`, `.app`, unknown hosts, HTTP→HTTPS, cookies, and response headers is not proven.

No merge, production deployment, DNS change, provider publication, rollback, history rewrite, force push, or tag push is authorized by this audit.

## Release identity

| Field                       | Value                                                                                                                              |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Repository                  | `rvalentz292/truthtrace-evidence-clarity`                                                                                          |
| Starting `main` SHA         | `1b5530784b564b679f733f77ff40aa7f7da53978`                                                                                         |
| Audited pre-publication SHA | `df6647616901b2e5eb2dc1d16255ffcc8140a78d`                                                                                         |
| Starting PR #4 head         | `55b07c4e707bed6e7975bf7dfd78d51a7b10d3ef`                                                                                         |
| Publication candidate SHA   | `8fca95f914fe463da89073aa7e97607d59f0a9ad`                                                                                         |
| Release branch              | `homepage-final-publication-gate-20260715`                                                                                         |
| Candidate tag               | `homepage-public-candidate-20260715` — local annotated tag only; do not push while the publication verdict is blocked              |
| Candidate CI                | PASS — GitHub Actions run `29384390019`, job `87254517610`, completed 2026-07-15T02:34:25Z                                         |
| Final PR head               | Created by the following documentation-only commit; runtime equivalence to the publication candidate must be proven before handoff |

PR #3 was inspected, received the exact supersession comment, and was closed without merge or deployment. PR #4 remains the sole draft candidate.

## Candidate surface

| Area                           | Audited result                                                                                                      |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| Framework                      | TanStack Start, React 19, TypeScript, Vite 8, Nitro Cloudflare-module output                                        |
| Public indexable routes        | `/` and `/technology`                                                                                               |
| Retired route                  | `/private-demo` → 410 with meta/header noindex, no redirect                                                         |
| Unknown HTML routes            | True 404 with meta/header noindex, no homepage redirect                                                             |
| Canonical origin               | Exact `https://truthtrace.ai`                                                                                       |
| Apex / `www` HTML behavior     | Apex serves candidate HTML; `www` returns path/query-preserving 308 to apex in the local worker                     |
| Excluded/unknown HTML hosts    | `.app`, trailing-dot `.app`, and arbitrary unknown hosts return 421 without family-law content in the local worker  |
| Static asset host behavior     | **P0:** local Cloudflare asset handling can bypass the worker; provider edge rules are required and unproven        |
| Robots                         | Allows `/` and names `https://truthtrace.ai/sitemap.xml`                                                            |
| Sitemap                        | Exactly `https://truthtrace.ai/` and `https://truthtrace.ai/technology`                                             |
| Manifest                       | Absolute approved `id`, `start_url`, and `scope`                                                                    |
| Forms/intake/accounts/uploads  | None                                                                                                                |
| Configured analytics/tracking  | None in candidate source/config; provider-injected analytics, cookies, and error hooks remain an exact-staging gate |
| Public secrets/family evidence | None found                                                                                                          |

## Implementation controls

- Every `build*` script invokes the exact publication validator before Vite.
- `VITE_SITE_URL` must equal `https://truthtrace.ai`; local, preview, credential-bearing, or alternate origins fail.
- The validator requires exact robots, sitemap, manifest, favicon, and social-card configuration.
- The release-surface gate requires all 15 release records, rejects unstaged/untracked snapshot drift, forbidden environment/credential/artifact paths, and high-confidence secrets in the staged tree and all reachable Git blobs.
- The pull-request workflow pins Node 22.17.0, Bun 1.3.14, action commit SHAs, Ubuntu 24.04, and a local-only test origin. It performs frozen install, formatting, lint, typecheck, tests, dependency threshold, both builds, publication validation, source-map/embedded-source rejection, full-history/current-tree secret checks, and link/route/runtime checks.
- Security headers, 4xx/5xx noindex headers, 5xx no-store, catastrophic SSR error normalization, strict host handling, 410, and 404 behavior are verified on the local worker HTML path.

## Validation results

| Gate                                  | Result             | Evidence                                                                                                                |
| ------------------------------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| Frozen dependency install             | PASS               | Bun 1.3.14; 533 installs across 713 packages; no lockfile change                                                        |
| Format                                | PASS               | Prettier                                                                                                                |
| Lint                                  | PASS WITH WARNINGS | 0 errors; 6 pre-existing Fast Refresh warnings in generic UI modules                                                    |
| Typecheck                             | PASS               | `tsc --noEmit`                                                                                                          |
| Unit/release tests                    | PASS               | 10/10                                                                                                                   |
| Publication configuration             | PASS               | Exact approved origin                                                                                                   |
| Production artifact build             | PASS               | Candidate `.output` tree                                                                                                |
| Publication build                     | PASS               | Candidate `.output` tree                                                                                                |
| Link/route/runtime validation         | PASS               | 12 documents, 2 entry routes, 5 required assets, one 410, one true 404, canonical host behavior, excluded/unknown hosts |
| Source maps / embedded source markers | PASS               | 0 `.map`; 0 `sourceMappingURL=` or `sourcesContent` markers                                                             |
| Browser viewport matrix               | PASS               | 360×800, 390×844, 768×1024, 1024×768, 1366×768, 1440×900, 1920×1080                                                     |
| Keyboard/mobile interactions          | PASS               | Skip-link focus/activation, mobile-menu focus entry/Escape return, CTA, finding, and role controls                      |
| Reduced motion                        | PASS               | Emulated media active; maximum duration 0.001 ms; scroll behavior auto                                                  |
| Forced colors                         | PASS               | Emulated media active; gradient masking removed; critical heading visible                                               |
| 200% reflow equivalent                | PASS               | 640 CSS px layout viewport; no horizontal overflow                                                                      |
| Lighthouse performance                | PASS — 98          | Required minimum 95; LCP 1,819 ms, CLS 0, TBT 0 ms                                                                      |
| Lighthouse accessibility              | PASS — 100         | Required 100                                                                                                            |
| Lighthouse best practices             | PASS — 100         | Required 100                                                                                                            |
| Lighthouse SEO                        | PASS — 100         | Required minimum 95                                                                                                     |
| Dependency audit                      | THRESHOLD PASS     | 0 critical, 0 high, 2 moderate, 2 low                                                                                   |
| High-confidence secret scan           | PASS               | 0 staged/current-tree findings; 0 findings across 248 unique blobs reachable before the implementation commit           |
| GitHub Actions candidate run          | PASS               | Run `29384390019`; every step passed on exact SHA `8fca95f914fe463da89073aa7e97607d59f0a9ad`                            |

Ignored evidence is retained under `artifacts/homepage-publication-20260715/`. The exact candidate artifact manifest covers 41 build files, 2,875,558 bytes, with aggregate SHA-256 `075b0cc6bf1d245b06b42492987155b8529c5cec3fc0942d403afd0e4e4d7941`.

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
| Candidate production target          | `BLOCKED`    | No authorized project contains the PR #4 candidate tree                                       |
| Exact deploy command                 | `BLOCKED`    | Not proven                                                                                    |
| Exact rollback command/prior version | `BLOCKED`    | Not proven                                                                                    |

## Legacy-route and legal result

The current live sitemap declares ten routes, eight of which render the legacy client soft-404 view. The candidate correctly implements `/`, `/technology`, `/private-demo` 410, and generic 404 behavior, but no whole-domain cutover is allowed because `/privacy`, `/terms`, `/contact`, and `/contact-us` are frozen publication holds. Their authoritative content, ownership, legal consequence, and cutover behavior are not approved. `/about` retirement also remains conditional on owner/counsel approval.

No 301 or 302 is approved. `/features` must not be silently mapped to `/technology`, and unknown routes must never be redirected to the homepage.

## Patent/public-history result

H-01 through H-11 remain reachable in public commits, branches, or pull-request refs. The repository history was not rewritten and no public reference was deleted. No patent-counsel disposition or authorized-owner waiver is recorded. Status remains `COUNSEL REVIEW REQUIRED`.

## Open publication blockers

| ID    | Blocker                                                                 | Required resolution                                                                                                                             |
| ----- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| P0-01 | Candidate production project/repository/branch mapping is absent        | Select the exact provider project and prove that it contains the immutable candidate SHA                                                        |
| P0-02 | Current deployment ID, exact deploy command, and exact rollback absent  | Record immutable current/prior deployment identities and provider-native commands with operator permissions                                     |
| P0-03 | Legal/contact and remaining legacy-route treatment is unapproved        | Obtain named owner/legal/SEO decisions and implement a reversible route plan                                                                    |
| P0-04 | Provider edge/static-asset host behavior is unproven                    | On isolated exact-SHA staging, verify apex/`www`, `.app`, unknown hosts, HTTP→HTTPS, static assets, TLS, cache, cookies, analytics, and headers |
| P0-05 | Exact-SHA staging and rollback rehearsal are absent                     | Create isolated staging from the candidate artifact, record deployment/output identity, then restore and verify the immutable prior deployment  |
| P0-06 | Patent/public-history decision is absent                                | Patent counsel or an authorized owner must record a permitted disposition or explicit waiver                                                    |
| P1-01 | Two moderate and two low dependency advisories remain                   | Remediate or record time-bounded security acceptance; high/critical threshold is already clear                                                  |
| P1-02 | Browse-only launch has no approved contact or observability destination | Explicitly approve the no-contact/no-analytics posture or separately approve a privacy-reviewed mechanism; do not add one implicitly            |

## Final recommendation

Keep PR #4 draft and blocked. The repository candidate is ready for founder and provider planning, but it is not publication-ready. Do not merge, deploy, change DNS, publish the candidate tag, or represent a local/CI pass as production authorization.
