# TruthTrace Homepage Release Checklist — 2026-07-15

## Immutable identity

- [x] Repository: `rvalentz292/truthtrace-evidence-clarity`.
- [x] Branch: `homepage-final-publication-gate-20260715`.
- [x] Starting `main`: `1b5530784b564b679f733f77ff40aa7f7da53978`.
- [x] Pre-publication SHA: `df6647616901b2e5eb2dc1d16255ffcc8140a78d`.
- [x] Publication candidate: `04035bd053d61aec308282a9a861c3da94285fc2`.
- [ ] Final PR head recorded after the documentation-only commit.
- [x] Local annotated tag `homepage-public-candidate-20260715`, object `92ddaa075e9ea6b13ed76bf686737986a54a7b62`, peels exactly to the publication candidate and remains unpushed while blocked.
- [x] PR #3 closed with the exact supersession comment; not merged or deployed.
- [x] PR #4 is the sole draft candidate.

## Candidate-quality gates

- [x] Frozen Bun 1.3.14 install; lockfile unchanged.
- [x] Format check.
- [x] Lint: 0 errors; 6 existing generic Fast Refresh warnings.
- [x] Typecheck.
- [x] Tests: 14/14.
- [x] Exact `https://truthtrace.ai` publication configuration.
- [x] Production artifact build.
- [x] Publication build.
- [x] Local link/route/runtime validation: 20 documents, 5 entry routes, 5 required assets, and 9 JavaScript files.
- [x] No `.map`, `sourceMappingURL=`, or `sourcesContent` production output.
- [x] Dependency threshold: 0 critical, 0 high; 2 moderate and 2 low recorded.
- [x] Implementation-candidate staged/tree and reachable-history high-confidence secret checks: 290 unique blobs across 639 reachable objects; final docs-only head rescan remains required below.
- [x] No tracked non-example environment file, credential container, or generated artifact.
- [x] Candidate GitHub Actions run `29387686387`, job `87264243575`, completed `2026-07-15T03:55:45Z` after passing on exact SHA `04035bd053d61aec308282a9a861c3da94285fc2`.
- [x] Candidate artifact: 50 files, 2,930,912 bytes, aggregate SHA-256 `688fc68f5466606c709d0a18033031d4840d6b165b394ea0357b226a023d0ea6`.
- [x] Evidence retained under `artifacts/homepage-cutover-20260715/`: 18 covered files; `SHA256SUMS.txt` SHA-256 `15409ace13507e65966643d80a3562b23268060c7bcc24dde4bb9f7dc311db0b`.
- [ ] GitHub Actions passes again on the final documentation-only PR head. **Status:** pending that commit.

## Public configuration and routing

- [x] Founder-approved canonical family-law origin is `https://truthtrace.ai`.
- [x] `truthtrace.app` is absent from public metadata and is not a redirect target.
- [x] Canonical, Open Graph, Twitter, manifest, robots, and sitemap are internally consistent.
- [x] Sitemap contains exactly `/`, `/technology`, `/privacy`, `/terms`, and `/contact`.
- [x] All five sitemap routes return 200 locally.
- [x] Approved 2026-07-15 TruthTrace Website Privacy Notice and TruthTrace Website Terms of Use are implemented at `/privacy` and `/terms`.
- [x] `/contact` preserves the exact approved no-channel boundary.
- [x] Candidate source has no form, upload, intake, account, pilot application, unverified email, configured analytics, or Lovable reporting hook.
- [x] Candidate source and built JavaScript contain no concrete Google/Lovable tracking tokens; provider injection remains an exact-staging check.
- [x] Unlisted HTML routes, including `/contact-us` and `/about`, return a true noindex 404 locally.
- [x] `/private-demo` returns a true noindex 410 locally and is absent from navigation, page metadata, sitemap, and public links.
- [x] Apex/`www`, `.app`, trailing-dot, and arbitrary-host HTML probes pass locally; the application worker returns a path/query-preserving 301 from `www` to apex.
- [ ] Provider/static-asset host routing, HTTP→HTTPS, TLS, cache, cookie, analytics, and header behavior proven on exact-SHA staging. **Owner:** hosting administrator. **Status:** BLOCKED/P0.

## Accessibility, interaction, and performance

- [x] Fresh exact-candidate homepage checks cover 360×800, 390×844, 768×1024, 1024×768, 1366×768, 1440×900, and 1920×1080; all five public routes also pass at 360 and 1280 px.
- [x] No horizontal overflow at any fresh checked viewport.
- [x] Fresh candidate keyboard skip-link activation reaches and focuses `main`.
- [x] Fresh mobile-menu focus entry/Escape restoration and primary/secondary CTA target checks pass; representative finding/role controls remain covered by implementation tests and the earlier baseline.
- [x] Reduced-motion emulation applies 0.001 ms maximum motion duration and auto scrolling.
- [x] Forced-colors emulation preserves critical text and removes gradient masking.
- [x] 200% reflow equivalent at 640 CSS px has no horizontal overflow.
- [x] Lighthouse: performance 98, accessibility 100, best practices 100, SEO 100; LCP 1,981 ms, CLS 0, TBT 0 ms.
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
- [x] Browse-only no-channel contact/no-analytics posture explicitly approved in the 2026-07-15 first-cutover route decision and implemented without a Lovable reporting hook or concrete tracking tokens.

## Publication decision

- [ ] Production authorization granted.
- [ ] Merge authorized.
- [ ] DNS/cutover authorized.
- [ ] Candidate tag push authorized.

Current checklist verdict: **BLOCKED**. Passing repository and CI gates does not satisfy the unchecked provider, staging, rollback, and counsel gates.
