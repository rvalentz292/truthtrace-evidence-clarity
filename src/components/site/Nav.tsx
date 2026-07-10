import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Home", to: "/" as const },
  { label: "See How It Works", to: "/" as const, hash: "how" },
  { label: "Who It Serves", to: "/" as const, hash: "audiences" },
  { label: "Trust", to: "/" as const, hash: "trust" },
  { label: "Technology", to: "/technology" as const },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

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

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
    requestAnimationFrame(() => menuButtonRef.current?.focus());
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <div className="relative grid h-7 w-7 shrink-0 place-items-center rounded-md bg-primary/15 ring-1 ring-primary/40">
            <div className="h-2 w-2 rounded-sm bg-primary shadow-[0_0_12px_var(--primary)]" />
          </div>
          <span className="truncate text-[15px] font-semibold tracking-tight">TruthTrace</span>
          <span className="ml-2 hidden rounded-full border border-border bg-surface/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground lg:inline">
            Forensic Evidence Intelligence
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          {links.map((l) =>
            l.hash ? (
              <Link
                key={l.label}
                to={l.to}
                hash={l.hash}
                className="hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            ) : (
              <Link
                key={l.label}
                to={l.to}
                className="hover:text-foreground transition-colors"
                activeProps={{ className: "text-foreground" }}
              >
                {l.label}
              </Link>
            ),
          )}
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
            onClick={() => open ? closeMenu() : setOpen(true)}
            className="md:hidden"
          >
            {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && <div
        id="mobile-navigation"
        className="max-h-[80vh] overflow-hidden border-t border-border/60 bg-background/95 opacity-100 backdrop-blur-xl md:hidden"
      >
        <nav aria-label="Mobile primary" className="flex flex-col gap-1 px-4 py-4">
          {links.map((l) =>
            l.hash ? (
              <Link
                key={l.label}
                to={l.to}
                hash={l.hash}
                onClick={closeMenu}
                className="rounded-md px-3 py-3 text-[15px] text-foreground/90 hover:bg-surface"
              >
                {l.label}
              </Link>
            ) : (
              <Link
                key={l.label}
                to={l.to}
                onClick={closeMenu}
                className="rounded-md px-3 py-3 text-[15px] text-foreground/90 hover:bg-surface"
                activeProps={{ className: "bg-surface text-foreground" }}
              >
                {l.label}
              </Link>
            ),
          )}
        </nav>
      </div>}
    </header>
  );
}
