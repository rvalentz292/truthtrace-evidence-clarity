# TruthTrace Homepage Legacy Route Migration Matrix - 2026-07-15

## Executive result

**BLOCKED**

The currently live `truthtrace.ai` route surface cannot be replaced safely yet. The
live sitemap names ten HTML routes, but the shipped client router implements only
`/` and `/about`. Every other tested HTML path returns an HTTP `200` application
shell and then renders the client-side `404` view. That includes `/privacy`,
`/terms`, `/contact`, `/technology`, `/private-demo`, and a random nonexistent
path. These are soft 404s, not working pages and not transport-correct 404s.

The founder's direction requires the privacy, terms, and contact routes to be held
unchanged until their destination content and ownership are verified. The current
responses do not contain reviewed privacy, terms, or contact-page content that can
be certified for preservation. The release candidate also does not provide those
routes. Cutover therefore remains blocked until an authorized owner identifies and
approves the source content or explicitly approves another treatment.

No live route, DNS record, redirect, sitemap, robots rule, or deployment was changed
during this inventory.

## Scope and authority

- Canonical family-law product origin authorized for planning:
  `https://truthtrace.ai`.
- `truthtrace.app` is outside this release and is not a redirect or canonical
  destination.
- Release posture is browse-only: no evidence upload, case intake, accounts, pilot
  form, family-law-fact collection, unverified email address, analytics, or cookies
  without separate approval.
- PR #4 is the sole release candidate. This matrix does not authorize merge or
  deployment.
- Default migration rules applied here:
  - preserve privacy, terms, and contact routes until content and ownership are
    verified;
  - retire `/private-demo` without a replacement;
  - use `301` only for a proven permanent equivalent;
  - use `410` only for an explicitly retired resource with no replacement;
  - return a real `404` for unknown URLs rather than redirecting them home.

`PRESERVE` in this document is a publication hold, not an endorsement of the
current soft-404 implementation or its tracking. It means do not delete, replace,
or redirect the named route until the required owner has verified its content and
destination.

## Evidence and method

Observation window: `2026-07-15T01:29:01Z` through
`2026-07-15T01:32:54Z`.

The audit used direct, read-only HTTPS `GET` requests with redirects followed and
recorded the final URL, status, content type, and redirect count. It then inspected
the HTML shell and its exact shipped JavaScript asset to distinguish transport
status from client-rendered behavior.

| Evidence               | Observed result                                                                                                                                     |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Homepage HTML          | HTTP `200`; title `TruthTrace - AI-Powered Legal Clarity Tool`; loads `/assets/index-BRT9uDE2.js`                                                   |
| Live client router     | Exact routes `/` and `/about`, followed by wildcard `*` client 404                                                                                  |
| Wildcard view          | Displays `404`, `Oops! Page not found`, and `Return to Home`, but the server response remains `200`                                                 |
| HTML redirect behavior | Zero redirects for every named HTML path tested                                                                                                     |
| HTML response platform | `Server: cloudflare`; `Cache-Control: no-cache, must-revalidate, max-age=0`                                                                         |
| Live analytics         | HTML embeds Google Tag Manager `GTM-M6QXKM2C`, Google Analytics `G-D6SXEJ3K9D`, `/~flock.js`, and `/__l5e/events.js`                                |
| Live cookie behavior   | HTML responses set a Cloudflare `__cf_bm` cookie                                                                                                    |
| Root contact surface   | Homepage bundle contains `info@truthtrace.ai`, contact-form fields, and a send button; no destination ownership or submission behavior was verified |
| Root waitlist surface  | Navigation opens an external Google Form; it is not an approved browse-only candidate surface                                                       |
| `robots.txt`           | HTTP `200`; allows `/`, disallows `/dev`, `/staging`, `/test`, and names the sitemap                                                                |
| `sitemap.xml`          | HTTP `200`; lists ten URLs, all with `lastmod` `2025-09-27`                                                                                         |
| Candidate route tree   | Repository candidate implements `/` and `/technology`; its removed `/private-demo` route is absent                                                  |

The interactive browser backend was unavailable during this sub-audit. The route
classification does not depend on visual inference: it is derived from live HTTP
responses and the production bundle's explicit route table and visible fallback
copy. A later staging pass must still confirm the behavior in a real browser.

## Current named route inventory

The live wildcard makes infinitely many arbitrary HTML paths transport-reachable.
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

## Proposed migration matrix

No `301` or `302` is currently approved. There is no verified permanent equivalent
for the retired legacy URLs, and a temporary redirect would hide rather than solve
the unresolved legal/contact destination problem. In particular, `/features` must
not be redirected to `/technology` unless the product and SEO owners first verify
that the content intent is genuinely equivalent.

