import { motion } from "framer-motion";
import {
  MessageSquare, Image as ImageIcon, AudioLines, FileText,
  Mail, Camera, Database, Hash, GitBranch, ScrollText,
  Quote, CheckCircle2, Package,
} from "lucide-react";

const sources = [
  { icon: MessageSquare, label: "Messages",    count: 4023 },
  { icon: ImageIcon,     label: "Screenshots", count: 612  },
  { icon: AudioLines,    label: "Audio",       count: 38   },
  { icon: FileText,      label: "PDFs",        count: 287  },
  { icon: Mail,          label: "Emails",      count: 1204 },
  { icon: Camera,        label: "Photos",      count: 916  },
  { icon: Database,      label: "Exports",     count: 300  },
];

const stages = [
  { icon: Hash,         label: "EvidenceObjects",  sub: "SHA-256 identity assigned",        status: "Hashed",      progress: 100 },
  { icon: GitBranch,    label: "Normalization",    sub: "Schema-bound, idempotent",         status: "Normalized",  progress: 100 },
  { icon: ScrollText,   label: "Timeline",         sub: "Chronology reconstructed",         status: "Built",       progress: 96  },
  { icon: Quote,        label: "Citation Binding", sub: "Source-pointer linked to claims",  status: "Linked",      progress: 88  },
  { icon: CheckCircle2, label: "Findings",         sub: "Evidence-constrained synthesis",   status: "Reviewed",    progress: 74  },
  { icon: Package,      label: "Export Packet",    sub: "Attorney-reviewable bundle",       status: "Sealed",      progress: 62  },
];

export function HeroPipeline() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-surface/60 to-background/40 p-5 md:p-8 lg:p-10">
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 grid-bg radial-fade opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,color-mix(in_oklab,var(--primary)_18%,transparent),transparent)]" />

      {/* Header strip */}
      <div className="relative mb-6 flex items-center justify-between border-b border-border/60 pb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_8px_var(--success)] pulse-soft" />
          pipeline.live
        </div>
        <div className="hidden sm:block">deterministic · idempotent · auditable</div>
        <div>v0.42 · build 7314</div>
      </div>

      <div className="relative grid grid-cols-12 gap-5 md:gap-7 lg:gap-8">
        {/* Sources column — compact, secondary */}
        <div className="col-span-12 lg:col-span-3 xl:col-span-2 space-y-2">
          <div className="mb-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            <span>Sources</span>
            <span className="text-foreground/60">7,380</span>
          </div>
          <div className="grid grid-cols-2 gap-1.5 lg:grid-cols-1">
            {sources.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * i, duration: 0.4 }}
                className="flex items-center gap-2 rounded-md border border-border/70 bg-surface/40 px-2.5 py-1.5 text-[11px] text-foreground/90"
              >
                <s.icon className="size-3.5 shrink-0 text-accent" />
                <span className="min-w-0 flex-1 truncate">{s.label}</span>
                <span className="shrink-0 font-mono text-[9px] text-muted-foreground">{s.count.toLocaleString()}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pipeline column — DOMINANT */}
        <div className="col-span-12 lg:col-span-9 xl:col-span-10">
          <div className="mb-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            <span>Deterministic pipeline</span>
            <span className="hidden sm:inline text-foreground/60">6 stages · chain-of-custody intact</span>
          </div>
          <div className="relative rounded-xl border border-border bg-background/40 p-5 md:p-7">
            {/* Scan line */}
            <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent scan-line" />

            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 xl:grid-cols-3">
              {stages.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.09, duration: 0.5 }}
                  className="group relative flex flex-col gap-3 rounded-lg border border-border/70 bg-surface/40 p-4 transition-colors hover:border-primary/40"
                >
                  <div className="flex items-start gap-3">
                    <div className="grid size-9 shrink-0 place-items-center rounded-md bg-primary/15 ring-1 ring-primary/30">
                      <s.icon className="size-4 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="truncate text-[13px] font-medium text-foreground">{s.label}</span>
                        <span className="shrink-0 font-mono text-[9px] text-muted-foreground">{`0x${(0xa3f2 + i * 0x1d).toString(16)}`}</span>
                      </div>
                      <div className="mt-0.5 font-mono text-[10px] leading-relaxed text-muted-foreground">{s.sub}</div>
                    </div>
                  </div>

                  {/* Horizontal status / progress */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between font-mono text-[10px]">
                      <span className="inline-flex items-center gap-1.5 text-success">
                        <span className="size-1.5 rounded-full bg-success shadow-[0_0_6px_var(--success)]" />
                        {s.status}
                      </span>
                      <span className="text-muted-foreground">{s.progress}%</span>
                    </div>
                    <div className="h-1 overflow-hidden rounded-full bg-border/50">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${s.progress}%` }}
                        transition={{ delay: 0.5 + i * 0.09, duration: 0.7, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer meta: replaces heavy state log */}
            <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border/60 pt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:grid-cols-4">
              <Meta label="Throughput" value="7,380" hint="items" />
              <Meta label="High-evidence" value="498" hint="surfaced" />
              <Meta label="Integrity" value="verified" hint="sha-256" valueClass="text-success normal-case" />
              <Meta label="Custody" value="sealed" hint="chain intact" valueClass="text-success normal-case" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Meta({ label, value, hint, valueClass = "text-foreground" }: { label: string; value: string; hint: string; valueClass?: string }) {
  return (
    <div className="min-w-0">
      <div className="truncate">{label}</div>
      <div className={`mt-1 truncate text-[15px] normal-case tracking-normal ${valueClass}`}>{value}</div>
      <div className="truncate text-[9px] normal-case tracking-normal text-muted-foreground/80">{hint}</div>
    </div>
  );
}
