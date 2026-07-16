# Lovable Exact-SHA Synchronization Handoff

## Immutable identities

| Field                         | Required value                                                                        |
| ----------------------------- | ------------------------------------------------------------------------------------- |
| GitHub repository             | `rvalentz292/truthtrace-evidence-clarity`                                             |
| Branch                        | `codex/homepage-jarvis-final-20260716`                                                |
| Deployable candidate commit   | `4fc4f133be2b67d077325b26cf2d9dc23f9eb756`                                            |
| Deployable candidate tree     | `e022f2f850b2cf05a64f000edc879268ada01f35`                                            |
| UI evidence milestone commit  | `4f7c5f09a88ce35bd0406a8bb6b690a90cb6769a`                                            |
| UI evidence milestone tree    | `78e08ec7aab85d944c64ceff6eaa9f7a14d72549`                                            |
| Evidence-wrapper commit       | `f595f0148d7bbc16d42b0e13037b65b4fb7e28dd`                                            |
| Evidence-wrapper tree         | `f5c42b43db6d1bb5260febcef440d852ca37814c`                                            |
| Draft PR                      | `https://github.com/rvalentz292/truthtrace-evidence-clarity/pull/6`                   |
| Baseline / rollback commit    | `ac459269af22f90ebe3d9095a3add00dff426252`                                            |
| Baseline / rollback tree      | `45452418fad4a55bb80ee53c6203d17d0a36d443`                                            |
| Lovable project ID            | `27174261-3589-4c48-bd32-0375b044b3d9`                                                |
| Observed Lovable project name | `truth-trace-forge`                                                                   |
| Provider hostname             | `https://truth-trace-forge.lovable.app`                                               |
| Canonical hostname            | `https://truthtrace.ai`                                                               |
| Required public build setting | `VITE_SITE_URL=https://truthtrace.ai`                                                 |
| Required Worker date          | `2026-07-15`                                                                          |
| Green release-gate run        | `https://github.com/rvalentz292/truthtrace-evidence-clarity/actions/runs/29510743848` |
| Green release-gate job        | `87663236467`                                                                         |
| Current synchronization state | **NOT SYNCHRONIZED**                                                                  |
| Current publication state     | **NOT PUBLISHED BY THIS EXECUTION**                                                   |

Commit `4fc4f133be2b67d077325b26cf2d9dc23f9eb756` is the exact deployable candidate and the SHA Lovable must import. It retains the UI implementation from milestone `4f7c5f09a88ce35bd0406a8bb6b690a90cb6769a` and adds deterministic release configuration: a root Nitro/Cloudflare date pin, UTC build normalization, and generated-artifact assertion. Final client asset names and byte sizes are unchanged, providing byte-equivalent UI verification while preserving the original browser, screenshot, and Lighthouse provenance.

Any later documentation-only branch HEAD must be reported externally by Git and draft PR #6 because a commit cannot contain its own SHA. A later docs commit is not a substitute for the exact deployable candidate identity in this handoff.

## Expected implementation files

```text
.github/workflows/homepage-release-gate.yml
.prettierignore
nitro.config.ts
package.json
scripts/validate-publication.mjs
scripts/validate-release-surface.mjs
scripts/validate-worker-artifact.mjs
src/components/site/BrandMark.tsx
src/components/site/EvidenceCommandCenter.tsx
src/components/site/HomePage.tsx
src/components/site/HomepageSections.tsx
src/components/site/Nav.tsx
src/content/homepage-evidence.json
src/lib/site-metadata.ts
src/routeTree.gen.ts
src/routes/__root.tsx
src/routes/index.tsx
src/styles.css
tests/homepage-release.test.mjs
tsconfig.json
vite.config.ts
```

UI implementation diff fingerprint: 15 files, +1,409 / -936 against baseline. Candidate release hardening updates eight focused configuration/validation files relative to the prior documentation head, with no homepage UI content change.

## Copy and metadata fingerprint

