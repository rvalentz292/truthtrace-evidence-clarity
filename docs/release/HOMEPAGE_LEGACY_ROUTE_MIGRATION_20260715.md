# TruthTrace Homepage Legacy Route Migration Matrix - 2026-07-15

## Executive result

**BLOCKED**

The live-route observations below describe the legacy Lovable deployment at the
recorded observation window. Its sitemap named ten HTML routes, but its client
router implemented only `/` and `/about`; the remaining tested paths returned an
HTTP `200` application shell and rendered a client-side `404` view. Those results
remain historical evidence and are not the approved first-cutover behavior.

The founder has now approved the first-cutover route decision. Candidate
`04035bd053d61aec308282a9a861c3da94285fc2` implements real `200` pages at `/`,
`/technology`, `/privacy`, `/terms`, and `/contact`; a `410` tombstone at
`/private-demo`; and true `404` responses for the named legacy routes that have no
separately approved equivalent. The Privacy Notice and Website Terms of Use use
their exact approved text with an effective date of July 15, 2026. The Contact page
uses the exact approved static boundary and exposes no form, input, email address,
phone number, upload, or intake path.

The route decision is approved and the local implementation is complete, but
production cutover remains **BLOCKED** until provider identity and whole-host edge
behavior, exact-SHA staging, rollback, and counsel gates are satisfied.

No live route, DNS record, redirect, sitemap, robots rule, or deployment was changed
during this inventory.

## Scope and authority

- Founder-approved canonical family-law product origin:
  `https://truthtrace.ai`.
- `truthtrace.app` is outside this release and is not a redirect or canonical
  destination.
- Release posture is browse-only: no evidence upload, case intake, accounts, pilot
  form, family-law-fact collection, unverified email address, analytics, or cookies
  without separate approval.
- PR #4 is the sole release candidate. This matrix does not authorize merge or
  deployment.
- Approved migration rules applied here:
  - preserve `/privacy` and `/terms` at the same URLs with the exact approved
    July 15, 2026 content;
  - replace `/contact` at the same URL with the approved static browse-only
    contact boundary; no contact channel is published yet;
  - retire `/private-demo` without a replacement;
  - use `301` only for a proven permanent equivalent;
  - use `410` only for an explicitly retired resource with no replacement;
  - return a real `404` for unknown URLs rather than redirecting them home.

`PRESERVE` now means same-path legal-policy continuity using the approved text; it
does not mean retaining the legacy soft-404 shell, tracking, or Lovable content.

## Evidence and method

Observation window: `2026-07-15T01:29:01Z` through
`2026-07-15T01:32:54Z`.

The audit used direct, read-only HTTPS `GET` requests with redirects followed and
recorded the final URL, status, content type, and redirect count. It then inspected
the HTML shell and its exact shipped JavaScript asset to distinguish transport
status from client-rendered behavior.

