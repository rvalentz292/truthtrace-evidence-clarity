# TruthTrace Homepage Release Checklist — 2026-07-15

## Gate status

**Release verdict: BLOCKED**

Checkboxes represent verified evidence as of the local release candidate audit. An unchecked item is not permission to infer a pass. Every unchecked P0/P1 item includes an owner and current status.

Release identity:

- Starting branch: `main`
- Starting SHA: `1b5530784b564b679f733f77ff40aa7f7da53978`
- Release branch: `homepage-final-publication-gate-20260715`
- Final candidate SHA: `PENDING_RELEASE_COMMIT`
- Local evidence root: `artifacts/homepage-release-20260715/`

## Code

- [x] Dedicated release branch created; no direct work on `main`.
- [x] Frozen dependency install completed.
- [x] Format check passes.
- [x] Lint completes with 0 errors; 6 non-blocking Fast Refresh warnings recorded.
- [x] Typecheck passes.
- [x] Release tests pass, 7/7.
- [x] Production artifact build passes with `bun run build:artifact`.
- [x] Generated artifact runs through the repository preview command.
- [ ] Default publication build passes. **Owner:** release engineering. **Status:** OPEN/P0; correctly blocked by missing domain, blocking robots, and missing sitemap.
- [ ] Final release commit SHA recorded in the PR/release record. **Owner:** release owner. **Status:** PENDING COMMIT.
- [ ] Final `git diff --check`, status review, and full post-commit gate recorded. **Owner:** release owner. **Status:** PENDING FINAL HANDOFF.

## Content

- [x] First viewport states the category, problem, differentiation, and next action.
- [x] Tone is calm, neutral, and trauma-aware.
- [x] Copy avoids legal advice, diagnosis, credibility, abuse/alienation, admissibility, and outcome determinations.
- [x] Representative product proof is visibly labeled, not buried in footer copy.
- [x] No fake testimonial, customer logo, case study, certification, or outcome metric remains.
- [x] Footer states evidence-organization/review-support and professional-judgment boundaries.
- [ ] Live route/content inventory has an approved migration disposition. **Owner:** product owner + counsel + SEO owner. **Status:** OPEN/P0.

## Claims

- [x] Meaningful visible, metadata, CTA, alt/accessibility, and representative-demo claims inventoried.
- [x] Public claims classified as `PROVEN`, `MODELED`, `PLANNED`, `POSITIONING`, or `UNSAFE / REMOVE`.
- [x] Unsupported availability, pilot, immutability, universal traceability/enforcement, and measured-outcome claims removed or qualified.
- [x] No unresolved material false claim found on the candidate public surface.
- [x] No real family information is presented as demo evidence.
- [ ] Patent counsel disposes prior architecture language/screenshots still reachable in public Git history. **Owner:** patent counsel + repository owner. **Status:** OPEN/P0.

## Accessibility

- [x] Automated accessibility gate passes; Lighthouse accessibility score is 100.
- [x] Manual keyboard gate passes.
- [x] Heading hierarchy and header/nav/main/footer landmarks pass.
- [x] Skip navigation, visible focus, named controls, and pressed-state semantics pass.
- [x] Mobile menu focus entry, Escape close, and focus restoration pass.
- [x] Primary touch targets meet the 44px baseline.
- [x] Reduced-motion, forced-colors, and non-color status treatment are present.
- [ ] Qualified screen-reader/assistive-technology audit completed. **Owner:** accessibility/QA. **Status:** OPEN/P2; not a claim of full WCAG 2.2 AA conformance.
- [ ] Native browser 200% zoom test recorded. **Owner:** accessibility/QA. **Status:** OPEN/P2; equivalent 640px reflow passed.

## Responsive design

- [x] 360×800 inner viewport reviewed; PNG capture retained.
- [x] 390×844 inner viewport and mobile menu reviewed; PNG capture retained.
- [x] 768×1024 inner viewport reviewed; PNG capture retained.
- [x] 1024×768 inner viewport reviewed; PNG capture retained.
- [x] 1366×768 inner viewport reviewed; PNG capture retained.
- [x] 1440×900 inner viewport reviewed; PNG capture retained.
- [x] 1920×1080 inner viewport reviewed; PNG capture retained.
- [x] `browser-smoke-summary.json` records exact inner viewports; saved PNG dimensions exclude native browser scrollbar/chrome/inset pixels and are therefore smaller.
- [x] No unexpected horizontal overflow found.
- [x] Hero, proof controls, cards, legal text, footer, wrapping, and touch targets remain usable.
- [ ] Safari/WebKit and physical iOS/Android passes recorded. **Owner:** QA. **Status:** OPEN/P2.

## Performance

