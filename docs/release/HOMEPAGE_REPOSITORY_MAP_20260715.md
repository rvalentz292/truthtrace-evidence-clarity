# TruthTrace Homepage Repository Map — 2026-07-15

## Publication verdict

**BLOCKED**

The release candidate is locally buildable and testable, but the repository does not establish an approved production identity, domain, deployment project, production branch, deploy command, deployment ID, or rollback mechanism. The live-domain audit also found a material brand and privacy collision between `truthtrace.app` and this family-law product, plus an unresolved migration from the existing `truthtrace.ai` site. No deployment is authorized by this document.

## Audit snapshot

| Item                     | Verified state                                                                                                                     |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| Repository               | `rvalentz292/truthtrace-evidence-clarity`                                                                                          |
| Remote                   | `origin` → `https://github.com/rvalentz292/truthtrace-evidence-clarity.git`                                                        |
| Baseline/default branch  | `main`                                                                                                                             |
| Baseline SHA             | `1b5530784b564b679f733f77ff40aa7f7da53978`                                                                                         |
| Release working branch   | `homepage-final-publication-gate-20260715`                                                                                         |
| Release-candidate SHA    | To be recorded after the release branch is committed; the audited changes are currently a working-tree delta from the baseline SHA |
| Competing candidate      | `website-100m-final-20260714` at `64aac286beb3df3c898e2f975f27e589d5079456`                                                        |
| Competing pull request   | Draft PR #3, one commit ahead of `main`; no approved merge/deploy decision was found                                               |
| Package manager evidence | `bun.lock`; validation used Bun 1.3.14 through `npx` on the audit workstation                                                      |
| Framework                | React 19, TanStack Start/Router, Vite 8, Nitro                                                                                     |
| Generated server preset  | `cloudflare-module`                                                                                                                |
| Publication date gate    | 2026-07-15                                                                                                                         |

The release SHA must replace the pending entry above in the final release record after commit. A working-tree state is not a deployable identity.

## Source topology

### Application entry and runtime

| Path                   | Responsibility                                                                                 | Release notes                                                                                                                                |
| ---------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `vite.config.ts`       | Loads `@lovable.dev/vite-tanstack-config` and points TanStack Start to the custom server entry | The upstream config selects Cloudflare as a default build target; that default is not evidence of an approved production provider or account |
| `src/server.ts`        | SSR fetch entry, catastrophic-error normalization, and response security headers               | Adds `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options`, and `Cross-Origin-Opener-Policy` when absent      |
| `src/start.ts`         | TanStack Start request middleware                                                              | Converts unexpected server errors into the controlled HTML error page                                                                        |
| `src/router.tsx`       | Router and query-client construction                                                           | Uses the generated route tree and scroll restoration                                                                                         |
| `src/routeTree.gen.ts` | Generated route registry                                                                       | Current public routes are `/` and `/technology`; the former `/private-demo` route has been removed                                           |
| `src/styles.css`       | Global visual system and responsive/forced-colors behavior                                     | Uses system/local font fallbacks; no external font fetch is required                                                                         |

### Public routes and page composition

| Route               | Source                                              | Purpose                                                                          | Indexing state                                                                                                        |
| ------------------- | --------------------------------------------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `/`                 | `src/routes/index.tsx`                              | Public family-law forensic-evidence product overview and representative workflow | Metadata can become canonical only when `VITE_SITE_URL` is approved; repository-wide robots currently blocks indexing |
| `/technology`       | `src/routes/technology.tsx`                         | Product design principles and boundaries                                         | Same publication interlocks as `/`                                                                                    |
| Not-found route     | `src/routes/__root.tsx`                             | Controlled 404 UI                                                                | Explicit `noindex` behavior                                                                                           |
| Root error boundary | `src/routes/__root.tsx` and `src/lib/error-page.ts` | Controlled browser/server error experience                                       | Explicit `noindex` behavior                                                                                           |

There is no public account, upload, intake, contact form, pilot form, live workspace, or API-backed evidence flow in this candidate.

### Homepage components