- Category: `Forensic Evidence Intelligence for Family Law`
- H1: `Turn scattered evidence into a record you can follow.`
- Boundary: `Built to support evidence review—not replace legal or professional judgment.`
- Navigation: Platform / Parents / Professionals / Trust
- Primary CTA: Explore the platform → `#command-center`
- Secondary CTA: Inspect the proof chain → `#proof-chain`
- Exactly six homepage sections.
- Title: `TruthTrace | Source-Linked Evidence Intelligence for Family Law`
- Canonical: `https://truthtrace.ai/`
- Social image: `/og.png`, 1731×909, SHA-256 `D9E70EF9C7268DE87A47F85D6FBEC5897CD44FF9D1E786624251DFA96360491F`

Representative screenshot fingerprints:

- Desktop: `F9C863915630FADB3C66DC0A8B99841C931B3EC68900E42E9D2B4175A08090FA`
- Mobile: `F7F6FDA6EB481F5BEF16E19B26C05725E0E12D6CF65654CBAC987F04AB0414A0`
- `OBS-019` command center: `0AEA89EDC31C70628DA61E1585F0D476B3567D007D28B440765598341EE23A5C`

## Expected route matrix

| Request                                                   | Required result                               |
| --------------------------------------------------------- | --------------------------------------------- |
| `/`, `/technology`, `/privacy`, `/terms`, `/contact`      | 200 and canonical apex metadata               |
| `/private-demo`                                           | 410, `noindex,nofollow,noarchive`, `no-store` |
| Random unknown route                                      | 404 and `noindex,nofollow,noarchive`          |
| `www.truthtrace.ai` HTML navigation                       | 301 to apex, preserving path/query            |
| Excluded/unknown HTML host                                | 421, `no-store`                               |
| `robots.txt`, `sitemap.xml`, manifest, favicon, `/og.png` | 200 with reviewed content/hash                |

## Exact synchronization procedure

1. In existing Lovable project `27174261-3589-4c48-bd32-0375b044b3d9`, select repository `rvalentz292/truthtrace-evidence-clarity` and branch `codex/homepage-jarvis-final-20260716`.
2. Pin/import exact deployable candidate commit `4fc4f133be2b67d077325b26cf2d9dc23f9eb756` / tree `e022f2f850b2cf05a64f000edc879268ada01f35`. Do not substitute a later documentation-only HEAD.
3. Do not import, merge, rebase, or cherry-pick draft PR #5.
4. Set public build configuration to `VITE_SITE_URL=https://truthtrace.ai`; do not make the provider hostname canonical.
5. Build a non-public preview; require generated Worker `compatibility_date` `2026-07-15`, then compare the copy, route, metadata, asset, and screenshot fingerprints above.
6. Verify how the provider presents Host to the worker. The candidate rejects the provider hostname at the application layer; custom-domain/edge handling must deliver the approved canonical host without weakening unauthorized-host rejection.
7. Verify provider analytics/visitor analytics settings and actual cookies. Do not claim source code can suppress a platform-edge security cookie.
8. Obtain explicit publication authorization only after the preview is correlated to the reviewed commit/equivalent artifact.
9. Publish the existing project; do not create a replacement project.

## Post-publish proof required

Publication may be claimed only when all of the following exist:

- Lovable/build record identifies exact candidate `4fc4f133be2b67d077325b26cf2d9dc23f9eb756` or an immutable artifact derived from it.
- Live homepage copy and screenshot fingerprints match.
- Five public routes, 404, 410, `www`, excluded host, public assets, robots, sitemap, manifest, and social image independently pass.
- Live canonical/OG/Twitter metadata uses `truthtrace.ai`.
- HTTPS/TLS and HTTP→HTTPS are verified at the edge.
- Provider-set cookies and injected analytics are observed and compared with the Privacy Notice.
- No evidence-upload, intake, fake conversion, or private-demo route is exposed.

## Rollback

Keep the pre-publication Lovable deployment identifier and this baseline Git identity available:

`ac459269af22f90ebe3d9095a3add00dff426252` / `45452418fad4a55bb80ee53c6203d17d0a36d443`

If exact-SHA correlation, route policy, canonical metadata, privacy behavior, or required assets fail, stop publication or roll back to the recorded pre-publication deployment. Do not force-push or rewrite public history.
