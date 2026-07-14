import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const links = [
  { label: "Platform", to: "/" as const, hash: "platform" },
  { label: "Evidence Chain", to: "/" as const, hash: "proof-chain" },
  { label: "Trust", to: "/" as const, hash: "trust" },
  { label: "Technology", to: "/technology" as const },
  { label: "About", to: "/about" as const },
];

export function Nav({ onRequestPilot }: { onRequestPilot?: () => void }) {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        requestAnimationFrame(() => menuButtonRef.current?.focus());
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    requestAnimationFrame(() => {
      mobileNavRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    });

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function closeMenu({ restoreFocus = false } = {}) {
    setOpen(false);
    if (restoreFocus) requestAnimationFrame(() => menuButtonRef.current?.focus());
  }

  function requestPilotFromMobile() {
    menuButtonRef.current?.focus();
    closeMenu();
    onRequestPilot?.();
  }

  const pilotClasses =
    "inline-flex min-h-11 items-center justify-center rounded-md border border-primary/60 bg-primary/15 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-[200] -translate-y-20 rounded-md bg-foreground px-4 py-2 text-sm font-semibold text-background transition-transform focus:translate-y-0"
      >
        Skip to main content
      </a>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label="TruthTrace home">
            <div
              data-brand-mark
              aria-hidden
              className="relative grid size-8 shrink-0 place-items-center rounded-md bg-primary/15 ring-1 ring-primary/40"
            >
              <div className="size-2 rounded-sm bg-primary shadow-[0_0_12px_var(--primary)]" />
            </div>
            <span className="truncate text-[15px] font-semibold tracking-tight">TruthTrace</span>
            <span className="ml-2 hidden rounded-full border border-border bg-surface/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground lg:inline">
              Forensic Evidence Intelligence
            </span>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-5 text-sm text-muted-foreground xl:flex"
          >
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                hash={link.hash}
                className="transition-colors hover:text-foreground"
                activeProps={link.hash ? undefined : { className: "text-foreground" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden xl:block">
              {onRequestPilot ? (
                <button type="button" onClick={onRequestPilot} className={pilotClasses}>
                  Request Controlled Pilot Access
                </button>
              ) : (
                <Link to="/" hash="pilot" className={pilotClasses}>
                  Request Controlled Pilot Access
                </Link>
              )}
            </div>

            <Button
              ref={menuButtonRef}
              variant="wire"
              size="icon"
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => (open ? closeMenu({ restoreFocus: true }) : setOpen(true))}
              className="xl:hidden"
            >
              {open ? (
                <X aria-hidden className="size-5" />
              ) : (
                <Menu aria-hidden className="size-5" />
              )}
            </Button>
          </div>
        </div>

        {open && (
          <div
            id="mobile-navigation"
            className="max-h-[calc(100vh-3.5rem)] overflow-y-auto border-t border-border/60 bg-background/98 backdrop-blur-xl xl:hidden"
          >
            <nav
              ref={mobileNavRef}
              aria-label="Mobile primary"
              className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4"
            >
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  hash={link.hash}
                  onClick={() => closeMenu()}
                  className="rounded-md px-3 py-3 text-[15px] text-foreground/90 hover:bg-surface"
                  activeProps={link.hash ? undefined : { className: "bg-surface text-foreground" }}
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-3 border-t border-border pt-4">
                {onRequestPilot ? (
                  <button
                    type="button"
                    onClick={requestPilotFromMobile}
                    className={`${pilotClasses} w-full`}
                  >
                    Request Controlled Pilot Access
                  </button>
                ) : (
                  <Link
                    to="/"
                    hash="pilot"
                    onClick={() => closeMenu()}
                    className={`${pilotClasses} w-full`}
                  >
                    Request Controlled Pilot Access
                  </Link>
                )}
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
