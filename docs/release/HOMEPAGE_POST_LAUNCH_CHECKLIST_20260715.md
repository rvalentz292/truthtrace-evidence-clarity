# TruthTrace Homepage Post-Launch Checklist — 2026-07-15

## Preconditions

**BLOCKED** — current publication status.

This checklist does **not** authorize deployment. It may be executed only after the release audit's P0 blockers are resolved, the candidate and previous-production identifiers are recorded, an exact rollback command is verified, and Ryan or the named release owner explicitly authorizes production publication.

Fill these values before starting:

| Field                             | Required value                                                                                                         |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Release owner                     | `PENDING`                                                                                                              |
| Verification lead                 | `PENDING`                                                                                                              |
| Security/on-call owner            | `PENDING`                                                                                                              |
| Approved canonical URL            | `https://truthtrace.ai`                                                                                                |
| Production provider/project       | `PENDING`                                                                                                              |
| Final candidate SHA               | `04035bd053d61aec308282a9a861c3da94285fc2` — immutable implementation; following release-record commit is docs-only    |
| Candidate CI                      | Run `29387686387`, job `87264243575`, conclusion `success`                                                             |
| Candidate artifact                | 50 files; 2,930,912 bytes; aggregate SHA-256 `688fc68f5466606c709d0a18033031d4840d6b165b394ea0357b226a023d0ea6`        |
| Evidence manifest                 | 18 files; `SHA256SUMS.txt` SHA-256 `15409ace13507e65966643d80a3562b23268060c7bcc24dde4bb9f7dc311db0b`                  |
| Previous production SHA           | `84a49ca4e38d21322e137e5135d974c0ddbd2f66` — source correlation only; immutable deployment ID still unknown            |
| Previous deployment identifier    | `UNKNOWN`                                                                                                              |
| New deployment identifier         | `PENDING`                                                                                                              |
| Exact rollback command            | `UNKNOWN`                                                                                                              |
| Monitoring dashboard/log location | `PENDING`                                                                                                              |
| Tracking/analytics posture        | No analytics, concrete tracking token, Lovable hook, or nonessential cookie is approved; provider verification pending |
| Contact/intake posture            | Static `/contact` boundary; no form, public email/phone channel, upload, or intake endpoint                            |

For every failed check, capture the UTC and local timestamp, URL, device/browser, deployment identifier, screenshot/log reference, owner, and decision. Do not “watch and wait” through a privacy, identity, routing, broken-CTA, or rollback-critical failure.

## Immediately after deployment

Target completion: within 5 minutes of the provider reporting production ready.

