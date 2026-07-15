# TruthTrace Homepage Rollback Runbook — 2026-07-15

## Status and authority

**Release verdict: BLOCKED**

No executable production rollback is currently available. Lovable, the authenticated workspace, current live project, private source repository, current live SHA, Hostinger DNS records, and custom-domain correlation are identified. The immutable deployment ID, provider active branch, recoverable prior artifact/version, exact rollback command, candidate target, and rehearsal remain unavailable. A production deployment must not occur until this runbook is completed and rehearsed against the approved target.

The generated Cloudflare-module output is not a rollback plan. In particular, the generated `npx wrangler --cwd ./ deploy` hint is neither an approved deployment command nor a mechanism for restoring the currently live site.

## Rollback objective

Restore the last explicitly approved, known-good public state while preserving evidence and preventing further privacy, legal, product-identity, availability, or search damage. A rollback is acceptable only if it preserves the approved first-cutover invariants: five same-origin `200` routes, reviewed legal content, the static no-channel contact boundary, `/private-demo` `410`, true `404` responses for unlisted routes, apex canonicalization, and no analytics/tracking.

The intended order of preference is:

1. atomically restore the prior immutable provider deployment while leaving DNS stable;
2. restore the prior custom-domain binding if the binding, rather than the artifact, changed;
3. restore the exact exported DNS before-state only if DNS changed or provider-level restoration cannot recover service;
4. apply search/indexing containment and communications as separate follow-up actions.

This ordering is conceptual until provider-specific procedures are verified. It does not authorize a guessed command.

## Required rollback record before launch

Every field below must be filled and independently checked before go-live:

| Field                                               | Current state                                                                                                                                       |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Incident/rollback commander and backup              | Unassigned                                                                                                                                          |
| Release operator and backup                         | Unassigned                                                                                                                                          |
| Hosting provider/account/environment                | Lovable; `Ryan's Lovable` owner workspace; exact candidate environment **BLOCKED**                                                                  |
| Production project/service/worker ID                | Current live Lovable project `truthtrace-website`, ID `9dc000d6-e489-4b8f-975b-cf1d2bfdf3a7`; not an approved candidate target                      |
| Production branch policy                            | Provider active branch **UNVERIFIED**; private GitHub default `main` is unprotected                                                                 |
| `FINAL_CANDIDATE_SHA` / new candidate SHA           | `04035bd053d61aec308282a9a861c3da94285fc2` — immutable approved-route implementation candidate; publication is not authorized                       |
| New artifact checksum and deployment ID             | 50 files; 2,930,912 bytes; aggregate SHA-256 `688fc68f5466606c709d0a18033031d4840d6b165b394ea0357b226a023d0ea6`; provider deployment ID not created |
| Candidate CI                                        | GitHub Actions run `29387686387`, job `87264243575`: `success`                                                                                      |
| Local evidence manifest                             | 18 files; `SHA256SUMS.txt` SHA-256 `15409ace13507e65966643d80a3562b23268060c7bcc24dde4bb9f7dc311db0b`                                               |
| `PREVIOUS_PRODUCTION_SHA`                           | `84a49ca4e38d21322e137e5135d974c0ddbd2f66` — live source correlation; not an immutable deployment identity                                          |
| Prior approved deployment ID                        | Unknown                                                                                                                                             |
| Prior immutable artifact/version                    | Unknown                                                                                                                                             |
| Provider deployment-rollback command                | Unknown                                                                                                                                             |
| Provider status/log command                         | Unknown                                                                                                                                             |
| Custom-domain binding before-state                  | Unknown                                                                                                                                             |
| Custom-domain restore command                       | Unknown                                                                                                                                             |
| DNS provider/zone ID                                | Hostinger DNS verified; authenticated zone/account ID and mutation authority unverified                                                             |
| DNS record and TTL before-state                     | Apex and `www` A `185.158.133.1`, authoritative TTL 14400 at audit time; full authenticated export not captured                                     |
| DNS restore command or console procedure            | Unknown                                                                                                                                             |
| Certificate before-state and revalidation procedure | Unknown                                                                                                                                             |
| Legacy-route before/after matrix                    | Approved locally: five `200` routes, `/private-demo` `410`, and true `404` for unlisted routes; provider proof remains blocked                      |
| Monitoring channels and owners                      | Unknown                                                                                                                                             |
| Internal/public communication owners                | Unknown                                                                                                                                             |
| Maximum rollback decision and execution times       | Not approved                                                                                                                                        |

