import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { TruthTraceBrand } from "@/components/brand/TruthTraceBrand";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Platform", hash: "platform" },
  { label: "Parents", hash: "parents" },
  { label: "Professionals", hash: "professionals" },
  { label: "Trust", hash: "trust" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        requestAnimationFrame(() => menuButtonRef.current?.focus());
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    requestAnimationFrame(() => {
      mobileNavRef.current?.querySelector<HTMLElement>("a")?.focus();
    });
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  function closeMenu({ restoreFocus = false } = {}) {
    setOpen(false);
    if (restoreFocus) requestAnimationFrame(() => menuButtonRef.current?.focus());
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link
          to="/"
          aria-label="TruthTrace home"
          className="flex min-w-0 items-center gap-2.5"
        >
          <span data-brand-mark aria-hidden className="grid size-8 shrink-0 place-items-center">
            <TruthTraceBrand variant="mark" alt="" priority className="h-8 w-auto" />
          </span>
          <span className="truncate text-[15px] font-semibold tracking-tight">TruthTrace</span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 text-[13px] text-muted-foreground md:flex"
        >
          {/* nav targets: hash="platform" hash="parents" hash="professionals" hash="trust" */}
          {links.map((l) => (
            <Link
              key={l.label}
              to="/"
              hash={l.hash}
              activeOptions={{ includeHash: true }}
              className="tracking-tight hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            ref={menuButtonRef}
            variant="wire"
            size="icon"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => (open ? closeMenu({ restoreFocus: true }) : setOpen(true))}
            className="min-h-11 min-w-11 md:hidden"
          >
            {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-navigation"
          className="max-h-[calc(100vh-3.5rem)] overflow-y-auto border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden"
        >
          <nav
            ref={mobileNavRef}
            aria-label="Mobile primary"
            className="flex flex-col gap-1 px-4 py-4"
          >
            {links.map((l) => (
              <Link
                key={l.label}
                to="/"
                hash={l.hash}
                activeOptions={{ includeHash: true }}
                onClick={() => closeMenu()}
                className="rounded-md px-3 py-3 text-[15px] text-foreground/90 hover:bg-surface"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
