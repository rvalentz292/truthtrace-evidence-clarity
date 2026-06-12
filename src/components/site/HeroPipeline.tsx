import { motion } from "framer-motion";
import {
  MessageSquare, Image as ImageIcon, AudioLines, FileText,
  Mail, Camera, Database, Hash, GitBranch, ScrollText,
  Quote, CheckCircle2, Package,
} from "lucide-react";

const sources = [
  { icon: MessageSquare, label: "Messages" },
  { icon: ImageIcon,     label: "Screenshots" },
  { icon: AudioLines,    label: "Audio" },
  { icon: FileText,      label: "PDFs" },
  { icon: Mail,          label: "Emails" },
  { icon: Camera,        label: "Photos" },
  { icon: Database,      label: "Exports" },
];

const stages = [
  { icon: Hash,        label: "EvidenceObjects",  sub: "SHA-256 identity" },
  { icon: GitBranch,   label: "Normalization",    sub: "Schema bound" },
  { icon: ScrollText,  label: "Timeline",         sub: "Chronology built" },
  { icon: Quote,       label: "Citation Binding", sub: "Source-pointer linked" },
  { icon: CheckCircle2,label: "Findings",         sub: "Evidence-constrained" },
  { icon: Package,     label: "Export Packet",    sub: "Attorney-reviewable" },
];

const states = [
  "Hash created",
  "Evidence linked",
  "Timeline built",
  "Citation verified",
  "Packet generated",
];

export function HeroPipeline() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-surface/60 to-background/40 p-5 md:p-8">
      {/* Grid + radial fade backdrop */}
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

      <div className="relative grid grid-cols-12 gap-4 md:gap-6">
        {/* Sources column */}
        <div className="col-span-12 md:col-span-3 space-y-2">
          <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Sources</div>
          {sources.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * i, duration: 0.5 }}
              className="flex items-center gap-2.5 rounded-md border border-border/70 bg-surface/40 px-2.5 py-1.5 text-xs text-foreground/90"
            >
              <s.icon className="size-3.5 text-accent" />
              <span className="flex-1 truncate">{s.label}</span>
              <span className="font-mono text-[9px] text-muted-foreground">{(7400 - i * 137).toLocaleString()}</span>
            </motion.div>
          ))}
        </div>

        {/* Pipeline column */}
        <div className="col-span-12 md:col-span-6 relative">
          <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Pipeline</div>
          <div className="relative rounded-xl border border-border bg-background/40 p-4">
            {/* Scan line */}
            <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent scan-line" />

            <div className="space-y-2.5">
              {stages.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
                  className="group relative flex items-center gap-3 rounded-lg border border-border/70 bg-surface/40 px-3 py-2.5"
                >
                  <div className="grid size-7 shrink-0 place-items-center rounded-md bg-primary/15 ring-1 ring-primary/30">
                    <s.icon className="size-3.5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground">{s.label}</span>
                      <span className="font-mono text-[10px] text-muted-foreground">{`0x${(0xa3f2 + i * 0x1d).toString(16)}`}</span>
                    </div>
                    <div className="font-mono text-[10px] text-muted-foreground">{s.sub}</div>
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.12 }}
                    className="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_8px_var(--success)]"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* States column */}
        <div className="col-span-12 md:col-span-3">
          <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">State log</div>
          <div className="rounded-md border border-border/70 bg-background/60 p-3 font-mono text-[11px]">
            {states.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + i * 0.18 }}
                className="flex items-baseline gap-2 py-1"
              >
                <span className="text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-success">✓</span>
                <span className="text-foreground/90">{s}</span>
              </motion.div>
            ))}
            <div className="mt-2 border-t border-border/60 pt-2 text-[10px] text-muted-foreground">
              integrity: <span className="text-success">verified</span> · chain-of-custody intact
            </div>
          </div>

          <div className="mt-3 rounded-md border border-border/70 bg-background/60 p-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Throughput</div>
            <div className="mt-1 font-mono text-2xl text-foreground">7,380<span className="text-muted-foreground text-sm"> items</span></div>
            <div className="font-mono text-[10px] text-muted-foreground">→ 498 high-evidence</div>
          </div>
        </div>
      </div>
    </div>
  );
}
