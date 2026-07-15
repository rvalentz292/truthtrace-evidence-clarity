# TruthTrace Homepage Final Publication Gate — 2026-07-15

## Authority and scope

This record applies only to draft PR #4 in `rvalentz292/truthtrace-evidence-clarity` on branch `homepage-final-publication-gate-20260715`. The founder decisions in the controlling publication brief approve `https://truthtrace.ai` as the canonical family-law domain, exclude `truthtrace.app`, require a browse-only initial surface, select PR #4 as the sole candidate, and supersede PR #3.

This record does not authorize merge, production deployment, DNS mutation, provider publication, route retirement beyond the implemented candidate behavior, Git-history rewriting, or tag publication.

## Candidate identity

| Field                         | Status     | Value                                                                                                 |
| ----------------------------- | ---------- | ----------------------------------------------------------------------------------------------------- |
| Starting `main`               | `VERIFIED` | `1b5530784b564b679f733f77ff40aa7f7da53978`                                                            |
| Audited pre-publication SHA   | `VERIFIED` | `df6647616901b2e5eb2dc1d16255ffcc8140a78d`                                                            |
| Phase-1 / starting PR #4 head | `VERIFIED` | `55b07c4e707bed6e7975bf7dfd78d51a7b10d3ef`                                                            |
| Publication candidate SHA     | `BLOCKED`  | Pending creation of the exact implementation commit required by Phase 9                               |
| Final PR head                 | `BLOCKED`  | Pending the required documentation-only identity commit                                               |
| Candidate tag                 | `BLOCKED`  | `homepage-public-candidate-20260715` must point to the implementation commit and remain local for now |

## Decision-gate ledger