- [x] Lighthouse mobile performance score 99, meeting the >= 90 target.
- [x] LCP 1,895 ms, meeting the <= 2.5 s target.
- [x] CLS 0, meeting the <= 0.10 target.
- [x] Total Blocking Time 0 ms.
- [x] Best Practices score 100, meeting the >= 95 target.
- [x] No production source maps emitted.
- [ ] Reduce the 50,186-byte potential unused-JavaScript estimate without regressing behavior. **Owner:** engineering. **Status:** OPEN/P2.
- [ ] INP measured under a representative interaction trace. **Owner:** performance owner. **Status:** OPEN/P2; unavailable in the local run.
- [ ] Field Core Web Vitals baseline captured after launch. **Owner:** performance/operations. **Status:** PENDING POST-LAUNCH.

## SEO

- [x] Page titles and descriptions are accurate and route-specific.
- [x] Open Graph and Twitter card metadata support the approved URL when configured.
- [x] Social-preview image, favicon, manifest, and theme color are present.
- [x] 404 is noindex with a distinct title.
- [x] Heading hierarchy and internal link text pass.
- [x] No unsupported structured data was added while organization/product identity remains unapproved.
- [ ] Canonical family-law domain approved. **Owner:** Ryan/product owner. **Status:** OPEN/P0.
- [ ] `VITE_SITE_URL` set to that approved HTTPS origin. **Owner:** release engineering. **Status:** BLOCKED ON DOMAIN/P0.
- [ ] `robots.txt` changed from the deliberate `Disallow: /` interlock to approved production behavior. **Owner:** SEO + release engineering. **Status:** BLOCKED ON DOMAIN/ROUTES/P0.
- [ ] Route-accurate `sitemap.xml` added. **Owner:** SEO + release engineering. **Status:** BLOCKED ON ROUTE MIGRATION/P0.
- [ ] Lighthouse SEO rerun at >= 95. **Owner:** SEO owner. **Status:** CURRENTLY 63/P0.
- [ ] LinkedIn, X, iMessage, Slack, and email public-URL previews verified. **Owner:** marketing/QA. **Status:** PENDING APPROVED HTTPS DEPLOYMENT.

## Security

- [x] Current-tree high-confidence secret scan has no matches.
- [x] Full-history high-confidence secret scan has no matches across 87 reachable commits.
- [x] No tracked non-example environment file exists.
- [x] No service-role key, API key, test credential, private bucket name, internal URL, debug endpoint, or private family evidence was found on the candidate public surface.
- [x] Production source-map count is zero.
- [x] Baseline response security headers pass in the generated-worker preview.
- [x] Rendered candidate routes have no third-party tracker, cookie, form, evidence upload, or unsafe-HTML surface.
- [ ] Review or remove unused generic modules before importing them: `sidebar.tsx` writes a preference cookie and `chart.tsx` generates chart CSS through `dangerouslySetInnerHTML`. **Owner:** security/privacy + engineering. **Status:** OPEN/P2.
- [ ] Four dependency advisories dispositioned: 2 moderate and 2 low, no high/critical. **Owner:** engineering/security. **Status:** OPEN/P1; remediate or record a time-bounded waiver and rerun.
- [ ] Production CDN/edge security headers verified. **Owner:** hosting administrator/security. **Status:** BLOCKED ON DEPLOYMENT/P0.
- [ ] Repeat the full interaction/screenshot matrix after the last non-structural copy/contrast/dependency refinements. **Owner:** QA. **Status:** OPEN/P2; final build, links, headers, secret scan, HTTP status, and Lighthouse were rerun.

## Privacy

- [x] Candidate explicitly says no evidence upload or intake occurs on this public site.
- [x] Candidate does not send family information to analytics, mail, or a form endpoint.
- [x] Future intake/training/retention claims are not invented.
- [ ] Approved disposition for live `/privacy`, `/terms`, and `/contact` routes recorded. **Owner:** counsel + privacy/product owner. **Status:** OPEN/P0.
- [ ] Future data collection has approved consent, destination, retention, deletion, access, training-use, and incident-handling terms before activation. **Owner:** privacy/security/counsel. **Status:** NOT AUTHORIZED; required before any intake feature.

## Analytics

- [x] Candidate source contains no analytics or tracker.
- [x] No sensitive form content can be collected because no form exists.
- [ ] Owner decides whether to preserve, replace, or explicitly waive the legacy `.ai` analytics behavior. **Owner:** product/privacy. **Status:** OPEN/P1.
- [ ] Approved analytics event names, consent behavior, PII exclusions, property identity, and monitoring owner documented if analytics is enabled. **Owner:** product/privacy + operations. **Status:** NOT CONFIGURED.
- [ ] Production analytics events verified after deployment, or written N/A decision recorded. **Owner:** analytics owner. **Status:** PENDING POST-LAUNCH.

