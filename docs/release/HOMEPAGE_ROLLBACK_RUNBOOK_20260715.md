# TruthTrace Homepage Rollback Runbook — 2026-07-15

## Status and authority

**Release verdict: BLOCKED**

No executable production rollback is currently available. The deployment provider, account, project/service, current deployment ID, recoverable prior artifact, custom-domain binding, DNS provider, record values, TTLs, permissions, and rollback commands are unknown. A production deployment must not occur until this runbook is completed and rehearsed against the approved target.

The generated Cloudflare-module output is not a rollback plan. In particular, the generated `npx wrangler --cwd ./ deploy` hint is neither an approved deployment command nor a mechanism for restoring the currently live site.

## Rollback objective

Restore the last explicitly approved, known-good public state while preserving evidence and preventing further privacy, legal, product-identity, availability, or search damage.

The intended order of preference is:

1. atomically restore the prior immutable provider deployment while leaving DNS stable;
2. restore the prior custom-domain binding if the binding, rather than the artifact, changed;
3. restore the exact exported DNS before-state only if DNS changed or provider-level restoration cannot recover service;
4. apply search/indexing containment and communications as separate follow-up actions.

This ordering is conceptual until provider-specific procedures are verified. It does not authorize a guessed command.

## Required rollback record before launch

Every field below must be filled and independently checked before go-live:

| Field                                               | Current state                                                                                                                             |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Incident/rollback commander and backup              | Unassigned                                                                                                                                |
| Release operator and backup                         | Unassigned                                                                                                                                |
| Hosting provider/account/environment                | Unknown                                                                                                                                   |
| Production project/service/worker ID                | Unknown                                                                                                                                   |
| Production branch policy                            | Unknown                                                                                                                                   |
| `FINAL_CANDIDATE_SHA` / new candidate SHA           | `df6647616901b2e5eb2dc1d16255ffcc8140a78d` — audited implementation/content commit; following release-record commit is documentation-only |
| New artifact checksum and deployment ID             | Not created                                                                                                                               |
| `PREVIOUS_PRODUCTION_SHA`                           | **UNKNOWN**                                                                                                                               |
| Prior approved deployment ID                        | Unknown                                                                                                                                   |
| Prior immutable artifact/version                    | Unknown                                                                                                                                   |
| Provider deployment-rollback command                | Unknown                                                                                                                                   |
| Provider status/log command                         | Unknown                                                                                                                                   |
| Custom-domain binding before-state                  | Unknown                                                                                                                                   |
| Custom-domain restore command                       | Unknown                                                                                                                                   |
| DNS provider/zone ID                                | Unknown                                                                                                                                   |
| DNS record and TTL before-state                     | Not exported                                                                                                                              |
| DNS restore command or console procedure            | Unknown                                                                                                                                   |
| Certificate before-state and revalidation procedure | Unknown                                                                                                                                   |
| Legacy-route before/after matrix                    | Incomplete                                                                                                                                |
| Monitoring channels and owners                      | Unknown                                                                                                                                   |
| Internal/public communication owners                | Unknown                                                                                                                                   |
| Maximum rollback decision and execution times       | Not approved                                                                                                                              |

Blank or inferred values are a P0 launch blocker.

## Product/domain safeguards

Two live identities must not be conflated during rollback:

- `truthtrace.app` currently presents a different blockchain/content-authenticity TruthTrace product. Do not use it as a fallback, redirect target, contact destination, or canonical origin for this family-law candidate unless ownership and product alignment have been formally resolved.
- `truthtrace.ai` currently presents a legacy family-law site delivered through infrastructure not demonstrably tied to this repository. Restoring it requires its actual deployment or DNS before-state; checking out an older commit in this repository is not proven to reproduce that live site.

The existing `truthtrace.ai` sitemap was observed with 10 routes, including `/privacy`, `/terms`, and `/contact`. Rollback verification must cover the complete prelaunch route inventory, not only `/`.

## Immediate rollback triggers

The incident commander should order immediate rollback, without waiting for a fix-forward experiment, when any of the following is confirmed:

- the wrong domain, account, project/service, branch, SHA, or artifact was deployed;
- `truthtrace.app` is redirected to or represented as the family-law product without the required approval;
- real evidence intake, upload, live workspace access, account creation, or lead collection is exposed unexpectedly;
- personal or family-law information is sent to an unapproved recipient or service;
- unapproved analytics, cookies, form endpoints, model calls, or error-reporting data appear in production;
- approved privacy, terms, contact, or other protected legacy routes return an unintended `404`, redirect, or unrelated content;
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
7. can be reversed safely if the selected prior deployment is itself unhealthy.

The procedure must record expected output and failure modes. It must be tested against a non-production environment and timed within the approved recovery objective.

Do not run the generated Nitro deploy hint as a rollback. Do not assume the auto-derived generated worker name identifies production. Do not rebuild `main` and deploy it as an emergency substitute: `main` is not proven to be the current live artifact, and draft PR #3 creates an unresolved release-line ambiguity.

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

**HARD STOP — DNS PROVIDER, RECORDS, TTLs, AND RESTORE PROCEDURE UNKNOWN.**

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

After application or DNS rollback, verify all legacy URLs from the approved migration matrix. At minimum, check `/privacy`, `/terms`, and `/contact`, along with `/`, `/technology`, each permanent redirect, and intended `404`/`410` behavior.

Verify that:

- canonical links name the restored approved origin;
- the apex/`www` redirect returns to the approved direction;
- no route crosses into the unrelated `truthtrace.app` product;
- `robots.txt` and sitemap match the restored release;
- legal/contact content is the approved version;
- social metadata no longer points to the withdrawn artifact.

Changing `robots.txt` is not a substitute for rollback and cannot remove already indexed content immediately. Search-console removal, sitemap resubmission, cache invalidation, and canonical repair must be treated as owner-approved incident follow-up, with exact provider/search procedures recorded separately.

## Data and integration rollback scope

The audited candidate has no database, authentication, payment, form, email, CRM, analytics, evidence upload, or model endpoint. Therefore there is no application-data migration to reverse for this candidate.

This limited scope is conditional. If any such integration, platform-injected tracking, cookie, intake endpoint, or storage binding is added before launch, this runbook is invalid until it includes:

- data schema/version and migration rollback;
- queue/event behavior;
- credential rotation and access revocation;
- privacy notification and deletion/retention procedures;
- third-party disablement and verification;
- idempotency and duplicate-submission handling.

The optional platform-injected error hook must also be included if it is active in production.

## Post-rollback verification

The verification lead, independently of the operator, must record pass/fail for:

- active provider account/project/environment and restored deployment ID;
- restored artifact/version checksum and its approval record;
- HTTPS certificate, apex/`www` redirect, and affected DNS records;
- homepage and every retained legacy route/status/redirect;
- privacy, terms, contact, robots, sitemap, canonical, and social metadata;
- static assets, favicon, manifest, and Open Graph image;
- security headers at the public edge;
- browser console/network health at mobile and desktop sizes;
- keyboard navigation, mobile menu, representative controls, reduced-motion/forced-colors behavior, and 200% reflow;
- absence of unexpected forms, uploads, accounts, tracking, cookies, or cross-domain contacts;
- provider logs and independent availability checks throughout the approved observation window.

Rollback is complete only when the incident commander accepts this evidence and records the restored public state. “Command succeeded” is not sufficient.

## Communications and follow-up

1. Notify the release owner, product/brand owner, legal/privacy/security reviewer, hosting/DNS owners, and customer-support/contact owner using the approved incident channel.
2. If the incident affected identity, legal routes, privacy, security, or personal information, let the responsible reviewer decide external notice; do not minimize or speculate.
3. Record the incident timeline, detection source, decision, commands/actions, identifiers, propagation, verification, and final state with sensitive information redacted.
4. Keep the failed deployment and logs available according to approved evidence-retention rules; do not destroy evidence to make the dashboard look clean.
5. Open reviewed remediation work. A new publication attempt requires a new candidate SHA, fresh release evidence, and a fresh go/no-go.
6. Resolve the branch decision around draft PR #3 before preparing another release.

## Runbook completion gate

This rollback runbook is not operational until provider deployment, custom-domain, and DNS procedures are filled with exact approved commands/actions; the prior recoverable deployment is captured; role owners are named; and the complete sequence has been rehearsed. Until that happens, publication remains **BLOCKED**.
