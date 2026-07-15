import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Product", hash: "product" },
  { label: "How It Works", hash: "how-it-works" },
  { label: "Who It Serves", hash: "who-it-serves" },
  { label: "Trust", hash: "trust" },
  { label: "Technology", hash: "technology" },
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
    requestAnimationFrame(() => mobileNavRef.current?.querySelector<HTMLElement>("a")?.focus());

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  function closeMenu({ restoreFocus = false } = {}) {
    setOpen(false);
    if (restoreFocus) requestAnimationFrame(() => menuButtonRef.current?.focus());
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/88 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link to="/" hash="product" className="flex min-w-0 items-center gap-2.5">
          <span
            data-brand-mark
            aria-hidden
            className="grid size-8 shrink-0 place-items-center rounded-md bg-primary/15 ring-1 ring-primary/40"
          >
            <span className="size-2 rounded-sm bg-primary shadow-[0_0_12px_var(--primary)]" />
          </span>
          <span className="truncate text-[15px] font-semibold tracking-tight">TruthTrace</span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-5 text-sm text-muted-foreground lg:flex"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              to="/"
              hash={link.hash}
              activeOptions={{ includeHash: true }}
              className="transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden min-h-11 items-center justify-center rounded-md border border-primary/55 bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            Request Controlled Pilot
          </Link>
          <Button
            ref={menuButtonRef}
            variant="wire"
            size="icon"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => (open ? closeMenu({ restoreFocus: true }) : setOpen(true))}
            className="min-h-11 min-w-11 lg:hidden"
          >
            {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-navigation"
          className="max-h-[calc(100vh-3.5rem)] overflow-y-auto border-t border-border/70 bg-background/98 backdrop-blur-xl lg:hidden"
        >
          <nav
            ref={mobileNavRef}
            aria-label="Mobile primary"
            className="flex flex-col gap-1 px-4 py-4"
          >
            {links.map((link) => (
              <Link
                key={link.label}
                to="/"
                hash={link.hash}
                activeOptions={{ includeHash: true }}
                onClick={() => closeMenu()}
                className="rounded-md px-3 py-3 text-[15px] text-foreground/90 transition-colors hover:bg-surface"
                activeProps={{ className: "bg-surface text-foreground" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => closeMenu()}
              className="mt-3 inline-flex min-h-11 items-center justify-center rounded-md border border-primary/55 bg-primary px-4 text-sm font-semibold text-primary-foreground"
            >
              Request Controlled Pilot
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