| Required condition                                      | Status                    | Evidence / consequence                                                                                                                                                                           |
| ------------------------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| PR #3 closed as superseded                              | `VERIFIED`                | Closed without merge or deployment after the exact required comment; recorded in `HOMEPAGE_COMPETING_PR_DISPOSITION_20260715.md`.                                                                |
| PR #4 is the sole candidate                             | `VERIFIED`                | Founder direction and competing-PR disposition agree. PR #4 remains draft.                                                                                                                       |
| Canonical domain                                        | `VERIFIED`                | Candidate configuration is locked to `https://truthtrace.ai`; canonical, Open Graph, manifest, robots, and sitemap validation pass.                                                              |
| `truthtrace.app` exclusion                              | `VERIFIED` locally only   | Candidate HTML runtime returns 421 with no redirect or family-law content for `.app`; provider/static-asset enforcement is not proven and remains a staging/edge gate.                           |
| Browse-only posture                                     | `VERIFIED` in source      | No evidence upload, intake, account, pilot form, unverified email, or configured analytics is present. Provider-injected cookies, analytics, and error hooks require exact-staging verification. |
| Production provider/project/repository                  | `PARTIALLY VERIFIED`      | Current live service is Lovable project `truthtrace-website`, backed by private repository `rvalentz292/truthtrace-website`; this is not the audited PR #4 repository/project tree.              |
| Production branch                                       | `UNVERIFIED`              | Private-repository default branch `main` has the live SHA, but Lovable did not expose the active provider branch.                                                                                |
| Current production deployment                           | `BLOCKED`                 | No immutable deployment ID or publish timestamp was exposed.                                                                                                                                     |
| Current production SHA                                  | `VERIFIED`                | Live/provider/private-GitHub correlation identifies `84a49ca4e38d21322e137e5135d974c0ddbd2f66`.                                                                                                  |
| Exact candidate-to-provider mapping                     | `BLOCKED`                 | Neither verified Lovable project contains the PR #4 implementation tree; generated Nitro/Wrangler metadata is not provider authorization.                                                        |
| Exact deploy command                                    | `BLOCKED`                 | No command proven against the authorized production project.                                                                                                                                     |
| Exact rollback command and recoverable prior deployment | `BLOCKED`                 | No immutable prior deployment or provider rollback procedure was identified.                                                                                                                     |
| Legacy route matrix approved and implemented            | `BLOCKED`                 | `/privacy`, `/terms`, `/contact`, and `/contact-us` remain owner/legal holds. A whole-domain cutover would change their current soft-404 responses. No owner-approved route split exists.        |
| `/private-demo` removed                                 | `VERIFIED` locally        | Candidate returns a real 410 with `noindex`, remains absent from navigation and sitemap, and has no replacement redirect. Provider/edge behavior still requires staging.                         |
| True unknown-route behavior                             | `VERIFIED` locally        | Arbitrary unknown HTML paths return a real 404 with meta and header noindex; no homepage catch-all redirect.                                                                                     |
| Publication build                                       | `VERIFIED` locally        | Frozen install, format, lint, typecheck, artifact build, and publication build pass with exact approved origin; no source-map files or embedded source-map markers were found.                   |
| Tests                                                   | `VERIFIED` locally        | 10/10 passing.                                                                                                                                                                                   |
| Browser/accessibility/reflow                            | `VERIFIED` locally        | Required viewport matrix, mobile menu focus behavior, representative controls, keyboard skip link, reduced motion, forced colors, and 200% reflow equivalent pass.                               |
| Lighthouse thresholds                                   | `VERIFIED` locally        | Performance 98, accessibility 100, best practices 100, SEO 100 using Lighthouse 12.8.2 against the final local publication artifact.                                                             |
| Dependency threshold                                    | `VERIFIED` locally        | 0 critical, 0 high, 2 moderate, 2 low. Required high/critical threshold passes; remaining advisories are retained in ignored evidence.                                                           |
| High-confidence secret scan                             | `VERIFIED` locally        | Current index/tree patterns and all 248 unique historical blobs reachable before the implementation commit produced zero findings. CI will rescan the final reachable history.                   |
| GitHub Actions                                          | `BLOCKED`                 | Workflow is not yet part of a pushed PR head, so no passing run exists for this exact tree.                                                                                                      |
| Isolated provider staging deployment                    | `BLOCKED`                 | No candidate deployment ID, preview URL, operator, provider environment record, or output checksum exists.                                                                                       |
| Provider static-asset host normalization/isolation      | `BLOCKED`                 | Local Nitro assets can be served before the SSR host guard; exact provider edge rules for `www`, `.app`, arbitrary hosts, HTTP→HTTPS, headers, and cookies must be proven in isolated staging.   |
| Rollback rehearsal                                      | `BLOCKED`                 | Not performed because no authorized target, immutable current/prior deployment, or rollback command is available.                                                                                |
| Patent/public-history decision                          | `COUNSEL REVIEW REQUIRED` | H-01 through H-11 remain reachable in public history/refs. No counsel decision or authorized-owner waiver is recorded.                                                                           |
| Production mutation                                     | `VERIFIED`                | No merge, production deploy, DNS edit, provider publication, rollback, force push, or history rewrite was performed.                                                                             |

## Local validation evidence

Ignored evidence is retained under `artifacts/homepage-publication-20260715/`, including viewport screenshots, the Chromium browser-mode report, Lighthouse JSON/HTML, dependency-audit detail, and reachable-history secret-scan detail. A complete SHA-256 manifest will be generated after the implementation candidate is immutable.

The local candidate-quality checks demonstrate that the repository tree is internally consistent and meets the automated quality thresholds. They do not establish provider identity, route-owner approval, production edge behavior, staging identity, deploy authority, rollback authority, or counsel disposition.

## Phase 10 disposition

No non-production provider deployment or rollback rehearsal was attempted. Doing so would require an approved target project, an exact provider deployment mechanism for the immutable candidate, a known prior deployment, and proven operator permission. Those prerequisites are absent. Local Wrangler preview is test evidence only and is not a provider staging deployment.

## Required next authority

The founder/authorized release owner must first select the exact Lovable project and repository integration for PR #4, verify the active production branch and immutable current deployment, approve the legacy legal/contact route treatments, obtain or waive counsel disposition through an authorized record, and authorize an isolated exact-SHA staging plus rollback rehearsal. Only then may an operator execute the provider-specific commands recorded by that process and reassess this gate.

## Verdict

BLOCKED