Blank or inferred values are a P0 launch blocker.

## Product/domain safeguards

Two live identities must not be conflated during rollback:

- `truthtrace.app` currently presents a different blockchain/content-authenticity TruthTrace product. Do not use it as a fallback, redirect target, contact destination, or canonical origin for this family-law candidate unless ownership and product alignment have been formally resolved.
- `truthtrace.ai` currently presents a legacy family-law site from Lovable project `truthtrace-website` and private repository `rvalentz292/truthtrace-website`, not this public release repository. Restoring it requires its actual immutable Lovable deployment or DNS before-state; checking out an older commit in this repository cannot reproduce that live site.

The legacy `truthtrace.ai` sitemap was observed with 10 routes, but that raw Lovable state contains soft `404` responses, tracking, and unapproved contact surfaces. The approved replacement sitemap has exactly `/`, `/technology`, `/privacy`, `/terms`, and `/contact`. Rollback verification must cover the approved route policy, not only `/` and not merely the legacy sitemap.

A raw restore of the legacy Lovable deployment is therefore insufficient. If provider recovery uses that artifact, a separately approved and rehearsed edge/application containment layer must continue serving the approved `TruthTrace Website Privacy Notice` and `TruthTrace Website Terms of Use`, both effective July 15, 2026, plus the static contact boundary; preserve `/private-demo` as `410`; return true `404` responses for unlisted paths; enforce apex/`www` policy; and suppress legacy Google/Lovable tracking and unauthorized cookies. Without that layer, remain contained and escalate rather than declaring rollback complete.

## Immediate rollback triggers

The incident commander should order immediate rollback, without waiting for a fix-forward experiment, when any of the following is confirmed:

- the wrong domain, account, project/service, branch, SHA, or artifact was deployed;
- `truthtrace.app` is redirected to or represented as the family-law product without the required approval;
- real evidence intake, upload, live workspace access, account creation, or lead collection is exposed unexpectedly;
- personal or family-law information is sent to an unapproved recipient or service;
- Google/Lovable analytics, tracking hooks/endpoints, unauthorized cookies, form endpoints, model calls, or error-reporting data appear in production;
- `/privacy` or `/terms` differs from the reviewed July 15, 2026 content, is proxied to Lovable, or returns an unintended redirect/status;
- `/contact` exposes a form, contact channel, email, telephone number, upload, intake, or unrelated content;
- `/private-demo` does not return `410`, an unlisted route does not return a true `404`, or either is blanket-redirected home;
- a canonical, robots, sitemap, apex/`www`, or redirect error risks indexing the wrong product/domain at scale;
- TLS/certificate failure, redirect loop, broad `5xx`, or unavailable critical routes prevents safe use;
- security headers are stripped in a way the security owner classifies as unsafe, or an exploitable client/server vulnerability is observed;
- claims or patent-sensitive details materially exceed the approved release copy;
- rollback itself is the only way to stop an active privacy, legal, security, or identity incident.

Availability and error-rate thresholds must be defined from the approved monitoring system before launch. Do not invent a numeric threshold during the incident.

## First five minutes

1. The incident commander declares the incident and names the operator and evidence recorder.
2. Freeze deploys, merges, DNS edits, environment changes, and content changes. Do not allow concurrent fix-forward work on production.
3. Record the detection time and timezone, reporter, affected URLs, observable symptom, and whether personal information or the wrong product/domain may be involved.
4. Capture, without exposing credentials or personal data:
   - current DNS responses from at least two independent resolvers/locations;
   - certificate and redirect chain;
   - response status and headers for affected URLs;
   - current provider account/project/environment identity;
   - active deployment ID, artifact/version ID, candidate SHA, and deployment timestamp;
   - relevant logs and screenshots;
   - `robots.txt`, `sitemap.xml`, canonical tags, and affected legal/contact pages.
5. If personal information, credentials, or private evidence could be exposed, restrict access through the approved provider control and activate the privacy/security incident process. Do not paste sensitive payloads into GitHub, chat, or this runbook.
6. Compare the active identifiers with the signed release record. A mismatch is an immediate rollback trigger.
7. Choose the narrowest already-rehearsed rollback path that restores the last known-good state. If no path is verified, keep the service contained and escalate; do not improvise an unscoped deploy command.

