# TruthTrace Homepage Production Identity — 2026-07-15

## Gate result

**BLOCKED**

The currently live `truthtrace.ai` service is now attributable to an authenticated Lovable workspace, an exact Lovable project, an exact private GitHub repository, a correlated private-repository default branch, and an exact live commit; Lovable's active provider branch remains unverified. Candidate `04035bd053d61aec308282a9a861c3da94285fc2` passes the approved local five-route publication checks and candidate CI, but publication remains blocked because Lovable did not expose an immutable deployment ID, the last provider observations reported different project SHAs and no post-candidate mapping proves that either project contains this tree, no evidence proves that the provider-level apex/`www` edge rule has been applied or staged, no exact candidate cutover command has been proven, and no deployment rollback command or invariant-preserving prior deployment has been identified or rehearsed.

No provider mutation, deployment, DNS change, branch merge, or rollback was performed during this investigation.

## Status vocabulary

| Label            | Meaning                                                                                                                                           |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `VERIFIED`       | Directly established from authoritative DNS, authenticated provider/GitHub data, current live output, or audited local candidate/release evidence |
| `UNVERIFIED`     | Evidence is incomplete; the value must not be assumed                                                                                             |
| `NOT APPLICABLE` | The field does not apply to the identified system                                                                                                 |
| `BLOCKED`        | Required for publication or rollback, but not proven or safe to execute                                                                           |

## Observation scope

| Field                             | Status           | Recorded value                                                                                                                  |
| --------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Live/provider observation window  | `VERIFIED`       | 2026-07-15 01:29–01:40 UTC (2026-07-14 20:29–20:40 America/Chicago)                                                             |
| Candidate/release evidence window | `VERIFIED`       | 2026-07-15 03:43–04:32 UTC (2026-07-14 22:43–23:32 America/Chicago); includes candidate commit/CI and retained cutover evidence |
| Release repository                | `VERIFIED`       | `rvalentz292/truthtrace-evidence-clarity`                                                                                       |
| Release branch                    | `VERIFIED`       | `homepage-final-publication-gate-20260715`                                                                                      |
| Phase-3 starting HEAD             | `VERIFIED`       | `55b07c4e707bed6e7975bf7dfd78d51a7b10d3ef`                                                                                      |
| Audited pre-publication SHA       | `VERIFIED`       | `df6647616901b2e5eb2dc1d16255ffcc8140a78d`                                                                                      |
| Publication candidate SHA         | `VERIFIED`       | `04035bd053d61aec308282a9a861c3da94285fc2`                                                                                      |
| Candidate CI                      | `VERIFIED`       | GitHub Actions run `29387686387`, job `87264243575`, conclusion `success`                                                       |
| Candidate artifact                | `VERIFIED`       | 50 files, 2,930,912 bytes; aggregate SHA-256 `688fc68f5466606c709d0a18033031d4840d6b165b394ea0357b226a023d0ea6`                 |
| Evidence manifest                 | `VERIFIED`       | 18 evidence files; `SHA256SUMS.txt` SHA-256 `15409ace13507e65966643d80a3562b23268060c7bcc24dde4bb9f7dc311db0b`                  |
| Approved family-law domain        | `VERIFIED`       | `https://truthtrace.ai`                                                                                                         |
| `truthtrace.app` role             | `NOT APPLICABLE` | Excluded by founder direction; it must not host, redirect, or canonicalize this family-law release                              |
| Mutation posture                  | `VERIFIED`       | Read-only; no deploy, publish, unpublish, domain edit, DNS edit, revert, or rollback call was made                              |

## Production identity ledger

### DNS and public delivery

