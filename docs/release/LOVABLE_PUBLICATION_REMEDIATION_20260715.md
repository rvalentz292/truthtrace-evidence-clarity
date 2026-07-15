# Lovable Publication Remediation — 2026-07-15

## Safety checkpoint

| Check                  | Result                                                                                  |
| ---------------------- | --------------------------------------------------------------------------------------- |
| Repository             | `rvalentz292/truthtrace-evidence-clarity`                                               |
| Working directory      | `C:\HOMEPAGE\truthtrace-evidence-clarity`                                               |
| Starting `main`        | `3044387b44549446973891279f83911eb4859429`                                              |
| Starting `origin/main` | `3044387b44549446973891279f83911eb4859429`                                              |
| Starting tree          | `a9a657aeaefe9b0389d633d22fde8b34b4faa6bf`                                              |
| Starting worktree      | clean                                                                                   |
| Remote safety tag      | `lovable-pre-remediation-20260715-3044387` → `3044387b44549446973891279f83911eb4859429` |
| Remediation branch     | `lovable-publication-remediation-20260715`                                              |

All safety invariants passed before file changes.

## Pull request and post-checkpoint base drift

Draft PR #5 is open at
`https://github.com/rvalentz292/truthtrace-evidence-clarity/pull/5`. Its
deterministic public-release gate passes on the exact PR head, but the PR remains
draft and publication remains blocked.

After the safety checkpoint, the signed-in Lovable configuration attempt
unexpectedly advanced GitHub `main` to merge commit
`fbec9ef33bce5c4d7fea687122e548d8fa3ac7bc`. Lovable had been explicitly told
not to touch tracked files, but its generated branch changed `package.json` and
`bun.lock`. The remediation PR is based on that new `main` and visibly restores
both files to their validated starting versions. The platform-generated
dependency drift is neither hidden nor accepted into the candidate.

## `VITE_SITE_URL` root cause and remediation

Every build script runs `scripts/validate-publication.mjs` before Vite. That Node process reads `process.env.VITE_SITE_URL`; it does not receive Vite's later `loadEnv` injection. The synchronized Lovable build lacked the variable, so the pre-build validator exited before Vite could compile the candidate.

The remediation:

- requires and normalizes an absolute HTTPS origin;
- rejects credentials, paths, doubled path slashes, queries, fragments, malformed URLs, HTTP URLs, and any unapproved host;
- accepts a harmless trailing root slash but canonicalizes it to `URL.origin`;
- locks the approved production origin to `https://truth-trace-forge.lovable.app`;
- updates canonical, Open Graph, social-image, manifest, robots, sitemap, CI, and host-validation expectations to the same origin;
- documents the public, non-secret value in `.env.example`;
- retains a clear build-time and runtime error when the variable is absent or invalid.

Required Lovable runtime content:

```dotenv
VITE_SITE_URL=https://truth-trace-forge.lovable.app
```

The signed-in Lovable editor reported that its ignored project-root `.env` contains exactly that line plus a final newline. The Lovable-generated tracked-file change described above is rejected as a candidate and is explicitly restored by draft PR #5. No production-build claim is based on the Lovable-generated SHA.

## Repository-controlled analytics remediation

- No analytics package, application analytics hook, page-view/event call, tag-manager snippet, pixel, or tracking request exists in repository source.
- Lovable server-function and SSR development error relays are explicitly disabled in `vite.config.ts`; application error logging in `src/start.ts` and `src/server.ts` remains intact.
- Source and built-artifact scans reject Lovable event hooks/endpoints plus major analytics vendors.
- The Lovable project-level **Visitor analytics** setting was switched from on to off. Fresh public HTML immediately stopped injecting `/~flock.js` and `/__l5e/events.js`.
- No accessibility, routing, security-header, SEO, or non-tracking performance behavior was removed.

## Route policy

The required `/private-demo=200` gate is implemented as a static, noindex, browse-only page. It has no form, account, upload, evidence intake, API call, AI integration, database, or production evidence-processing connection. It remains excluded from the five-route sitemap.

## Local verification

| Gate                                              | Result                                                                  |
| ------------------------------------------------- | ----------------------------------------------------------------------- |
| `bun install --frozen-lockfile` with Bun `1.3.14` | pass; no lockfile changes                                               |
| Prettier check                                    | pass                                                                    |
| ESLint                                            | pass; six pre-existing warnings in untouched UI primitives, zero errors |
| TypeScript                                        | pass                                                                    |
| Unit tests                                        | 14/14 pass                                                              |
| Dependency audit                                  | pass; critical `0`, high `0`, unknown `0`                               |
| Publication configuration                         | pass                                                                    |
| Production artifact build                         | pass                                                                    |
| Local link/runtime gate                           | pass; 23 documents, six `200` entry routes, one true `404`              |
| Source maps                                       | none                                                                    |
| Built tracking signatures                         | none                                                                    |
| Local cookies                                     | none on all required routes and unknown route                           |
| Browser console                                   | no warnings or errors on all tested routes                              |
| Canonical / Open Graph                            | correct Lovable origin on all six `200` routes                          |
| Privacy / terms source                            | unchanged; approved tests pass                                          |
| Sitemap / robots                                  | local `200` and exact; stale public deployment still `404`              |

## Public-platform result

- Lovable visitor analytics: disabled and verified absent from fresh public HTML.
- `__cf_bm`: still set by Cloudflare/Lovable hosting on every tested response.
- Existing production deployment: stale; legal routes, robots, and sitemap remain `404`.
- New candidate production build/deployment: not performed and not certified.

The publication verdict remains **BLOCKED** under the supplied rules.

## Rollback

Before merge, abandon the remediation branch and retain the remote safety tag. After a future merge, revert the merge commit through a reviewed pull request, restore the previously approved Lovable runtime variable for that rollback candidate, and redeploy only a verified prior deployment that preserves the approved legal, route, analytics, and cookie policy.

Repository rollback anchor:

```text
lovable-pre-remediation-20260715-3044387
```

No generated Wrangler deploy hint is an approved Lovable rollback command.
