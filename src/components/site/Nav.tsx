import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Home", to: "/" as const },
  { label: "Workflow", to: "/" as const, hash: "how" },
  { label: "Source Proof", to: "/" as const, hash: "proof-chain" },
  { label: "Who It Serves", to: "/" as const, hash: "audiences" },
  { label: "Boundaries", to: "/" as const, hash: "trust" },
  { label: "Technology", to: "/technology" as const },
];

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

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function closeMenu({ restoreFocus = false } = {}) {
    setOpen(false);
    if (restoreFocus) requestAnimationFrame(() => menuButtonRef.current?.focus());
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <div
            data-brand-mark
            aria-hidden
            className="relative grid size-8 shrink-0 place-items-center rounded-md bg-primary/15 ring-1 ring-primary/40"
          >
            <div className="h-2 w-2 rounded-sm bg-primary shadow-[0_0_12px_var(--primary)]" />
          </div>
          <span className="truncate text-[15px] font-semibold tracking-tight">TruthTrace</span>
          <span className="ml-2 hidden rounded-full border border-border bg-surface/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground xl:inline">
            Forensic Evidence Intelligence
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-5 text-sm text-muted-foreground xl:flex"
        >
          {links.map((l) =>
            l.hash ? (
              <Link
                key={l.label}
                to={l.to}
                hash={l.hash}
                activeOptions={{ includeHash: true }}
                className="hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            ) : (
              <Link
                key={l.label}
                to={l.to}
                activeOptions={{ exact: true, includeHash: true }}
                className="hover:text-foreground transition-colors"
                activeProps={{ className: "text-foreground" }}
              >
                {l.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/"
            hash="proof-chain"
            activeOptions={{ includeHash: true }}
            className="hidden min-h-11 items-center justify-center rounded-md border border-primary/50 bg-primary/10 px-4 text-sm font-medium text-foreground transition-colors hover:bg-primary/20 xl:inline-flex"
          >
            View workflow
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
            className="min-h-11 min-w-11 xl:hidden"
          >
            {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          id="mobile-navigation"
          className="max-h-[calc(100vh-3.5rem)] overflow-y-auto border-t border-border/60 bg-background/95 opacity-100 backdrop-blur-xl xl:hidden"
        >
          <nav
            ref={mobileNavRef}
            aria-label="Mobile primary"
            className="flex flex-col gap-1 px-4 py-4"
          >
            {links.map((l) =>
              l.hash ? (
                <Link
                  key={l.label}
                  to={l.to}
                  hash={l.hash}
                  activeOptions={{ includeHash: true }}
                  onClick={() => closeMenu()}
                  className="rounded-md px-3 py-3 text-[15px] text-foreground/90 hover:bg-surface"
                >
                  {l.label}
                </Link>
              ) : (
                <Link
                  key={l.label}
                  to={l.to}
                  activeOptions={{ exact: true, includeHash: true }}
                  onClick={() => closeMenu()}
                  className="rounded-md px-3 py-3 text-[15px] text-foreground/90 hover:bg-surface"
                  activeProps={{ className: "bg-surface text-foreground" }}
                >
                  {l.label}
                </Link>
              ),
            )}
            <Link
              to="/"
              hash="proof-chain"
              activeOptions={{ includeHash: true }}
              onClick={() => closeMenu()}
              className="mt-3 inline-flex min-h-11 items-center justify-center rounded-md border border-primary/50 bg-primary/10 px-4 text-sm font-medium text-foreground"
            >
              View representative workflow
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
