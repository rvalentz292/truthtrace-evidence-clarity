import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";



export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="relative grid h-7 w-7 place-items-center rounded-md bg-primary/15 ring-1 ring-primary/40">
            <div className="h-2 w-2 rounded-sm bg-primary shadow-[0_0_12px_var(--primary)]" />
          </div>
          <span className="text-[15px] font-semibold tracking-tight">TruthTrace</span>
          <span className="ml-2 hidden rounded-full border border-border bg-surface/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground md:inline">
            Forensic Evidence Intelligence
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <Link to="/" hash="workspace" className="hover:text-foreground transition-colors">Workspace</Link>
          <Link to="/" hash="how" className="hover:text-foreground transition-colors">Architecture</Link>
          <Link to="/" hash="category" className="hover:text-foreground transition-colors">Category</Link>
          <Link to="/about" className="hover:text-foreground transition-colors" activeProps={{ className: "text-foreground" }}>About</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">Sign in</Button>
          <Button variant="hero" size="sm">Request Demo</Button>
        </div>

      </div>
    </header>
  );
}
