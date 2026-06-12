import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare, Mail, AudioLines, FileText, Camera, Database, Tag,
  ShieldCheck, Hash, Quote, CircleDot, Search, Filter, ChevronRight,
  Layers,
} from "lucide-react";


type Source = {
  id: string; icon: typeof MessageSquare; label: string; status: string; active?: boolean;
};

const sources: Source[] = [
  { id: "msg", icon: MessageSquare, label: "Messages", status: "linked", active: true },
  { id: "mail", icon: Mail, label: "Emails", status: "linked" },
  { id: "audio", icon: AudioLines, label: "Audio", status: "linked" },
  { id: "pdf", icon: FileText, label: "Documents", status: "linked" },
  { id: "photo", icon: Camera, label: "Screenshots", status: "linked" },
  { id: "exp", icon: Database, label: "Exports", status: "linked" },
  { id: "meta", icon: Tag, label: "Metadata", status: "preserved" },
];

const events = [
  {
    t: "2024-03-12 · 19:42",
    actor: "Co-parent",
    title: "Schedule change refused without notice",
    tags: ["Schedule", "Communication"],
    cites: 3,
    severity: "high",
  },
  {
    t: "2024-03-14 · 08:11",
    actor: "School",
    title: "Pickup discrepancy logged by administrator",
    tags: ["School", "Third-party"],
    cites: 2,
    severity: "med",
  },
  {
    t: "2024-03-18 · 21:07",
    actor: "Co-parent",
    title: "Voicemail referencing prior agreement (transcribed)",
    tags: ["Audio", "Agreement"],
    cites: 4,
    severity: "high",
    selected: true,
  },
  {
    t: "2024-03-19 · 11:34",
    actor: "Pediatrician",
    title: "Appointment confirmation, parent not informed",
    tags: ["Medical", "Notice"],
    cites: 2,
    severity: "med",
  },
  {
    t: "2024-03-22 · 16:58",
    actor: "Co-parent",
    title: "Text thread contradicting earlier statement",
    tags: ["Inconsistency"],
    cites: 5,
    severity: "high",
  },
];

const severityColor: Record<string, string> = {
  high: "bg-primary/20 text-primary ring-primary/30",
  med:  "bg-accent/15 text-accent ring-accent/30",
};

