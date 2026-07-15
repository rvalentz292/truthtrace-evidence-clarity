# TruthTrace Homepage Release Audit — 2026-07-15

## Executive verdict

**BLOCKED**

The repaired homepage candidate is substantially stronger, truthful, responsive, accessible, and fast in the local production-artifact preview. The production artifact build passes, all seven release tests pass, browser flows pass, the automated accessibility score is 100, and mobile Lighthouse performance is 99.

Publication is nevertheless blocked. The production domain and product identity are not approved, the live deployment is not demonstrably connected to this repository, a competing draft release branch exists, the production provider/project/branch and rollback target are unknown, and the candidate is deliberately non-indexable until those decisions are made. The current `bun run build` correctly fails the publication configuration gate rather than emitting an apparently publishable build.

No production deployment or merge is authorized by this audit.

## Release identity

| Field               | Value                                                                                                                                                                                                               |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Starting branch     | `main`                                                                                                                                                                                                              |
| Starting SHA        | `1b5530784b564b679f733f77ff40aa7f7da53978`                                                                                                                                                                          |
| Release branch      | `homepage-final-publication-gate-20260715`                                                                                                                                                                          |
| Final candidate SHA | `df6647616901b2e5eb2dc1d16255ffcc8140a78d` — immutable audited implementation/content commit. The branch's following release-record commit changes documentation only and leaves the public runtime tree identical. |
| Audit date          | 2026-07-14 America/Chicago, for the 2026-07-15 gate                                                                                                                                                                 |

There is also a remote draft candidate, `website-100m-final-20260714` at `64aac286beb3df3c898e2f975f27e589d5079456`, in draft PR #3. It is one commit ahead of the starting `main` SHA and has no recorded checks or approval. It was inspected but not merged or cherry-picked.

## Repository and framework summary

| Area                             | Audited result                                                                                                                                                       |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Repository                       | `rvalentz292/truthtrace-evidence-clarity`; confirmed as the public TruthTrace marketing repository                                                                   |
| Application                      | TanStack Start `1.168.28`, React `19.2.0`, TypeScript `5.8.3`, Vite `8.1.4`                                                                                          |
| Package manager                  | Bun lockfile; gate executed with Bun `1.3.14` through the available Node launcher                                                                                    |
| Rendering/build                  | TanStack Start SSR/client build through Nitro `3.0.260603-beta`                                                                                                      |
| Generated runtime                | Nitro Cloudflare-module worker; local artifact preview verified with Wrangler `4.110.0`                                                                              |
| Styling                          | Tailwind CSS `4.2.1` plus `src/styles.css`; system font fallbacks avoid an unfulfilled web-font request                                                              |
| Public routes                    | `/` and `/technology`; the former `/private-demo` route was removed                                                                                                  |
| Forms                            | None on the candidate; no evidence upload, intake, account, or lead form                                                                                             |
| Analytics/trackers               | None in candidate source                                                                                                                                             |
| Required publication environment | `VITE_SITE_URL` name only; value is intentionally unset pending domain approval                                                                                      |
| Deployment target                | **Unverified.** Generated Cloudflare-module output is evidence of a build preset, not proof of the production provider, project, account, branch, or domain mapping. |
| Candidate canonical              | Intentionally omitted when `VITE_SITE_URL` is absent                                                                                                                 |
| Robots/sitemap                   | `robots.txt` deliberately disallows `/`; `sitemap.xml` deliberately absent pending domain and route-migration approval                                               |

The currently live domains cannot be treated as interchangeable:

- `truthtrace.app` and `www.truthtrace.app` serve a different blockchain/content-authenticity product. Using that domain or its email identity for this family-law homepage would create a material identity and privacy collision.
- `truthtrace.ai` serves a legacy family-law site through a Lovable/Cloudflare stack with Google Analytics. Its rendered artifact is not found in this repository history, so the live deployment is not proven to originate from this repository.
- The live `.ai` sitemap exposes ten routes, including `/privacy`, `/terms`, and `/contact`; the candidate has two routes. A cutover without a route inventory and redirect/content plan would break indexed and legal/contact destinations.

## Audience scores before and after

Scores are qualitative release-review scores on a 1–10 scale. Metric order is **Comprehension / Trust / Differentiation / Proof / Emotional safety / CTA clarity**.

