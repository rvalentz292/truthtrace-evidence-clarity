# TruthTrace Homepage Release Changelog — 2026-07-15

## Release status

This changelog records material changes from `main` at `1b5530784b564b679f733f77ff40aa7f7da53978` to the working release candidate on `homepage-final-publication-gate-20260715`. The changes repair the public artifact but do not authorize deployment. Verdict: `BLOCKED`.

## 1. Reframed the product from asserted operation to qualified direction

**Problem:** The baseline described live transformations, deterministic processing, immutable evidence objects, preserved originals, citation-bound outputs, enforced gates, supported formats, and controlled pilot operation without repository evidence sufficient to prove those claims.

**Why it matters:** In legal technology, unverified integrity, security, availability, and enforcement claims can mislead parents and professionals, create diligence failures, and increase legal and reputational risk.

**Files changed:** `src/components/site/HomePage.tsx`, `src/routes/index.tsx`, `src/routes/technology.tsx`, `src/lib/site-metadata.ts`.

**Implementation:** Replaced present-tense operation with “is being designed,” “Design objective,” “representative,” “illustrative,” “static,” and “not live” language. Retained the category “Forensic Evidence Intelligence for Family Law” as positioning while separating it from production guarantees. Reworked technology copy into outcome-level principles subject to implementation, security, and professional validation.

**Verification:** Source review and release tests confirm removal of “currently operating in controlled pilot,” “available now,” “every finding traceable,” “every one enforced,” and “immutable EvidenceObjects.” The public claim register classifies every retained mechanism as `PLANNED` or `MODELED` unless it is a directly inspected site fact.

**Residual risk:** Brand and legal counsel must approve the category and limitations language. No copy change can substitute for production evidence.

## 2. Removed unsupported numbers and neutralized case-like examples

**Problem:** The baseline displayed concrete case volumes and output counts that could be repeated as performance proof, plus synthetic findings phrased as non-completion, discrepancy, inconsistency, and intentional interference.

**Why it matters:** Specific numbers can appear empirical even with a modeled footnote. Adverse family-law language can imply forensic conclusions, inflame conflict, or look like real evidence.

**Files changed:** `src/components/site/HomePage.tsx`.

**Implementation:** Removed the 7,380-message, 683-page, 977-record, 498-record, and 100%-citation tiles. Replaced adverse findings with narrow observations about records referencing the same window, a school record noting timing, and two messages using different dates. Renamed operational-looking ledger values so each says “sample” and changed run IDs to `example-01`.

**Verification:** Browser review confirmed representative labels above the proof chain and static ledger. Release tests check the candidate for known unsafe phrases. Manual claim review found no measured customer outcome or live-processing result on the page.

**Residual risk:** A synthetic unsupported-intent sentence remains inside the clearly labeled “Held for review” comparison; counsel may prefer an even less charged example. Cropped screenshots must retain illustrative context.

## 3. Removed the unverified pilot and sensitive-contact path

**Problem:** “Request controlled pilot access” opened a modal with `mailto:pilots@truthtrace.app`, and the page claimed pilot operation and direct TruthTrace-team intake without verified ownership, privacy terms, or transfer controls.

**Why it matters:** The live `truthtrace.app` identity currently represents a different blockchain/content-authenticity product. Sending family-law matter descriptions there would create a P0 identity and privacy collision.

**Files changed:** `src/components/site/HomePage.tsx`, `src/components/site/Nav.tsx`.

**Implementation:** Removed the pilot modal, mail link, limited-access assertions, and intake checklist presented as current operation. Replaced conversion CTAs with internal links to the representative workflow, public-site boundaries, and product design principles. Added an explicit policy that no demo request or evidence intake is offered until a verified contact route, approved data terms, and secure transfer process exist.

**Verification:** Release tests reject `mailto:` and the former pilot-status phrase. Browser verification confirmed primary and secondary internal CTAs reach their intended sections and route.

**Residual risk:** There is intentionally no external lead-conversion path. Attorney and investor CTA scores remain capped until an approved organization, domain, mailbox, privacy policy, and intake workflow exist.

## 4. Removed the public private-demo and architecture-rich surfaces

**Problem:** `/private-demo` was routable in the public application despite “Not For Public Distribution” text and exposed a detailed workspace simulation and pipeline-oriented components.

**Why it matters:** A client-side “private” label is not access control. The route increased product-status confusion, public attack surface, and patent-sensitive disclosure.

**Files changed:** Deleted `src/routes/private-demo.tsx`, `src/components/site/Workspace.tsx`, and `src/components/site/HeroPipeline.tsx`; regenerated `src/routeTree.gen.ts`.

**Implementation:** Removed the route and its specialized components from the current tree and routing manifest. Public routes are now `/`, `/technology`, and error states.

**Verification:** Release tests assert that the deleted route and workspace file do not exist. Browser verification confirmed the missing route returns the intended 404 experience.

