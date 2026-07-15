# TruthTrace Homepage Deployment Runbook — 2026-07-15

## Status and authority

**Release verdict: BLOCKED**

This is a pre-deployment runbook, not authorization to publish. The repository supports a reproducible local build and preview, but no production provider, account, project/service, zone, production branch, deploy command, DNS change, or rollback command has been verified. The deployment section therefore ends at a hard stop until the release owner supplies provider-specific, tested instructions.

Do not deploy, merge, change DNS, enable indexing, or redirect a live domain under this runbook while any P0 item remains open.

## Candidate identity

| Field                               | Required release value                                                                   |
| ----------------------------------- | ---------------------------------------------------------------------------------------- |
| Repository                          | `https://github.com/rvalentz292/truthtrace-evidence-clarity.git`                         |
| Baseline SHA                        | `1b5530784b564b679f733f77ff40aa7f7da53978`                                               |
| Candidate branch                    | `homepage-final-publication-gate-20260715`                                               |
| Candidate SHA                       | Record the immutable post-commit SHA before approval; do not deploy a dirty working tree |
| Competing branch                    | `website-100m-final-20260714` at `64aac286beb3df3c898e2f975f27e589d5079456`, draft PR #3 |
| Intended canonical origin           | **Unapproved**                                                                           |
| Production provider/account/project | **Unknown**                                                                              |
| Production branch                   | **Unknown**                                                                              |
| Local generated output root         | `.output/`                                                                               |
| Browser/static output               | `.output/public/`                                                                        |
| Worker/server output                | `.output/server/`                                                                        |
| Approved provider output target     | **Unknown** — local generated paths do not establish a production upload target          |
| Approved deploy command             | **Unknown**                                                                              |
| Approved rollback command           | **Unknown**                                                                              |

The release owner must explicitly dispose of draft PR #3 and approve exactly one candidate SHA. Its existence cannot be resolved by silently merging or cherry-picking it.

## Required roles

Record a named person and backup for every role before the deployment window:

| Role                          | Responsibility                                                  | Status     |
| ----------------------------- | --------------------------------------------------------------- | ---------- |
| Release owner                 | Final go/no-go and exact SHA approval                           | Unassigned |
| Product/brand owner           | Canonical product and domain identity                           | Unassigned |
| Legal/privacy/claims reviewer | Claims, legal pages, intake boundaries, history exposure        | Unassigned |
| Hosting administrator         | Provider account, project, permissions, deployment and rollback | Unassigned |
| DNS administrator             | Existing-record export, cutover, TTL, and DNS rollback          | Unassigned |
| Release operator              | Executes only approved commands and records output              | Unassigned |
| Verification lead             | Independent smoke, accessibility, SEO, and security checks      | Unassigned |
| Incident/rollback commander   | Owns rollback decision and communications                       | Unassigned |

One person may hold multiple roles, but each role and backup must be explicit in the release record.

## P0 preconditions

All boxes must be complete before a production command is introduced into this runbook.

- [ ] Product and brand owner has selected the canonical domain and canonical apex/`www` host in writing.
- [ ] `truthtrace.app` has been rejected for this candidate or its ownership, authorization, product alignment, contact recipients, and privacy terms have been proven in writing. The audited live site is a different blockchain/content-authenticity product.
- [ ] If `truthtrace.ai` is selected, the owner has explicitly approved continued `.ai` use despite the no-obsolete-branding instruction.
- [ ] Every URL in the observed 10-route `truthtrace.ai` sitemap has a reviewed migration outcome. At minimum, `/privacy`, `/terms`, and `/contact` have approved destinations and must not disappear accidentally.
- [ ] Existing `truthtrace.ai` Google Analytics behavior has an explicit retain/replace/remove decision and corresponding privacy review.
- [ ] Canonical apex/`www` redirect behavior is approved.
- [ ] Provider, account, project/service, environment, zone, and production branch are identified and independently verified.
- [ ] Least-privilege deploy and rollback access is tested by the assigned operator.
- [ ] Provider-specific preview, production deploy, deployment-ID capture, log, rollback, and status commands are tested in a non-production environment and reviewed into this document.
- [ ] Current production deployment ID and recoverable artifact are recorded.
- [ ] Existing DNS records, TTLs, proxy settings, certificates, redirects, and provider custom-domain mappings are exported and stored with the release evidence.
- [ ] Draft PR #3 has a written disposition; the approved release branch and immutable SHA are unambiguous.
- [ ] Counsel/owner has accepted or remediated the patent-sensitive/product material already present in public Git history.
- [ ] `VITE_SITE_URL` is approved and populated through the authorized configuration mechanism.
- [ ] `public/robots.txt` is changed from its deliberate `Disallow: /` interlock only as part of the approved indexing plan.
- [ ] `public/sitemap.xml` is created from the approved canonical origin and route-migration matrix.
- [ ] Contact, privacy, terms, security, and data-use language is approved before any intake link is added. The current candidate intentionally has no form, upload, account, or lead collection.
- [ ] Deployment and rollback runbooks have been dry-run, timed, and signed off.