| Persona                         | Before                | After                 | Residual constraint                                                                                                  |
| ------------------------------- | --------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Overwhelmed parent              | 7 / 4 / 8 / 5 / 4 / 5 | 9 / 8 / 8 / 8 / 9 / 9 | Production identity and policy routes remain unresolved.                                                             |
| Family-law attorney             | 8 / 4 / 9 / 5 / 6 / 5 | 9 / 7 / 9 / 8 / 8 / 7 | No verified professional contact or pilot route is available.                                                        |
| Evaluator/forensic professional | 7 / 3 / 8 / 4 / 3 / 4 | 9 / 8 / 8 / 8 / 9 / 8 | Product proof is explicitly representative, not production validation.                                               |
| Investor                        | 8 / 3 / 8 / 3 / 6 / 5 | 9 / 6 / 8 / 7 / 8 / 7 | Deployment ownership, analytics, and production provenance are unresolved.                                           |
| Patent counsel                  | 7 / 3 / 7 / 3 / 6 / 4 | 8 / 7 / 8 / 7 / 8 / 7 | Earlier architecture/copy remains in public Git history and needs counsel disposition.                               |
| Security-conscious visitor      | 6 / 2 / 7 / 2 / 3 / 3 | 9 / 7 / 8 / 7 / 9 / 8 | No intake occurs now; future retention, deletion, access, and training policy still requires approval before intake. |

Trust, proof, and CTA scores are intentionally capped. A local preview cannot supply production identity, operational security, or customer proof.

## Claim audit summary

- All meaningful candidate claims were reviewed across visible copy, navigation, metadata, alt/accessibility text, representative controls, calls to action, and the footer.
- Material `UNSAFE / REMOVE` language was removed or rewritten, including “available now,” current-pilot assertions, universal “every” guarantees, “immutable” implementation claims, live-workspace implications, and sensitive intake through the unrelated `truthtrace.app` email identity.
- The candidate retains no measured customer outcome, case result, adoption, accuracy, hours-saved, money-saved, certification, compliance, admissibility, court-approval, or testimonial claim.
- `MODELED` numerical claims were removed rather than displayed as customer performance.
- Proposed capabilities are framed as design objectives, representative workflow, or positioning—not as deployed production behavior.
- Representative records are visibly labeled “Representative demonstration,” “Illustrative,” “Not live,” and “No real family information shown.” Their language was neutralized so the interface does not imply abuse, credibility, diagnosis, legal conclusions, or a custody outcome.
- The proof panel explicitly says the public preview does not create or download a report and does not establish production export enforcement.
- The public boundary states that TruthTrace provides evidence-organization and review-support technology, does not provide legal advice or determine admissibility, and does not replace professional judgment.
- The current source scan found no unresolved material false claim. Production provenance, domain identity, and historical patent exposure remain release-governance blockers rather than claims that copy alone can repair.

## Changes implemented

