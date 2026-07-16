# Release Verification

Deployable candidate: `4fc4f133be2b67d077325b26cf2d9dc23f9eb756` / tree `e022f2f850b2cf05a64f000edc879268ada01f35`.

UI, browser, screenshot, and Lighthouse evidence milestone: `4f7c5f09a88ce35bd0406a8bb6b690a90cb6769a` / tree `78e08ec7aab85d944c64ceff6eaa9f7a14d72549`. Commit `4fc4f133be2b67d077325b26cf2d9dc23f9eb756` changes release configuration and validation only. Its final local rebuild emitted the same content-addressed client asset names and byte sizes as the UI milestone, providing byte-equivalent UI verification without relabeling earlier captures.

Runtime: official Bun 1.3.14 (`0d9b296a`) from the Bun GitHub release, isolated at `C:\Users\TruthTrace\.cache\codex-runtimes\bun-1.3.14\bun-windows-x64\bun.exe`. No package or lockfile was changed.

## Required commands

| Command                         | Exit | Final result | Warnings / remediation                                                                                                                                                           |
| ------------------------------- | ---: | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bun install --frozen-lockfile` |    0 | PASS         | Initial literal attempt found no Bun on PATH. Installed verified Bun 1.3.14 in an external runtime cache; frozen install then passed.                                            |
| `bun run format:check`          |    0 | PASS         | A pre-commit run found formatting in `validate-release-surface.mjs`; Prettier wrote that file and rerun passed. Superseded draft docs were moved to ignored artifacts.           |
| `bun run lint`                  |    0 | PASS         | 0 errors, 6 existing `react-refresh/only-export-components` warnings in shared UI files.                                                                                         |
| `bun run typecheck`             |    0 | PASS         | No diagnostics.                                                                                                                                                                  |
| `bun run test`                  |    0 | PASS         | 20/20 tests. Includes real nav targets, six sections, fixture integrity, semantics, claims, routes/config, public-asset allowlist, and the pinned Worker compatibility contract. |
| `bun run build:artifact`        |    0 | PASS         | Final candidate build passed with the pinned UTC Nitro configuration. Non-blocking Vite tsconfig-path and `inlineDynamicImports` warnings remain documented.                     |
| `bun run build:publication`     |    0 | PASS         | Final publication build passed and reproduced the same content-addressed client asset names and byte sizes as the UI evidence milestone.                                         |
| `bun run release:artifact`      |    0 | PASS         | Generated `.output/server/wrangler.json` asserted exact `compatibility_date` `2026-07-15`.                                                                                       |
| `bun run check:links`           |    0 | PASS         | 21 documents, 5 entry routes, 5 public paths, 10 JS files, 410/404 policies, five apex probes, five `www` HTML redirects, and unauthorized HTML-host rejection.                  |
| `bun run audit:dependencies`    |    0 | PASS         | First isolated attempt failed because the script shells out to `bun`; adding the verified Bun directory to PATH resolved it. Final: 0 critical, 0 high, 2 moderate, 2 low.       |
| `bun run release:config`        |    0 | PASS         | Exact approved origin `https://truthtrace.ai`; root Nitro/Cloudflare pin `2026-07-15`; UTC build normalization required.                                                         |
| `bun run release:surface`       |    0 | PASS         | 32 required files and 151 tracked files; index/worktree, credential, artifact, reachable-history, and high-confidence secret checks passed.                                      |

The four audit advisories are transitive toolchain packages: moderate `brace-expansion` and `js-yaml`, low `@babel/core` and `esbuild`. The configured release gate intentionally fails only on critical/high and passed. No dependency drift was introduced.

The history scan uses `git rev-list --objects --all`, so reachable totals correctly vary with the refs present. The local staged deployable-candidate snapshot covered 418 blobs / 880 objects; the exact-candidate clean Actions clone covered 405 / 856; and the later local evidence-packaging rerun covered 426 / 894. Every scope returned no high-confidence secret pattern.

## GitHub Actions release-gate history