## Evidence-only repository checks

These read-only commands help confirm Git identities. They do not change production and are not a substitute for provider deployment evidence.

```powershell
git fetch --prune origin
git show --no-patch --format=fuller <deployed-candidate-sha>
git show --no-patch --format=fuller <approved-prior-sha>
git diff --stat <approved-prior-sha> <deployed-candidate-sha>
git status --short
```

If the live prior site cannot be tied to `<approved-prior-sha>`, do not claim that Git can recreate it. Use the provider’s captured prior immutable deployment instead.

## Application deployment rollback

**HARD STOP — PROVIDER ROLLBACK COMMAND UNKNOWN.**

Before launch, the hosting administrator must replace this section through review with an exact, rehearsed procedure that:

1. verifies the authenticated account and production project/service without printing credentials;
2. prints the currently active deployment ID;
3. identifies the recorded prior immutable deployment by ID and checksum;
4. promotes/restores that existing deployment without rebuilding a moving branch;
5. returns the resulting active deployment ID and status;
6. retrieves logs, route state, custom-domain state, and certificate state;
7. can be reversed safely if the selected prior deployment is itself unhealthy; and
8. proves the restored state preserves the approved five-route publication boundary, legal/contact content, `/private-demo` `410`, unlisted-route true `404`, apex canonical host, and no-tracking/no-cookie posture.

The procedure must record expected output and failure modes. It must be tested against a non-production environment and timed within the approved recovery objective.

Do not run the generated Nitro deploy hint as a rollback. Do not assume the auto-derived generated worker name identifies production. Do not rebuild public-repository `main` and deploy it as an emergency substitute: the current live artifact comes from a different private repository. PR #3 is closed and must not be reused implicitly. A raw legacy Lovable restore is not an acceptable final rollback state because it does not preserve the approved route, legal/contact, `410`/`404`, canonical-host, and no-tracking invariants. It may be used only inside an already approved and rehearsed containment sequence that restores all of those invariants before public traffic is accepted.

## Custom-domain binding rollback

**BLOCKED — PROVIDER DOMAIN-BINDING PROCEDURE UNKNOWN.**

If deployment restoration succeeds while the public domain remains misbound, the hosting administrator must use the preapproved custom-domain restore procedure. It must identify:

- provider account and project/service;
- exact apex and `www` bindings before and after cutover;
- certificate ownership/validation state;
- binding removal and restoration commands or console actions;
- expected propagation behavior;
- verification from outside the provider network.

Do not repoint a family-law domain to the generated local-preview worker or to `truthtrace.app` as an expedient fallback.

## DNS rollback

**HARD STOP — AUTHENTICATED DNS ZONE, COMPLETE BEFORE-STATE, AND RESTORE PROCEDURE UNKNOWN.**

DNS rollback is appropriate only when DNS changed or provider-level application restoration cannot recover the intended public endpoint. Before launch, export and independently verify:

- authoritative nameservers and DNS provider/zone identity;
- every affected apex and `www` record, including type, name, value/target, TTL, proxy/CDN state, and provider-specific settings;
- certificate-validation and ownership-verification records;
- redirects or page rules outside the application;
- the time each cutover record will be changed;
- exact before-state restoration actions and permissions.

The approved procedure must restore those exact values, not values reconstructed from memory. After restoration, query authoritative and independent recursive resolvers until the approved observation period is complete. Preserve both before/after exports and timestamps.

DNS restoration does not instantly purge cached records. The incident commander must account for the recorded TTLs and continue monitoring both endpoints during propagation.

## Legacy routes, canonical URLs, and indexing containment

After application or DNS rollback, verify the complete approved public boundary: `/`, `/technology`, `/privacy`, `/terms`, and `/contact` each return direct `200`; `/private-demo` returns `410`; and representative unlisted paths return a true `404`. Verify the apex is canonical and every `www` request uses one `301` directly to apex while preserving path and query, including static-asset requests at the provider edge.

Verify that:

- canonical links on all five public pages name the restored apex origin;
- the `www` host returns one `301` directly to apex with path and query preserved for HTML and static assets;
- no route crosses into the unrelated `truthtrace.app` product;
- `robots.txt` matches the restored release and the sitemap contains exactly the five approved public URLs;
- `/privacy` serves the approved `TruthTrace Website Privacy Notice` and `/terms` serves the approved `TruthTrace Website Terms of Use`, both effective July 15, 2026, directly and neither proxies, embeds, or redirects to Lovable;
- `/contact` serves the approved static boundary content without a form, public email/phone channel, upload, or intake endpoint;
- `/private-demo` remains `410` and absent from navigation, page metadata, sitemap, and public links; unlisted routes remain true `404`, without soft-`404` fallback content;
- no concrete tracking token, Lovable hook, analytics request, or nonessential cookie is present; and
- social metadata no longer points to the withdrawn artifact.

Changing `robots.txt` is not a substitute for rollback and cannot remove already indexed content immediately. Search-console removal, sitemap resubmission, cache invalidation, and canonical repair must be treated as owner-approved incident follow-up, with exact provider/search procedures recorded separately.

## Data and integration rollback scope

The audited candidate has no database, authentication, payment, form, public contact channel, CRM, analytics, evidence upload, or model endpoint. The local artifact contains no concrete tracking token or Lovable hook. Therefore there is no application-data migration to reverse for this candidate. Provider-side injection remains unverified until staging and production evidence show the same no-tracking/no-cookie posture at the public edge.

This limited scope is conditional. If any such integration, platform-injected tracking, cookie, intake endpoint, or storage binding is added before launch, this runbook is invalid until it includes:

- data schema/version and migration rollback;
- queue/event behavior;
- credential rotation and access revocation;
- privacy notification and deletion/retention procedures;
- third-party disablement and verification;
- idempotency and duplicate-submission handling.

Any provider-injected tracker, error hook, analytics request, or nonessential cookie invalidates this runbook until it is disabled and its absence is verified in staging, production, and the rollback target.

## Post-rollback verification

The verification lead, independently of the operator, must record pass/fail for:

- active provider account/project/environment and restored deployment ID;
- restored artifact/version checksum and its approval record;
- HTTPS certificate, apex canonical host, one-hop path/query-preserving `www` `301` for HTML and static assets, and affected DNS records;
- direct `200` responses for `/`, `/technology`, `/privacy`, `/terms`, and `/contact`;
- `/private-demo` `410` and true `404` behavior for representative unlisted paths;
- direct approved `TruthTrace Website Privacy Notice` and `TruthTrace Website Terms of Use` content, both effective July 15, 2026, with no Lovable proxy/embed/redirect;
- static `/contact` boundary content with no form, public channel, upload, or intake endpoint;
- `robots.txt`, the exact-five-URL sitemap, canonical links, and social metadata;
- static assets, favicon, manifest, and Open Graph image;
- security headers at the public edge;
- browser console/network health at mobile and desktop sizes;
- keyboard navigation, mobile menu, representative controls, reduced-motion/forced-colors behavior, and 200% reflow;
- absence of forms, public contact/intake channels, uploads, accounts, concrete tracking tokens, Lovable hooks, analytics requests, nonessential cookies, or cross-domain contacts;
- provider logs and independent availability checks throughout the approved observation window.

Rollback is complete only when the incident commander accepts this evidence and records the restored public state. “Command succeeded” is not sufficient. A raw legacy Lovable restore cannot close rollback unless the approved containment sequence has also restored and verified every required invariant above.

## Communications and follow-up

1. Notify the release owner, product/brand owner, legal/privacy/security reviewer, hosting/DNS owners, and customer-support/contact owner using the approved incident channel.
2. If the incident affected identity, legal routes, privacy, security, or personal information, let the responsible reviewer decide external notice; do not minimize or speculate.
3. Record the incident timeline, detection source, decision, commands/actions, identifiers, propagation, verification, and final state with sensitive information redacted.
4. Keep the failed deployment and logs available according to approved evidence-retention rules; do not destroy evidence to make the dashboard look clean.
5. Open reviewed remediation work. A new publication attempt requires a new candidate SHA, fresh release evidence, and a fresh go/no-go.
6. Preserve the recorded PR #3 supersession and do not reintroduce its branch by merge or cherry-pick.

## Runbook completion gate

This rollback runbook is not operational until provider deployment, custom-domain, and DNS procedures are filled with exact approved commands/actions; a prior recoverable deployment that preserves the five routes, legal/contact boundary, `410`/`404`, apex canonical host, and no-tracking posture is captured; role owners are named; and the complete sequence has been rehearsed. A raw legacy Lovable artifact alone is insufficient. Until that happens, publication remains **BLOCKED**.