| Required field                    | Status     | Verified value / evidence                                                                                                                                                                                                                                                 |
| --------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS provider                      | `VERIFIED` | Hostinger DNS. Authoritative nameservers are `ns1.dns-parking.com` and `ns2.dns-parking.com`; the SOA primary is `ns1.dns-parking.com` and the SOA contact is `dns.hostinger.com`. Hostinger's own documentation identifies `dns-parking.com` zones as Hostinger-managed. |
| DNS account / authenticated owner | `BLOCKED`  | No authenticated Hostinger session, CLI, API, or local account configuration was available. DNS mutation authority and backup operator are therefore not proven.                                                                                                          |
| DNS SOA serial                    | `VERIFIED` | `2026070901` at observation time                                                                                                                                                                                                                                          |
| Apex `A` record                   | `VERIFIED` | `truthtrace.ai` → `185.158.133.1`, authoritative TTL `14400` seconds                                                                                                                                                                                                      |
| Apex `AAAA` record                | `VERIFIED` | No answer observed                                                                                                                                                                                                                                                        |
| Apex `CNAME` record               | `VERIFIED` | No answer observed; the apex uses an `A` record                                                                                                                                                                                                                           |
| `www` `A` record                  | `VERIFIED` | `www.truthtrace.ai` → `185.158.133.1`, authoritative TTL `14400` seconds                                                                                                                                                                                                  |
| `www` `AAAA` record               | `VERIFIED` | No answer observed                                                                                                                                                                                                                                                        |
| `www` `CNAME` record              | `VERIFIED` | No answer observed; `www` also uses an `A` record                                                                                                                                                                                                                         |
| Reverse-DNS hosting signal        | `VERIFIED` | `185.158.133.1` → `lovable-app-cd-1-4.p.l5e.io`                                                                                                                                                                                                                           |
| Apex HTTP behavior                | `VERIFIED` | `http://truthtrace.ai/` returns `301` to `https://truthtrace.ai/`; HTTPS returns `200`                                                                                                                                                                                    |
| `www` HTTP behavior               | `VERIFIED` | `http://www.truthtrace.ai/` returns `301` to `https://www.truthtrace.ai/`; HTTPS returns `200`                                                                                                                                                                            |
| Approved canonical host           | `VERIFIED` | Apex `https://truthtrace.ai` is the approved canonical origin.                                                                                                                                                                                                            |
| Provider apex/`www` normalization | `BLOCKED`  | Current production serves `200` on both hosts. The candidate locally provides a one-hop `www` → apex `301` for application HTML with path/query preservation, but whole-host and static-asset behavior requires a provider edge rule and exact staging verification.      |
| Edge/CDN                          | `VERIFIED` | Cloudflare delivery is visible through `Server: cloudflare`, `CF-RAY`, and Cloudflare bot-management cookies. Cloudflare is an edge layer, not the authenticated application project account.                                                                             |
| Origin/application host           | `VERIFIED` | Lovable hosting. Live HTML exposes Lovable runtime endpoints and project context; reverse DNS is Lovable; authenticated Lovable data identifies the same project and commit.                                                                                              |
| Apex TLS certificate              | `VERIFIED` | Google Trust Services `WE1`; SAN `truthtrace.ai`; valid 2026-06-29 through 2026-09-27                                                                                                                                                                                     |
| `www` TLS certificate             | `VERIFIED` | Google Trust Services `WE1`; SAN `www.truthtrace.ai`; valid 2026-06-28 through 2026-09-26                                                                                                                                                                                 |

### Authenticated provider, project, repository, and live artifact