**Residual risk:** The public Git repository's prior commits and clones may still contain the deleted content. Patent counsel must decide whether history treatment is required; current-tree deletion cannot retract prior disclosure.

## 5. Added explicit public-site, legal, privacy, and training boundaries

**Problem:** The baseline presented a “Trust Architecture” with production-sounding hashes, preservation, chain-of-custody, export-gating, and role-access assertions but did not clearly answer what the public site actually collects or accepts.

**Why it matters:** Visitors may be preparing highly sensitive family evidence. They need narrow, truthful answers before any interaction, and security claims must match implementation.

**Files changed:** `src/components/site/HomePage.tsx`.

**Implementation:** Replaced unproven trust architecture with separate design objectives and current-site facts. The page now states that it has no evidence upload, case intake form, account system, or live matter workspace; no case material is submitted here for storage or model training; policy must precede future intake; all displayed case-like records are illustrative. Expanded limitations to legal advice, diagnosis, credibility, custody outcomes, admissibility, and professional judgment.

**Verification:** Source and browser inspection found no intake control, form, account, case-data network request, analytics integration, or live workspace. Release tests assert the core disclosures remain present.

**Residual risk:** These statements are scoped to this artifact. They must be reverified against the approved live domain, platform injections, analytics, cookies, and any future contact feature.

## 6. Repaired navigation, interaction semantics, and keyboard behavior

**Problem:** Baseline hash navigation was incomplete, interactive finding/role controls used partial tab semantics, the mobile menu lacked robust focus behavior, and there was no skip link.

**Why it matters:** Broken section links and incorrect semantics impede keyboard and assistive-technology users and undermine the primary conversion path.

**Files changed:** `src/components/site/Nav.tsx`, `src/components/site/HomePage.tsx`, `src/components/site/Section.tsx`, `src/routes/__root.tsx`.

**Implementation:** Added real `how`, `proof-chain`, `audiences`, and `trust` targets with scroll offsets. Switched sample selectors to named groups with pressed-button state. Added `#main-content`, a visible-on-focus skip link, semantic main landmarks, 44-pixel mobile targets, focus-on-open, Escape close, and focus restoration. Made the mobile drawer height-bounded and scrollable.

**Verification:** Browser checks confirmed hash targets, visible skip-link focus, main-content focus, sample selection state, evaluator role updates, mobile menu focus entry, Escape close, and focus return. No duplicate IDs or console errors were observed.

**Residual risk:** Final screen-reader testing on the approved production build is still required. Automated keyboard simulation cannot replace VoiceOver, NVDA, or JAWS review.

## 7. Improved responsive reflow, forced-color behavior, and typography reliability

**Problem:** Global horizontal clipping could hide overflow defects, some dense rows did not wrap safely, and the stylesheet named Geist fonts without loading them.

**Why it matters:** Hidden clipping can mask inaccessible 200% zoom behavior. Unloaded fonts cause layout drift, while dense forensic UI can overflow on small screens.

**Files changed:** `src/components/site/HomePage.tsx`, `src/components/site/Nav.tsx`, `src/components/site/Section.tsx`, `src/styles.css`.

**Implementation:** Removed global horizontal-overflow hiding, added a 320-pixel minimum and zero body margin, strengthened wrapping and responsive grids, used system-available Segoe UI/Cascadia fallbacks, and added forced-colors fallbacks for gradient text. Retained reduced-motion CSS and removed the unused Framer Motion integration and package dependency.

**Verification:** Browser captures and DOM checks at 360×800, 768×1024, 1440×900, 1920×1080, and a 640×360 200%-zoom equivalent showed no horizontal overflow. Heading hierarchy and focusable controls remained available.

**Residual risk:** Exact 200% browser zoom and high-contrast testing should be repeated manually on target Windows/macOS browsers after deployment.

## 8. Added safe metadata, social assets, error metadata, and a publication interlock

**Problem:** Baseline metadata had no verified canonical domain, no complete social image, weak route distinction, and no guard preventing an unknown target from being indexed.

**Why it matters:** A wrong canonical can transfer authority to the wrong identity; premature indexing can expose a candidate before domain, routes, and legal controls are ready.

**Files changed:** `src/lib/site-metadata.ts`, `src/routes/index.tsx`, `src/routes/technology.tsx`, `src/routes/__root.tsx`, `public/og.png`, `public/favicon.svg`, `public/site.webmanifest`, `public/robots.txt`, `.env.example`, `scripts/validate-publication.mjs`, `package.json`.

**Implementation:** Added route-specific titles/descriptions and conditional canonical, Open Graph, and Twitter URLs derived only from a valid HTTPS `VITE_SITE_URL`. Added an original representative social card, favicon, manifest, distinct 404/error titles, and noindex metadata for error states. Added a build-time validator. `robots.txt` deliberately blocks all indexing until production identity is approved, and the default `build` invokes the validator; `build:artifact` remains available for non-publishable verification.