| Problem                                                                                                              | Why it matters                                                                                                         | Files changed                                                                                                                                                              | Implementation                                                                                                                                                                                                            | Verification                                                                                                            | Residual risk                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Hero and product copy implied greater product readiness and certainty than repository evidence supports.             | Family-law users could mistake positioning for verified production capability or legal/forensic conclusions.           | `src/components/site/HomePage.tsx`, `src/routes/index.tsx`, `src/routes/technology.tsx`                                                                                    | Reframed the category and outcome in evidence-constrained language; qualified capabilities as representative/design objectives; removed unsupported metrics and universal guarantees.                                     | Seven source-level release tests; claim register; browser review.                                                       | Product capabilities still require production validation before stronger claims can be made.               |
| The pilot modal and `pilots@truthtrace.app` route created a product-identity and sensitive-contact collision.        | `.app` serves a different product; a family-law visitor could send sensitive information to an unverified destination. | `src/components/site/HomePage.tsx`, `src/components/site/Nav.tsx`                                                                                                          | Removed the modal, mail link, and current-pilot assertions; made the primary CTA an in-page representative-workflow action.                                                                                               | Link check and primary/secondary CTA browser flows pass.                                                                | No professional lead-capture path exists; owner must approve a verified route or accept that limitation.   |
| Demonstration content could be mistaken for live family evidence and exposed unnecessary implementation terminology. | This risks deception, privacy concern, trauma impact, and patent-sensitive disclosure.                                 | `src/components/site/HomePage.tsx`; removed `src/components/site/HeroPipeline.tsx`, `src/components/site/Workspace.tsx`, and `src/routes/private-demo.tsx`                 | Added persistent representative/not-live/no-real-information labels; neutralized examples; used public-facing “source record” terminology; removed the public private-demo route.                                         | Tests assert labels and route removal; direct route/browser review shows only the approved public routes.               | Prior versions remain in public Git history pending counsel review.                                        |
| Navigation, menu state, focus handling, and dense layouts had accessibility/reflow weaknesses.                       | Keyboard and mobile users need predictable navigation and readable evidence proof without horizontal clipping.         | `src/components/site/Nav.tsx`, `src/components/site/Section.tsx`, `src/components/site/HomePage.tsx`, `src/routes/__root.tsx`, `src/styles.css`                            | Corrected anchors; added skip navigation and landmarks; restored focus on Escape; added pressed-state semantics, 44px targets, scroll margins, wrapping, reduced-motion/forced-colors support, and system font fallbacks. | Lighthouse accessibility 100; manual keyboard gate pass; all required viewports plus 640px reflow pass.                 | No qualified screen-reader audit, Safari run, or instrumented native 200% zoom run occurred.               |
| Homepage motion depended on an unnecessary animation runtime.                                                        | Avoidable client JavaScript and motion increase load and distraction on a calm forensic surface.                       | `src/components/site/HomePage.tsx`, `package.json`, `bun.lock`                                                                                                             | Replaced homepage motion wrappers with static semantic markup and removed the unused `framer-motion` dependency.                                                                                                          | Artifact build, browser interactions, and Lighthouse performance 99 pass.                                               | Other generic UI dependencies remain available to the repository but are not loaded by this homepage flow. |
| Metadata and social surfaces could not safely assume a production domain.                                            | A wrong canonical can split search authority or publish the wrong product identity.                                    | `src/lib/site-metadata.ts`, `src/routes/__root.tsx`, `src/routes/index.tsx`, `src/routes/technology.tsx`, `public/og.png`, `public/favicon.svg`, `public/site.webmanifest` | Added conditional absolute canonical/Open Graph metadata only for a valid HTTPS `VITE_SITE_URL`; added accurate titles/descriptions, social preview, favicon, manifest, theme metadata, and noindex error/404 handling.   | Assets return 200; titles/404 verified; social metadata is emitted only with approved configuration.                    | Canonical domain, index directives, and sitemap remain intentionally blocked.                              |
| The repository could emit an artifact without proving publication configuration.                                     | A successful compiler alone must not be interpreted as deployment readiness.                                           | `package.json`, `.env.example`, `scripts/validate-publication.mjs`, `scripts/check-links.mjs`, `tests/homepage-release.test.mjs`, `bun.lock`                               | Added format/type/test/link/publication gates; made default build depend on publication validation; added an artifact-only build and a working Wrangler preview; pinned local preview tooling.                            | Artifact build passes; typecheck/format/tests/link/browser pass; default build fails for the three intended interlocks. | Production provider/project/deploy and rollback commands remain unknown.                                   |
| Public responses lacked an explicit minimum security-header baseline.                                                | A marketing surface still needs defensible browser hardening and must avoid leaking internal state.                    | `src/server.ts`, `public/_headers`                                                                                                                                         | Added `nosniff`, referrer, permissions, frame-denial, opener-policy, and related response controls.                                                                                                                       | Preview response headers inspected; secret/history scan clean; production source-map count is zero.                     | Actual edge/CDN behavior must be verified after an approved deployment.                                    |

## Validation results

### Build and code quality

| Gate                                    | Result                              | Evidence                                                                                      |
| --------------------------------------- | ----------------------------------- | --------------------------------------------------------------------------------------------- |
| Dependency install                      | PASS                                | Frozen Bun install checked 533 installs across 713 packages with no changes.                  |
| Format check                            | PASS                                | Final tree passed Prettier check.                                                             |
| Lint                                    | PASS WITH WARNINGS                  | 0 errors; 6 existing React Fast Refresh warnings in generic UI modules.                       |
| Typecheck                               | PASS                                | `tsc --noEmit`.                                                                               |
| Tests                                   | PASS                                | 7/7 Node release tests.                                                                       |
| Link check                              | PASS                                | 9 documents, 2 entry routes, and the 404 route.                                               |
| Production artifact build               | PASS                                | `bun run build:artifact`; output recorded under `artifacts/homepage-release-20260715/build/`. |
| Publication configuration/default build | **FAIL — INTENTIONAL P0 INTERLOCK** | Missing `VITE_SITE_URL`, blocking `robots.txt`, and missing `sitemap.xml`.                    |
| Preview                                 | PASS                                | Generated Nitro Cloudflare-module worker served by Wrangler at `127.0.0.1:4173`.              |