| Required field                         | Status       | Verified value / evidence                                                                                                                                                                                                    |
| -------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Authenticated hosting provider         | `VERIFIED`   | Lovable                                                                                                                                                                                                                      |
| Authenticated account                  | `VERIFIED`   | Account display name `Ryan Valentz`; the account email was confirmed by the provider but is intentionally omitted from this public record                                                                                    |
| Authenticated workspace / organization | `VERIFIED`   | `Ryan's Lovable`, workspace ID `y7ZA6ipwj5Jqti1HCn6I`                                                                                                                                                                        |
| Workspace role                         | `VERIFIED`   | `owner`                                                                                                                                                                                                                      |
| Workspace plan / publish policy        | `VERIFIED`   | `pro_1`; provider response reported external publish permission level `member`. Lovable documentation states editors and above can publish by default; the authenticated operator is an owner.                               |
| Production project/service/site name   | `VERIFIED`   | Lovable project `truthtrace-website`                                                                                                                                                                                         |
| Production project ID                  | `VERIFIED`   | `9dc000d6-e489-4b8f-975b-cf1d2bfdf3a7`; this identifier is already exposed by the live page's provider metadata                                                                                                              |
| Provider published state               | `VERIFIED`   | `is_published: true`, public website visibility                                                                                                                                                                              |
| Provider default public URL            | `VERIFIED`   | `https://truthtrace-website.lovable.app`                                                                                                                                                                                     |
| Provider preview URL                   | `VERIFIED`   | `https://id-preview--9dc000d6-e489-4b8f-975b-cf1d2bfdf3a7.lovable.app`; an unauthenticated request redirects to Lovable's authentication bridge                                                                              |
| Custom-domain binding                  | `VERIFIED`   | `truthtrace.ai` serves the same title and Lovable artifact SHA as the provider public URL                                                                                                                                    |
| Connected GitHub repository            | `VERIFIED`   | Private repository `rvalentz292/truthtrace-website`. GitHub commit search maps the live SHA to this repository; the authenticated GitHub account has `ADMIN` permission.                                                     |
| Connected production branch            | `UNVERIFIED` | GitHub verifies that private-repository default branch `main` is unprotected and its head equals the live SHA. Lovable did not directly expose the active provider branch, so correlation is not provider-side branch proof. |
| Current production commit SHA          | `VERIFIED`   | `84a49ca4e38d21322e137e5135d974c0ddbd2f66`                                                                                                                                                                                   |
| Current production commit record       | `VERIFIED`   | `Refactor remove animations`; authored/committed 2026-02-08T22:22:45Z; unsigned                                                                                                                                              |
| Live/provider/GitHub SHA agreement     | `VERIFIED`   | The live HTML `data-artifact-id`, authenticated Lovable `latest_commit_sha`, Lovable edit history, private GitHub `main` head, and private GitHub commit all agree on `84a49c…`                                              |
| Current production deployment ID       | `BLOCKED`    | Not exposed by Lovable's read-only project response, live HTML, or GitHub. The live `data-artifact-id` is explicitly a `preview_commit_sha`, not a provider deployment ID.                                                   |
| Current deployment timestamp           | `UNVERIFIED` | The commit/edit time is known, but no immutable deployment record or publish event timestamp was returned                                                                                                                    |
| GitHub deployment record               | `UNVERIFIED` | The private production repository reports zero GitHub deployments and zero GitHub environments. Lovable's native publish event is not represented there.                                                                     |

### Current live build and environment identity

| Required field                        | Status           | Verified value / evidence                                                                                                                                                                   |
| ------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Current live source build command     | `VERIFIED`       | `vite build` from the exact live commit's `package.json`                                                                                                                                    |
| Current live development command      | `VERIFIED`       | `vite`                                                                                                                                                                                      |
| Current live source preview command   | `VERIFIED`       | `vite preview`                                                                                                                                                                              |
| Provider-side build command           | `UNVERIFIED`     | Lovable did not expose its internal build invocation or package-manager selection. The source script does not prove the provider's exact orchestration.                                     |
| Source-default output directory       | `VERIFIED`       | No `build.outDir` override exists in `vite.config.ts`; Vite's source default is `dist/`                                                                                                     |
| Provider upload/output target         | `UNVERIFIED`     | Lovable did not expose the immutable built artifact, output checksum, storage target, or upload record                                                                                      |
| Runtime preset                        | `NOT APPLICABLE` | The legacy live source is a static Vite/React application and declares no Nitro, Wrangler, Vercel, or Netlify runtime preset                                                                |
| Source-referenced environment names   | `VERIFIED`       | None found across 75 text source/config files at the exact live SHA. No `.env` file was present in the 94-file provider tree.                                                               |
| Provider environment-variable names   | `UNVERIFIED`     | The connected Lovable read API did not expose provider environment settings. No value was requested or printed.                                                                             |
| Private repo secrets/variables        | `VERIFIED`       | GitHub reports zero Actions secrets and zero Actions variables for `rvalentz292/truthtrace-website`; this does not prove the absence of Lovable-managed settings.                           |
| Production analytics/injected runtime | `VERIFIED`       | The live page loads Google Tag Manager/Analytics plus Lovable/hosting analytics endpoints. This is current legacy behavior and is not authorized for the browse-only replacement candidate. |

## Release-candidate provider separation

The release candidate must not be published by treating the currently live project or generated local Wrangler files as interchangeable targets.