- [ ] **Approved route responses:** `/`, `/technology`, `/privacy`, `/terms`, and `/contact` each return one final direct `200` response with the approved TruthTrace family-law content, not the unrelated blockchain/content-authenticity product. **Owner:** release owner. **Evidence:** status, final URL, deployment ID.
- [ ] **TLS:** certificate is valid for the canonical, apex, and `www` hosts that are intended to serve or redirect; chain, hostname, and expiry are valid. **Owner:** hosting/DNS administrator.
- [ ] **Redirects:** HTTP→HTTPS is correct and every `www` request uses one `301` directly to apex while preserving path and query, including application HTML and static assets at the provider edge. **Owner:** DNS/SEO owner.
- [ ] **Canonical domain:** rendered canonical and Open Graph URLs on all five pages, manifest scope/start URL, and browser address agree with the approved apex HTTPS origin. **Owner:** SEO/release engineering.
- [ ] **Search directives:** production `robots.txt` is reachable and does not unintentionally block the launch; `sitemap.xml` contains exactly the five approved apex URLs and no others. **Owner:** SEO owner.
- [ ] **Policy delivery:** `/privacy` directly serves the approved `TruthTrace Website Privacy Notice` and `/terms` directly serves the approved `TruthTrace Website Terms of Use`, both effective July 15, 2026, and neither proxies, embeds, or redirects to Lovable. **Owner:** legal/privacy/QA.
- [ ] **Mobile rendering:** homepage and mobile menu are usable on a physical or remote mobile viewport; no horizontal overflow, clipped hero, obscured CTA, or unreadable proof content. **Owner:** QA/design.
- [ ] **CTA:** primary CTA reaches the representative workflow; secondary CTA reaches product boundaries; each label matches its action. **Owner:** QA/product.
- [ ] **Contact boundary:** `/contact` remains static and exposes no form, public email/phone channel, upload, third-party handoff, or intake endpoint. **Owner:** product/privacy/operations.
- [ ] **No tracking or cookies:** clean browser and source/network scans find no concrete tracking token, Lovable hook, analytics request, or nonessential cookie, including anything injected by the provider. **Owner:** security/privacy.
- [ ] **Removed and unlisted routes:** `/private-demo` returns `410` and is absent from navigation, page metadata, sitemap, and public links; a unique unlisted path returns an actual `404`, distinct noindex metadata, working navigation, and no soft-`404` or framework error disclosure. **Owner:** QA/engineering.
- [ ] **Console errors:** desktop and mobile production sessions show no uncaught exception, hydration error, security-policy error, or unexpected warning. **Owner:** QA/engineering.
- [ ] **Network failures:** no required image, favicon, manifest, script, stylesheet, font, route, or API request fails; no mixed content appears. **Owner:** QA/engineering.
- [ ] **Social preview:** use a public scraper/debugger or fresh unfurled message to verify title, description, canonical URL, and `og.png` on at least LinkedIn/Slack plus one consumer messaging surface. **Owner:** marketing/QA.
- [ ] **Error monitoring:** confirm the chosen error/log stream sees the deployment and has no new server/client exception. If no vendor is approved, document the manual log owner and polling location. **Owner:** operations.
- [ ] **Unexpected traffic or abuse:** inspect edge/firewall logs for a burst, hostile probing, redirect abuse, or requests to removed private/admin/demo routes. **Owner:** security/operations.
- [ ] **Rollback readiness:** operator confirms the exact rollback command still targets the recorded previous deployment and can be invoked immediately. **Owner:** release owner + hosting administrator.

Immediate checkpoint result: `PASS / FAIL / ROLLED_BACK / INCOMPLETE`

Evidence location: `____________________________________________`

## 15 minutes after deployment

- [ ] **Homepage/TLS/redirect stability:** repeat response, final URL, certificate, and redirect-chain checks from a second network or independent monitor. **Owner:** operations.
- [ ] **Canonical consistency:** inspect all five approved routes; canonical and share metadata still point to the apex origin after caches settle. **Owner:** SEO owner.
- [ ] **Mobile and CTA regression:** repeat mobile menu and both CTA flows from a clean/incognito session. **Owner:** QA.
- [ ] **Contact-boundary verification:** `/contact` still exposes no form, public channel, upload, third-party handoff, or intake endpoint after CDN caches settle. **Owner:** operations/privacy.
- [ ] **No-analytics verification:** repeat clean source, network, storage, and cookie checks; confirm no legacy Google/Lovable tracker, concrete tracking token, Lovable hook, analytics request, or nonessential cookie appears. **Owner:** security/privacy.
- [ ] **404 and removed-route behavior:** verify a representative unlisted route remains a true `404` and `/private-demo` remains `410`, without soft-`404` fallback content. **Owner:** QA/SEO.
- [ ] **Console/network health:** inspect a fresh session and provider logs for hydration, asset, route, worker, mixed-content, or cache failures. **Owner:** engineering/operations.
- [ ] **Error monitoring:** compare error rate and status-code distribution with the immediate checkpoint; investigate any new 4xx/5xx cluster. **Owner:** operations.
- [ ] **Search directives:** refetch `robots.txt` and `sitemap.xml` through the CDN; verify the sitemap still contains exactly the five approved apex URLs and no stale or wrong-origin entry. **Owner:** SEO owner.
- [ ] **Social preview cache:** confirm at least one external unfurl fetches the production image and text without an inaccessible or localhost URL. **Owner:** marketing/QA.
- [ ] **Unexpected traffic or abuse:** review request volume, rate-limit/firewall activity, bots, and sensitive-path probes; record whether action is required. **Owner:** security/operations.