export function Workspace() {
  const [tab, setTab] = useState<"evidence" | "timeline" | "inspector">("timeline");
  return (
    <div className="relative">
      {/* App chrome */}
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/40 shadow-[0_30px_80px_-30px_rgba(79,140,255,0.35)]">
        {/* Title bar */}
        <div className="flex items-center justify-between gap-3 border-b border-border bg-background/70 px-3 py-2.5 sm:px-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="hidden gap-1.5 sm:flex">
              <span className="size-2.5 rounded-full bg-muted-foreground/30" />
              <span className="size-2.5 rounded-full bg-muted-foreground/30" />
              <span className="size-2.5 rounded-full bg-muted-foreground/30" />
            </div>
            <div className="truncate font-mono text-[11px] text-muted-foreground sm:ml-2">
              <span className="hidden sm:inline">truthtrace.app / case · </span>
              <span className="text-foreground/80">smith-v-smith-2024</span>
            </div>
          </div>
          <div className="hidden shrink-0 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:flex">
            <span className="size-1.5 rounded-full bg-success shadow-[0_0_8px_var(--success)] pulse-soft" />
            workspace · live
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-2 border-b border-border bg-background/40 px-3 py-2 text-xs sm:px-4">
          <div className="flex min-w-0 max-w-full items-center gap-1.5 rounded-md border border-border bg-surface/60 px-2 py-1 text-muted-foreground">
            <Search className="size-3.5 shrink-0" />
            <span className="truncate font-mono">actor:"co-parent" AND tag:schedule</span>
          </div>
          <button className="flex shrink-0 items-center gap-1.5 rounded-md border border-border bg-surface/60 px-2 py-1 text-muted-foreground">
            <Filter className="size-3.5" /> 6 filters
          </button>
          <div className="ml-auto hidden shrink-0 items-center gap-3 font-mono text-[11px] text-muted-foreground md:flex">
            <span>evidence indexed</span>
            <span className="text-border">·</span>
            <span>sources linked</span>
            <span className="text-border">·</span>
            <span className="text-foreground">review required</span>
          </div>
        </div>

        {/* Mobile tab switcher */}
        <div role="tablist" aria-label="Workspace panels" className="flex gap-1 border-b border-border bg-background/40 p-1.5 lg:hidden">
          {([
            { id: "evidence",  label: "Evidence",  icon: Layers },
            { id: "timeline",  label: "Timeline",  icon: CircleDot },
            { id: "inspector", label: "Inspector", icon: ShieldCheck },
          ] as const).map((t) => {
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={active}
                onClick={() => setTab(t.id)}
                className={`flex flex-1 items-center justify-center gap-1.5 rounded-md px-2 py-2 text-[12px] font-medium transition-colors ${
                  active
                    ? "bg-primary/15 text-foreground ring-1 ring-primary/30"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <t.icon className="size-3.5" />
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Three panels */}
        <div className="grid grid-cols-12 lg:min-h-[600px]">
          {/* LEFT — Sources */}
          <aside className={`col-span-12 lg:col-span-3 lg:border-r border-border bg-background/30 ${tab === "evidence" ? "block" : "hidden"} lg:block`}>

            <PanelHeader icon={Layers} title="Evidence Sources" />
            <div className="space-y-1 p-3">
              {sources.map((s) => (
                <button
                  key={s.id}
                  className={`group flex w-full items-center gap-2.5 rounded-md border px-2.5 py-2 text-left text-[13px] transition-colors ${
                    s.active
                      ? "border-primary/40 bg-primary/10 text-foreground"
                      : "border-transparent text-foreground/80 hover:border-border hover:bg-surface/60"
                  }`}
                >
                  <s.icon className={`size-4 ${s.active ? "text-primary" : "text-muted-foreground"}`} />
                  <span className="flex-1 truncate">{s.label}</span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">{s.status}</span>
                </button>
              ))}
            </div>

            <div className="mx-3 mt-2 rounded-md border border-border bg-surface/40 p-3">
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Custody chain</div>
              <div className="mt-2 space-y-1.5 font-mono text-[11px]">
                <Row k="ingested" v="complete" />
                <Row k="identity" v="sha-256" />
                <Row k="provenance" v="preserved" valueClass="text-success" />
              </div>
            </div>
          </aside>

          {/* CENTER — Timeline */}
          <section className={`col-span-12 lg:col-span-6 lg:border-r border-border bg-background/10 ${tab === "timeline" ? "block" : "hidden"} lg:block`}>
            <PanelHeader icon={CircleDot} title="Timeline" right={<span className="font-mono text-[10px] text-muted-foreground">illustrative view</span>} />

            <div className="relative p-4">
              {/* spine */}
              <div className="absolute left-[28px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

              <div className="space-y-3">
                {events.map((e, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className={`relative rounded-lg border px-3.5 py-3 pl-10 transition-colors ${
                      e.selected
                        ? "border-primary/40 bg-primary/10"
                        : "border-border bg-surface/40 hover:border-foreground/20"
                    }`}
                  >
                    <span className={`absolute left-[22px] top-4 size-3 -translate-x-1/2 rounded-full ring-4 ring-background ${
                      e.severity === "high" ? "bg-primary shadow-[0_0_10px_var(--primary)]" : "bg-accent"
                    }`} />
                    <div className="flex items-center justify-between">
                      <div className="font-mono text-[10px] text-muted-foreground">{e.t}</div>
                      <div className="flex items-center gap-1.5">
                        <span className={`rounded-full px-1.5 py-px font-mono text-[9px] uppercase ring-1 ${severityColor[e.severity]}`}>
                          {e.severity === "high" ? "high evidence" : "supporting"}
                        </span>
                      </div>
                    </div>
                    <div className="mt-1 text-sm font-medium text-foreground">{e.title}</div>
                    <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[11px] text-muted-foreground">
                      <span className="font-mono">{e.actor}</span>
                      <span className="text-border">·</span>
                      {e.tags.map((t) => (
                        <span key={t} className="rounded border border-border bg-background/60 px-1.5 py-px font-mono text-[10px]">
                          {t}
                        </span>
                      ))}
                      <span className="ml-auto inline-flex items-center gap-1 font-mono text-[10px]">
                        <Quote className="size-3" /> {e.cites} citations
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* RIGHT — Inspector */}
          <aside className={`col-span-12 lg:col-span-3 bg-background/30 ${tab === "inspector" ? "block" : "hidden"} lg:block`}>
            <PanelHeader icon={ShieldCheck} title="Evidence Inspector" right={<span className="font-mono text-[10px] text-success">reviewable</span>} />

            <div className="space-y-3 p-3">
              <div className="rounded-md border border-border bg-surface/40 p-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">EvidenceObject</div>
                <div className="mt-1 font-mono text-[11px] text-foreground">EO-2024-03-18-7f3a</div>
                <div className="mt-2 grid grid-cols-2 gap-2 font-mono text-[10px]">
                  <div>
                    <div className="text-muted-foreground">hash</div>
                    <div className="truncate text-foreground/90">a3f2…91c7</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">parent</div>
                    <div className="truncate text-foreground/90">EO-…ce21</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">type</div>
                    <div className="text-foreground/90">audio/m4a</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">duration</div>
                    <div className="text-foreground/90">0:42</div>
                  </div>
                </div>
              </div>

              <div className="rounded-md border border-border bg-surface/40 p-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Source excerpt</div>
                <blockquote className="mt-2 border-l-2 border-primary/60 pl-2.5 text-[12px] italic text-foreground/90">
                  Source excerpts remain attached to the originating EvidenceObject for professional review.
                </blockquote>
                <div className="mt-2 inline-flex items-center gap-1 font-mono text-[10px] text-muted-foreground">
                  <Quote className="size-3" /> cite/EO-2024-03-18-7f3a#t=00:18
                </div>
              </div>

              <div className="rounded-md border border-border bg-surface/40 p-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Citations</div>
                <div className="mt-2 space-y-1.5">
                  {["Audio excerpt", "Message thread", "Calendar event", "Email record"].map((citation) => (
                    <div key={citation} className="space-y-1">
                      <div className="flex items-center justify-between font-mono text-[10px]">
                        <span className="text-foreground/90">{citation}</span>
                        <span className="text-success">linked</span>
                      </div>
                      <div className="h-1 rounded-full bg-border/60">
                        <div className="h-full w-full rounded-full bg-gradient-to-r from-primary to-accent" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-md border border-border bg-surface/40 p-3">
                <div className="flex items-center justify-between">
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Review status</div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-success/15 px-2 py-0.5 font-mono text-[10px] text-success ring-1 ring-success/30">
                    <Hash className="size-3" /> attorney-ready
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between text-[11px]">
                  <span className="text-muted-foreground">Human review</span>
                  <span className="font-mono text-foreground">required</span>
                </div>
                <div className="mt-2 inline-flex items-center gap-1 font-mono text-[10px] text-muted-foreground">
                  chain-of-custody <ChevronRight className="size-3" /> verified
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* glow */}
      <div className="pointer-events-none absolute -inset-x-12 -bottom-10 h-40 bg-[radial-gradient(60%_60%_at_50%_0%,color-mix(in_oklab,var(--primary)_22%,transparent),transparent)]" />
    </div>
  );
}

function PanelHeader({ icon: Icon, title, right }: { icon: typeof MessageSquare; title: string; right?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between border-b border-border bg-background/40 px-3.5 py-2.5">
      <div className="inline-flex items-center gap-2 text-[12px] font-medium text-foreground">
        <Icon className="size-3.5 text-muted-foreground" />
        {title}
      </div>
      {right}
    </div>
  );
}

function Row({ k, v, valueClass = "text-foreground/90" }: { k: string; v: string; valueClass?: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{k}</span>
      <span className={valueClass}>{v}</span>
    </div>
  );
}
