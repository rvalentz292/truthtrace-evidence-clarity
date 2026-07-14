import { motion, MotionConfig } from "framer-motion";
import { Inbox, Fingerprint, Calendar, Quote, FileCheck2, ChevronDown, Circle } from "lucide-react";

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
    sub: "Source identity · SHA-256 fingerprint",
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
    label: "Prepare Review Packet",
    sub: "Inventory · findings · provenance · limitations",
    tone: "accent",
  },
] as const;

const chips = [
  "Hash Created",
  "Evidence Linked",
  "Timeline Built",
  "Citations Linked",
  "Review Packet Prepared",
];

export function HeroPipeline() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative w-full min-w-0 overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-surface/70 to-background/40 p-4 sm:p-7 md:p-9">
        {/* Backdrop */}
        <div className="pointer-events-none absolute inset-0 grid-bg radial-fade opacity-50" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_-10%,color-mix(in_oklab,var(--primary)_18%,transparent),transparent)]" />

        {/* Header strip */}
        <div className="relative mb-6 flex flex-col gap-2 border-b border-border/60 pb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:tracking-[0.22em]">
          <div className="flex min-w-0 items-center gap-2">
            <span
              aria-hidden
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/60"
            />
            <span>Structured Evidence Workflow</span>
          </div>
          <div className="text-foreground/60">Illustrative workflow</div>
        </div>

        {/* Flow */}
        <ol className="relative flex flex-col items-stretch gap-2.5">
          {flow.map((s, i) => (
            <li key={s.label} className="flex flex-col items-stretch">
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
                    aria-hidden
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
                    <span className="text-sm font-medium leading-snug text-foreground sm:text-[15px]">
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
                <div className="hidden shrink-0 items-center gap-1.5 font-mono text-[10px] text-muted-foreground sm:flex">
                  <span aria-hidden className="size-1.5 rounded-full bg-muted-foreground/50" />
                  stage
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
            </li>
          ))}
        </ol>

        {/* Validation chips */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="relative mt-7 border-t border-border/60 pt-5"
        >
          <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Source-linkage status
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {chips.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-foreground/5 px-2.5 py-1 text-[11px] font-medium text-foreground/75"
              >
                <Circle aria-hidden className="size-2.5 fill-current opacity-60" />
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </MotionConfig>
  );
}
