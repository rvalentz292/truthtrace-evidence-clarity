# TruthTrace Homepage Release Changelog — 2026-07-15

## Release status

This changelog records material changes from `main` at
`1b5530784b564b679f733f77ff40aa7f7da53978` to publication candidate
`04035bd053d61aec308282a9a861c3da94285fc2` on
`homepage-final-publication-gate-20260715`. The approved first-cutover route record
and local implementation are complete, but the changes do not authorize production
deployment. Verdict: `BLOCKED`.

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

**Implementation:** Removed the pilot modal, mail link, limited-access assertions, and intake checklist presented as current operation. Replaced conversion CTAs with internal links to the representative workflow, public-site boundaries, and product design principles. Added an explicit policy that no demo request or evidence intake is offered until a verified contact channel, approved data terms, and secure transfer process exist.

**Verification:** Release tests reject `mailto:` and the former pilot-status phrase. Browser verification confirmed primary and secondary internal CTAs reach their intended sections and route.

**Residual risk:** There is intentionally no external lead-conversion path. The
approved `/contact` page is a static boundary, not a verified contact channel.
Attorney and investor CTA scores remain capped until a verified channel and any
future intake workflow are separately approved.

## 4. Removed the public private-demo and architecture-rich surfaces

**Problem:** `/private-demo` was routable in the public application despite “Not For Public Distribution” text and exposed a detailed workspace simulation and pipeline-oriented components.

**Why it matters:** A client-side “private” label is not access control. The route increased product-status confusion, public attack surface, and patent-sensitive disclosure.

**Files changed:** Deleted `src/routes/private-demo.tsx`, `src/components/site/Workspace.tsx`, and `src/components/site/HeroPipeline.tsx`; regenerated `src/routeTree.gen.ts`.

**Implementation:** Removed the route and its specialized components from the
current tree and routing manifest. The approved public `200` routes are now `/`,
`/technology`, `/privacy`, `/terms`, and `/contact`; `/private-demo` returns `410`.

**Verification:** Release tests assert that the deleted workspace source is absent
and that `/private-demo` returns the intended `410` tombstone with `noindex`.

**Residual risk:** The public Git repository's prior commits and clones may still contain the deleted content. Patent counsel must decide whether history treatment is required; current-tree deletion cannot retract prior disclosure.

## 5. Added explicit public-site, legal, privacy, and training boundaries

**Problem:** The baseline presented a “Trust Architecture” with production-sounding hashes, preservation, chain-of-custody, export-gating, and role-access assertions but did not clearly answer what the public site actually collects or accepts.

**Why it matters:** Visitors may be preparing highly sensitive family evidence. They need narrow, truthful answers before any interaction, and security claims must match implementation.

**Files changed:** `src/components/site/HomePage.tsx`,
`src/components/site/LegalDocumentPage.tsx`, `src/content/website-legal.ts`,
`src/content/website-privacy.ts`, `src/content/website-terms.ts`,
`src/routes/privacy.tsx`, `src/routes/terms.tsx`, and `src/routes/contact.tsx`.

**Implementation:** Replaced unproven trust architecture with separate design
objectives and current-site facts. Added the exact approved TruthTrace Website
Privacy Notice and Website Terms of Use, both effective July 15, 2026, at their
preserved URLs. Added the exact approved static Contact boundary with no form,
input, email, phone, upload, intake, or family-information collection. Policy
language is the approved public content; it is not treated as independent proof of
provider operation.

**Verification:** Exact-content checks found no substantive wording or punctuation
differences from the approved legal texts or Contact boundary. Source, route, built
artifact, and test inspection found no intake control, form, account, unverified
email, case-data request, analytics integration, or live workspace.

**Residual risk:** These statements are scoped to this artifact. They must be reverified against the approved live domain, platform injections, analytics, cookies, and any future contact feature.

## 6. Repaired navigation, interaction semantics, and keyboard behavior

**Problem:** Baseline hash navigation was incomplete, interactive finding/role controls used partial tab semantics, the mobile menu lacked robust focus behavior, and there was no skip link.

**Why it matters:** Broken section links and incorrect semantics impede keyboard and assistive-technology users and undermine the primary conversion path.

**Files changed:** `src/components/site/Nav.tsx`, `src/components/site/HomePage.tsx`, `src/components/site/Section.tsx`, `src/routes/__root.tsx`.

**Implementation:** Added real `how`, `proof-chain`, `audiences`, and `trust` targets with scroll offsets. Switched sample selectors to named groups with pressed-button state. Added `#main-content`, a visible-on-focus skip link, semantic main landmarks, 44-pixel mobile targets, focus-on-open, Escape close, and focus restoration. Made the mobile drawer height-bounded and scrollable.