| Evidence               | Observed result                                                                                                                                                                                                                                         |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Homepage HTML          | HTTP `200`; title `TruthTrace - AI-Powered Legal Clarity Tool`; loads `/assets/index-BRT9uDE2.js`                                                                                                                                                       |
| Live client router     | Exact routes `/` and `/about`, followed by wildcard `*` client 404                                                                                                                                                                                      |
| Wildcard view          | Displays `404`, `Oops! Page not found`, and `Return to Home`, but the server response remains `200`                                                                                                                                                     |
| HTML redirect behavior | Zero redirects for every named HTML path tested                                                                                                                                                                                                         |
| HTML response platform | `Server: cloudflare`; `Cache-Control: no-cache, must-revalidate, max-age=0`                                                                                                                                                                             |
| Live analytics         | HTML embeds Google Tag Manager `GTM-M6QXKM2C`, Google Analytics `G-D6SXEJ3K9D`, `/~flock.js`, and `/__l5e/events.js`                                                                                                                                    |
| Live cookie behavior   | HTML responses set a Cloudflare `__cf_bm` cookie                                                                                                                                                                                                        |
| Root contact surface   | Homepage bundle contains `info@truthtrace.ai`, contact-form fields, and a send button; no destination ownership or submission behavior was verified                                                                                                     |
| Root waitlist surface  | Navigation opens an external Google Form; it is not an approved browse-only candidate surface                                                                                                                                                           |
| `robots.txt`           | HTTP `200`; allows `/`, disallows `/dev`, `/staging`, `/test`, and names the sitemap                                                                                                                                                                    |
| `sitemap.xml`          | HTTP `200`; lists ten URLs, all with `lastmod` `2025-09-27`                                                                                                                                                                                             |
| Candidate route tree   | Candidate implements `/`, `/technology`, `/privacy`, `/terms`, and `/contact` as `200`; `/private-demo` as `410`; named non-equivalent legacy routes and unknown paths as true `404`                                                                    |
| Candidate CI           | GitHub Actions run `29387686387` succeeded on candidate `04035bd053d61aec308282a9a861c3da94285fc2`; tests passed `14/14`                                                                                                                                |
| Candidate telemetry    | Lovable's error hook was removed; no analytics or cookies are approved; built JavaScript was scanned for the removed hook and named Google/Lovable/Hotjar/Segment/PostHog tracking tokens                                                               |
| Candidate evidence     | Publication artifact: 50 files, 2,930,912 bytes, aggregate SHA-256 `688fc68f5466606c709d0a18033031d4840d6b165b394ea0357b226a023d0ea6`; evidence: 18 files, checksum-manifest SHA-256 `15409ace13507e65966643d80a3562b23268060c7bcc24dde4bb9f7dc311db0b` |
| Lighthouse             | Performance 98; Accessibility 100; Best Practices 100; SEO 100                                                                                                                                                                                          |

The interactive browser backend was unavailable during this sub-audit. The route
classification does not depend on visual inference: it is derived from live HTTP
responses and the production bundle's explicit route table and visible fallback
copy. A later staging pass must still confirm the behavior in a real browser.

## Historical live named route inventory

At the recorded observation window, the legacy live wildcard made infinitely many
arbitrary HTML paths transport-reachable.
The table below is the exhaustive finite named surface discovered from the current
sitemap, current router, current robots rules, release requirements, and contact
alias logic. The tested random path records the wildcard behavior for all other
unknown URLs.