15-minute checkpoint result: `PASS / FAIL / ROLLED_BACK / INCOMPLETE`

Evidence location: `____________________________________________`

## 1 hour after deployment

- [ ] **Approved-route availability:** uptime/error monitoring shows all five approved public routes healthy with direct `200` responses for the full hour; sample response bodies still identify the correct product and policy/contact content. **Owner:** operations.
- [ ] **TLS and redirects:** no certificate, HSTS/HTTPS, redirect-loop, or apex/`www` anomaly appears across monitored regions; `www` still returns one path/query-preserving `301` for HTML and static assets. **Owner:** hosting/DNS administrator.
- [ ] **Canonical and index directives:** canonical, robots, exact-five-URL sitemap, noindex-on-404, `/private-demo` `410`, and unlisted-route true `404` behavior remain correct after CDN propagation. **Owner:** SEO owner.
- [ ] **Core Web Vitals:** run a fresh public mobile Lighthouse sample and record Performance, Accessibility, Best Practices, SEO, LCP, CLS, TBT, and INP when measurable. Preserve the publication thresholds: Performance >= 95, Accessibility = 100, Best Practices = 100, SEO >= 95, LCP <= 2.5 s, CLS <= 0.10, and INP <= 200 ms where measurable. **Owner:** performance/QA.
- [ ] **Mobile rendering/CTA:** verify one physical mobile and one desktop session, including menu, primary CTA, secondary CTA, proof interaction, browser back, refresh, and 200% zoom/reflow. **Owner:** QA/accessibility.
- [ ] **Contact boundary:** confirm `/contact` remains static with no form, public channel, upload, third-party handoff, or intake endpoint. **Owner:** product/operations/privacy.
- [ ] **No tracking or cookies:** repeat source/network/storage inspection and confirm no concrete tracking token, Lovable hook, analytics request, or nonessential cookie appears in the exact production deployment. **Owner:** security/privacy.
- [ ] **410/404/console/network:** verify `/private-demo` remains `410`; review sampled unlisted routes and logs for soft-`404` or wrong `200` responses, uncaught errors, asset failures, mixed content, or worker exceptions. **Owner:** engineering/operations.
- [ ] **Social preview:** verify production title/image/description on remaining priority share surfaces and record cache refresh steps if any surface is stale. **Owner:** marketing/QA.
- [ ] **Error monitoring:** review error rate, 5xx rate, latency, deployment logs, and alert delivery; assign every anomaly. **Owner:** operations.
- [ ] **Unexpected traffic or abuse:** review traffic sources, bots, rate limits, suspicious paths, and bandwidth; block only with an evidence-backed rule that does not impair legitimate crawlers/users. **Owner:** security/operations.
- [ ] **Rollback decision:** release owner records `CONTINUE` or executes rollback based on documented triggers; no silent extension of a failing observation window. **Owner:** release owner.

One-hour checkpoint result: `PASS / FAIL / ROLLED_BACK / INCOMPLETE`

Public Lighthouse evidence: `____________________________________________`

Monitoring/log evidence: `____________________________________________`

## Next morning

Target: first staffed review on 2026-07-16 in America/Chicago.

