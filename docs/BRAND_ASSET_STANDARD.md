# TruthTrace Brand Asset Standard

## Status

Canonical web brand standard for the public TruthTrace evidence-clarity site.

## Decision

TruthTrace uses one visual identity across navigation, footer, browser iconography, and future marketing surfaces:

- a blue shield representing protection and evidence integrity;
- a connected graph representing traceable source relationships;
- the wordmark `TruthTrace`;
- a restrained dark forensic interface palette.

The previous abstract square mark and checkmark favicon are retired.

## Canonical assets

| Asset           | Path                                       | Approved use                                                                  |
| --------------- | ------------------------------------------ | ----------------------------------------------------------------------------- |
| Horizontal logo | `/brand/truthtrace-logo-primary.svg`       | Marketing, large headers, investor material, dark-background brand placements |
| Shield mark     | `/brand/truthtrace-logo-mark.svg`          | Navigation, footer, compact product chrome                                    |
| Favicon         | `/favicon.svg`                             | Browser tabs and web manifest                                                 |
| React wrapper   | `src/components/brand/TruthTraceBrand.tsx` | All product/UI logo rendering                                                 |

Do not recreate the logo with CSS primitives, Lucide icons, emoji, or text-only placeholders when a canonical asset can be used.

## Navigation and footer standard

Use the shield mark with a live-text `TruthTrace` wordmark in compact product navigation. This keeps the navigation readable at small sizes and avoids distorting the full horizontal asset.

Recommended sizing:

- desktop/mobile navigation mark: `32px` tall;
- footer mark: `28px` tall;
- horizontal marketing logo: `160–320px` wide depending on context.

## Color standard

### Identity colors

These colors belong inside the logo asset:

- Deep blue: `#003A9E`
- Royal blue: `#006DDE`
- Cyan: `#38D8FF`
- Sky highlight: `#B5F3FF`
- White wordmark: `#FFFFFF`

### Product interface colors

Keep the existing restrained site tokens:

- Background: approximately `#05070A`
- UI primary: approximately `#4F8CFF`
- UI accent: approximately `#8FD3FF`
- Success: approximately `#00D084`

The metallic/cyan logo gradient is an identity treatment, not a global page gradient.

## Accessibility

- The linked brand home control must have an accessible name such as `TruthTrace home`.
- Decorative mark images use `alt=""` when adjacent live text already supplies the brand name.
- Standalone logo images use `alt="TruthTrace"`.
- Do not duplicate visible and screen-reader wordmarks unnecessarily.

## Technical requirements

Canonical SVGs must:

- contain a responsive `viewBox`;
- contain no embedded raster image;
- contain no scripts or external dependencies;
- avoid fixed width/height attributes;
- remain readable against the dark site background;
- be checked by the publication validation script.

## Change control

Any replacement of the shield geometry, graph motif, wordmark, or primary identity colors requires an explicit brand review. Routine page work may resize the canonical assets but must not redraw or recolor them ad hoc.