| Current URL                                                          | Source                               | Current HTTP result      | Current page purpose / rendered behavior                                                                                                                                                                             |
| -------------------------------------------------------------------- | ------------------------------------ | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `https://truthtrace.ai/`                                             | Sitemap and router                   | `200`, HTML, 0 redirects | Implemented legacy marketing homepage for an AI family-law/evidence tool; exposes waitlist and contact surfaces and unqualified outcome claims.                                                                      |
| `https://truthtrace.ai/features`                                     | Sitemap                              | `200`, HTML, 0 redirects | Declared feature-page URL, but no client route exists; renders the wildcard 404 view.                                                                                                                                |
| `https://truthtrace.ai/pricing`                                      | Sitemap                              | `200`, HTML, 0 redirects | Declared pricing-page URL, but no client route exists; renders the wildcard 404 view.                                                                                                                                |
| `https://truthtrace.ai/demo`                                         | Sitemap                              | `200`, HTML, 0 redirects | Declared demo-page URL, but no client route exists; renders the wildcard 404 view.                                                                                                                                   |
| `https://truthtrace.ai/waitlist`                                     | Sitemap                              | `200`, HTML, 0 redirects | Declared waitlist-page URL, but no client route exists; renders the wildcard 404 view. The homepage separately links to an external Google Form.                                                                     |
| `https://truthtrace.ai/blog`                                         | Sitemap                              | `200`, HTML, 0 redirects | Declared blog URL, but no client route exists; renders the wildcard 404 view.                                                                                                                                        |
| `https://truthtrace.ai/about`                                        | Sitemap and router                   | `200`, HTML, 0 redirects | Implemented legacy mission/vision page. It contains strong claims about parental alienation, manipulation/abuse analysis, undeniable evidence, and court outcomes that were not approved for the repaired candidate. |
| `https://truthtrace.ai/contact`                                      | Sitemap and navigation logic         | `200`, HTML, 0 redirects | Intended contact URL, but no client route exists; renders the wildcard 404 view. It is not the homepage's `#contact` section.                                                                                        |
| `https://truthtrace.ai/privacy`                                      | Sitemap                              | `200`, HTML, 0 redirects | Intended privacy-policy URL, but no client route exists; renders the wildcard 404 view. No policy content was observed.                                                                                              |
| `https://truthtrace.ai/terms`                                        | Sitemap                              | `200`, HTML, 0 redirects | Intended terms URL, but no client route exists; renders the wildcard 404 view. No terms content was observed.                                                                                                        |
| `https://truthtrace.ai/technology`                                   | Required check; candidate route      | `200`, HTML, 0 redirects | No legacy client route; renders the wildcard 404 view. The candidate provides the approved representative technology page at this path.                                                                              |
| `https://truthtrace.ai/private-demo`                                 | Required check                       | `200`, HTML, 0 redirects | No legacy client route; renders the wildcard 404 view. Despite the 404 UI, the transport status makes the URL a soft 404.                                                                                            |
| `https://truthtrace.ai/contact-us`                                   | Discovered in navigation state logic | `200`, HTML, 0 redirects | Recognized as a contact-selection alias by navigation logic, but no client route exists; renders the wildcard 404 view.                                                                                              |
| `https://truthtrace.ai/dev`                                          | `robots.txt`                         | `200`, HTML, 0 redirects | Robots-disallowed path with no client route; renders the wildcard 404 view. Robots exclusion is not access control.                                                                                                  |
| `https://truthtrace.ai/staging`                                      | `robots.txt`                         | `200`, HTML, 0 redirects | Robots-disallowed path with no client route; renders the wildcard 404 view. Robots exclusion is not access control.                                                                                                  |
| `https://truthtrace.ai/test`                                         | `robots.txt`                         | `200`, HTML, 0 redirects | Robots-disallowed path with no client route; renders the wildcard 404 view. Robots exclusion is not access control.                                                                                                  |
| `https://truthtrace.ai/nonexistent-route-publication-audit-20260715` | Wildcard probe                       | `200`, HTML, 0 redirects | Arbitrary nonexistent route; renders the wildcard 404 view. This proves the current catch-all soft-404 behavior.                                                                                                     |
| `https://truthtrace.ai/robots.txt`                                   | Required check                       | `200`, `text/plain`      | Allows the site, disallows `/dev`, `/staging`, `/test`, and points at `https://truthtrace.ai/sitemap.xml`.                                                                                                           |
| `https://truthtrace.ai/sitemap.xml`                                  | Required check                       | `200`, `text/xml`        | Declares `/`, `/features`, `/pricing`, `/demo`, `/waitlist`, `/blog`, `/about`, `/contact`, `/privacy`, and `/terms`. Eight of those ten paths currently render the client 404 view.                                 |

## Approved first-cutover migration matrix

The only approved `301` is the one-hop `www.truthtrace.ai` to apex redirect, which
must preserve the path and query string. No legacy content route has an approved
equivalent destination, and no `302` is approved. In particular, `/features` is not
treated as equivalent to `/technology`.