| Field                                      | Status       | Verified value / consequence                                                                                                                                                                                                                                                                                      |
| ------------------------------------------ | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Candidate-associated Lovable project       | `VERIFIED`   | Separate project `truth-trace-forge` (`TruthTrace: Evidence Clarity`), provider project ID `27174261-3589-4c48-bd32-0375b044b3d9`, public provider URL `https://truth-trace-forge.lovable.app`                                                                                                                    |
| Candidate-associated provider latest SHA   | `VERIFIED`   | Lovable reports `a6268b6dce3b6a6a606c7d1f8e3c6b9baeb38c20`, an internal revert revision created 2026-07-13; it is not PR #4's head and is not a commit in the public release repository                                                                                                                           |
| Candidate provider ↔ public repo history   | `VERIFIED`   | Lovable edit history contains the exact GitHub merge SHAs for public-repository PRs #1 and #2, proving historical sync with `rvalentz292/truthtrace-evidence-clarity`                                                                                                                                             |
| Candidate provider production branch       | `UNVERIFIED` | Lovable's GitHub integration normally syncs the default branch, and historical edits match public-repository `main`; the current active provider branch was not returned by the read API                                                                                                                          |
| PR #4 exact tree in Lovable                | `BLOCKED`    | The last provider observations reported different SHAs for the live production project and `truth-trace-forge`; no post-candidate provider mapping proves that either contains `04035bd053d61aec308282a9a861c3da94285fc2`. Publishing either last-observed snapshot would not publish the approved release branch |
| Approved target project for domain cutover | `BLOCKED`    | Founder direction approves the domain and PR #4, but no reviewed procedure establishes whether code must enter `truthtrace-website`, whether the custom domain must move to `truth-trace-forge`, or whether a new immutable staging/production target is required                                                 |
| Candidate repository build command         | `VERIFIED`   | Current `build`, `build:artifact`, and `build:publication` scripts declare `node scripts/validate-publication.mjs && vite build`; this is distinct from the legacy live project's unguarded `vite build`                                                                                                          |
| Candidate local output                     | `VERIFIED`   | `.output/public/` plus `.output/server/`                                                                                                                                                                                                                                                                          |
| Candidate local artifact identity          | `VERIFIED`   | 50 build files, 2,930,912 bytes; aggregate SHA-256 `688fc68f5466606c709d0a18033031d4840d6b165b394ea0357b226a023d0ea6`. This is local evidence, not a provider deployment ID.                                                                                                                                      |
| Candidate CI identity                      | `VERIFIED`   | GitHub Actions run `29387686387`, job `87264243575`, completed with conclusion `success` for the publication candidate.                                                                                                                                                                                           |
| Candidate evidence identity                | `VERIFIED`   | 18 evidence files; `SHA256SUMS.txt` SHA-256 `15409ace13507e65966643d80a3562b23268060c7bcc24dde4bb9f7dc311db0b`.                                                                                                                                                                                                   |
| Candidate first-cutover route policy       | `VERIFIED`   | Local artifact returns direct `200` for `/`, `/technology`, `/privacy`, `/terms`, and `/contact`; `/private-demo` returns `410`; representative unlisted paths return true `404`; the sitemap contains exactly the five approved public URLs.                                                                     |
| Candidate policy/contact boundary          | `VERIFIED`   | `/privacy` directly serves the approved `TruthTrace Website Privacy Notice` and `/terms` directly serves the approved `TruthTrace Website Terms of Use`, both effective July 15, 2026, without proxying to Lovable. `/contact` is static and exposes no form, public channel, upload, or intake endpoint.         |
| Candidate tracking posture                 | `BLOCKED`    | No concrete tracking token or Lovable hook is present in the local artifact. Provider-side injection remains unverified and must be disproved on the exact staging and production deployments, including network requests and cookies.                                                                            |
| Candidate generated runtime preset         | `VERIFIED`   | `cloudflare-module` in generated Nitro output                                                                                                                                                                                                                                                                     |
| Candidate production environment names     | `VERIFIED`   | `VITE_SITE_URL` is the only candidate-specific public build variable; approved value is `https://truthtrace.ai`. `NODE_ENV` is a conventional server runtime input. `SITE_UNDER_TEST` is validation-only.                                                                                                         |
| Generated Wrangler worker name             | `UNVERIFIED` | `rvalentz292-truthtrace-evidence-clarity` is auto-derived output, not a verified Cloudflare account/service/project                                                                                                                                                                                               |
| Authenticated Cloudflare account           | `UNVERIFIED` | `wrangler whoami` reports that the workstation is not authenticated                                                                                                                                                                                                                                               |

## Deployment, preview, rollback, and permissions

