# Performance and SEO Report

## Lighthouse 13.4.0

Run against the local production worker after the final accessibility fixes at UI evidence milestone `4f7c5f09a88ce35bd0406a8bb6b690a90cb6769a`. The Lighthouse artifacts and screenshots retain that original provenance and have not been relabeled.

| Profile | Performance | Accessibility | Best Practices |     SEO |     FCP |     LCP |  TBT | CLS | Speed Index |
| ------- | ----------: | ------------: | -------------: | ------: | ------: | ------: | ---: | --: | ----------: |
| Mobile  |      **98** |       **100** |        **100** | **100** | 1.904 s | 1.904 s | 0 ms |   0 |     1.904 s |
| Desktop |     **100** |       **100** |        **100** | **100** | 0.447 s | 0.447 s | 0 ms |   0 |     0.447 s |

Artifacts:

- `lighthouse-mobile.json` — SHA-256 `7A54C69D894766AE35BAB0F7CAC23BC5E1E6D6FF83A0246102805CE7D004ACD3`
- `lighthouse-desktop.json` — SHA-256 `74EC157183E36CEE56E9958D5FFC15817426F2C2E144F88936ACB2C67A35441D`

The mobile score exceeds the 95 target. Lighthouse noted potential render-blocking/unused-framework-JavaScript opportunities but no avoidable blocking error. No runtime package was added for homepage behavior.

Deployable candidate `4fc4f133be2b67d077325b26cf2d9dc23f9eb756` / tree `e022f2f850b2cf05a64f000edc879268ada01f35` contains release-configuration and validation changes only. Both final local builds reproduced the same content-addressed client asset names and byte sizes shown below, establishing byte-equivalent client UI correlation to the Lighthouse milestone.

## Production build

Representative final client output:

| Asset                 |       Raw |      Gzip |
| --------------------- | --------: | --------: |
| `styles-SIxh3NHE.css` |  97.45 kB |  15.82 kB |
| `index-BEpwGSYm.js`   | 347.46 kB | 109.26 kB |
| `Nav-CXw2164v.js`     |  35.20 kB |  11.73 kB |

The names and sizes above are unchanged in final `build:artifact` and `build:publication` output at deployable candidate `4fc4f133be2b67d077325b26cf2d9dc23f9eb756`.

Build warnings are non-blocking and documented: Vite now has native tsconfig-path support, and `inlineDynamicImports` is ignored when code splitting is enabled. Dependency refactoring was not performed without a concrete release need.

## Deterministic Worker release gate

- Initial GitHub Actions run [`29509693741`](https://github.com/rvalentz292/truthtrace-evidence-clarity/actions/runs/29509693741) failed only at preview startup: Nitro generated `2026-07-16`, but pinned Wrangler `4.110.0` supported compatibility dates through `2026-07-15`.
- Candidate `4fc4f133be2b67d077325b26cf2d9dc23f9eb756` adds a root Nitro/Cloudflare `2026-07-15` pin, UTC build normalization, and a generated-Worker artifact assertion.
- Final local `build:artifact`, `build:publication`, and link-matrix validation passed; the generated Worker date is exactly `2026-07-15`.
- GitHub Actions run [`29510743848`](https://github.com/rvalentz292/truthtrace-evidence-clarity/actions/runs/29510743848), job `87663236467`, passed the complete release gate.

The largest public image is the reviewed social graphic `/og.png` at 1,237,110 bytes and 1,731×909. It is not loaded by the homepage rendering path. SHA-256: `D9E70EF9C7268DE87A47F85D6FBEC5897CD44FF9D1E786624251DFA96360491F`.

## SEO and publication matrix

| Item                 | Expected candidate value                                                 | Verification                                       |
| -------------------- | ------------------------------------------------------------------------ | -------------------------------------------------- |
| Homepage title       | `TruthTrace \| Source-Linked Evidence Intelligence for Family Law`       | Source, browser, Lighthouse PASS                   |
| Homepage description | Approved human-review description                                        | Source/browser PASS                                |
| Canonical            | `https://truthtrace.ai/` and route-specific equivalents                  | Five public routes PASS                            |
| Open Graph URL       | Canonical route URL                                                      | Source/head PASS                                   |
| Open Graph image     | `https://truthtrace.ai/og.png`                                           | 200 on apex local worker; hash/dimensions verified |
| OG dimensions        | 1731×909                                                                 | Metadata and file verified                         |
| OG/Twitter alt       | `TruthTrace — source-linked evidence intelligence for family-law review` | Source/head PASS                                   |
| Twitter card         | `summary_large_image`                                                    | Source/head PASS                                   |
| Favicon              | `/favicon.svg`                                                           | 200                                                |
| Manifest             | Canonical ID/start/scope, reviewed description/icon                      | 200 and link checker PASS                          |
| Robots               | Allow public crawl; canonical sitemap                                    | 200 and content PASS                               |
| Sitemap              | Exactly five canonical public routes                                     | 200/content/link checker PASS                      |
| Indexable routes     | `/`, `/technology`, `/privacy`, `/terms`, `/contact`                     | 200 with canonical                                 |
| Retired route        | `/private-demo`                                                          | 410, `noindex,nofollow,noarchive`, `no-store`      |
| Unknown route        | Random path                                                              | True 404 and `noindex,nofollow,noarchive`          |

No structured data was added because no additional organization/product facts were sufficiently supported.

## Output and tracking scan

- Source maps in `.output`: **0**.
- `GTM-`, `googletagmanager`, `google-analytics`, and `__lovableEvents` in `.output`: **0**.
- High-confidence credential patterns scanned: **0 findings**.
- Unsafe claim patterns including `source-verifiable`, court-ready, custody prediction, and parental-alienation language: **0 findings**.
- Two literal `mailto:` protocol strings occur inside bundled React Router/TanStack protocol-allowlist code; there is no rendered `mailto:` link and no application-source contact address.
- Public root inventory is exactly `_headers`, `favicon.svg`, `og.png`, `robots.txt`, `site.webmanifest`, and `sitemap.xml`.

## Edge limitations

The local worker proves application HTML behavior, not final TLS, HTTP→HTTPS, DNS, CDN, provider-cookie, provider-analytics, or static-asset host normalization. In local Wrangler, `/og.png` was served by the static-asset layer for `www` and provider Host headers before the application worker. Those items require provider configuration and post-publish verification; they are not reported as local PASS.