| Current URL                          | Proposed destination                                   | Proposed result                                      | Owner approval required                                               | Legal / privacy consequence                                                                                                                                                                                                                          | SEO consequence                                                                                                                                                                                        | Rollback behavior                                                                                                                                                               |
| ------------------------------------ | ------------------------------------------------------ | ---------------------------------------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `https://truthtrace.ai/`             | Same URL, PR #4 homepage                               | **REPLACE**                                          | Founder/publication owner; production operator                        | Removes the live waitlist, contact form, unverified email, and unsafe family-law claims from candidate source. The candidate configures no analytics, but provider-injected analytics/cookies and error hooks remain unverified until exact staging. | Preserve the canonical root while replacing title, description, and content. Validate canonical and structured metadata after staging.                                                                 | Restore the recorded prior deployment/artifact and route binding; verify the prior root body and headers. This is not executable until the prior deployment ID is known.        |
| `https://truthtrace.ai/features`     | None                                                   | **404**                                              | Product owner; SEO owner                                              | Avoids representing unverified feature content or silently mapping it to a non-equivalent page.                                                                                                                                                      | Remove from sitemap. A real 404 corrects the current soft 404; no homepage redirect.                                                                                                                   | Re-enable only from an approved prior artifact or a reviewed replacement; verify status and canonical before exposure.                                                          |
| `https://truthtrace.ai/pricing`      | None                                                   | **404**                                              | Product owner; commercial owner; SEO owner                            | Avoids implying an approved price or commercial offer.                                                                                                                                                                                               | Remove from sitemap; return real 404 with `noindex`; do not redirect home.                                                                                                                             | Restore only after approved pricing content and commercial ownership are recorded.                                                                                              |
| `https://truthtrace.ai/demo`         | None                                                   | **404**                                              | Product owner; security/privacy owner; SEO owner                      | Avoids implying a live demo, evidence intake, or account surface.                                                                                                                                                                                    | Remove from sitemap; correct soft 404 to real 404.                                                                                                                                                     | Restore only from a reviewed no-data demo or the recorded prior deployment.                                                                                                     |
| `https://truthtrace.ai/waitlist`     | None                                                   | **404**                                              | Founder; privacy owner; growth owner; SEO owner                       | Prevents unapproved lead/family-law-fact collection. The external Google Form remains out of scope and must not be linked by the candidate.                                                                                                          | Remove from sitemap; correct soft 404.                                                                                                                                                                 | Restore only after a separately approved collection notice, owner, processor, and retention plan exist.                                                                         |
| `https://truthtrace.ai/blog`         | None                                                   | **404**                                              | Content owner; SEO owner                                              | No privacy impact from the route itself; prevents publishing stale or unreviewed advice-like content.                                                                                                                                                | Remove from sitemap; preserve real unknown-route behavior.                                                                                                                                             | Restore only with approved articles, authorship, dates, and metadata.                                                                                                           |
| `https://truthtrace.ai/about`        | None                                                   | **410**, conditional on explicit retirement approval | Founder; product owner; patent counsel; legal/claims owner; SEO owner | Intentionally retires strong unverified family-law, abuse/manipulation, evidence, and court-outcome claims without carrying them into PR #4. Counsel must preserve the public-history record separately.                                             | Remove from sitemap. `410` is appropriate only after the owner confirms permanent retirement and no equivalent.                                                                                        | Revert the explicit 410 rule or restore the prior artifact only under written owner/counsel direction; re-audit claims before restoring public access.                          |
| `https://truthtrace.ai/contact`      | Same URL; destination content pending verification     | **PRESERVE** as a publication hold                   | Founder; mailbox/contact owner; privacy/legal owner; content owner    | Current response is a soft 404, not a verified contact page. Do not redirect, delete, carry forward `info@truthtrace.ai`, or add a form until ownership and data handling are approved.                                                              | Keep the URL decision frozen. Do not include it in the new sitemap unless it becomes an approved, indexable HTTP 200 page.                                                                             | Leave the legacy route binding untouched until approval. After an approved same-path replacement, restore the prior response only through the recorded prior deployment.        |
| `https://truthtrace.ai/privacy`      | Same URL; reviewed policy content pending verification | **PRESERVE** as a publication hold                   | Privacy/legal owner; founder; policy content owner                    | Current response contains no observed policy content. Cutover must not destroy or redirect the URL, but it also cannot claim that a policy was preserved. Identify the authoritative policy, version, effective date, and owner first.               | Keep URL decision frozen. Include in sitemap only if approved and served as a real indexable 200 page; otherwise do not advertise a soft 404.                                                          | Preserve the current binding until source content is verified. A later replacement must be reversible to the recorded prior deployment and policy version.                      |
| `https://truthtrace.ai/terms`        | Same URL; reviewed terms content pending verification  | **PRESERVE** as a publication hold                   | Legal owner; founder; terms content owner                             | Current response contains no observed terms. Do not redirect or delete until the authoritative terms, effective date, governing owner, and applicability are verified.                                                                               | Same treatment as `/privacy`; no sitemap entry for a soft 404.                                                                                                                                         | Preserve current binding until approval; record both old and new terms versions before any replacement.                                                                         |
| `https://truthtrace.ai/technology`   | Same URL, PR #4 technology page                        | **REPLACE**                                          | Founder/product owner; patent counsel; SEO owner                      | Publishes only the candidate's qualified design-objective and representative-workflow copy. Patent counsel must approve the public-history disposition independently.                                                                                | Add as a canonical HTTP 200 route with accurate title/description and sitemap entry.                                                                                                                   | Restore prior deployment, under which this path is a soft 404, or remove the route in an emergency rollback. Verify the restored status explicitly.                             |
| `https://truthtrace.ai/private-demo` | None                                                   | **410**                                              | Founder/product owner; security/privacy owner; patent counsel         | Explicitly retires a no-longer-public private-demo concept with no replacement. Do not redirect it to a public workflow, intake, login, or homepage.                                                                                                 | Keep out of sitemap and navigation; return `noindex` with the 410. Search engines receive an intentional retirement signal.                                                                            | Revert the 410 rule only under written owner/security approval. A general deployment rollback must retain an edge tombstone if the restored artifact could expose the old demo. |
| `https://truthtrace.ai/contact-us`   | Same URL; alias ownership pending verification         | **PRESERVE** as a publication hold                   | Contact/mailbox owner; privacy/legal owner; SEO owner                 | Treat as a contact alias covered by the founder's no-destruction rule. Do not 301 it to `/contact` until that destination is approved and genuinely equivalent.                                                                                      | Freeze the URL. A future 301 is acceptable only after `/contact` is approved as the permanent equivalent.                                                                                              | Preserve the alias binding; if later redirected, rollback removes the redirect and restores the recorded prior behavior.                                                        |
| `https://truthtrace.ai/dev`          | None                                                   | **404**                                              | Production/security owner                                             | Prevents a robots rule from being mistaken for access control. No development surface may be exposed.                                                                                                                                                | Real 404; omit from sitemap. Retaining a robots disallow is optional defense-in-depth, not protection.                                                                                                 | Revert only if an authenticated, separately authorized environment is intentionally created; never expose it through a public rollback.                                         |
| `https://truthtrace.ai/staging`      | None                                                   | **404**                                              | Production/security owner                                             | Staging must use an isolated non-production hostname and authorization model, not this public path.                                                                                                                                                  | Real 404; omit from sitemap.                                                                                                                                                                           | Do not restore a public staging path during rollback; use the provider's isolated preview deployment.                                                                           |
| `https://truthtrace.ai/test`         | None                                                   | **404**                                              | Production/security owner                                             | Prevents accidental public test or data-collection surfaces.                                                                                                                                                                                         | Real 404; omit from sitemap.                                                                                                                                                                           | Do not restore a public test surface.                                                                                                                                           |
| Any other nonexistent HTML path      | None                                                   | **404**                                              | Production owner; SEO owner                                           | Prevents deceptive navigation and avoids leaking application details. Error output must contain no sensitive data and no intake.                                                                                                                     | Return transport `404`, page-specific `noindex`, and no canonical to the homepage. Never redirect every unknown URL home.                                                                              | Rollback must retain server-level 404 semantics even if the prior client artifact is restored; otherwise rollback reintroduces the soft-404 defect.                             |
| `https://truthtrace.ai/robots.txt`   | Same URL, production crawler policy                    | **REPLACE**                                          | Founder/publication owner; SEO owner; production operator             | Must not be used as a security control. The final file must match the approved browse-only surface and name the canonical sitemap.                                                                                                                   | Allow only the intended public indexable surface by policy; do not advertise retired or unresolved routes. Validate after edge/CDN processing.                                                         | Restore the prior file only together with the prior route set; verify that its sitemap reference and directives are still consistent.                                           |
| `https://truthtrace.ai/sitemap.xml`  | Same URL, route-accurate production sitemap            | **REPLACE**                                          | SEO owner; founder; legal/content owners for preserved pages          | Must not assert that missing privacy, terms, or contact content exists. Include those URLs only after content and ownership approval.                                                                                                                | Include `/` and `/technology`, plus only approved canonical routes that actually return indexable 200 responses. Exclude every 404, 410, soft 404, and `/private-demo`. Use truthful `lastmod` values. | Restore the prior sitemap only with the prior route set. Never leave a new sitemap pointing at a rolled-back or unavailable route tree.                                         |

