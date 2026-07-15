# TruthTrace Homepage Release Checklist — 2026-07-15

## Immutable identity

- [x] Repository: `rvalentz292/truthtrace-evidence-clarity`.
- [x] Branch: `homepage-final-publication-gate-20260715`.
- [x] Starting `main`: `1b5530784b564b679f733f77ff40aa7f7da53978`.
- [x] Pre-publication SHA: `df6647616901b2e5eb2dc1d16255ffcc8140a78d`.
- [x] Publication candidate: `8fca95f914fe463da89073aa7e97607d59f0a9ad`.
- [ ] Final PR head recorded after the documentation-only commit.
- [x] Local annotated tag `homepage-public-candidate-20260715` points exactly to the publication candidate and remains unpushed while blocked.
- [x] PR #3 closed with the exact supersession comment; not merged or deployed.
- [x] PR #4 is the sole draft candidate.

## Candidate-quality gates

- [x] Frozen Bun 1.3.14 install; lockfile unchanged.
- [x] Format check.
- [x] Lint: 0 errors; 6 existing generic Fast Refresh warnings.
- [x] Typecheck.
- [x] Tests: 10/10.
- [x] Exact `https://truthtrace.ai` publication configuration.
- [x] Production artifact build.
- [x] Publication build.
- [x] Local link/route/runtime validation.
- [x] No `.map`, `sourceMappingURL=`, or `sourcesContent` production output.
- [x] Dependency threshold: 0 critical, 0 high; 2 moderate and 2 low recorded.
- [x] Current staged/tree and reachable-history high-confidence secret checks.
- [x] No tracked non-example environment file, credential container, or generated artifact.
- [x] Candidate GitHub Actions run `29384390019` passed on exact SHA `8fca95f914fe463da89073aa7e97607d59f0a9ad`.
- [ ] GitHub Actions passes again on the final documentation-only PR head. **Status:** pending that commit.

## Public configuration and routing

- [x] Founder-approved canonical family-law origin is `https://truthtrace.ai`.
- [x] `truthtrace.app` is absent from public metadata and is not a redirect target.
- [x] Canonical, Open Graph, Twitter, manifest, robots, and sitemap are internally consistent.
- [x] Sitemap contains only `/` and `/technology`.
- [x] Candidate source has no form, upload, intake, account, pilot application, unverified email, or configured analytics.
- [x] Unknown HTML routes return a true noindex 404 locally.
- [x] `/private-demo` returns a true noindex 410 locally and is absent from navigation/sitemap.
- [x] Apex/`www`, `.app`, trailing-dot, and arbitrary-host HTML probes pass locally.
- [ ] Provider/static-asset host routing, HTTP→HTTPS, TLS, cache, cookie, analytics, and header behavior proven on exact-SHA staging. **Owner:** hosting administrator. **Status:** BLOCKED/P0.
- [ ] `/privacy`, `/terms`, `/contact`, and `/contact-us` content/ownership/treatment approved and implemented. **Owners:** founder + legal/privacy/contact + SEO. **Status:** BLOCKED/P0.
- [ ] `/about` retirement approved by founder/product/counsel/SEO or an approved replacement is supplied. **Status:** BLOCKED/P0.

## Accessibility, interaction, and performance

- [x] Required viewport matrix: 360×800, 390×844, 768×1024, 1024×768, 1366×768, 1440×900, 1920×1080.
- [x] No horizontal overflow at the required viewports.
- [x] Keyboard skip link reaches and focuses `main`.
- [x] Mobile menu opens into its first link; Escape closes and restores trigger focus.
- [x] Representative CTA, finding, and role controls operate with correct pressed state.
- [x] Reduced-motion emulation applies 0.001 ms maximum motion duration and auto scrolling.
- [x] Forced-colors emulation preserves critical text and removes gradient masking.
- [x] 200% reflow equivalent at 640 CSS px has no horizontal overflow.
- [x] Lighthouse: performance 98, accessibility 100, best practices 100, SEO 100.
- [ ] Qualified screen-reader, Safari/WebKit, and physical-device audit. **Status:** P2 follow-up; not a substitute for the automated pass.

## Production identity and operations

- [x] DNS provider: Hostinger; apex and `www` current A record `185.158.133.1`.
- [x] Current hosting provider: Lovable behind Cloudflare.
- [x] Authenticated workspace: `Ryan's Lovable`, ID `y7ZA6ipwj5Jqti1HCn6I`, owner role.
- [x] Current live project: `truthtrace-website`, ID `9dc000d6-e489-4b8f-975b-cf1d2bfdf3a7`.
- [x] Current live private repository: `rvalentz292/truthtrace-website`.
- [x] Current live SHA: `84a49ca4e38d21322e137e5135d974c0ddbd2f66`.
- [ ] Lovable active production branch directly verified. **Status:** UNVERIFIED/P0; GitHub `main` correlation alone is insufficient.
- [ ] Immutable current production deployment ID and publish timestamp. **Status:** BLOCKED/P0.
- [ ] Exact PR #4 candidate-to-provider project/repository/branch mapping. **Status:** BLOCKED/P0.
- [ ] Exact deploy command and required operator permission. **Status:** BLOCKED/P0.
- [ ] Exact rollback command, immutable prior deployment, and rollback permission. **Status:** BLOCKED/P0.
- [ ] Isolated provider preview from candidate SHA/artifact checksum. **Status:** BLOCKED/P0.
- [ ] Rollback rehearsal restores the recorded prior deployment and passes verification. **Status:** BLOCKED/P0.

## Legal, privacy, claims, and history

- [x] Candidate copy and representative examples remain qualified and browse-only.
- [x] No real family evidence or personal information found on the public surface.
- [x] No legal-advice, admissibility, measured-outcome, certification, customer-count, pricing, or testimonial claim added.
- [x] Public-history inventory H-01 through H-11 recorded without history rewrite or ref deletion.
- [ ] Patent counsel disposition or authorized-owner waiver recorded. **Status:** COUNSEL REVIEW REQUIRED/P0.
- [ ] Moderate/low dependency advisories remediated or time-bounded acceptance recorded. **Status:** P1.
- [ ] Browse-only no-contact/no-analytics posture explicitly accepted or a separately reviewed mechanism approved. **Status:** P1.

## Publication decision

- [ ] Production authorization granted.
- [ ] Merge authorized.
- [ ] DNS/cutover authorized.
- [ ] Candidate tag push authorized.

Current checklist verdict: **BLOCKED**. Passing repository and CI gates does not satisfy the unchecked provider, route, staging, rollback, and counsel gates.