| Path                               | Responsibility                                                                                                                    | Material release behavior                                                                                                                                      |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/components/site/HomePage.tsx` | Homepage narrative, representative source-to-observation workflow, audience views, trust boundaries, and closing publication gate | Capability language is qualified as design intent or representative behavior; illustrative data is labeled as not live and contains no real family information |
| `src/components/site/Nav.tsx`      | Desktop/mobile navigation                                                                                                         | Hash targets match page sections; mobile disclosure supports focus entry, Escape close, and focus return                                                       |
| `src/components/site/Section.tsx`  | Shared section layout                                                                                                             | Provides section landmarks, headings, decorative semantics, and fixed-header scroll offset                                                                     |
| `src/lib/site-metadata.ts`         | Page metadata composition                                                                                                         | Emits absolute canonical/Open Graph URLs only for a valid HTTPS `VITE_SITE_URL`; omission is intentional when production identity is unapproved                |

The prior `HeroPipeline.tsx`, `Workspace.tsx`, and `/private-demo` route were removed from the current tree. They must not be restored without a fresh claims, security, privacy, and patent-sensitivity review.

### Public assets and policy files

| Path                      | State                                   | Publication significance                                                                                                  |
| ------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `public/og.png`           | Present                                 | Generated social preview; used only when an approved absolute site origin is configured                                   |
| `public/favicon.svg`      | Present                                 | Site icon and manifest icon                                                                                               |
| `public/site.webmanifest` | Present                                 | App identity, theme, scope, and icon metadata                                                                             |
| `public/_headers`         | Present                                 | Static-host-compatible security-header declarations; the server entry also supplies the same core headers                 |
| `public/robots.txt`       | Present and intentionally `Disallow: /` | Publication interlock; must remain blocking until the production domain and cutover are approved                          |
| `public/sitemap.xml`      | Absent                                  | Publication gate failure; it cannot be authored correctly until the canonical domain and migration route set are approved |

## Commands and quality gates

The scripts below are the exact commands declared by the current `package.json`.

| Script              | Command                                                                         | Meaning                                                                                                           |
| ------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `dev`               | `vite dev`                                                                      | Local development server                                                                                          |
| `build`             | `bun run release:config && vite build`                                          | Publication build; deliberately refuses to build until publication configuration passes                           |
| `build:artifact`    | `vite build`                                                                    | Produces an auditable build artifact without representing publication approval                                    |
| `build:dev`         | `vite build --mode development`                                                 | Development-mode build                                                                                            |
| `build:publication` | `bun run build`                                                                 | Alias for the gated publication build                                                                             |
| `preview`           | `wrangler dev --config .output/server/wrangler.json --ip 127.0.0.1 --port 4173` | Local preview of the generated Cloudflare-module artifact                                                         |
| `lint`              | `eslint .`                                                                      | Static lint gate                                                                                                  |
| `format`            | `prettier --write .`                                                            | Formatting mutation; not a release check by itself                                                                |
| `format:check`      | `prettier --check .`                                                            | Formatting gate                                                                                                   |
| `typecheck`         | `tsc --noEmit`                                                                  | TypeScript gate                                                                                                   |
| `test`              | `node --test tests/*.test.mjs`                                                  | Node release-regression tests                                                                                     |
| `check:links`       | `node scripts/check-links.mjs`                                                  | Checks `/`, `/technology`, internal fragments, internal responses, and a deliberate 404 against a running preview |
| `release:config`    | `node scripts/validate-publication.mjs`                                         | Requires an approved HTTPS site URL, publication-safe robots policy, social/favicon assets, and sitemap           |

Requested release-operation matrix:

| Operation         | Exact verified command or status                                                                                     |
| ----------------- | -------------------------------------------------------------------------------------------------------------------- |
| install           | `npx --yes bun@1.3.14 install --frozen-lockfile`                                                                     |
| develop           | `npx --yes bun@1.3.14 run dev`                                                                                       |
| lint              | `npx --yes bun@1.3.14 run lint`                                                                                      |
| typecheck         | `npx --yes bun@1.3.14 run typecheck`                                                                                 |
| test              | `npx --yes bun@1.3.14 run test`                                                                                      |
| build             | `npx --yes bun@1.3.14 run build` — blocked until the publication configuration is approved                           |
| preview           | `npx --yes bun@1.3.14 run preview` after `build:artifact`                                                            |
| deploy-preview    | **UNKNOWN / P0** — no provider preview target, account, project, or approved command is present                      |
| deploy-production | **UNKNOWN / P0** — generated Nitro/Wrangler hints are not approved production instructions                           |
| rollback          | **UNKNOWN / P0** — provider deployment ID, prior recoverable artifact, DNS before-state, and approved command absent |

Reproducible validation on a workstation without Bun already installed:

```powershell
npx --yes bun@1.3.14 install --frozen-lockfile
npx --yes bun@1.3.14 run format:check
npx --yes bun@1.3.14 run lint
npx --yes bun@1.3.14 run typecheck
npx --yes bun@1.3.14 run test
npx --yes bun@1.3.14 run build:artifact
```

The audited `release:config`/`build` failure is expected while the release is blocked. `build:artifact` is for local inspection only and must not be substituted for a passing publication build.

## Configuration and data-flow inventory

### Actual public configuration

| Environment name | Scope                              | Status                                                                                  |
| ---------------- | ---------------------------------- | --------------------------------------------------------------------------------------- |
| `VITE_SITE_URL`  | Public build-time canonical origin | Required for publication; intentionally blank in `.env.example` pending domain approval |
| `NODE_ENV`       | Server runtime mode                | Read by `src/lib/config.server.ts`; no value is committed                               |

### Commented examples, not current application requirements

`DATABASE_URL`, `STRIPE_SECRET_KEY`, and `VITE_FOO` appear only as instructional comments in the server configuration helper. They are not current release dependencies and no values are present in the repository.

### External services and user data

- No database, authentication, payment, email, CRM, analytics, ad tracker, form endpoint, evidence upload, or model endpoint is wired into the current candidate.
- No cookie banner is required for the rendered `/` and `/technology` candidate because neither route imports an active cookie or analytics integration. Unused `src/components/ui/sidebar.tsx` can write a preference cookie, and unused `src/components/ui/chart.tsx` generates chart styles with `dangerouslySetInnerHTML`; neither is emitted by the candidate routes, and both require renewed privacy/security review before adoption. This posture must also be revisited if production infrastructure injects tracking or cookies.
- The optional Lovable browser error hook reports an exception and pathname only if the hosting platform injects its expected global. Its production presence, recipient, retention, and privacy terms are unverified.
- A current-tree and Git-history high-confidence secret-pattern scan found no credential match. Repository history is public, however, and its prior claims/architecture content cannot be recalled from existing clones.

## Build and hosting evidence

The generated `.output/nitro.json` reports:

- preset: `cloudflare-module`;
- generated preview hint: `npx wrangler --cwd ./ dev`;
- generated deploy hint: `npx wrangler --cwd ./ deploy`.

The verified local build output root is `.output/`: browser assets are generated under `.output/public/` and the worker/server artifact under `.output/server/`. Those directories describe local build output only; no approved provider output-directory setting or production upload target has been identified.

The generated `.output/server/wrangler.json` also contains the auto-derived worker name `rvalentz292-truthtrace-evidence-clarity`, a generated asset binding, and a generated compatibility date.

These are build-tool outputs, not approved operational instructions. The repository contains no tracked production `wrangler.toml`/`wrangler.jsonc`, Vercel configuration, Netlify configuration, Docker deployment definition, GitHub Actions deployment workflow, production account identifier, zone identifier, worker/service identifier, environment mapping, production branch declaration, deployment ID convention, or verified rollback command. No one should run either generated deploy hint until all of those identities are established and approved.

## Live identity and migration findings

### `truthtrace.app`: material identity collision

The audited live `truthtrace.app` and its `www` host present a different TruthTrace product centered on blockchain/content authenticity and creator participation. That identity does not match this repository’s family-law forensic-evidence product. The former homepage CTA to an address on that domain was therefore removed.

Until ownership, authorization, recipient identity, privacy terms, and product alignment are proven, this repository must not:

- use `truthtrace.app` as `VITE_SITE_URL`;
- send family-law prospects or sensitive narratives to `truthtrace.app` email addresses;
- inherit that site’s legal documents or product claims;
- redirect either domain to the other.

### `truthtrace.ai`: live legacy family-law site

The audited live `truthtrace.ai` host presents a family-law product and is the closer product match, but it is not demonstrably deployed from this repository or commit history. Observed delivery signals include Cloudflare, Lovable, and Google Analytics. Both apex and `www` returned content without a verified canonical redirect.

Its observed sitemap contains 10 routes, including `/privacy`, `/terms`, and `/contact`, while this candidate currently provides only `/` and `/technology`. A direct replacement would therefore remove indexed and legal destinations and could also remove existing analytics without an approved migration.

Before any `truthtrace.ai` cutover, the owner must produce a route-by-route migration table that assigns each legacy URL exactly one outcome: retained page, permanent redirect to a reviewed destination, deliberate `410 Gone`, or temporary preservation. Legal URLs must have approved replacement content before cutover. The apex/`www` canonical host, analytics decision, search-console ownership, sitemap, and robots policy must be part of the same approval.

The request’s instruction not to revive obsolete `.ai` branding remains controlling unless the owner explicitly approves this domain after resolving the product-brand decision.

## Branch and release-line ambiguity

Draft PR #3 (`website-100m-final-20260714`, SHA `64aac286beb3df3c898e2f975f27e589d5079456`) is one commit ahead of `main` and presents itself as a superseding candidate. It was observed as draft, without completed checks/review, and with an explicit no-merge/no-deploy posture. Its content also retains claims, demo, SEO, and domain issues that this release branch addresses.

The release owner must decide whether:

1. this audited release branch supersedes PR #3;
2. PR #3 will be closed;
3. selected work will be reconciled through a separately reviewed change.

Do not merge, cherry-pick, or deploy PR #3 as an implicit resolution. A branch selection must be written into the release approval and must identify the exact candidate SHA.

## Publication blockers

| Severity | Blocker                                                             | Required evidence to clear                                                                                                              |
| -------- | ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| P0       | Production product/domain identity is unapproved                    | Named owner approval for canonical domain, product identity, and use of apex/`www`                                                      |
| P0       | `truthtrace.app` is a different live product                        | Written ownership/authorization and product-alignment decision; otherwise explicit prohibition remains                                  |
| P0       | `truthtrace.ai` migration is incomplete                             | Complete legacy-route matrix, reviewed legal destinations, redirects/statuses, canonical-host decision, analytics/search plan           |
| P0       | Deployment target is unknown                                        | Provider account, project/service/zone IDs, production branch, permissions, approved deploy command, deployment-ID capture procedure    |
| P0       | Rollback path is unknown                                            | Verified provider-specific application rollback and DNS rollback procedures, permissions, timing, and rehearsal evidence                |
| P0       | Candidate branch is ambiguous                                       | Written disposition of draft PR #3 and approval of one exact release SHA                                                                |
| P0       | Publication configuration intentionally fails                       | Approved `VITE_SITE_URL`, publication-safe `robots.txt`, correct canonical sitemap, and passing `bun run release:config`                |
| P0       | Public Git history contains prior patent-sensitive/product material | Counsel/owner disposition; current-tree removal cannot retract public clones/history                                                    |
| P1       | Production monitoring/analytics decision is unrecorded              | Approved observability and privacy posture, or an explicit decision to launch without analytics plus manual monitoring ownership        |
| P1       | Legal/contact experience has no approved production destination     | Reviewed contact, privacy, and terms destinations or an explicit prelaunch decision that keeps the site non-interactive and non-indexed |

## Release ownership record required before publication

The release checklist must name accountable people or teams for:

- product and brand/domain approval;
- legal, privacy, claims, and patent review;
- DNS and hosting administration;
- deployment execution;
- rollback authority;
- post-launch monitoring and incident response;
- final go/no-go approval.

Blank roles, generated provider hints, and verbal assumptions are not sufficient evidence. Until these records and the P0 evidence above exist, the only valid publication verdict is **BLOCKED**.