### Accessibility results

```text
Automated accessibility gate: PASS
Manual keyboard gate: PASS
Known limitations: No qualified assistive-technology/screen-reader audit; exact automated browser 200% zoom was unavailable, so equivalent 640px reflow was verified; this is not a claim of complete WCAG 2.2 AA conformance.
```

- Lighthouse accessibility: **100**.
- Lighthouse contrast audit: PASS.
- Heading order, header/nav/main/footer landmarks, skip link, visible focus, control names and pressed states, mobile-menu focus entry, Escape close/focus restoration, touch targets, reduced motion, and non-color status cues passed the fundamentals review.
- No horizontal overflow was found at the required viewports or equivalent 200% reflow width.

Evidence: `artifacts/homepage-release-20260715/accessibility/accessibility-gate.json`.

### Performance results

Representative Lighthouse mobile run against the local production-artifact preview:

| Measure                  |        Result |                     Target | Gate         |
| ------------------------ | ------------: | -------------------------: | ------------ |
| Performance score        |            99 |            >= 90 preferred | PASS         |
| Largest Contentful Paint |      1,895 ms |                <= 2,500 ms | PASS         |
| Cumulative Layout Shift  |             0 |                    <= 0.10 | PASS         |
| Total Blocking Time      |          0 ms |              Informational | PASS         |
| First Contentful Paint   |      1,745 ms |              Informational | PASS         |
| Speed Index              |      1,745 ms |              Informational | PASS         |
| Total byte weight        | 160,417 bytes |              Informational | PASS         |
| Potential unused JS      |  50,186 bytes |              Informational | P2 FOLLOW-UP |
| INP                      |  Not measured | <= 200 ms where measurable | NOT MEASURED |

Lighthouse evidence: `artifacts/homepage-release-20260715/lighthouse/homepage-mobile.report.html`, `.json`, and `summary.json`.

### SEO results

| Measure                  | Result                                                  | Gate                                  |
| ------------------------ | ------------------------------------------------------- | ------------------------------------- |
| Lighthouse SEO score     | **63**                                                  | FAIL against >= 95 publication target |
| Titles and descriptions  | Accurate and route-specific                             | PASS                                  |
| 404 metadata             | `noindex`; distinct title                               | PASS                                  |
| Open Graph/Twitter image | Present and served                                      | PASS locally                          |
| Favicon and manifest     | Present and served                                      | PASS locally                          |
| Canonical URL            | Deliberately absent without approved `VITE_SITE_URL`    | **P0 BLOCKED**                        |
| Robots                   | `Disallow: /` publication interlock                     | **P0 BLOCKED**                        |
| Sitemap                  | Absent pending domain/route migration                   | **P0 BLOCKED**                        |
| Structured data          | None; no unsupported organization/software schema added | N/A pending approved identity         |

The score of 63 is expected while the interlock is active; it must not be waived for a public indexed launch. Social-preview parsing must be rechecked against the approved public HTTPS URL after deployment.

### Security results

| Check                                        | Result                                                          |
| -------------------------------------------- | --------------------------------------------------------------- |
| Current-tree high-confidence secret scan     | PASS — no matches                                               |
| Full-history high-confidence secret scan     | PASS — no matches across 87 reachable commits                   |
| Tracked non-example environment files        | PASS — none                                                     |
| Production source maps                       | PASS — 0                                                        |
| Candidate analytics/trackers                 | None                                                            |
| Candidate forms/uploads/data collection      | None                                                            |
| Real family evidence or personal information | None found on candidate public surface                          |
| Security headers                             | PASS in local generated-worker preview                          |
| Dependency audit                             | **OPEN — 4 advisories: 2 moderate, 2 low; no high or critical** |

The four advisories are in build/development dependency paths (`brace-expansion`, `js-yaml`, `@babel/core`, and `esbuild`). They do not justify an unreviewed blanket update before release, but engineering/security must remediate or explicitly document risk acceptance before publication.

Evidence: `artifacts/homepage-release-20260715/security/secret-and-surface-scan.json` and `dependency-audit.txt`.

The rendered `/` and `/technology` artifacts do not invoke a cookie writer or an unsafe-HTML sink. Two unused generic UI modules remain in source: `src/components/ui/sidebar.tsx` can write a preference cookie if adopted, and `src/components/ui/chart.tsx` uses `dangerouslySetInnerHTML` for generated chart styles. Neither module is imported into the candidate routes; any future use requires a fresh privacy and injection review.

### Browser results

