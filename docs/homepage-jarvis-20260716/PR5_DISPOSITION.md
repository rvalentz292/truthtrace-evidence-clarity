# Draft PR #5 Disposition

PR: `https://github.com/rvalentz292/truthtrace-evidence-clarity/pull/5`

## Live GitHub state

| Field                      | Value                                                                                                 |
| -------------------------- | ----------------------------------------------------------------------------------------------------- |
| State                      | OPEN, DRAFT                                                                                           |
| Base                       | `main` at `fbec9ef33bce5c4d7fea687122e548d8fa3ac7bc`, tree `4526755e455bfdb92d971ad02961d8cb68e58111` |
| Head                       | `ee627a99a1930857ae9104c775f0ce8a50157faa`, tree `5650c852cf31c8514121fec131730df93443cd4d`           |
| Relation to current `main` | 3 commits ahead, 11 behind                                                                            |
| GitHub merge state         | `mergeable=false`, dirty/conflicting, `rebaseable=false`                                              |
| Size                       | 23 files, +1,344 / -1,107                                                                             |
| Checks/reviews             | No checks, statuses, reviews, comments, or requested reviewers                                        |

The PR body identifies an older candidate (`e69d80f…`, tree `0bc4940…`) rather than its current head. Its local PASS statements therefore are not exact-head GitHub evidence. A read-only three-tree merge found textual conflicts in `bun.lock`, `package.json`, `HomePage.tsx`, and `Nav.tsx`; dangerous domain/route changes could otherwise auto-merge, so resolving only textual conflicts would be unsafe.

## File-by-file classification

| File                                                               | Classification                       | Disposition evidence                                                                                                                   |
| ------------------------------------------------------------------ | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| `.env.example`                                                     | REJECT AS CONFLICTING                | Replaces approved canonical with provider hostname.                                                                                    |
| `.github/workflows/homepage-release-gate.yml`                      | REJECT AS CONFLICTING                | Changes CI canonical to provider hostname.                                                                                             |
| `bun.lock`                                                         | REJECT AS CONFLICTING                | Resolves older Lovable tooling and restores `lovable-tagger`; current lock is authoritative.                                           |
| `docs/release/CF_BM_COOKIE_ROOT_CAUSE_20260715.md`                 | PARTIALLY REUSE                      | Retain dated provider-cookie investigation only; reverify deployment and counsel assumptions.                                          |
| `docs/release/LOVABLE_FINAL_PUBLICATION_CERTIFICATION_20260715.md` | DROP AS SUPERSEDED                   | Records a stale BLOCKED verdict and different identities.                                                                              |
| `docs/release/LOVABLE_PUBLICATION_REMEDIATION_20260715.md`         | PARTIALLY REUSE                      | Mine dated A/B and safety history only.                                                                                                |
| `package.json`                                                     | REJECT AS CONFLICTING                | Downgrades Lovable config from current `2.7.4` to `2.7.1`.                                                                             |
| `public/robots.txt`                                                | REJECT AS CONFLICTING                | Repoints sitemap to provider hostname.                                                                                                 |
| `public/site.webmanifest`                                          | REJECT AS CONFLICTING                | Replaces app ID/start/scope with provider hostname.                                                                                    |
| `public/sitemap.xml`                                               | REJECT AS CONFLICTING                | Replaces all five canonical URLs.                                                                                                      |
| `scripts/check-links.mjs`                                          | REJECT AS CONFLICTING                | Makes provider canonical and `/private-demo` a 200 entry route.                                                                        |
| `scripts/validate-publication.mjs`                                 | REIMPLEMENT ON CURRENT MAIN          | Absolute-HTTPS validation idea is useful only while retaining `truthtrace.ai`. Current validator already enforces the approved origin. |
| `src/components/site/HomePage.tsx`                                 | DROP AS SUPERSEDED                   | Larger direction uses “timeline you can prove,” “Originals preserved,” and unapproved pilot CTAs.                                      |
| `src/components/site/Nav.tsx`                                      | DROP AS SUPERSEDED                   | Adds unverified “Request Controlled Pilot” actions.                                                                                    |
| `src/content/website-privacy.ts`                                   | REQUIRES FOUNDER OR COUNSEL DECISION | Classifies `__cf_bm` as strictly necessary without recorded counsel approval or final-deployment verification.                         |
| `src/lib/error-page.ts`                                            | REJECT AS CONFLICTING                | Deletes the required 410 renderer.                                                                                                     |
| `src/lib/site-metadata.ts`                                         | PARTIALLY REUSE                      | Strict URL normalization/OG option is useful; provider canonical is rejected.                                                          |
| `src/routeTree.gen.ts`                                             | REJECT AS CONFLICTING                | Regenerates a public `/private-demo` route.                                                                                            |
| `src/routes/index.tsx`                                             | REJECT AS CONFLICTING                | Uses “timeline you can prove” and unqualified preservation copy.                                                                       |
| `src/routes/private-demo.tsx`                                      | REJECT AS CONFLICTING                | Restores a public route without current authority.                                                                                     |
| `src/server.ts`                                                    | REJECT AS CONFLICTING                | Makes provider canonical, rejects apex, and removes the 410 policy.                                                                    |
| `tests/homepage-release.test.mjs`                                  | PARTIALLY REUSE                      | Malformed-origin cases are useful; provider/private-demo requirements are rejected.                                                    |
| `vite.config.ts`                                                   | DROP AS SUPERSEDED                   | Development error-logger flags do not control production provider analytics.                                                           |

## Final disposition

**Do not merge, rebase, or cherry-pick PR #5.** Treat it as historical evidence only. Do not close or mutate it automatically. Current authority may later close it as superseded. The homepage, domain, route, dependency, and cookie decisions in this candidate were made on current `main`, not imported from PR #5.
