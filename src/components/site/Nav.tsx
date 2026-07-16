import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import { BrandMark } from "@/components/site/BrandMark";
import { Button } from "@/components/ui/button";

const HOME_LINKS = [
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

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      requestAnimationFrame(() => menuButtonRef.current?.focus());
    };

    document.addEventListener("keydown", handleKeyDown);
    requestAnimationFrame(() => mobileNavRef.current?.querySelector<HTMLElement>("a")?.focus());
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  function closeMenu({
    restoreFocus = false,
    focusTarget,
  }: { restoreFocus?: boolean; focusTarget?: string } = {}) {
    setOpen(false);
    if (restoreFocus) requestAnimationFrame(() => menuButtonRef.current?.focus());
    if (focusTarget) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.getElementById(focusTarget)?.focus({ preventScroll: true });
        });
      });
    }
  }

  function focusDesktopTarget(id: string) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => document.getElementById(id)?.focus({ preventScroll: true }));
    });
  }

  function renderLinks(mobile = false) {
    const className = mobile
      ? "flex min-h-11 items-center rounded-sm px-3 py-2 text-[15px] text-foreground/90 hover:bg-surface"
      : "inline-flex min-h-11 min-w-11 items-center justify-center text-[13px] tracking-tight text-muted-foreground transition-colors hover:text-foreground";

    return HOME_LINKS.map((item) => (
      <Link
        key={item.hash}
        to="/"
        hash={item.hash}
        activeOptions={{ includeHash: true }}
        onClick={() =>
          mobile ? closeMenu({ focusTarget: item.hash }) : focusDesktopTarget(item.hash)
        }
        className={className}
        activeProps={{ className: "text-foreground" }}
      >
        {item.label}
      </Link>
    ));
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/[0.92] backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link
          to="/"
          className="flex min-h-11 min-w-0 items-center gap-2.5"
          aria-label="TruthTrace home"
        >
          <BrandMark />
          <span className="truncate font-display text-[19px] font-semibold tracking-tight">
            TruthTrace
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {renderLinks()}
        </nav>

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

      {open && (
        <div
          id="mobile-navigation"
          className="max-h-[calc(100vh-3.5rem)] overflow-y-auto border-t border-border/70 bg-background/[0.98] backdrop-blur-xl md:hidden"
        >
          <nav
            ref={mobileNavRef}
            aria-label="Mobile primary"
            className="flex flex-col gap-1 px-4 py-4"
          >
            {renderLinks(true)}
            <Link
              to="/technology"
              onClick={() => closeMenu()}
              className="mt-2 flex min-h-11 items-center rounded-sm border-t border-border px-3 pt-3 text-[15px] text-muted-foreground hover:text-foreground"
            >
              Technology
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