**Verification:** Source tests confirm the default build is validator-protected. The artifact build succeeds. The publication build intentionally fails while `VITE_SITE_URL` is missing, `robots.txt` blocks `/`, and `public/sitemap.xml` is absent. Error-route browser checks confirmed noindex and distinct titles.

**Residual risk:** This is an intentional P0 block. The production domain, canonical host policy, sitemap, robots release state, www/apex redirects, existing indexed routes, and live social scrapes must be approved and verified before the build can pass.

## 9. Added runtime security headers and safer SSR failure handling

**Problem:** Security-header behavior was not enforced by the application entry, and catastrophic SSR JSON failures could surface an unsuitable response body.

**Why it matters:** The release requires predictable browser hardening and a usable, non-indexed failure experience without leaking unnecessary error structure.

**Files changed:** `src/server.ts`, `public/_headers`, `src/routes/__root.tsx`.

**Implementation:** Applied `Cross-Origin-Opener-Policy: same-origin`, a restrictive Permissions Policy, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Content-Type-Options: nosniff`, and `X-Frame-Options: DENY` to application responses, with a static-host header file as an additional provider-compatible declaration. Normalized swallowed catastrophic SSR JSON into the existing HTML error page and added recovery actions.

**Verification:** Release tests assert all five header names in the server entry. Local production-preview header checks and error-state browser checks are part of the release evidence package.

**Residual risk:** Provider behavior may override, merge, or omit headers. Content Security Policy, HSTS, caching, and final headers must be decided and verified on the approved production host; do not infer them from local preview.

## 10. Added reproducible release checks and a production-output preview path

**Problem:** The baseline lacked typecheck, test, format-check, link-check, publication-config, and production-output preview scripts. The previous Vite preview command did not serve the Nitro Cloudflare-module output correctly.

**Why it matters:** A release gate needs exact repeatable commands, and browser verification must exercise the artifact that would actually be deployed.

**Files changed:** `package.json`, `bun.lock`, `.prettierrc`, `scripts/check-links.mjs`, `scripts/validate-publication.mjs`, `tests/homepage-release.test.mjs`, `src/routes/README.md`.

**Implementation:** Added `typecheck`, `test`, `format:check`, `check:links`, `release:config`, `build:artifact`, and protected publication build scripts. Added pinned Wrangler tooling and a preview command for `.output/server/wrangler.json`. Added tests for hash targets, removed private surface, representative labels, unsafe copy, local URLs, publication interlock, security headers, and the no-report-export boundary. Configured Prettier to tolerate repository line endings on Windows.

**Verification:** Dependency installation with the frozen Bun lockfile succeeded. Lint and typecheck passed; lint retained six non-blocking Fast Refresh warnings in existing UI modules. The release test suite passed. The artifact build completed, the Wrangler preview served the production output, internal links and 404 behavior passed the link checker, and browser console/error checks were clean. The dependency audit reported four advisories (two moderate and two low) and no high-severity advisory. The publication build remains intentionally blocked by unresolved production configuration.

**Residual risk:** The four dependency advisories require owner review and tracked remediation even though none is high severity. The repository still has no connected CI workflow or verified deployment project. Local green checks are necessary but not sufficient for release.

## 11. Preserved local evidence without committing generated audit artifacts

**Problem:** Release screenshots, Lighthouse reports, browser logs, build logs, accessibility results, and security results can be large and environment-specific.

**Why it matters:** Committing generated artifacts can bloat the repository or accidentally preserve sensitive local context, while omitting them entirely weakens the audit trail.

**Files changed:** `.gitignore`; local `artifacts/homepage-release-20260715/` evidence tree.

**Implementation:** Kept generated release evidence under the required local artifact path and excluded the artifact directory from source control. Release documentation records the evidence locations and verification results; `artifacts/homepage-release-20260715/SHA256SUMS.txt` records a relative-path SHA-256 manifest for retained files.

**Verification:** Git status can distinguish source/document changes from ignored audit output; artifact files remain available in the shared workspace for human inspection and can be checked against the SHA-256 manifest.

**Residual risk:** Ignored local evidence is not durable across machines. The release owner must archive approved evidence in an access-controlled system if long-term retention is required.

## Unresolved blockers

- Approved production domain and identity are not established; `truthtrace.app` is a different product and `truthtrace.ai` is a legacy deployment not tied demonstrably to this repository.
- Production provider, project, branch, deployment command, deployment ID, environment, and rollback mechanism are unverified.
- The legacy live site exposes indexed `/privacy`, `/terms`, `/contact`, and other routes absent from this candidate; no redirect or migration plan is approved.
- Canonical URL, sitemap, robots release state, www/apex redirect policy, analytics ownership, and live social-card validation are incomplete.
- The remote `website-100m-final-20260714` candidate and draft PR #3 diverge from this release branch; the owner must choose the authoritative candidate rather than silently combining them.
- Patent counsel must assess historical public repository disclosure.

Until those items are resolved and the full live-domain gate is rerun, the release verdict is `BLOCKED`.
