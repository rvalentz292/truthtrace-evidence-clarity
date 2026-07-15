# TruthTrace Homepage Post-Launch Checklist — 2026-07-15

## Preconditions

This checklist does **not** authorize deployment. It may be executed only after the release audit's P0 blockers are resolved, the candidate and previous-production identifiers are recorded, an exact rollback command is verified, and Ryan or the named release owner explicitly authorizes production publication.

Fill these values before starting:

| Field                              | Required value                |
| ---------------------------------- | ----------------------------- |
| Release owner                      | `PENDING`                     |
| Verification lead                  | `PENDING`                     |
| Security/on-call owner             | `PENDING`                     |
| Approved canonical URL             | `PENDING`                     |
| Production provider/project        | `PENDING`                     |
| Final candidate SHA                | `PENDING_RELEASE_COMMIT`      |
| Previous production SHA            | `UNKNOWN`                     |
| Previous deployment identifier     | `UNKNOWN`                     |
| New deployment identifier          | `PENDING`                     |
| Exact rollback command             | `UNKNOWN`                     |
| Monitoring dashboard/log location  | `PENDING`                     |
| Analytics decision/property        | `PENDING` or documented `N/A` |
| Form-delivery decision/destination | `PENDING` or documented `N/A` |

For every failed check, capture the UTC and local timestamp, URL, device/browser, deployment identifier, screenshot/log reference, owner, and decision. Do not “watch and wait” through a privacy, identity, routing, broken-CTA, or rollback-critical failure.

## Immediately after deployment

Target completion: within 5 minutes of the provider reporting production ready.

- [ ] **Homepage response:** approved canonical homepage returns one final `200` response with the expected TruthTrace family-law content, not the unrelated blockchain/content-authenticity product. **Owner:** release owner. **Evidence:** status, final URL, deployment ID.
- [ ] **TLS:** certificate is valid for the canonical, apex, and `www` hosts that are intended to serve or redirect; chain, hostname, and expiry are valid. **Owner:** hosting/DNS administrator.
- [ ] **Redirects:** HTTP→HTTPS and approved apex/`www` redirects use the documented status and terminate without a loop; legacy route treatment matches the migration map. **Owner:** DNS/SEO owner.
- [ ] **Canonical domain:** rendered canonical, Open Graph URL, manifest scope/start URL, and browser address agree with the approved HTTPS origin. **Owner:** SEO/release engineering.
- [ ] **Search directives:** production `robots.txt` is reachable and does not unintentionally block the launch; `sitemap.xml` is reachable, route-accurate, and uses the canonical origin. **Owner:** SEO owner.
- [ ] **Mobile rendering:** homepage and mobile menu are usable on a physical or remote mobile viewport; no horizontal overflow, clipped hero, obscured CTA, or unreadable proof content. **Owner:** QA/design.
- [ ] **CTA:** primary CTA reaches the representative workflow; secondary CTA reaches product boundaries; each label matches its action. **Owner:** QA/product.
- [ ] **Form delivery:** if a form/contact route was approved and added, submit a synthetic non-sensitive test and verify accessible success/failure plus destination delivery. Otherwise attach the written browse-only `N/A` decision. **Owner:** product/privacy/operations.
- [ ] **Analytics events:** if approved, verify only documented page/CTA events reach the correct property with no content, email, evidence, URL query PII, or debug payload. Otherwise attach the written `N/A` decision. **Owner:** analytics/privacy.
- [ ] **404:** a unique nonexistent path returns an actual `404`, distinct noindex metadata, working navigation, and no framework error disclosure. **Owner:** QA/engineering.
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
- [ ] **Canonical consistency:** inspect `/` and `/technology`; canonical and share metadata still point to the approved domain after caches settle. **Owner:** SEO owner.
- [ ] **Mobile and CTA regression:** repeat mobile menu and both CTA flows from a clean/incognito session. **Owner:** QA.
- [ ] **Form delivery reconciliation:** if applicable, verify the synthetic submission appears exactly once at the approved destination and no sensitive payload is logged; otherwise retain documented `N/A`. **Owner:** operations/privacy.
- [ ] **Analytics reconciliation:** if applicable, verify expected page/CTA events once, confirm no duplicate property or legacy tracker, and sample payloads for PII; otherwise retain documented `N/A`. **Owner:** analytics/privacy.
- [ ] **404 and removed-route behavior:** verify a nonexistent route remains 404 and `/private-demo` plus each retired legacy route follows its approved 404/410/redirect treatment. **Owner:** QA/SEO.
- [ ] **Console/network health:** inspect a fresh session and provider logs for hydration, asset, route, worker, mixed-content, or cache failures. **Owner:** engineering/operations.
- [ ] **Error monitoring:** compare error rate and status-code distribution with the immediate checkpoint; investigate any new 4xx/5xx cluster. **Owner:** operations.
- [ ] **Search directives:** refetch `robots.txt` and `sitemap.xml` through the CDN to rule out stale publication interlocks or wrong-origin entries. **Owner:** SEO owner.
- [ ] **Social preview cache:** confirm at least one external unfurl fetches the production image and text without an inaccessible or localhost URL. **Owner:** marketing/QA.
- [ ] **Unexpected traffic or abuse:** review request volume, rate-limit/firewall activity, bots, and sensitive-path probes; record whether action is required. **Owner:** security/operations.

