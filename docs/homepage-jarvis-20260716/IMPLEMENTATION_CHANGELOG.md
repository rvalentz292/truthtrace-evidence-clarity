# Implementation Changelog

Reviewed implementation commit: `4f7c5f09a88ce35bd0406a8bb6b690a90cb6769a`

Reviewed implementation tree: `78e08ec7aab85d944c64ceff6eaa9f7a14d72549`

Diff against baseline `ac459269…`: 15 files, +1,409 / -936.

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
- Strengthened tests to 19 contracts, including fixture integrity, actual nav targets, semantic interaction, prohibited claims, and an exact public-asset allowlist.
- Added all 15 Jarvis records to the required release-surface list.
- Preserved the generated TanStack Start registration update produced by the current toolchain.

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