- [ ] **Approved route responses:** verify direct `200` status/content for `/`, `/technology`, `/privacy`, `/terms`, and `/contact` from a clean session and independent status check. **Owner:** operations.
- [ ] **TLS and redirects:** inspect certificate health, HTTP→HTTPS, and one-hop path/query-preserving `www` → apex `301` behavior for both HTML and static assets after full DNS/CDN propagation. **Owner:** hosting/DNS administrator.
- [ ] **Canonical domain:** confirm canonical/Open Graph URLs and internal navigation have not diverged across all five production pages. **Owner:** SEO owner.
- [ ] **Mobile rendering and accessibility:** inspect a physical mobile session, keyboard flow, visible focus, menu focus restoration, reflow, and proof controls. **Owner:** QA/accessibility.
- [ ] **CTA and contact boundary:** verify both CTAs and confirm `/contact` remains static with no form, public email/phone channel, upload, third-party handoff, or intake endpoint. **Owner:** product/operations/privacy.
- [ ] **No-analytics posture:** repeat source, network, storage, and cookie checks; confirm no concrete tracking token, Lovable hook, analytics request, or nonessential cookie is present. **Owner:** security/privacy.
- [ ] **Route boundary:** verify direct `200` for the five approved routes, `/private-demo` `410`, and true `404` for representative unlisted paths; confirm policy pages remain direct and do not proxy to Lovable. **Owner:** SEO/QA/counsel delegate.
- [ ] **Console and network failures:** repeat a clean browser session and review overnight logs for client errors, worker exceptions, asset failures, mixed content, or cache anomalies. **Owner:** engineering/operations.
- [ ] **Core Web Vitals:** record the latest public Lighthouse run and any available field data without treating insufficient field volume as a pass. **Owner:** performance owner.
- [ ] **Search-engine directives:** fetch robots/sitemap, inspect search-console ingestion when available, and confirm the sitemap contains exactly the five approved apex URLs and only those routes are indexable. **Owner:** SEO owner.
- [ ] **Social preview:** recheck externally cached preview on priority professional and messaging surfaces; correct only verified metadata/cache issues. **Owner:** marketing/QA.
- [ ] **Error monitoring:** review overnight alerts, status distribution, latency, logs, and unresolved anomalies; name an owner and due time for each. **Owner:** operations.
- [ ] **Unexpected traffic or abuse:** review overnight bot/request patterns, sensitive-route probes, rate-limit events, and resource usage. **Owner:** security/operations.
- [ ] **Security/privacy spot check:** confirm no environment value, source map, private route, real evidence, public intake channel, concrete tracking token, Lovable hook, analytics request, nonessential cookie, or PII-bearing log data became public. **Owner:** security/privacy.
- [ ] **Release closeout:** record deployment ID, final candidate SHA, evidence paths, incident/rollback status, open P1/P2 work, and the named ongoing owner. **Owner:** release owner.

Next-morning checkpoint result: `PASS / FAIL / ROLLED_BACK / INCOMPLETE`

Closeout record: `____________________________________________`

## Rollback triggers

Escalate immediately to the release owner and use the verified rollback path when any of the following cannot be corrected safely within the approved incident window:

- Wrong product or wrong domain is served.
- TLS, redirect, canonical, or indexing configuration risks a domain/identity collision.
- Primary CTA is broken or `/contact` exposes an unapproved public channel, form, upload, third-party handoff, or intake endpoint.
- Private evidence, a secret, a concrete tracking token/Lovable hook, analytics traffic, a nonessential cookie, or PII-bearing log data is exposed.
- Homepage has a material runtime error, blank page, repeated 5xx, or broken mobile navigation.
- Either policy page is missing, inaccurate, or proxies/embeds/redirects to Lovable; `/contact` violates its static boundary; `/private-demo` is not `410`; or an unlisted path is not a true `404`.
- Production cannot be observed or the recorded rollback target is no longer available.

Rollback verification must repeat all five direct `200` route checks, policy/contact boundary checks, `/private-demo` `410`, unlisted-route true `404`, TLS, one-hop apex normalization, canonical/index directives, console/network health, the approved no-analytics/no-public-channel posture, and error monitoring against the restored deployment. A raw legacy Lovable restore is insufficient unless every invariant is preserved.
