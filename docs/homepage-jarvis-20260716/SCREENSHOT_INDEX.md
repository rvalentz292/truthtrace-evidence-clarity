# Screenshot Index

All screenshots were captured from the local production worker at UI evidence milestone `4f7c5f09a88ce35bd0406a8bb6b690a90cb6769a` using synthetic/illustrative data only. No production case, family, credential, or private information is present.

Deployable candidate `4fc4f133be2b67d077325b26cf2d9dc23f9eb756` / tree `e022f2f850b2cf05a64f000edc879268ada01f35` contains release-configuration and validation changes only. Both final local builds reproduced the same content-addressed client asset names and byte sizes, providing byte-equivalent UI correlation. These captures and hashes intentionally retain their original milestone provenance; they have not been relabeled as deployable-candidate captures.

| File                                           | Viewport/state                 | Purpose                                    | SHA-256                                                            |
| ---------------------------------------------- | ------------------------------ | ------------------------------------------ | ------------------------------------------------------------------ |
| `homepage-desktop-1440x1000.png`               | 1440×1000, default hero        | Desktop homepage and first-viewport proof  | `F9C863915630FADB3C66DC0A8B99841C931B3EC68900E42E9D2B4175A08090FA` |
| `homepage-tablet-768x1024.png`                 | 768×1024                       | Tablet composition                         | `A1886B905D74205C3CCAD24486046385E10480D9D59AA055A5DB11E754E61BCA` |
| `homepage-mobile-390x844.png`                  | 390×844                        | Mobile hero and proof entry                | `F7F6FDA6EB481F5BEF16E19B26C05725E0E12D6CF65654CBAC987F04AB0414A0` |
| `homepage-mobile-menu-390x844.png`             | 390×844, menu open             | Mobile navigation                          | `573FF9F24A1F86B9CC6DF6710D28D88AE3DEAA5B1387A5FCDA4577ED5E8BBD35` |
| `homepage-narrow-320x900.png`                  | 320×900                        | WCAG narrow reflow                         | `2552A0000856ACA5BA7F0459A5CCE63074AF5C8468403E05BE5A14015EC9C2D1` |
| `homepage-text-resize-200-percent-390x844.png` | 390×844, 32 px root            | Final 200% text-resize evidence            | `25258A4990984330529710A74AEC09781C8F4F3F04BBD9640ABD763424E2F749` |
| `homepage-text-spacing-390x844.png`            | 390×844, WCAG spacing override | Text-spacing evidence                      | `B5C27A880DBCCB8028F3220431E177753EC8DDAE15E5D456D7F0598DE6D0918D` |
| `homepage-forced-colors-1440x1000.png`         | 1440×1000, forced colors       | High-contrast presentation                 | `A7913B0E01EA53C9F29CC433FBE8296448255C5B3DCF49BC089028272B9D1C6E` |
| `command-center-obs019-1440x1000.png`          | 1440×1000, `OBS-019` selected  | Non-default proof update and linked source | `0AEA89EDC31C70628DA61E1585F0D476B3567D007D28B440765598341EE23A5C` |
| `proof-chain-1440x1000.png`                    | 1440×1000                      | Observation-to-source proof chain          | `5F5720253887BB4D8F2DE97CDEF540C6F8C0656DEC4D6A25006C887D2B30DFEB` |
| `audience-pathways-1440x1000.png`              | 1440×1000                      | Parent/professional pathways               | `99E0C490D0DF6E2F2DE396EA4AFCEE181543682DA12A9BE058CE291A462BAA79` |
| `trust-architecture-1440x1000.png`             | 1440×1000                      | Trust flow and boundaries                  | `9B64BBF7D6F91705B59E22BAD6AE1CE03B7FB14822D0A3E9D8CDEE3024330AB7` |
| `technology-1440x1000.png`                     | 1440×1000                      | Technology design-objective page           | `F282D29B1E6DFC3418D7D5B45D8A149E26741ECEF08E093D53FEB86C25F8A46E` |
| `privacy-1440x1000.png`                        | 1440×1000                      | Current Privacy Notice                     | `0E52C1CF9B7B2857C3CE3FA3301D0CDD0DFBFAAA02AAA54FAB5A8100F90E5854` |
| `terms-1440x1000.png`                          | 1440×1000                      | Current Terms                              | `55F055C17A60D930EE5722E0C32DC95035F0CFF0359D35EC3D9EDFD0FEED4AE1` |
| `contact-1440x1000.png`                        | 1440×1000                      | Browse-only contact boundary               | `69608FF8E6EB397180D05A2AABB889BECDBE6FB0660D3CF6D85B1D8FD9991D41` |
| `404-1440x1000.png`                            | 1440×1000                      | True unknown-route response                | `18BC52EAA09E395E8334EECE298AA809A944624EA202424F4014999113F8E3A7` |
| `private-demo-410-1440x1000.png`               | 1440×1000                      | Retired-route response                     | `C0CEF4C578902928AED6EF201EBEF261EB0210930F2A9DEB607D80E6A0902FF5` |

The earlier screenshot named as a 200% browser-zoom result was identical to the normal desktop capture because headless Chrome ignored the zoom shortcut. It was moved to ignored artifacts and is not part of this evidence set. The retained 200% image uses a verified 32 px root-font resize and passed overflow/content-loss checks.
