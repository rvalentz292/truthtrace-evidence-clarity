import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Workspace", to: "/" as const, hash: "workspace" },
  { label: "Architecture", to: "/" as const, hash: "how" },
  { label: "Category", to: "/" as const, hash: "category" },
  { label: "Impact", to: "/" as const, hash: "impact" },
  { label: "About", to: "/about" as const },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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

        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
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
          <Button variant="ghost" size="sm" className="hidden lg:inline-flex">
            Sign in
          </Button>
          <Button variant="hero" size="sm" className="hidden sm:inline-flex">
            Request Demo
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md border border-border bg-surface/60 text-foreground transition-colors hover:bg-surface md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {links.map((l) =>
            l.hash ? (
              <Link
                key={l.label}
                to={l.to}
                hash={l.hash}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-[15px] text-foreground/90 hover:bg-surface"
              >
                {l.label}
              </Link>
            ) : (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-[15px] text-foreground/90 hover:bg-surface"
                activeProps={{ className: "bg-surface text-foreground" }}
              >
                {l.label}
              </Link>
            ),
          )}
          <div className="mt-2 flex flex-col gap-2 border-t border-border/60 pt-3">
            <Button variant="wire" size="lg" className="w-full justify-center">
              Sign in
            </Button>
            <Button variant="hero" size="lg" className="w-full justify-center">
              Request Demo
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