If any box is incomplete, stop. The correct status remains **BLOCKED**.

## Environment inventory

Only environment-variable names are recorded here.

| Name            | Classification          | Requirement                                                                   |
| --------------- | ----------------------- | ----------------------------------------------------------------------------- |
| `VITE_SITE_URL` | Public build-time value | Required for a publication build; must be the approved HTTPS canonical origin |
| `NODE_ENV`      | Runtime mode            | Read by the server config helper                                              |

`DATABASE_URL`, `STRIPE_SECRET_KEY`, and `VITE_FOO` are commented examples only. They are not current application dependencies and must not be provisioned merely because their names appear in comments.

No environment value belongs in Git, terminal transcripts, screenshots, pull-request text, or release documents. Record only the configuration location, revision/version, approver, and checksum where the provider supports it.

## Local clean-room validation

Run from a fresh checkout of the approved SHA on Windows PowerShell. These commands use the Bun version validated during the audit without requiring a global Bun installation.

```powershell
git clone https://github.com/rvalentz292/truthtrace-evidence-clarity.git truthtrace-homepage-release
Set-Location truthtrace-homepage-release
git fetch --prune origin
git checkout --detach <approved-candidate-sha>
git status --short
npx --yes bun@1.3.14 install --frozen-lockfile
npx --yes bun@1.3.14 run format:check
npx --yes bun@1.3.14 run lint
npx --yes bun@1.3.14 run typecheck
npx --yes bun@1.3.14 run test
```

`git status --short` must print nothing. Replace `<approved-candidate-sha>` with the exact reviewed commit; never use a moving branch name as the deployment identity.

### Publication configuration gate

Do not type an unapproved domain into the environment. After the product/domain owner supplies the approved origin through the release record, set it for the local verification process without echoing it:

```powershell
$env:VITE_SITE_URL = Read-Host "Approved HTTPS canonical origin"
npx --yes bun@1.3.14 run release:config
npx --yes bun@1.3.14 run build
```

The gate must fail if any of these remain unresolved:

- `VITE_SITE_URL` is missing, malformed, non-HTTPS, credential-bearing, or local;
- `public/robots.txt` still blocks `/`;
- `public/og.png` is absent;
- `public/favicon.svg` is absent;
- `public/sitemap.xml` is absent.

The audit candidate intentionally fails this gate because the domain is unapproved, robots blocks publication, and the sitemap is absent. Bypassing it is not a release fix.

### Artifact-only build for audit

When publication remains blocked, this command may be used to inspect the generated artifact:

```powershell
npx --yes bun@1.3.14 run build:artifact
```

`build:artifact` bypasses only the publication-configuration interlock so reviewers can test the candidate. It does not create a publishable artifact and must never be recorded as a passing production build.

The build writes its local output root to `.output/`, with browser/static files under `.output/public/` and the generated worker/server artifact under `.output/server/`. These are verified build locations, not a verified provider project setting or an approved production deployment destination.

## Local production-artifact preview

After a successful build or artifact-only audit build, run:

```powershell
npx --yes bun@1.3.14 run preview
```

The declared preview binds Wrangler locally at `127.0.0.1:4173` using `.output/server/wrangler.json`. In a second PowerShell session:

```powershell
npx --yes bun@1.3.14 run check:links -- http://127.0.0.1:4173
```

Manually verify at minimum:

- `/` returns `200`, has one clear H1, and shows the representative/not-live/no-real-family-information labels;
- `/technology` returns `200` and describes design objectives rather than live guarantees;
- a nonexistent URL returns a controlled `404` with `noindex`;
- homepage hash links arrive below the fixed header;
- the mobile menu opens by keyboard, receives focus, closes with Escape, and returns focus;
- representative finding and audience controls update their pressed state and visible content;
- no horizontal overflow exists at 360, 768, 1440, and 1920 CSS pixels or at a 200%-zoom-equivalent reflow width;
- the browser console has no errors and no resource request fails;
- response headers include the reviewed security-header set;
- canonical, Open Graph URL/image, sitemap, and robots output match the approved origin in a true publication build;
- no page offers evidence upload, live workspace access, account creation, or unapproved contact/intake.

Record browser, accessibility, link, build, and Lighthouse evidence under the dated release artifact directory. Do not commit generated test output or secrets.

## Staging/preview deployment

