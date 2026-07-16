# Source-Precedence Register

The assignment's authority order was applied without assuming that the newest document was authoritative.

| Rank | Source                                                  | Observed evidence                                                              | Classification                               | Allowed use / limitation                                                         |
| ---: | ------------------------------------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------- | -------------------------------------------------------------------------------- |
|    1 | Current remote `main` code and reproducible behavior    | `ac459269…`, tree `45452418…`; matched fetched `origin/main`                   | CURRENT AUTHORITATIVE                        | Baseline for code, route, domain, and legal-page reconciliation                  |
|    2 | Current test and build contracts                        | Publication validator, release tests, server policies, frozen dependency state | CURRENT AUTHORITATIVE                        | Safety constraints; source-pattern tests remain limited without browser evidence |
|    3 | Verified current public or preview behavior             | Live apex/provider probes on July 16, 2026                                     | CURRENT BUT LIMITED / CONFLICTING            | Proves current deployed behavior only; not exact-main or exact-candidate proof   |
|    4 | Current legal, privacy, and terms content               | July 15, 2026 Privacy Notice and Terms                                         | CURRENT LEGAL COPY / COUNSEL REVIEW REQUIRED | Current repository copy; not final counsel approval                              |
|    5 | Current GitHub pull requests and CI                     | PR #5 open draft, conflicting, no checks/reviews                               | CURRENT BUT CONFLICTING                      | File-level historical evidence; not merge authority                              |
|    6 | Current Lovable project state                           | Project `27174261-3589-4c48-bd32-0375b044b3d9`, provider hostname              | CURRENT BUT LIMITED                          | Provider identity only; exact-SHA synchronization remains unresolved             |
|    7 | Historical release documentation                        | `docs/release/*20260715*`                                                      | HISTORICAL                                   | Risk and policy context only; no inherited gate result                           |
|    8 | Prior homepage prompts and superseded design directions | Audit-start dirty draft and `homepage-master-20260716` records                 | SUPERSEDED / NOT SAFE TO APPLY               | Preserve for recovery; do not stage, publish, or cite as current proof           |

## Material conflict decisions

| Conflict                                                                | Higher-precedence resolution                                                       |
| ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `truthtrace.ai` vs provider hostname as canonical                       | Keep `https://truthtrace.ai`; provider URL remains a deployment/provider identity  |
| Five-route policy vs restored `/private-demo`                           | Keep 410 retirement policy                                                         |
| Source-linked demonstration vs “source-verifiable”                      | Keep demonstration-limited, human-review wording; remove verification claim        |
| Repository-controlled no marketing analytics vs live provider injection | State the repository scope and separately disclose provider behavior as unresolved |
| Current `2.7.4` tooling vs PR #5 downgrade to `2.7.1`                   | Keep current package/lock state                                                    |
| Historical certification vs current rerun                               | Current exact-candidate gates control                                              |

## Evidence-use rule

No live, provider, historical, or PR evidence is allowed to imply that Lovable is serving the reviewed implementation. Deployment proof requires an exact commit/artifact correlation and independent live-route verification.