**Verification:** Fresh exact-candidate Chrome checks confirmed primary/secondary hash targets, visible skip-link activation and `main-content` focus, mobile-menu focus entry, Escape close, and trigger-focus restoration. Representative sample-selection and role-update behavior remains covered by implementation tests and the earlier browser baseline. No duplicate IDs or route-page console errors were observed.

**Residual risk:** Final screen-reader testing on the exact staged candidate and eventual production deployment is still required. Automated keyboard simulation cannot replace VoiceOver, NVDA, or JAWS review.

## 7. Improved responsive reflow, forced-color behavior, and typography reliability

**Problem:** Global horizontal clipping could hide overflow defects, some dense rows did not wrap safely, and the stylesheet named Geist fonts without loading them.

**Why it matters:** Hidden clipping can mask inaccessible 200% zoom behavior. Unloaded fonts cause layout drift, while dense forensic UI can overflow on small screens.

**Files changed:** `src/components/site/HomePage.tsx`, `src/components/site/Nav.tsx`, `src/components/site/Section.tsx`, `src/styles.css`, `package.json`, and `bun.lock`.

**Implementation:** Removed global horizontal-overflow hiding, added a 320-pixel minimum and zero body margin, strengthened wrapping and responsive grids, used system-available Segoe UI/Cascadia fallbacks, and added forced-colors fallbacks for gradient text. Retained reduced-motion CSS and removed the unused Framer Motion integration and package dependency.

**Verification:** Fresh exact-candidate Chrome checks pass the complete 360×800, 390×844, 768×1024, 1024×768, 1366×768, 1440×900, and 1920×1080 homepage matrix, all five public routes at 360 and 1280 px, and the 640×360 200%-zoom equivalent without horizontal overflow. Reduced-motion and forced-colors emulation also pass.

**Residual risk:** Exact 200% browser zoom and high-contrast testing should be repeated manually on target Windows/macOS browsers after deployment.

## 8. Locked the founder-approved candidate metadata and crawler policy

**Problem:** Baseline metadata had no verified canonical domain, no complete social image, weak route distinction, and no guard preventing an unknown target from being indexed.

**Why it matters:** A wrong canonical can transfer authority to the wrong identity; premature indexing can expose a candidate before domain, routes, and legal controls are ready.

**Files changed:** `src/lib/site-metadata.ts`, `src/routes/index.tsx`,
`src/routes/technology.tsx`, `src/routes/privacy.tsx`, `src/routes/terms.tsx`,
`src/routes/contact.tsx`, `src/routes/__root.tsx`, `public/og.png`,
`public/favicon.svg`, `public/site.webmanifest`, `public/robots.txt`,
`public/sitemap.xml`, `.env.example`, `scripts/validate-publication.mjs`, and
`package.json`.

**Implementation:** Locked route-specific canonical, Open Graph, Twitter, manifest, robots, and sitemap configuration to founder-approved `https://truthtrace.ai`. Added an original representative social card, favicon, distinct 404/error titles, and noindex metadata/header behavior for excluded/error states. Every `build*` command invokes the exact validator; alternate, local, preview, missing, or credential-bearing origins fail.

**Verification:** All `14/14` tests pass. Configuration, artifact, and publication
builds pass with the exact approved value. The sitemap contains exactly `/`,
`/technology`, `/privacy`, `/terms`, and `/contact`; `/private-demo` returns `410`;
named legacy routes without an approved equivalent return true `404`. Lighthouse
scores are 98 Performance, 100 Accessibility, 100 Best Practices, and 100 SEO.

**Residual risk:** Passing metadata/crawler configuration is not production
authorization. The route and legal-content decisions are approved, but
provider/static-asset host routing, apex/`www`, TLS, cache, injected
analytics/cookies, and live social scraping remain exact-staging gates.

## 9. Added runtime security headers and safer SSR failure handling

**Problem:** Security-header behavior was not enforced by the application entry, and catastrophic SSR JSON failures could surface an unsuitable response body.

**Why it matters:** The release requires predictable browser hardening and a usable, non-indexed failure experience without leaking unnecessary error structure.

**Files changed:** `src/server.ts`, `src/lib/error-page.ts`, `public/_headers`, and `src/routes/__root.tsx`.

**Implementation:** Applied `Cross-Origin-Opener-Policy: same-origin`, a restrictive
Permissions Policy, `Referrer-Policy: strict-origin-when-cross-origin`,
`X-Content-Type-Options: nosniff`, and `X-Frame-Options: DENY` to application
responses. Added 4xx/5xx noindex headers, 5xx no-store, catastrophic SSR
normalization, strict HTML-host handling, a path/query-preserving application-level
`www` `301`, unknown/`.app` rejection, and a noindex `410` tombstone for
`/private-demo`.

**Verification:** Release tests assert all five header names in the server entry. Local production-preview header checks and error-state browser checks are part of the release evidence package.

**Residual risk:** Local Cloudflare static assets can be served before the SSR guard. The authorized provider must enforce and prove HTML plus asset behavior for apex/`www`, `.app`, arbitrary hosts, HTTP→HTTPS, headers, caching, and cookies in exact-SHA staging.