| Run                                                                                                                      | Candidate                                  | Result | Evidence                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`29509693741`](https://github.com/rvalentz292/truthtrace-evidence-clarity/actions/runs/29509693741)                     | Pre-remediation branch head                | FAIL   | All earlier steps passed, but preview startup failed because Nitro generated compatibility date `2026-07-16` while pinned Wrangler `4.110.0` bundled a workerd server supporting dates only through `2026-07-15`. |
| [`29510743848`](https://github.com/rvalentz292/truthtrace-evidence-clarity/actions/runs/29510743848) / job `87663236467` | `4fc4f133be2b67d077325b26cf2d9dc23f9eb756` | PASS   | Root Nitro config pins both Nitro and Wrangler dates, Vite builds in UTC, the generated artifact is asserted as `2026-07-15`, and the complete deterministic release gate passed.                                 |

The first failure was a wall-clock compatibility-date drift between build tooling and the pinned local runtime, not a homepage implementation failure. Remediation is committed in candidate `4fc4f133be2b67d077325b26cf2d9dc23f9eb756`; no dependency version changed.

## Route and host matrix

| Host/path                             | Status | Canonical / redirect                  | Robots/cache                             | Result                          |
| ------------------------------------- | -----: | ------------------------------------- | ---------------------------------------- | ------------------------------- |
| apex `/`                              |    200 | `https://truthtrace.ai/`              | indexable                                | PASS                            |
| apex `/technology`                    |    200 | route canonical                       | indexable                                | PASS                            |
| apex `/privacy`                       |    200 | route canonical                       | indexable                                | PASS                            |
| apex `/terms`                         |    200 | route canonical                       | indexable                                | PASS                            |
| apex `/contact`                       |    200 | route canonical                       | indexable                                | PASS                            |
| apex `/private-demo`                  |    410 | none                                  | `noindex,nofollow,noarchive`; `no-store` | PASS                            |
| apex random unknown                   |    404 | none                                  | `noindex,nofollow,noarchive`             | PASS                            |
| `www` `/privacy?ref=1` HTML           |    301 | `https://truthtrace.ai/privacy?ref=1` | max-age 3600                             | PASS                            |
| `truthtrace.app` HTML                 |    421 | none                                  | `no-store`                               | PASS                            |
| unknown HTML host                     |    421 | none                                  | `no-store`                               | PASS                            |
| provider hostname at candidate worker |    421 | none                                  | `no-store`                               | EXPECTED BY CURRENT HOST POLICY |
| `/og-homepage-v2.png`                 |    404 | none                                  | noindex error response                   | PASS; unsafe asset absent       |

Static assets are served before the application worker in local Wrangler, so `/og.png` returned 200 for `www` and provider Host headers. This is explicitly excluded from the HTML-host PASS and assigned to provider-edge configuration verification.

## Browser and accessibility

- Viewports 390×844, 768×1024, 1024×768, 1440×1000, and 1920×1080: PASS.
- Additional 320×900 reflow: PASS.
- Pointer/keyboard event selection, all homepage anchors/CTAs, desktop/mobile navigation, Escape/focus restoration, skip link, 44 px targets, reduced motion, forced colors, WCAG text spacing, and 200% text resize: PASS.
- Browser console and page-error log: empty.
- Hydration warnings: none observed.
- Required network assets: no failures.
- Lighthouse: mobile 98/100/100/100; desktop 100/100/100/100; CLS 0; TBT 0 ms.

These browser and Lighthouse results retain their original provenance at UI milestone `4f7c5f09a88ce35bd0406a8bb6b690a90cb6769a`. The deployable candidate's final client output is byte-equivalent by unchanged content-addressed asset names and byte sizes.

## Claim, secret, and private-data scan

- Reviewed fixture contains synthetic filenames, excerpts, identifiers, and dates only; no real family or case data.
- No private names, private messages, local source paths, `.env`, API key, private key, service-role token, fake testimonial/logo/metric/certification/telemetry, unsupported integration, custody prediction, diagnostic label, legal conclusion, or proprietary processing recipe is intentionally present in the public build.
- `.output` has no source maps, embedded application source files, GTM/Google Analytics strings, or Lovable event token.
- Release-surface scan found no high-confidence credential pattern in staged/tracked or reachable Git objects.
- Screenshots were captured only from the synthetic local production preview.

## Recorded failed attempts

Failures are not concealed or counted as final results:

1. Bun was initially unavailable on PATH; verified isolated Bun resolved it.
2. Two builds encountered EBUSY while preview child processes held `.output`; stopping only the matching in-workspace process trees resolved it.
3. Formatting initially found stale draft records and later the modified release validator; stale records were isolated and the validator formatted.
4. Dependency audit initially could not spawn `bun`; PATH was scoped to the verified runtime and the repository audit passed.
5. The first 200% text probe found command-center min-content overflow/truncation; layout/shrink/wrap fixes produced a clean rerun.
6. GitHub Actions run `29509693741` reached preview startup but rejected generated compatibility date `2026-07-16` because the pinned Wrangler runtime supported through `2026-07-15`. Root Nitro/Cloudflare date pins, UTC normalization, and a generated-artifact assertion resolved it; run `29510743848` job `87663236467` passed at candidate `4fc4f133be2b67d077325b26cf2d9dc23f9eb756`.