| Current URL / host                   | Approved destination or behavior        | Approved decision / HTTP result | Decision status                                     | Cutover and rollback consequence                                                                                                                                                                                            |
| ------------------------------------ | --------------------------------------- | ------------------------------- | --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `https://truthtrace.ai/`             | Same URL, PR #4 homepage                | **REPLACE / 200**               | Approved; production execution blocked              | Candidate removes the legacy form, waitlist, unverified email, and Lovable error hook. No analytics or cookies are approved; provider injection remains unverified. Rollback must not silently restore the legacy surfaces. |
| `https://www.truthtrace.ai/*`        | Equivalent apex path and query          | **REDIRECT / 301**              | Approved; implemented locally                       | One path/query-preserving hop is required. Provider whole-host and static-asset edge enforcement remains unverified and must pass staging.                                                                                  |
| `https://truthtrace.ai/technology`   | Same URL, PR #4 technology page         | **REPLACE / 200**               | Approved; implemented locally; counsel gate remains | Qualified design-objective copy. Historical patent/public-disclosure treatment remains a separate counsel decision.                                                                                                         |
| `https://truthtrace.ai/privacy`      | Same URL, exact approved Privacy Notice | **PRESERVE / 200**              | Approved; implemented locally                       | Preserves the URL with exact approved browse-only content effective July 15, 2026. Policy statements are approved content, not automatic proof of provider behavior.                                                        |
| `https://truthtrace.ai/terms`        | Same URL, exact approved Website Terms  | **PRESERVE / 200**              | Approved; implemented locally                       | Preserves the URL with exact approved browse-only content effective July 15, 2026. Terms do not establish that future services currently operate.                                                                           |
| `https://truthtrace.ai/contact`      | Same URL, static contact boundary       | **REPLACE TEMPORARILY / 200**   | Approved; implemented locally                       | Contains the exact approved no-submission language and no form, input, email, phone, upload, intake, or family-information collection. No contact channel is published.                                                     |
| `https://truthtrace.ai/private-demo` | None                                    | **RETIRE / 410**                | Approved; implemented locally                       | Permanently retired, `noindex`, absent from navigation, page metadata, sitemap, and public links. Rollback must retain the tombstone.                                                                                       |
| `/features`, `/pricing`, `/demo`     | None                                    | **NOT FOUND / 404**             | Approved absent an equivalent                       | True `404`, `noindex`, no homepage redirect, and omitted from sitemap. Reconsider only after a separately approved genuinely equivalent destination exists.                                                                 |
| `/waitlist`, `/blog`, `/about`       | None                                    | **NOT FOUND / 404**             | Approved absent an equivalent                       | True `404`, `noindex`, no homepage redirect, and omitted from sitemap. This avoids restoring collection or unreviewed legacy claims.                                                                                        |
| `/contact-us`                        | None                                    | **NOT FOUND / 404**             | Approved absent an equivalent                       | `/contact` is not declared an equivalent alias for first cutover. A future redirect requires separate approval.                                                                                                             |
| `/dev`, `/staging`, `/test`          | None                                    | **NOT FOUND / 404**             | Consistent with approved unknown-route rule         | No public development, staging, or test surface; omit from sitemap.                                                                                                                                                         |
| Any other nonexistent HTML path      | None                                    | **NOT FOUND / 404**             | Approved; implemented locally                       | True transport `404` with `noindex`; never blanket-redirect unknown paths to the homepage.                                                                                                                                  |
| `https://truthtrace.ai/robots.txt`   | Same URL, route-accurate crawler policy | **REPLACE / 200**               | Approved; implemented locally                       | Must agree with the five-page public surface after provider/CDN processing and must not be treated as access control.                                                                                                       |
| `https://truthtrace.ai/sitemap.xml`  | Same URL, exact five-route sitemap      | **REPLACE / 200**               | Approved; implemented locally                       | Contains only `/`, `/technology`, `/privacy`, `/terms`, and `/contact`; excludes every `404`, `410`, staging, Lovable, and preview URL.                                                                                     |

## Fragment and external-surface treatment

Fragments are not independent HTTP routes, but they are part of the currently
reachable public experience and need an explicit cutover decision.

| Current surface                     | Observed behavior                                                  | Proposed treatment                                                                   | Consequence / rollback                                                                                                                                         |
| ----------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `https://truthtrace.ai/#contact`    | Historically loaded `/` and exposed the legacy email/form section. | The fragment is not preserved as an intake surface; the approved page is `/contact`. | Old bookmarks load the new browse-only homepage. Do not recreate the legacy form or unverified email. Rollback must not restore the legacy collection surface. |
| `https://truthtrace.ai/#contact-us` | Historical hash logic treated it like the legacy contact section.  | No alias or redirect is approved; the approved page is `/contact`.                   | Same safety constraint as `#contact`; no contact channel is implied.                                                                                           |
| External Google waitlist form       | Opened from the legacy navigation; outside `truthtrace.ai`.        | Remove the link from the candidate and do not redirect `/waitlist` to it.            | Privacy/growth owner must separately decide whether the external form remains active; this release does not modify it.                                         |

## Approved decisions and remaining execution gates

The founder-approved first-cutover decision resolves the route-policy questions:

1. `/privacy` and `/terms` preserve their URLs and serve the exact approved texts,
   both effective July 15, 2026.
2. `/contact` serves the exact approved static boundary. No verified contact
   channel, form, email, phone, upload, or intake mechanism is published.