| Required field                              | Status     | Exact finding                                                                                                                                                                                                                                                                                   |
| ------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Legacy provider preview mechanism           | `VERIFIED` | Lovable returns an authenticated project preview URL. Direct unauthenticated access redirects to `lovable.dev/auth-bridge`; no deployment ID is returned.                                                                                                                                       |
| Candidate local preview command             | `VERIFIED` | `wrangler dev --config .output/server/wrangler.json --ip 127.0.0.1 --port 4173`                                                                                                                                                                                                                 |
| Exact candidate provider preview deployment | `BLOCKED`  | No isolated provider deployment tied to the exact PR #4/candidate SHA has been identified or verified. The last-observed `truth-trace-forge.lovable.app` publication was not the audited branch.                                                                                                |
| Provider publish mechanism                  | `VERIFIED` | Lovable documents `Publish → Update` and exposes an authenticated `deploy_project(project_id)` operation that publishes the provider project's current snapshot. The mutation was intentionally not called.                                                                                     |
| Exact production deploy command             | `BLOCKED`  | **No authorized command.** Calling the provider publish operation now could publish an unverified or wrong provider snapshot; running generated `wrangler deploy` would target an unauthenticated/unapproved Cloudflare account and would not update the current Lovable custom-domain project. |
| Exact production rollback command           | `BLOCKED`  | **No verified command.** Lovable documents source-history revert and republish, but no immutable deployment restore operation or deployment ID was exposed or rehearsed.                                                                                                                        |
| Prior immutable deployment ID               | `BLOCKED`  | None available                                                                                                                                                                                                                                                                                  |
| Prior recoverable artifact/checksum         | `BLOCKED`  | None recorded                                                                                                                                                                                                                                                                                   |
| Deploy permission requirement               | `VERIFIED` | Lovable editors and above can publish by default; workspace policy can restrict external publishing. The authenticated operator is a workspace owner, but authorization does not cure the target/SHA mismatch.                                                                                  |
| Domain-binding permission requirement       | `VERIFIED` | Lovable requires project editor or higher for an externally purchased-domain connection; workspace admin/owner is required for workspace-purchased domains. The authenticated operator is an owner.                                                                                             |
| DNS permission requirement                  | `BLOCKED`  | An authenticated Hostinger DNS-zone operator and backup operator have not been identified or tested                                                                                                                                                                                             |
| Rollback permission requirement             | `BLOCKED`  | No provider rollback operation exists in the available read/API surface, so the required privilege and approval path cannot be proven                                                                                                                                                           |

## GitHub deployment-control observations

| Field                                        | Status           | Result                                                                                                                                 |
| -------------------------------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Private production repository visibility     | `VERIFIED`       | Private                                                                                                                                |
| Private production repository permission     | `VERIFIED`       | Authenticated GitHub viewer has `ADMIN`                                                                                                |
| Private production `main` protection         | `VERIFIED`       | Not protected; this is a release-control risk                                                                                          |
| Private production GitHub deployments        | `VERIFIED`       | Zero                                                                                                                                   |
| Private production GitHub environments       | `VERIFIED`       | Zero                                                                                                                                   |
| Private production GitHub Actions workflows  | `VERIFIED`       | Zero                                                                                                                                   |
| Private production GitHub Pages              | `NOT APPLICABLE` | Not configured                                                                                                                         |
| Public release repo provider deployment link | `UNVERIFIED`     | The public repository has no GitHub deployment/environment record proving that PR #4 maps to the current Lovable custom-domain project |

## Evidence commands and sources

All commands below were read-only. Public DNS/TLS output and provider/GitHub metadata were reduced to non-secret fields.

```powershell
Resolve-DnsName truthtrace.ai -Type NS -DnsOnly
Resolve-DnsName truthtrace.ai -Type SOA -DnsOnly
Resolve-DnsName truthtrace.ai -Type A -DnsOnly
Resolve-DnsName www.truthtrace.ai -Type A -DnsOnly
Resolve-DnsName 185.158.133.1 -Type PTR -DnsOnly
nslookup -type=A truthtrace.ai ns1.dns-parking.com
nslookup -type=A www.truthtrace.ai ns1.dns-parking.com
curl.exe -sS -D - -o NUL https://truthtrace.ai/
curl.exe -sS -D - -o NUL https://www.truthtrace.ai/
openssl s_client -connect truthtrace.ai:443 -servername truthtrace.ai
openssl s_client -connect www.truthtrace.ai:443 -servername www.truthtrace.ai
gh search commits --hash 84a49ca4e38d21322e137e5135d974c0ddbd2f66 --owner rvalentz292
gh repo view rvalentz292/truthtrace-website
gh api repos/rvalentz292/truthtrace-website/branches/main
gh api repos/rvalentz292/truthtrace-website/deployments
gh api repos/rvalentz292/truthtrace-website/environments
npx --no-install wrangler whoami
```

