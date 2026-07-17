# Responsive and Accessibility Report

Capture and browser-test target: local production worker at `http://127.0.0.1:4173`, built from UI evidence milestone `4f7c5f09a88ce35bd0406a8bb6b690a90cb6769a` with `VITE_SITE_URL=https://truthtrace.ai`.

Deployable candidate `4fc4f133be2b67d077325b26cf2d9dc23f9eb756` / tree `e022f2f850b2cf05a64f000edc879268ada01f35` changes release configuration and validation only. Final `build:artifact` and `build:publication` output retained the same content-addressed client asset names and byte sizes, establishing byte-equivalent UI verification. The browser observations and screenshots below therefore retain their original `4f7c5f09…` provenance and have not been relabeled.

## Responsive matrix

| Viewport  | Document width | Page height | Horizontal overflow                           | Interactive targets below 44×44 | Result |
| --------- | -------------: | ----------: | --------------------------------------------- | ------------------------------: | ------ |
| 320×900   |        320/320 |   inspected | None; no clipped/overflowing main descendants |                               0 | PASS   |
| 390×844   |        390/390 |   11,275 px | None                                          |                               0 | PASS   |
| 768×1024  |        768/768 |    8,792 px | None                                          |                               0 | PASS   |
| 1024×768  |    1,024/1,024 |    6,491 px | None                                          |                               0 | PASS   |
| 1440×1000 |    1,440/1,440 |    6,033 px | None                                          |                               0 | PASS   |
| 1920×1080 |    1,920/1,920 |    6,033 px | None                                          |                               0 | PASS   |

At every target viewport the rendered homepage contained exactly one H1 and six primary sections. The command center changes from three columns to a vertical source → chronology → proof sequence without hiding proof content.

## Keyboard and focus

| Check                   | Evidence                                                                                                         | Result |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------- | ------ |
| Skip link               | First Tab reveals a 44 px-high link with a solid outline; Enter moves focus to `main#main-content`               | PASS   |
| Mobile menu entry       | Opening the menu moves focus to Platform                                                                         | PASS   |
| Mobile Escape           | Escape closes the menu and restores focus to the menu trigger                                                    | PASS   |
| Mobile destination      | Activating Parents closes the menu, changes the hash, and focuses `#parents`                                     | PASS   |
| Homepage CTA focus      | Primary action focuses `#command-center`; secondary focuses `#proof-chain`; both remain below the fixed header   | PASS   |
| Command-center keyboard | Arrow Right moved first→second; End moved second→third; `aria-pressed` and proof content updated                 | PASS   |
| Pointer selection       | Selecting `OBS-019` produced `false,true,false`, linked `Calendar-capture.png`, and displayed “Context required” | PASS   |
| Visible focus           | Global 2 px outline; forced-colors override uses system `Highlight`                                              | PASS   |

## Semantics and names

- One banner/header, one main, one contentinfo/footer, and named primary/mobile/footer navigation landmarks.
- Heading order has no skipped levels: H1 → section H2 → panel/card H3 → source H4.
- No duplicate IDs.
- Command center is a named region; source and event collections are named groups.
- Selected proof is controlled by chronology buttons and announced through a polite live region.
- Review states always include text and iconography; color is supplementary.
- Hero proof relationships and selected-source attributes use definition lists.
- Interpretation, selected-proof, parent, and professional regions have accessible names.
- There are no content images requiring alternative text; icons are decorative where appropriate. `/og.png` has metadata alternative text.

## Adaptation modes

| Mode              | Evidence                                                                                                                                                                                          | Result                 |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| Reduced motion    | `prefers-reduced-motion: reduce` matched; scroll behavior became `auto`; animation/transition durations collapsed to 0.001 ms                                                                     | PASS                   |
| Forced colors     | Chromium `--force-high-contrast` produced `forced-colors: active`; menu trigger and focused menu link had solid 2 px system outlines; pressed event had Highlight border/outline; width 1440/1440 | PASS                   |
| 200% text resize  | Root computed at 32 px in a 390 px viewport; final document 390/390; no visible clipped or overflowing main descendants                                                                           | PASS after remediation |
| WCAG text spacing | 0.12 em letter, 0.16 em word, 1.5 line height, and 2 em paragraph-bottom override at 390×844; no overflow/clipping or small targets                                                               | PASS                   |
| 320 px reflow     | Actual 320 CSS-pixel viewport; no offscreen/clipped main descendants and no small targets                                                                                                         | PASS                   |

The first 200% probe exposed 55 px of command-center min-content overflow and truncated source names. `min-w-0` was added to grid panels and source names now wrap. The recorded PASS is the post-fix rerun.

## Browser integrity

- Final console: no messages.
- Final page-error log: empty.
- Hydration: no warning/overlay observed.
- Required homepage requests: 200; no failed required asset request.
- Internal anchors: every hash resolved to an existing element.
- Mobile and desktop navigation, footer links, legal-page links, and browse-only CTAs were exercised by browser and link checker.
- Candidate `4fc4f133be2b67d077325b26cf2d9dc23f9eb756` passed the final link matrix after both local builds, and GitHub Actions run `29510743848` job `87663236467` passed the complete deterministic release gate with generated Worker date `2026-07-15`.

## Instrumentation

Lighthouse 13.4.0 accessibility: **100** on mobile and desktop. Computed palette ratios from the source audit were foreground 18.45:1, muted text 6.99:1, primary blue 6.81:1, amber 9.89:1, and success 9.40:1 against the dark background.

Manual NVDA/VoiceOver testing was not available and is not claimed. That is a normal post-candidate assistive-technology validation item, not a known accessibility defect.