3. `/private-demo` returns `410`; `/about`, `/contact-us`, `/features`, `/pricing`,
   `/demo`, `/waitlist`, and `/blog` return true `404` because no equivalent was
   separately approved.
4. The sitemap contains exactly the five approved `200` routes.
5. Application handling performs the single path/query-preserving `www`-to-apex
   `301`; the provider must still prove whole-host enforcement.

Production execution remains **BLOCKED** on verified provider routing, exact-SHA
staging, rollback rehearsal, and patent/public-history counsel disposition. The
route decision itself is no longer a blocker.

## Staging acceptance criteria

The exact publication candidate must pass all of the following on an isolated
non-production hostname before founder approval:

- `/`, `/technology`, `/privacy`, `/terms`, and `/contact` return transport `200`, route-accurate title/description,
  canonical URLs on `https://truthtrace.ai`, and no unapproved form, email,
  analytics, tracking, or intake.
- `/private-demo` returns transport `410` with `noindex` and no redirect.
- Unknown routes return transport `404` with `noindex`; they do not return `200`,
  redirect home, or emit the homepage canonical.
- `/features`, `/pricing`, `/demo`, `/waitlist`, `/blog`, `/about`, and
  `/contact-us` return true `404` and are absent from the sitemap.
- `/privacy` and `/terms` render the exact approved July 15, 2026 texts.
- `/contact` renders the exact approved static boundary and contains no contact
  channel, form, input, email, phone, upload, or intake.
- Every `www` path and query redirects once to the equivalent apex URL with `301`;
  HTML, static assets, and unknown routes must be tested at the provider edge.
- Every redirect, if later approved, has one exact `Location`, no chain, no loop,
  and a documented equivalence rationale. No blanket unknown-route redirect exists.
- `robots.txt` and `sitemap.xml` agree with the actual status map after CDN/edge
  processing.
- The production host does not load GTM, Google Analytics, Lovable analytics or
  error hooks, the external waitlist form, or any other unapproved collection
  surface. Candidate source removed the Lovable hook and the built JavaScript scan
  passed, but staging must prove that the provider does not inject it again.
- Any provider-injected cookie, including `__cf_bm`, has an explicit platform and
  privacy disposition before launch.

## Rollback constraint

The rollback instructions above are design requirements, not a proven operational
rollback. At the time of this inventory, the prior production deployment ID,
artifact identity, exact provider project, deployment command, and rollback command
were not recorded in this document. Restoring the whole legacy artifact would also
restore its analytics, external waitlist link, contact surface, unsafe claims, and
soft-404 behavior. Therefore a safe rollback needs both:

- a verified prior deployment target; and
- route-level safety controls that keep the `/private-demo` tombstone and real
  404 behavior in place even if an older application artifact is restored.

Until that rollback is rehearsed in isolation, rollback readiness remains
**BLOCKED**.

## Decision record

| Field                             | Value                                                                                                 |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Historical live route inventory   | Complete for the finite named surface plus wildcard behavior                                          |
| Live site modified                | No                                                                                                    |
| Candidate                         | `04035bd053d61aec308282a9a861c3da94285fc2`                                                            |
| Candidate CI                      | Run `29387686387` succeeded; tests `14/14`                                                            |
| Approved `301` redirects          | `www.truthtrace.ai` to equivalent apex path/query only                                                |
| Approved `302` redirects          | None                                                                                                  |
| Privacy and Terms content         | Exact approved texts, effective July 15, 2026                                                         |
| Contact page                      | Exact approved static boundary; no contact channel or collection surface                              |
| Approved legacy absences          | `/features`, `/pricing`, `/demo`, `/waitlist`, `/blog`, `/about`, and `/contact-us` return true `404` |
| `/private-demo`                   | Approved and implemented `410`                                                                        |
| Candidate sitemap                 | Exactly `/`, `/technology`, `/privacy`, `/terms`, `/contact`                                          |
| Provider whole-host routing       | Unverified                                                                                            |
| Exact rollback mechanism          | Unverified                                                                                            |
| Patent/public-history disposition | Counsel review required                                                                               |
| Route decision status             | **APPROVED; LOCAL IMPLEMENTATION COMPLETE**                                                           |
| Production cutover status         | **BLOCKED**                                                                                           |