Authenticated Lovable read operations used: `get_me`, `get_workspace`, `get_project`, `list_projects`, `list_edits`, `list_files`, and `read_file`. `deploy_project` was not invoked.

Provider documentation used to interpret, not replace, observed evidence:

- [Hostinger nameserver identification](https://support.hostinger.com/en/articles/8671230-how-to-look-up-domain-nameservers)
- [Lovable publishing and publish permissions](https://docs.lovable.dev/features/publish)
- [Lovable custom domains and required roles](https://docs.lovable.dev/features/custom-domain)
- [Lovable GitHub integration and default-branch sync](https://docs.lovable.dev/integrations/github)
- [Lovable project sharing and access roles](https://docs.lovable.dev/features/share-project)

## Publication blockers and required closure evidence

| Blocker | Status    | Evidence required to close                                                                                                                                                                                                                                                     |
| ------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| P0-PI-1 | `BLOCKED` | Choose and record the exact Lovable production project that will own `truthtrace.ai`, then prove that it contains the immutable publication-candidate SHA                                                                                                                      |
| P0-PI-2 | `BLOCKED` | Create an isolated non-production deployment from that exact SHA and record its provider deployment ID, URL, environment, artifact checksum, operator, and timestamp                                                                                                           |
| P0-PI-3 | `BLOCKED` | Capture the current immutable production deployment ID (not only commit SHA), prior recoverable deployment/artifact, and publish timestamp                                                                                                                                     |
| P0-PI-4 | `BLOCKED` | Prove an exact, reviewed deployment operation for the chosen project and an exact immutable rollback operation; rehearse both outside production                                                                                                                               |
| P0-PI-5 | `BLOCKED` | Identify authenticated Hostinger DNS primary/backup operators, export the complete before-state, apply the approved apex-primary rule, and prove one-hop path/query-preserving `www` → apex `301` behavior for HTML and static assets plus the exact rollback procedure        |
| P0-PI-6 | `BLOCKED` | Ensure PR #4's final implementation SHA is the only runtime difference entering the chosen provider project; the last-observed `truthtrace-website` and `truth-trace-forge` snapshots were not that candidate, and no post-candidate mapping is proven                         |
| P0-PI-7 | `BLOCKED` | Remove legacy Google/Lovable analytics and any provider-injected tracking, hooks, or nonessential cookies; verify the approved no-analytics/no-channel contact boundary on the exact staging deployment                                                                        |
| P0-PI-8 | `BLOCKED` | Verify on the exact staging deployment that the five approved routes return direct `200`, `/private-demo` returns `410`, unlisted routes return true `404`, the sitemap lists exactly five URLs, legal pages do not proxy to Lovable, and `/contact` exposes no intake channel |

## Final production-identity determination

Current production identity is partially proven and no longer anonymous:

- DNS is managed by Hostinger.
- Application hosting is Lovable behind Cloudflare delivery.
- The authenticated provider workspace is `Ryan's Lovable`, with the operator holding `owner` role.
- The live project is `truthtrace-website`.
- The connected private repository is `rvalentz292/truthtrace-website`.
- The private repository's default `main` branch has the live SHA; the active Lovable production branch remains unverified.
- The live commit is `84a49ca4e38d21322e137e5135d974c0ddbd2f66`.

Candidate `04035bd053d61aec308282a9a861c3da94285fc2`, its successful CI job, artifact checksum, evidence manifest, and approved local route boundary are identified. The exact provider deployment ID, exact candidate cutover command, provider-level host normalization, exact rollback command, invariant-preserving recoverable prior deployment, staging no-tracking proof, and PR #4-to-provider SHA mapping remain unproven. Under the publication-gate rule, the only valid production-identity verdict is **BLOCKED**.