15-minute checkpoint result: `PASS / FAIL / ROLLED_BACK / INCOMPLETE`

Evidence location: `____________________________________________`

## 1 hour after deployment

- [ ] **Homepage availability:** uptime/error monitoring shows the canonical homepage and `/technology` healthy for the full hour; sample response bodies still identify the correct product. **Owner:** operations.
- [ ] **TLS and redirects:** no certificate, HSTS/HTTPS, redirect-loop, or apex/`www` anomaly appears across monitored regions. **Owner:** hosting/DNS administrator.
- [ ] **Canonical and index directives:** canonical, robots, sitemap, noindex-on-404, and route status behavior remain correct after CDN propagation. **Owner:** SEO owner.
- [ ] **Core Web Vitals:** run a fresh public mobile Lighthouse sample and record Performance, Accessibility, Best Practices, SEO, LCP, CLS, TBT, and INP when measurable. Target Performance >= 90, Accessibility >= 95, Best Practices >= 95, SEO >= 95, LCP <= 2.5 s, CLS <= 0.10, and INP <= 200 ms where measurable. **Owner:** performance/QA.
- [ ] **Mobile rendering/CTA:** verify one physical mobile and one desktop session, including menu, primary CTA, secondary CTA, proof interaction, browser back, refresh, and 200% zoom/reflow. **Owner:** QA/accessibility.
- [ ] **Form delivery:** if applicable, compare successful UI outcomes with destination delivery and provider logs; investigate any mismatch as a lead-loss/privacy incident. Otherwise confirm written `N/A`. **Owner:** product/operations/privacy.
- [ ] **Analytics events:** if applicable, confirm event volume is plausible, CTA names are correct, no duplicate tracker exists, and no PII appears. Otherwise confirm written `N/A`. **Owner:** analytics/privacy.
- [ ] **404/console/network:** review sampled sessions and logs for wrong 200s on missing routes, uncaught errors, asset failures, mixed content, or worker exceptions. **Owner:** engineering/operations.
- [ ] **Social preview:** verify production title/image/description on remaining priority share surfaces and record cache refresh steps if any surface is stale. **Owner:** marketing/QA.
- [ ] **Error monitoring:** review error rate, 5xx rate, latency, deployment logs, and alert delivery; assign every anomaly. **Owner:** operations.
- [ ] **Unexpected traffic or abuse:** review traffic sources, bots, rate limits, suspicious paths, and bandwidth; block only with an evidence-backed rule that does not impair legitimate crawlers/users. **Owner:** security/operations.
- [ ] **Rollback decision:** release owner records `CONTINUE` or executes rollback based on documented triggers; no silent extension of a failing observation window. **Owner:** release owner.

