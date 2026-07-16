# Current-State Reconciliation

Observed and reconciled on July 16, 2026.

## Repository safety record

| Item                  | Recorded value                                                                    |
| --------------------- | --------------------------------------------------------------------------------- |
| Repository path       | `C:\HOMEPAGE\truthtrace-evidence-clarity`                                         |
| Original branch       | `codex/truthtrace-homepage-master-20260716`                                       |
| Original HEAD         | `ac459269af22f90ebe3d9095a3add00dff426252`                                        |
| Original tree         | `45452418fad4a55bb80ee53c6203d17d0a36d443`                                        |
| Remote default branch | `main`                                                                            |
| Fetched `origin/main` | `ac459269af22f90ebe3d9095a3add00dff426252`                                        |
| Original state        | Dirty: modified homepage/metadata/routes/tests and untracked draft records/assets |
| Restore point         | `stash@{0}` / object `0c1483e29c7bc85f8a44e71bd1c1e497649892e3`                   |
| Restore label         | `restore-point/homepage-master-dirty-20260716-before-jarvis`                      |
| Working branch        | `codex/homepage-jarvis-final-20260716`                                            |

The restore stash was retained after application. Superseded draft documents and the unsafe draft social image were preserved under ignored `artifacts/`; they are not part of the release surface.

## Reconciled sources

| Source                        | Identity/status                                                                                     | Classification                               | Disposition                                               |
| ----------------------------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------- | --------------------------------------------------------- |
| Remote `main`                 | Commit `ac459269…`, tree `45452418…`; matched the prompt baseline after fetch                       | CURRENT AUTHORITATIVE                        | Regression and policy baseline                            |
| Current tests/build contracts | Canonical `truthtrace.ai`; five public 200 routes; `/private-demo` 410; unknown 404; host rejection | CURRENT AUTHORITATIVE                        | Preserved and strengthened                                |
| Audit-start dirty homepage    | Eleven sections, ~1,015 lines, generic diagram, unsafe “source-verifiable” social image             | SUPERSEDED / NOT SAFE TO APPLY               | Valid pieces reconciled; stale records isolated           |
| Safety stash                  | Object `0c1483e2…`                                                                                  | CURRENT SAFETY EVIDENCE                      | Retain until branch acceptance                            |
| Reviewed implementation       | Commit `4f7c5f09…`, tree `78e08ec7…`                                                                | CURRENT AUTHORITATIVE candidate              | Exact runtime handoff identity                            |
| Draft PR #5                   | Open draft; head `ee627a99…`; 3 ahead/11 behind; dirty/conflicting                                  | CURRENT BUT CONFLICTING                      | Historical evidence only; do not merge/rebase/cherry-pick |
| Current Privacy/Terms         | Effective July 15, 2026                                                                             | CURRENT LEGAL COPY / COUNSEL REVIEW REQUIRED | Preserved; no final-approval claim                        |
| Live `truthtrace.ai`          | Legacy shell, provider cookie/analytics observed, `www` behavior conflicts with source policy       | CURRENT BUT LIMITED / CONFLICTING            | Not candidate deployment proof                            |
| Lovable provider preview      | Provider hostname served a different route surface and provider behavior                            | CURRENT BUT LIMITED / CONFLICTING            | Not exact-SHA proof                                       |
| `docs/release/*20260715*`     | Prior SHA/PR evidence                                                                               | HISTORICAL                                   | Context only; no inherited verdict                        |

## Domain and route decision

The canonical origin remains `https://truthtrace.ai`. The Lovable hostname is a provider identity, not authority to change canonical metadata. The candidate's HTML route policy is:

| Request                                                      | Expected candidate behavior           |
| ------------------------------------------------------------ | ------------------------------------- |
| `/`, `/technology`, `/privacy`, `/terms`, `/contact` on apex | 200                                   |
| `/private-demo` on apex                                      | 410, `noindex`, `no-store`            |
| Unknown route on apex                                        | 404, `noindex`                        |
| `www.truthtrace.ai` HTML navigation                          | 301 to apex with path/query preserved |
| `truthtrace.app`, unknown host, or provider host at worker   | 421, `no-store`                       |

Local Wrangler static assets are served before the application worker and therefore did not reproduce HTML host normalization for `/og.png`. This is an explicit provider-edge verification item, not a fabricated local PASS.

## Historical statements that remain true

- The public site is browse-only.
- The canonical authority is `truthtrace.ai`.
- `/private-demo` is retired under current policy.
- Provider cookies/analytics must be verified separately from repository-controlled code.

Historical PASS/BLOCKED labels, old SHAs, provider-canonical proposals, and private-demo restoration do not describe this candidate.