## 10. Added reproducible release checks and a production-output preview path

**Problem:** The baseline lacked typecheck, test, format-check, link-check, publication-config, and production-output preview scripts. The previous Vite preview command did not serve the Nitro Cloudflare-module output correctly.

**Why it matters:** A release gate needs exact repeatable commands, and browser verification must exercise the artifact that would actually be deployed.

**Files changed:** `package.json`, `.github/workflows/homepage-release-gate.yml`, `scripts/audit-dependencies.mjs`, `scripts/check-links.mjs`, `scripts/validate-publication.mjs`, `scripts/validate-release-surface.mjs`, `tests/homepage-release.test.mjs`.

**Implementation:** Protected every build command, added strict link/host/route checks, dependency thresholding, exact staged-snapshot and full-reachable-history secret checks, and a deterministic pull-request workflow. CI pins Node 22.17.0, Bun 1.3.14, Ubuntu 24.04, and action commit SHAs; it requires no production secret and never deploys.

**Verification:** Frozen install, format, lint, typecheck, `14/14` tests, dependency
threshold, both builds, source-map/embedded-source checks, preview, links, five
`200` routes, `410`/true `404`, host behavior, the fresh exact-candidate browser
matrix and interaction/mode checks, and Lighthouse pass locally.
GitHub Actions run `29387686387` passed every step on exact candidate
`04035bd053d61aec308282a9a861c3da94285fc2`. Dependency audit reports 0
critical/high and 2 moderate/2 low.

**Residual risk:** The four lower-severity advisories require remediation or
time-bounded acceptance. Green CI does not select a provider project, create
staging, prove edge behavior, establish rollback, or resolve counsel review.

## 11. Preserved local evidence without committing generated audit artifacts

**Problem:** Release screenshots, Lighthouse reports, browser logs, build logs, accessibility results, and security results can be large and environment-specific.

**Why it matters:** Committing generated artifacts can bloat the repository or accidentally preserve sensitive local context, while omitting them entirely weakens the audit trail.

**Files changed:** `.gitignore`; local `artifacts/homepage-cutover-20260715/` evidence tree.

**Implementation:** Kept the audit summary, 50-file build manifest, route/error
screenshots, current mobile Lighthouse reports, homepage mobile screenshot, and
preview logs under the required local artifact path and excluded the artifact
directory from source control. The
publication artifact contains 50 files totaling 2,930,912 bytes, with aggregate
SHA-256 `688fc68f5466606c709d0a18033031d4840d6b165b394ea0357b226a023d0ea6`.
The retained evidence set contains 18 files; its checksum manifest hashes to
`15409ace13507e65966643d80a3562b23268060c7bcc24dde4bb9f7dc311db0b`.

**Verification:** Git status can distinguish source/document changes from ignored audit output; artifact files remain available in the shared workspace for human inspection and can be checked against the SHA-256 manifest.

**Residual risk:** Ignored local evidence is not durable across machines. The release owner must archive approved evidence in an access-controlled system if long-term retention is required.

## 12. Implemented the approved first-cutover route decision

**Decision:** Preserve `/privacy` and `/terms` with the exact approved July 15,
2026 texts; replace `/contact` with the exact static browse-only boundary; retire
`/private-demo` with `410`; return true `404` for `/features`, `/pricing`, `/demo`,
`/waitlist`, `/blog`, `/about`, and `/contact-us` absent a separately approved
equivalent; and publish a sitemap containing exactly the five `200` routes.

**Implementation:** The five approved pages return `200`, the retired route returns
`410`, and the named non-equivalent routes return true `404`. The Contact page
publishes no contact channel and exposes no collection control. Lovable's error hook
was removed by deleting `src/lib/lovable-error-reporting.ts`, built JavaScript was
scanned, and no analytics or cookies are approved.
The application performs a one-hop, path/query-preserving `www` `301` to apex.

**Residual risk:** Application behavior does not prove provider whole-host behavior,
especially for static assets, injected scripts/cookies, and redirects. Exact-SHA
staging and rollback rehearsal remain mandatory.

## Unresolved blockers

- The canonical domain is approved, but no authorized Lovable target/project/branch is proven to contain the immutable candidate.
- The current live project/private repository/SHA are identified, but immutable deployment ID, exact deploy/rollback commands, candidate environment, and rollback mechanism remain unverified.
- The route migration decision is approved and implemented locally; production
  provider mapping and edge enforcement remain unverified.
- Provider/static-asset host isolation, apex/`www`, HTTP→HTTPS, analytics/cookies, and live social-card validation are incomplete.
- PR #3 is closed and superseded; PR #4 is the sole candidate.
- Patent counsel must assess historical public repository disclosure.

Until those items are resolved and the full live-domain gate is rerun, the release verdict is `BLOCKED`.