## Forms

- [x] No form, evidence upload, email link, or fake-success state exists on the candidate.
- [x] Browser form validation and submission flows are truthfully recorded as N/A.
- [x] Primary CTA leads to the representative workflow; secondary CTA leads to product boundaries.
- [ ] Verified professional contact/pilot route approved, or browse-only launch explicitly accepted. **Owner:** Ryan/product owner + privacy/security. **Status:** OPEN/P1.
- [ ] If a form is later added, accessible validation, honest success/failure, data destination, delivery, spam protection, privacy terms, retention, and monitoring pass before launch. **Owner:** engineering/privacy. **Status:** NOT AUTHORIZED.

## Domain

- [ ] Canonical family-law production domain approved in writing. **Owner:** Ryan/product owner. **Status:** OPEN/P0.
- [ ] Ownership and intended use of apex and `www` hosts verified. **Owner:** DNS/hosting administrator. **Status:** OPEN/P0.
- [ ] The unrelated `truthtrace.app` product/email identity is explicitly excluded or its intended role proven. **Owner:** Ryan/product owner. **Status:** OPEN/P0.
- [ ] Apex/`www` redirect policy approved and tested. **Owner:** DNS/SEO owner. **Status:** OPEN/P0.
- [ ] DNS records and cutover TTL documented. **Owner:** DNS administrator. **Status:** OPEN/P0.
- [ ] TLS certificate and renewal path verified on the approved host. **Owner:** hosting administrator. **Status:** OPEN/P0.

## Deployment

- [x] Candidate generates a Nitro Cloudflare-module artifact locally.
- [x] Wrangler can serve that artifact locally.
- [ ] Actual production provider and account/project identity verified. **Owner:** hosting administrator. **Status:** OPEN/P0.
- [ ] Production repository integration and branch verified. **Owner:** hosting administrator + repository owner. **Status:** OPEN/P0.
- [ ] Competing draft PR #3 dispositioned; one release candidate selected. **Owner:** Ryan/repository owner. **Status:** OPEN/P0.
- [ ] Exact approved production build/output/environment names recorded. **Owner:** release engineering. **Status:** OPEN/P0.
- [ ] Exact provider-native preview and production deployment commands verified. **Owner:** hosting administrator. **Status:** OPEN/P0.
- [ ] Non-production deployment smoke test passes. **Owner:** release owner + QA. **Status:** OPEN/P0.
- [ ] Production deployment receives explicit human authorization. **Owner:** Ryan/release owner. **Status:** NOT AUTHORIZED.

## Rollback

- [ ] Previous production SHA recorded. **Owner:** hosting administrator. **Status:** UNKNOWN/P0.
- [ ] Previous production deployment identifier recorded. **Owner:** hosting administrator. **Status:** UNKNOWN/P0.
- [ ] Exact provider-native rollback command verified. **Owner:** hosting administrator. **Status:** UNKNOWN/P0.
- [ ] DNS rollback requirements and TTL documented. **Owner:** DNS administrator. **Status:** UNKNOWN/P0.
- [ ] Rollback data impact confirmed as marketing-surface-only. **Owner:** engineering/product. **Status:** OPEN/P0.
- [ ] Named rollback decision maker and operator recorded. **Owner:** Ryan/release owner. **Status:** OPEN/P0.
- [ ] Rollback rehearsal or non-production proof recorded. **Owner:** release owner. **Status:** OPEN/P0.

## Post-launch monitoring

- [x] Time-window checklist prepared for immediate, 15-minute, 1-hour, and next-morning verification.
- [ ] Monitoring owner and escalation channel recorded. **Owner:** Ryan/operations. **Status:** OPEN/P1.
- [ ] Uptime, error, and abuse monitoring method approved. **Owner:** operations/security. **Status:** OPEN/P1.
- [ ] Form-delivery check assigned or written N/A browse-only decision recorded. **Owner:** product/operations. **Status:** OPEN/P1.
- [ ] Analytics-event check assigned or written N/A decision recorded. **Owner:** product/privacy/analytics. **Status:** OPEN/P1.
- [ ] Core Web Vitals, search directives, social preview, console/network, and 404 checks assigned. **Owner:** QA/SEO/performance. **Status:** PENDING APPROVED DEPLOYMENT.

## Publication decision

- [ ] All P0 blockers resolved.
- [ ] Every remaining P1 item fixed or covered by an explicit risk/owner/remediation-date waiver.
- [ ] Final full-tree validation rerun and attached.
- [ ] Deployment and rollback identifiers recorded.
- [ ] Human release owner changes the verdict after reviewing fresh evidence.

Until every P0 box is complete, the only valid verdict is **BLOCKED**.
