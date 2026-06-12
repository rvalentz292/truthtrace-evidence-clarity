import { motion } from "framer-motion";
import {
  Inbox, Fingerprint, Calendar, Quote, FileCheck2,
  ChevronDown, CheckCircle2,
} from "lucide-react";

const flow = [
  {
    icon: Inbox,
    label: "Upload Evidence",
    sub: "Texts · Emails · Audio · PDFs · Screenshots · Exports",
    tone: "muted",
  },
  {
    icon: Fingerprint,
    label: "Create EvidenceObjects",
    sub: "Immutable source identity · SHA-256",
    tone: "primary",
  },
  {
    icon: Calendar,
    label: "Build Timeline",
    sub: "Events · actors · dates · chronology",
    tone: "primary",
  },
  {
    icon: Quote,
    label: "Link Citations",
    sub: "Source excerpts · citation IDs · review status",
    tone: "primary",
  },
  {
    icon: FileCheck2,
    label: "Generate Packet",
    sub: "Inventory · findings · provenance · limitations",
    tone: "accent",
  },
] as const;

const chips = [
  "Hash Created",
  "Evidence Linked",
  "Timeline Built",
  "Citations Verified",
  "Packet Generated",
];

export function HeroPipeline() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-surface/70 to-background/40 p-5 sm:p-7 md:p-9">
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 grid-bg radial-fade opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_-10%,color-mix(in_oklab,var(--primary)_18%,transparent),transparent)]" />

      {/* Header strip */}
      <div className="relative mb-6 flex items-center justify-between border-b border-border/60 pb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        <div className="flex min-w-0 items-center gap-2">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-success shadow-[0_0_8px_var(--success)] pulse-soft" />
          <span className="truncate">Deterministic Evidence Pipeline</span>
        </div>
        <div className="shrink-0 text-foreground/60">v0.42</div>
      </div>

      {/* Flow */}
      <div className="relative flex flex-col items-stretch gap-2.5">
        {flow.map((s, i) => (
          <div key={s.label} className="flex flex-col items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.55, ease: "easeOut" }}
              className={[
                "group relative flex items-center gap-4 rounded-xl border bg-surface/50 p-4 sm:p-5 transition-colors",
                s.tone === "accent"
                  ? "border-accent/40 shadow-[0_0_0_1px_color-mix(in_oklab,var(--accent)_18%,transparent),0_20px_60px_-30px_color-mix(in_oklab,var(--accent)_60%,transparent)]"
                  : s.tone === "primary"
                    ? "border-border/70 hover:border-primary/40"
                    : "border-border/70",
              ].join(" ")}
            >
              <div
                className={[
                  "grid size-11 shrink-0 place-items-center rounded-lg ring-1",
                  s.tone === "accent"
                    ? "bg-accent/15 ring-accent/40"
                    : s.tone === "primary"
                      ? "bg-primary/15 ring-primary/30"
                      : "bg-foreground/5 ring-border",
                ].join(" ")}
              >
                <s.icon
                  className={[
                    "size-5",
                    s.tone === "accent"
                      ? "text-accent"
                      : s.tone === "primary"
                        ? "text-primary"
                        : "text-foreground/70",
                  ].join(" ")}
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <span className="truncate text-sm font-medium text-foreground sm:text-[15px]">
                    {s.label}
                  </span>
                  <span className="hidden shrink-0 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground sm:inline">
                    stage {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-1 text-[12px] leading-relaxed text-muted-foreground sm:text-[12.5px]">
                  {s.sub}
                </div>
              </div>
              <div className="hidden shrink-0 items-center gap-1.5 font-mono text-[10px] text-success sm:flex">
                <span className="size-1.5 rounded-full bg-success shadow-[0_0_6px_var(--success)]" />
                ok
              </div>
            </motion.div>

            {i < flow.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.18 + i * 0.12, duration: 0.4 }}
                className="flex h-5 items-center justify-center"
                aria-hidden
              >
                <ChevronDown className="size-3.5 text-muted-foreground/60" />
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Validation chips */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="relative mt-7 border-t border-border/60 pt-5"
      >
        <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          Chain-of-custody validation
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {chips.map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-2.5 py-1 text-[11px] font-medium text-success"
            >
              <CheckCircle2 className="size-3" />
              {c}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