The browser gate passed against the generated production artifact, not the Vite development server.

- `/` and `/technology` returned 200; an unknown route returned the intended 404.
- Homepage load had no production console error overlay, missing image, duplicate ID, mixed-content issue, or unexpected horizontal scroll.
- Desktop navigation, mobile menu open/focus/Escape restoration, primary CTA, secondary CTA, finding selection, role-view selection, direct navigation, refresh, browser back, and 404 recovery passed.
- Required inner viewports passed: 360×800, 390×844, 768×1024, 1024×768, 1366×768, 1440×900, and 1920×1080. The saved PNG dimensions are smaller because the capture surface excludes native browser scrollbar/chrome/inset pixels; `browser-smoke-summary.json` records the exact inner viewport used for each review.
- Equivalent 200% reflow at 640×360 remained usable without horizontal overflow.
- Forms and form delivery: **N/A — no forms exist**.
- Privacy/terms candidate links: **N/A — no data-collection links exist**; preserving or migrating the legacy live legal routes is separately a P0 cutover requirement.

Evidence: `artifacts/homepage-release-20260715/browser/browser-smoke-summary.json`, `http-statuses.txt`, `link-check.txt`, and the screenshot directory. Checksums for retained local evidence are listed in `artifacts/homepage-release-20260715/SHA256SUMS.txt`.

## Known limitations

1. All browser, header, accessibility, and Lighthouse measurements are from a local Windows/Chromium production-artifact preview. They do not prove CDN, DNS, TLS, compression, cache, redirect, or edge-header behavior in production.
2. Lighthouse is one controlled mobile run; INP was unavailable because there was no interaction trace.
3. No qualified screen-reader/assistive-technology audit, Safari/WebKit pass, physical iOS/Android pass, or instrumented native 200% zoom run was completed.
4. The rendered candidate routes intentionally have no form, email intake, analytics, cookie behavior, or live evidence upload. Therefore delivery, consent, retention, deletion, access control, training use, and PII-in-analytics behavior cannot be production-validated. Unused generic source components retain a cookie writer and an HTML style-injection helper, so any future import requires renewed review.
5. Representative product controls demonstrate interaction and information hierarchy, not end-to-end evidence processing or customer outcomes.
6. The generated artifact proves that the configured stack can build. It does not prove ownership of the live project or permission to deploy it.
7. Current-tip cleanup does not remove earlier architecture language or screenshots from public Git history.
8. The full interaction/screenshot session preceded the final copy-only export-boundary, contrast, dependency, and formatting refinements. The final tree was subsequently rebuilt and rechecked for formatting, lint, types, tests, links, response headers, secrets, HTTP status, and Lighthouse; the full interaction matrix and screenshots were not recaptured after those non-structural refinements.

## P0/P1/P2/P3 findings

### P0 — blocks publication

| ID    | Finding                                                        | Evidence/impact                                                                                                                                                             | Required resolution                                                                                                                                                           | Owner                                 | Status |
| ----- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | ------ |
| P0-01 | Production domain and product identity are unapproved.         | `.app` is a different product; `.ai` is the legacy family-law site. Choosing incorrectly risks misrepresentation and sensitive-contact misrouting.                          | Ryan/product owner must approve one canonical family-law production domain and authorized contact identity in writing.                                                        | Ryan / product owner                  | OPEN   |
| P0-02 | Publication configuration is intentionally incomplete.         | `VITE_SITE_URL` is unset, robots blocks `/`, sitemap is absent, `bun run build` fails, and Lighthouse SEO is 63.                                                            | After P0-01 and route decisions, set the approved HTTPS URL, generate a route-accurate sitemap, update robots, rerun the default build and Lighthouse, and require SEO >= 95. | Release engineering + SEO owner       | OPEN   |
| P0-03 | Production repository/project/branch provenance is unverified. | The live `.ai` Lovable artifact is not found in this repository history; draft PR #3 is a competing candidate with no checks or approval.                                   | Identify the hosting project/account, prove its repository connection, and record the single approved release branch/commit. Explicitly disposition draft PR #3.              | Ryan + hosting administrator          | OPEN   |
| P0-04 | Deployment and rollback controls are unknown.                  | Provider, project ID, production branch, deploy command, previous production SHA/deployment ID, rollback command, and rollback owner are not verified.                      | Record and dry-run the provider-native preview/rollback procedure against a non-production target; capture the previous production deployment before any cutover.             | Hosting administrator + release owner | OPEN   |
| P0-05 | Existing route and legal/contact migration is unresolved.      | The live `.ai` sitemap has ten routes; the candidate has two and omits live `/privacy`, `/terms`, and `/contact`. A cutover would create broken indexed/legal destinations. | Approve a complete route inventory with preserve/migrate/301/410 treatment; counsel/product must approve legal and contact destinations.                                      | Product owner + counsel + SEO owner   | OPEN   |
| P0-06 | Patent-sensitive material remains in public Git history.       | Removing prior architecture copy and screenshots from the tip does not retract 87 reachable public commits/clones.                                                          | Patent counsel must document acceptance or prescribe an authorized history/repository mitigation before release materials point more users at the repository/product.         | Patent counsel + repository owner     | OPEN   |