## Fragment and external-surface treatment

Fragments are not independent HTTP routes, but they are part of the currently
reachable public experience and need an explicit cutover decision.

| Current surface                     | Observed behavior                                                                                | Proposed treatment                                                                                                   | Consequence / rollback                                                                                                                                                                                                                                           |
| ----------------------------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `https://truthtrace.ai/#contact`    | Loads `/` and scrolls to the legacy contact section containing an email address and form fields. | Replace as part of the new root. Do not preserve the form, email, or fragment target without owner/privacy approval. | Old bookmarks will load the new homepage without an approved contact target. Do not add a redirect or intake substitute. Restoring the old root would also restore this surface, so rollback needs a route/edge override if it violates the browse-only posture. |
| `https://truthtrace.ai/#contact-us` | Hash logic treats it like the contact section.                                                   | Same as `#contact`.                                                                                                  | Same as `#contact`.                                                                                                                                                                                                                                              |
| External Google waitlist form       | Opened from the legacy navigation; outside `truthtrace.ai`.                                      | Remove the link from the candidate and do not redirect `/waitlist` to it.                                            | Privacy/growth owner must separately decide whether the external form remains active; this release does not modify it.                                                                                                                                           |

## Approval gates before implementation

The following records are required before this matrix can move from proposed to
approved:

1. **Privacy route:** authoritative source document, version, effective date,
   applicability to the browse-only launch, named legal/privacy approver, and
   approved index/noindex decision.
2. **Terms route:** authoritative source document, version, effective date,
   contracting entity/owner, named legal approver, and approved index/noindex
   decision.
3. **Contact routes:** verified mailbox or approved no-contact posture, accountable
   owner, allowed message scope, privacy notice, processor/retention decision, and
   explicit confirmation that no family-law facts should be submitted.
4. **About route:** written owner, claims-review, SEO, and patent-counsel approval
   for permanent retirement before returning `410`.
5. **Private demo:** written owner/security approval for the `410` tombstone and an
   edge rule that survives rollback to an older artifact.
6. **Legacy sitemap routes:** product and SEO confirmation that `/features`,
   `/pricing`, `/demo`, `/waitlist`, and `/blog` have no approved equivalent. If an
   equivalent is later proven, a route may be reconsidered for `301` rather than
   silently redirected now.
7. **Production routing:** verified provider project, route-rule mechanism, current
   deployment ID, exact deploy command, exact rollback command, and an operator who
   has permission to execute both.

Until items 1-7 are recorded, the route migration status is **BLOCKED**.

## Staging acceptance criteria

The exact publication candidate must pass all of the following on an isolated
non-production hostname before founder approval:

- `/` and `/technology` return transport `200`, route-accurate title/description,
  canonical URLs on `https://truthtrace.ai`, and no unapproved form, email,
  analytics, tracking, or intake.
- `/private-demo` returns transport `410` with `noindex` and no redirect.
- Unknown routes return transport `404` with `noindex`; they do not return `200`,
  redirect home, or emit the homepage canonical.
- `/features`, `/pricing`, `/demo`, `/waitlist`, and `/blog` match the final approved
  result and are absent from the sitemap when they return 404/410.
- `/privacy`, `/terms`, `/contact`, and `/contact-us` remain untouched until their
  owners approve a destination. If the approved outcome is a same-path replacement,
  each page returns a real `200` and its exact reviewed content.
- Every redirect, if later approved, has one exact `Location`, no chain, no loop,
  and a documented equivalence rationale. No blanket unknown-route redirect exists.
- `robots.txt` and `sitemap.xml` agree with the actual status map after CDN/edge
  processing.
- The production host does not load GTM, Google Analytics, Lovable analytics, the
  external waitlist form, or any other unapproved collection surface.
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

| Field                                   | Value                                                        |
| --------------------------------------- | ------------------------------------------------------------ |
| Live route inventory                    | Complete for the finite named surface plus wildcard behavior |
| Live site modified                      | No                                                           |
| Approved `301` redirects                | None                                                         |
| Approved `302` redirects                | None                                                         |
| Privacy route destination/content owner | Unverified                                                   |
| Terms route destination/content owner   | Unverified                                                   |
| Contact route destination/mailbox owner | Unverified                                                   |
| `/about` retirement approval            | Unverified                                                   |
| `/private-demo` tombstone approval      | Pending named owner/security confirmation                    |
| Exact rollback mechanism                | Unverified                                                   |
| Legacy route migration status           | **BLOCKED**                                                  |