One-hour checkpoint result: `PASS / FAIL / ROLLED_BACK / INCOMPLETE`

Public Lighthouse evidence: `____________________________________________`

Monitoring/log evidence: `____________________________________________`

## Next morning

Target: first staffed review on 2026-07-16 in America/Chicago.

- [ ] **Homepage response:** verify canonical homepage and `/technology` status/content from a clean session and independent status check. **Owner:** operations.
- [ ] **TLS and redirects:** inspect certificate health, apex/`www`, HTTP→HTTPS, and legacy-route chains after full DNS/CDN propagation. **Owner:** hosting/DNS administrator.
- [ ] **Canonical domain:** confirm canonical/Open Graph URLs and internal navigation have not diverged across production pages. **Owner:** SEO owner.
- [ ] **Mobile rendering and accessibility:** inspect a physical mobile session, keyboard flow, visible focus, menu focus restoration, reflow, and proof controls. **Owner:** QA/accessibility.
- [ ] **CTA and form delivery:** verify both CTAs; if a contact/form route exists, reconcile all successful synthetic/real submissions with the approved destination and privacy handling. Otherwise reconfirm the browse-only `N/A` decision is still intentional. **Owner:** product/operations/privacy.
- [ ] **Analytics events:** if approved, reconcile page/CTA traffic, duplicate-event rate, referrers, consent, and PII exclusions; otherwise confirm the alternate monitoring evidence. **Owner:** analytics/privacy.
- [ ] **404 and route migration:** sample unknown, retired, legal, contact, and technology routes against the approved migration matrix. **Owner:** SEO/QA/counsel delegate.
- [ ] **Console and network failures:** repeat a clean browser session and review overnight logs for client errors, worker exceptions, asset failures, mixed content, or cache anomalies. **Owner:** engineering/operations.
- [ ] **Core Web Vitals:** record the latest public Lighthouse run and any available field data without treating insufficient field volume as a pass. **Owner:** performance owner.
- [ ] **Search-engine directives:** fetch robots/sitemap, inspect search-console ingestion when available, and confirm only intended public routes are indexable. **Owner:** SEO owner.
- [ ] **Social preview:** recheck externally cached preview on priority professional and messaging surfaces; correct only verified metadata/cache issues. **Owner:** marketing/QA.
- [ ] **Error monitoring:** review overnight alerts, status distribution, latency, logs, and unresolved anomalies; name an owner and due time for each. **Owner:** operations.
- [ ] **Unexpected traffic or abuse:** review overnight bot/request patterns, sensitive-route probes, rate-limit events, and resource usage. **Owner:** security/operations.
- [ ] **Security/privacy spot check:** confirm no environment value, source map, private route, real evidence, form payload, or PII-bearing analytics/log data became public. **Owner:** security/privacy.
- [ ] **Release closeout:** record deployment ID, final candidate SHA, evidence paths, incident/rollback status, open P1/P2 work, and the named ongoing owner. **Owner:** release owner.

Next-morning checkpoint result: `PASS / FAIL / ROLLED_BACK / INCOMPLETE`

Closeout record: `____________________________________________`

## Rollback triggers

Escalate immediately to the release owner and use the verified rollback path when any of the following cannot be corrected safely within the approved incident window:

- Wrong product or wrong domain is served.
- TLS, redirect, canonical, or indexing configuration risks a domain/identity collision.
- Primary CTA is broken or a form reports success without delivery.
- Private evidence, a secret, sensitive form content, or PII-bearing analytics/log data is exposed.
- Homepage has a material runtime error, blank page, repeated 5xx, or broken mobile navigation.
- Legal/privacy/contact route treatment differs materially from the approved migration map.
- Production cannot be observed or the recorded rollback target is no longer available.

Rollback verification must repeat homepage response, TLS, redirects, canonical/index directives, 404 behavior, console/network health, form/analytics behavior when applicable, and error monitoring against the restored deployment.