### P1 — must fix before publication unless explicitly waived

| ID    | Finding                                                                                                    | Required action/waiver                                                                                                                                                   | Owner                                 | Status |
| ----- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------- | ------ |
| P1-01 | Dependency audit reports 2 moderate and 2 low advisories in development/build paths.                       | Update compatible packages and rerun all gates, or record a time-bounded security waiver with exploitability rationale and remediation date.                             | Engineering/security                  | OPEN   |
| P1-02 | The candidate has no analytics or release observability while the legacy `.ai` site uses Google Analytics. | Approve a privacy-reviewed analytics/error-monitoring plan or explicitly waive analytics with an alternate monitoring owner and method. Never collect sensitive content. | Product/privacy + operations          | OPEN   |
| P1-03 | No verified professional contact or pilot path exists.                                                     | Approve a secure contact destination and data-handling terms, or explicitly accept a browse-only launch with no lead capture.                                            | Ryan/product owner + privacy/security | OPEN   |

### P2 — important post-launch improvement

| ID    | Finding                                                                                                              | Owner             | Status |
| ----- | -------------------------------------------------------------------------------------------------------------------- | ----------------- | ------ |
| P2-01 | No qualified screen-reader, Safari/WebKit, or physical-device audit was performed; 200% zoom used equivalent reflow. | Accessibility/QA  | OPEN   |
| P2-02 | INP was not measurable in the Lighthouse run and field Core Web Vitals do not yet exist.                             | Performance owner | OPEN   |
| P2-03 | Six React Fast Refresh lint warnings remain in generic, currently unused UI modules.                                 | Engineering       | OPEN   |
| P2-04 | Browser verification is evidence-backed but not yet a checked-in end-to-end cross-browser suite.                     | QA/engineering    | OPEN   |
| P2-05 | Lighthouse estimates 50,186 bytes of potentially unused JavaScript in the hydrated homepage route bundle.            | Engineering       | OPEN   |
| P2-06 | Unused generic UI modules retain a cookie writer and a `dangerouslySetInnerHTML` chart-style helper.                 | Security/privacy  | OPEN   |

### P3 — cosmetic or optional

| ID    | Finding                                                                                                                            | Owner       | Status  |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------- |
| P3-01 | Build emits non-blocking maintenance notices about `vite-tsconfig-paths` native support and ignored `inlineDynamicImports`.        | Engineering | BACKLOG |
| P3-02 | Additional dark-theme treatment and expanded brand asset variants are optional; the current single-theme public surface is usable. | Design      | BACKLOG |

## Exact launch blockers

Publication may not proceed until **all** of the following are true:

1. Ryan approves the canonical family-law domain and contact identity; the release explicitly rejects the unrelated `.app` product identity unless ownership and intended use are proven.
2. The hosting administrator identifies the production provider, account/project, repository integration, production branch, and exact candidate commit, and the owner resolves the competing draft PR #3.
3. A previous production SHA/deployment identifier, exact deployment command, exact rollback command, rollback owner, and non-production rehearsal evidence are recorded.
4. Every live route receives an approved preserve, migrate, redirect, or retire decision, including `/privacy`, `/terms`, and `/contact`.
5. `VITE_SITE_URL` is set to the approved HTTPS canonical; `robots.txt` allows the intended production indexing; a correct sitemap is present; `bun run build` passes; and SEO is rerun to the >= 95 target.
6. Patent counsel records a disposition for patent-sensitive content in public Git history.

## Final recommendation

**BLOCKED. Do not deploy, merge, change DNS, or remove the publication interlocks.**

The code candidate is ready for human review, but the release is not publication-ready. Resolve P0-01 through P0-06, disposition or waive P1 items with named owners and remediation dates, rerun the complete final tree gate, record the final commit/deployment/rollback identifiers, and only then reassess the verdict.
