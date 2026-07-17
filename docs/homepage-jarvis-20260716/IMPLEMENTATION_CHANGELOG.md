# Implementation Changelog

Homepage/UI implementation milestone commit: `4f7c5f09a88ce35bd0406a8bb6b690a90cb6769a`

Homepage/UI implementation milestone tree: `78e08ec7aab85d944c64ceff6eaa9f7a14d72549`

Initial evidence-wrapper commit: `f595f0148d7bbc16d42b0e13037b65b4fb7e28dd`

Initial evidence-wrapper tree: `f5c42b43db6d1bb5260febcef440d852ca37814c`

Deployable candidate commit: `4fc4f133be2b67d077325b26cf2d9dc23f9eb756`

Deployable candidate tree: `e022f2f850b2cf05a64f000edc879268ada01f35`

Homepage/UI milestone diff against baseline `ac459269…`: 15 files, +1,409 / -936.

The later documentation-only branch head is reported externally by Git and draft PR #6. It cannot contain its own SHA/tree, and it does not replace the recorded deployable candidate identity above.

## Homepage architecture

- Reduced `HomePage.tsx` from a monolith to selection state and composition.
- Added `EvidenceCommandCenter.tsx` for the coordinated sources/chronology/proof interaction.
- Added `HomepageSections.tsx` for the six-section narrative, footer, and private display helpers.
- Added `BrandMark.tsx` to share the existing evidence-trace mark.
- Added `homepage-evidence.json` with three sanitized sources and three referentially consistent events.
- Shared the selected event between the hero summary, command center, and proof chain.

## Interaction and accessibility

- Added pointer selection plus Arrow Left/Right/Up/Down, Home, and End chronology behavior.
- Added `aria-pressed`, `aria-controls`, a polite live announcement, linked-source state, and color-independent text labels.
- Added semantic region/group, H2→H3→H4 panel hierarchy, definition lists, and named asides/articles.
- Added focus transfer for all homepage fragment actions, mobile-menu first focus, Escape close, and trigger restoration.
- Standardized visible actions to at least 44×44 CSS pixels.
- Added explicit reduced-motion and forced-colors focus/pressed/linked-state behavior.
- Fixed 200% text reflow by removing source-name truncation and allowing command-center grid items to shrink/wrap.

## Copy, claims, and information architecture

- Replaced universal verification/preservation language with bounded demonstration and design-objective language.
- Restored the concise six-section structure and restrained Platform/Parents/Professionals/Trust navigation.
- Preserved an honest browse-only conversion posture with real internal links only.
- Separated parent and professional responsibilities and made each apparent action actionable.

## Metadata and release controls

- Updated homepage/root title and description to the approved source-linked positioning.
- Updated Open Graph/Twitter alternative text while retaining `/og.png` and canonical `truthtrace.ai`.
- Added `resolveJsonModule` for the typed illustrative fixture.
- Strengthened tests to 20 contracts, including fixture integrity, actual nav targets, semantic interaction, prohibited claims, an exact public-asset allowlist, and the pinned worker-compatibility contract.
- Expanded the required release surface to 32 files, including all 15 Jarvis records and the deterministic worker configuration/validator.
- Preserved the generated TanStack Start registration update produced by the current toolchain.

## Release determinism and CI remediation

- Pinned Nitro/Cloudflare compatibility date `2026-07-15` in repository-controlled Nitro/Vite configuration exercised by local builds and GitHub Actions.
- Added a worker-artifact validator and build command so preview cannot start with a missing or drifted compatibility date.
- Kept package versions and the lockfile unchanged; `package.json` gained only the validation script entry.
- Passed 20/20 tests and the deterministic public-release gate in [GitHub Actions run `29510743848`](https://github.com/rvalentz292/truthtrace-evidence-clarity/actions/runs/29510743848), job `87663236467`.
- Deployable-candidate release-surface verification covered 32 required files and 151 tracked files with no forbidden path or high-confidence secret finding; ref-scoped history totals are recorded in `RELEASE_VERIFICATION.md`.

## Deliberately unchanged

- Canonical public origin and five-route sitemap.
- Privacy/Terms effective July 15, 2026.
- `/private-demo` 410 policy, true 404, `www` HTML redirect, and 421 host rejection.
- APIs, auth, database, Supabase, storage, evidence processing, model configuration, private prompts, and taxonomy systems.
- Package versions and lockfile.
- Lovable project, provider settings, domain mapping, and publication state.

## Removed from release surface

- Superseded untracked `homepage-master-20260716` records.
- Unsafe draft `public/og-homepage-v2.png` claiming a “source-verifiable case record.”
- Source comments/dead strings used only to satisfy regex navigation tests.
