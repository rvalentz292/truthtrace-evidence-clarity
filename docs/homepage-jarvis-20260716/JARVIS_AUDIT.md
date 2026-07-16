# Jarvis Homepage Audit

## Decision

Preserve the authoritative baseline's concise product-led direction, substantially revise its claims and presentation, and reject the audit-start draft's oversized eleven-section replacement. The final candidate restores a coordinated three-pane product demonstration, retains six primary sections, and uses bounded public language.

## Scores

| Category                                | Authoritative `main` before | Audit-start dirty draft | Final candidate | Evidence for final score                                                                                                                                                                                           |
| --------------------------------------- | --------------------------: | ----------------------: | --------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Five-second clarity                     |                       18/20 |                   17/20 |       **19/20** | Category, exact value proposition, users, output, evidence types, and human-review boundary appear in the first viewport. One point remains because the product is inherently specialized.                         |
| Product proof                           |                       18/20 |                   14/20 |       **19/20** | Coordinated sources, chronology, observation, citation, excerpt, locator, identity, integrity reference, and review state update by pointer and keyboard. Data is illustrative rather than a live product session. |
| Trust and claim discipline              |                       12/20 |                   18/20 |       **19/20** | Unsafe verification/preservation claims were removed; synthetic-data and human-judgment limits are visible. Existing legal provisions still require counsel review.                                                |
| Information architecture and conversion |                       12/15 |                    8/15 |       **14/15** | Six distinct sections, restrained navigation, internal browse-only CTAs, and separate parent/professional paths. There is intentionally no external conversion channel.                                            |
| Visual authority                        |                        8/10 |                    7/10 |        **9/10** | Institution-grade editorial typography, restrained blue/amber state language, evidence-dense panels, no stock legal imagery, and no surveillance styling.                                                          |
| Accessibility and responsive execution  |                        8/10 |                    8/10 |        **9/10** | Lighthouse 100; 320 px, five target viewports, 200% text, text spacing, forced colors, reduced motion, focus movement, and 44 px targets passed. Manual screen-reader testing remains outside this environment.    |
| Performance, SEO, and release readiness |                         4/5 |                     3/5 |         **4/5** | Lighthouse mobile 98 and desktop 100, exact canonical metadata, clean build, route checks, and immutable handoff. Provider-edge publication is not yet verified.                                                   |
| **Total**                               |                  **80/100** |              **75/100** |      **93/100** | Meets the 92-point target with no 20-point category below 16.                                                                                                                                                      |

The authoritative before score applies to remote `main` at `ac459269…`. The 75/100 dirty-draft score is recorded separately because valid user work was present at audit start but was not authoritative remote history.

## Findings and resolution

### Five-second clarity

- The baseline showed the product but used claims such as “Every observation traces” that were broader than current proof.
- The dirty draft improved qualification but replaced the defining command center with a generic diagram and increased scrolling burden.
- The final hero states the evidence types, structured chronology, source-location citations, users, and professional-judgment boundary without leading with AI.

### Product proof

- The final command center exposes three synthetic sources and three internally consistent events.
- Selecting an event changes `aria-pressed`, the linked source highlight, citation, exact excerpt, locator, source identity, integrity abbreviation, and review state.
- Arrow keys, Home, and End move selection and focus. Pointer selection was separately verified.
- Blue means a citation is linked, not that evidence is legally verified. Amber means context or review remains required.

### Conversion

Repository and route inspection found no approved pilot form, scheduler, waitlist, upload route, login, payment flow, professional-briefing workflow, phone number, or verified email channel. The correct current-stage posture is browse-only. All homepage actions resolve to real internal destinations.

### Design and engineering

- The audit-start 1,015-line homepage was decomposed into state/composition, command-center, section, brand, and JSON-fixture boundaries.
- No source comment or dead string is used to trick navigation tests.
- The source fixture has referential-integrity tests, and the public asset inventory is allowlisted.
- No runtime package or provider setting was added.

### Remaining deductions

- Legal copy is current repository authority but not represented as final counsel approval.
- Lovable has not been synchronized to the reviewed SHA.
- HTTP-to-HTTPS, cookies, analytics injection, and static-asset host behavior require provider-edge verification after an authorized exact-SHA synchronization.
- Manual assistive-technology testing is not claimed.