**BLOCKED: no provider-managed staging target or command has been verified.**

The generated Nitro metadata contains a Cloudflare-module preset and the generic preview hint `npx wrangler --cwd ./ dev`. The generated Wrangler file also contains an auto-derived worker name. These values prove only what the build tool emitted. They do not prove which account, project, worker, zone, branch, or custom domain is authorized.

Before this section may be used, the hosting administrator must add, review, and dry-run exact commands for:

1. authentication/account identity verification;
2. project/service and environment identity verification;
3. immutable artifact upload to a non-production target;
4. preview URL retrieval;
5. preview deployment ID and log capture;
6. preview deletion or rollback.

No guessed command belongs here.

## Production deployment

**HARD STOP — APPROVED PRODUCTION COMMAND UNKNOWN.**

The generated `.output/nitro.json` includes `npx wrangler --cwd ./ deploy`. Do **not** run it. It is an unscoped generated hint and could create or update the wrong service in the wrong account. The tracked repository has no approved production Wrangler configuration or deployment workflow.

The hosting administrator must replace this blocked section through a reviewed pull request with commands that deterministically:

1. print and verify the authenticated account without revealing credentials;
2. print and verify the intended production project/service and environment;
3. deploy the exact previously verified immutable artifact, not rebuild an unpinned branch;
4. return a deployment ID and immutable artifact/version identifier;
5. preserve the prior recoverable deployment;
6. retrieve status, logs, custom-domain state, and certificate state;
7. execute the tested application rollback.

The release operator must pause after identity verification and obtain a recorded go/no-go approval before the deploy command. After execution, record the command name, candidate SHA, artifact checksum, deployment ID, timestamp with timezone, operator, approver, and provider status. Never record credentials or environment values.

## Domain and legacy-route cutover

DNS and route cutover are also blocked because current record values, authoritative DNS provider, TTLs, target records, and canonical-host decision are unknown.

An approved cutover plan must include:

1. exported before-state for every affected DNS record and provider custom-domain mapping;
2. certificate validation and both-host reachability before traffic movement;
3. a chosen canonical apex/`www` host and permanent redirect from the alternate host;
4. the complete 10-route legacy `truthtrace.ai` migration table, including reviewed treatment of `/privacy`, `/terms`, and `/contact`;
5. an explicit decision for legacy analytics and search-console properties;
6. a sitemap containing only canonical, intended-to-index URLs;
7. robots behavior coordinated with the exact cutover time;
8. defined DNS propagation checks from more than one resolver/location;
9. a time-bounded observation window and measurable rollback thresholds;
10. the exact restoration values and permissions needed for DNS rollback.

Do not redirect `truthtrace.app` or use it as a canonical host unless the separate-product identity collision is formally resolved. Do not point either live domain at a local preview or generated worker name.

## Post-deploy publication gate

The verification lead, independently from the operator, must verify the exact public deployment before indexing is enabled:

- candidate SHA/artifact checksum maps to the recorded deployment ID;
- HTTPS, certificate chain, HSTS decision, apex/`www` behavior, and redirects are correct;
- `/`, `/technology`, every retained legacy route, every redirect, and intended `404`/`410` response has the approved status;
- privacy, terms, and contact routes resolve to reviewed content;
- canonical and social metadata use only the approved origin;
- `robots.txt` and `sitemap.xml` agree with the indexing plan;
- security headers survive the production edge;
- analytics/cookies exactly match the approved privacy posture;
- no sensitive intake, evidence upload, live demo, account, or unapproved cross-domain contact is exposed;
- mobile/desktop rendering, keyboard flow, reduced motion, forced colors, and 200% reflow remain acceptable;
- production logs show no elevated SSR, asset, redirect, or certificate failures.

If any identity, legal-route, security, or data-handling check fails, invoke the approved rollback immediately. Do not “fix forward” across a P0 uncertainty.

## Evidence to retain

Store the following in the restricted release record, not necessarily in Git:

- approved candidate SHA and signed/approved change record;
- artifact checksums and build logs;
- dependency, secret-pattern, source-map, lint, typecheck, test, link, accessibility, Lighthouse, and browser results;
- provider account/project identity evidence with secrets redacted;
- prior and new deployment IDs;
- before/after DNS exports and certificate state;
- legacy-route migration matrix and status verification;
- canonical/robots/sitemap captures;
- role assignments, approvals, timestamps, and go/no-go record;
- monitoring observations and rollback decision log.

## Exit condition

This runbook becomes executable only when every P0 precondition is complete and provider-specific staging, deploy, status, and rollback commands have been reviewed and successfully rehearsed. Until then, the only permitted actions are local validation, documentation, and review. Verdict: **BLOCKED**.
