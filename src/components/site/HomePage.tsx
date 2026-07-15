import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronRight,
  FileText,
  Image as ImageIcon,
  AudioLines,
  MessageSquare,
  FileCheck2,
  Hash,
  Quote,
  CheckCircle2,
  AlertTriangle,
  Circle,
} from "lucide-react";

import { Nav } from "@/components/site/Nav";

/* --------------------------------- Shell --------------------------------- */

export function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Nav />
      <main id="main-content" className="relative pt-14" tabIndex={-1}>
        <Hero />
        <CommandCenter />
        <ProofChain />
        <Pathways />
        <TrustArchitecture />
        <FinalStatement />
      </main>
      <Footer />
    </div>
  );
}

/* Shared section wrapper — generous, restrained. */
function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-7xl scroll-mt-20 px-5 sm:px-8 py-20 md:py-28 ${className}`}
    >
      {children}
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.22em] text-muted-foreground">
      <span aria-hidden className="size-1 rounded-full bg-primary" />
      {children}
    </div>
  );
}

/* ---------------------------------- Hero --------------------------------- */

function Hero() {
  return (
    <Section className="!pt-16 sm:!pt-24 !pb-14 sm:!pb-20">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16">
        <div className="min-w-0">
          <Eyebrow>Forensic Evidence Intelligence</Eyebrow>
          <h1 className="mt-6 text-balance text-[40px] font-semibold leading-[1.02] tracking-tight sm:text-[54px] lg:text-[62px]">
            Turn fragmented evidence into source-linked clarity.
          </h1>
          <p className="mt-7 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            TruthTrace transforms scattered messages, documents, images, recordings, and case
            records into a structured chronology that parents and legal professionals can inspect,
            review, and trace back to the source.
          </p>
          <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-foreground/75">
            Built to support evidence review—not replace legal judgment.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              to="/"
              hash="platform"
              activeOptions={{ includeHash: true }}
              data-testid="primary-workflow-cta"
              className="group inline-flex min-h-11 items-center gap-2 rounded-sm border border-primary/60 bg-primary/15 px-5 text-[13.5px] font-medium tracking-tight text-foreground transition-colors hover:bg-primary/25"
            >
              Explore the Platform
              <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/"
              hash="proof-chain"
              activeOptions={{ includeHash: true }}
              className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-border bg-transparent px-5 text-[13.5px] font-medium tracking-tight text-foreground/85 transition-colors hover:border-foreground/40 hover:text-foreground"
            >
              See the Proof Chain
            </Link>
          </div>

          <p className="mt-10 font-mono text-[10.5px] uppercase tracking-[0.2em] text-foreground/75">
            Source-linked by design · Human review required · No citation, no claim
          </p>
          <p className="mt-3 text-[12.5px] leading-relaxed text-muted-foreground">
            Representative product preview · Illustrative case data · No real family information
            shown · No evidence uploads on this site
          </p>
        </div>

        <div className="min-w-0">
          <CommandCenterVisual compact />
        </div>
      </div>
    </Section>
  );
}

/* --------------------- Product command center (section) ------------------ */

type EvidenceSource = {
  id: string;
  type: "Message export" | "Document" | "Audio" | "Image collection";
  label: string;
  date: string;
  state: "Verified source" | "Processed" | "Review required" | "Missing context";
  linksTo: string[];
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
};

type TimelineEvent = {
  id: string;
  title: string;
  date: string;
  window: string;
  channel: string;
  linkedSourceIds: string[];
  citation: {
    excerpt: string;
    reference: string;
    locator: string;
    evidenceId: string;
    hash: string;
  };
  review: "Citation supported" | "Review required" | "Missing context";
};

const SOURCES: EvidenceSource[] = [
  {
    id: "SRC-01",
    type: "Message export",
    label: "messages_aug_14.txt",
    date: "Aug 14",
    state: "Verified source",
    linksTo: ["EVT-01"],
    icon: MessageSquare,
  },
  {
    id: "SRC-02",
    type: "Document",
    label: "parenting_plan_v3.pdf",
    date: "Jun 02",
    state: "Processed",
    linksTo: ["EVT-02", "EVT-04"],
    icon: FileText,
  },
  {
    id: "SRC-03",
    type: "Document",
    label: "school_attendance_q3.pdf",
    date: "Aug 12",
    state: "Verified source",
    linksTo: ["EVT-03"],
    icon: FileCheck2,
  },
  {
    id: "SRC-04",
    type: "Audio",
    label: "voicemail_aug_14.m4a",
    date: "Aug 14",
    state: "Review required",
    linksTo: ["EVT-01"],
    icon: AudioLines,
  },
  {
    id: "SRC-05",
    type: "Image collection",
    label: "exchange_photos_aug/",
    date: "Aug 09",
    state: "Missing context",
    linksTo: ["EVT-05"],
    icon: ImageIcon,
  },
];

const EVENTS: TimelineEvent[] = [
  {
    id: "EVT-01",
    title: "Contact attempts recorded during scheduled evening window",
    date: "August 14",
    window: "7:12–7:36 PM",
    channel: "Communications",
    linkedSourceIds: ["SRC-01", "SRC-04"],
    citation: {
      excerpt:
        "Three outbound attempts recorded. No connected call appears in the sampled record.",
      reference: "Message export · Entries 1183–1185",
      locator: "messages_aug_14.txt · lines 1183–1185",
      evidenceId: "EO-9F2A…",
      hash: "9f2a c41d … 7b03",
    },
    review: "Citation supported",
  },
  {
    id: "EVT-02",
    title: "Scheduled exchange window referenced in parenting plan",
    date: "June 02",
    window: "Section 4.2",
    channel: "Document",
    linkedSourceIds: ["SRC-02"],
    citation: {
      excerpt:
        "Weekday evening contact window defined as 7:00 PM to 8:00 PM local time.",
      reference: "Parenting plan v3 · § 4.2",
      locator: "parenting_plan_v3.pdf · p. 6",
      evidenceId: "EO-4B71…",
      hash: "4b71 08c2 … 1a9e",
    },
    review: "Citation supported",
  },
  {
    id: "EVT-03",
    title: "School attendance record for cited date",
    date: "August 12",
    window: "08:15 sign-in",
    channel: "Document",
    linkedSourceIds: ["SRC-03"],
    citation: {
      excerpt: "Sign-in logged at 08:15. No tardy indicator recorded on this date.",
      reference: "School attendance Q3 · Row 42",
      locator: "school_attendance_q3.pdf · p. 3",
      evidenceId: "EO-1C02…",
      hash: "1c02 e77b … 44a1",
    },
    review: "Citation supported",
  },
  {
    id: "EVT-04",
    title: "Exchange location referenced in parenting plan",
    date: "June 02",
    window: "Section 4.3",
    channel: "Document",
    linkedSourceIds: ["SRC-02"],
    citation: {
      excerpt: "Exchange location listed as the designated neutral pickup point.",
      reference: "Parenting plan v3 · § 4.3",
      locator: "parenting_plan_v3.pdf · p. 6",
      evidenceId: "EO-4B72…",
      hash: "4b72 19d3 … 2f01",
    },
    review: "Review required",
  },
  {
    id: "EVT-05",
    title: "Image set from an exchange window without timestamps",
    date: "August 09",
    window: "Time not recorded",
    channel: "Image collection",
    linkedSourceIds: ["SRC-05"],
    citation: {
      excerpt: "Images present; embedded timestamps not available in the provided files.",
      reference: "exchange_photos_aug/ · 6 files",
      locator: "exchange_photos_aug/ · IMG_0031–0036",
      evidenceId: "EO-7E80…",
      hash: "7e80 3fa0 … 9c22",
    },
    review: "Missing context",
  },
];

function CommandCenter() {
  return (
    <section id="platform" className="relative scroll-mt-20 border-y border-border bg-surface/25">
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>The Platform</Eyebrow>
          <h2 className="mt-4 text-balance text-[32px] font-semibold leading-[1.05] tracking-tight sm:text-[40px]">
            One workspace for evidence, chronology, and source proof.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Evidence sources on the left. A structured chronology in the center. The exact citation
            and source record on the right. Every observation traces back to where it came from.
          </p>
        </div>

        <div className="mt-10">
          <CommandCenterVisual />
        </div>

        <p className="mt-6 max-w-2xl text-[12.5px] leading-relaxed text-muted-foreground">
          Representative demonstration · Illustrative case data · No real family information shown ·
          No evidence uploads on this site
        </p>
      </Section>
    </section>
  );
}

function CommandCenterVisual({ compact = false }: { compact?: boolean }) {
  const [eventId, setEventId] = useState<string>(EVENTS[0].id);
  const selected = useMemo(() => EVENTS.find((e) => e.id === eventId)!, [eventId]);
  const linked = new Set(selected.linkedSourceIds);

  return (
    <div className="overflow-hidden rounded-md border border-border bg-background/70">
      {/* Chrome */}
      <div className="flex items-center justify-between gap-3 border-b border-border/70 bg-surface/40 px-4 py-2.5">
        <div className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted-foreground">
          <span aria-hidden className="size-1.5 rounded-full bg-primary" />
          TruthTrace · Case Workspace
        </div>
        <div className="hidden font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted-foreground sm:block">
          Illustrative case data
        </div>
      </div>

      <div
        className={`grid gap-px bg-border/60 ${
          compact ? "lg:grid-cols-[180px_minmax(0,1fr)_220px]" : "lg:grid-cols-[220px_minmax(0,1fr)_280px]"
        }`}
      >
        {/* Left rail — sources */}
        <div className="bg-background/80 p-3">
          <RailLabel>Evidence sources</RailLabel>
          <ul className="mt-3 space-y-1.5">
            {SOURCES.map((s) => {
              const active = linked.has(s.id);
              const Icon = s.icon;
              return (
                <li
                  key={s.id}
                  className={`rounded-sm border px-2.5 py-2 transition-colors ${
                    active
                      ? "border-primary/50 bg-primary/[0.08]"
                      : "border-transparent bg-surface/30"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon aria-hidden className="size-3.5 shrink-0 text-muted-foreground" />
                    <span className="truncate font-mono text-[11px] text-foreground/90">
                      {s.label}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center justify-between font-mono text-[9.5px] uppercase tracking-[0.16em] text-muted-foreground">
                    <span>{s.type}</span>
                    <span>{s.date}</span>
                  </div>
                  <StateChip state={s.state} className="mt-1.5" />
                </li>
              );
            })}
          </ul>
        </div>

        {/* Center — chronology */}
        <div className="bg-background/80 p-3">
          <div className="flex items-center justify-between">
            <RailLabel>Case chronology</RailLabel>
            <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-muted-foreground">
              5 events
            </span>
          </div>
          <ol className="mt-3 space-y-1.5">
            {EVENTS.map((e) => {
              const active = e.id === eventId;
              return (
                <li key={e.id}>
                  <button
                    type="button"
                    onClick={() => setEventId(e.id)}
                    aria-pressed={active}
                    className={`w-full rounded-sm border px-3 py-2.5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      active
                        ? "border-primary/55 bg-primary/[0.09]"
                        : "border-border/70 bg-surface/25 hover:border-foreground/25"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        {e.date} · {e.window}
                      </span>
                      <span className="font-mono text-[10px] text-muted-foreground">{e.id}</span>
                    </div>
                    <p className="mt-1.5 text-[13px] font-medium leading-snug text-foreground">
                      {e.title}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[9.5px] uppercase tracking-[0.16em] text-muted-foreground">
                      <span>{e.channel}</span>
                      <span>{e.linkedSourceIds.length} linked</span>
                      <ReviewChip state={e.review} />
                    </div>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Right rail — source proof */}
        <div className="bg-background/80 p-3">
          <RailLabel>Source proof</RailLabel>
          <div className="mt-3 rounded-sm border border-border/70 bg-surface/25 p-3">
            <div className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted-foreground">
              Selected observation
            </div>
            <p className="mt-1.5 text-[12.5px] leading-snug text-foreground">{selected.title}</p>

            <div className="mt-3 border-t border-border/70 pt-3">
              <div className="flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted-foreground">
                <Quote aria-hidden className="size-3" /> Citation
              </div>
              <div className="mt-1 font-mono text-[10.5px] text-foreground/85">
                {selected.citation.reference}
              </div>
              <blockquote className="mt-2 border-l-2 border-primary/55 pl-2.5 text-[12px] italic leading-snug text-foreground/90">
                “{selected.citation.excerpt}”
              </blockquote>
            </div>

            <div className="mt-3 border-t border-border/70 pt-3">
              <div className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted-foreground">
                Source locator
              </div>
              <div className="mt-1 font-mono text-[10.5px] text-foreground/85">
                {selected.citation.locator}
              </div>
              <div className="mt-2 flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                <span>{selected.citation.evidenceId}</span>
                <span className="inline-flex items-center gap-1">
                  <Hash aria-hidden className="size-3" />
                  {selected.citation.hash}
                </span>
              </div>
              <ReviewChip state={selected.review} className="mt-2" />
            </div>
          </div>

          <div className="mt-3 rounded-sm border border-primary/40 bg-primary/[0.06] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            No citation → no claim
          </div>
        </div>
      </div>
    </div>
  );
}

function RailLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
      {children}
    </div>
  );
}

function StateChip({
  state,
  className = "",
}: {
  state: EvidenceSource["state"];
  className?: string;
}) {
  const map: Record<EvidenceSource["state"], { color: string; Icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }> }> = {
    "Verified source": { color: "text-success border-success/40", Icon: CheckCircle2 },
    Processed: { color: "text-foreground/75 border-border", Icon: Circle },
    "Review required": { color: "text-amber-400 border-amber-400/40", Icon: AlertTriangle },
    "Missing context": { color: "text-amber-400 border-amber-400/40", Icon: AlertTriangle },
  };
  const { color, Icon } = map[state];
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-[2px] border px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] ${color} ${className}`}
    >
      <Icon aria-hidden className="size-2.5" />
      {state}
    </span>
  );
}

function ReviewChip({
  state,
  className = "",
}: {
  state: TimelineEvent["review"];
  className?: string;
}) {
  const map: Record<TimelineEvent["review"], string> = {
    "Citation supported": "text-success",
    "Review required": "text-amber-400",
    "Missing context": "text-amber-400",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 font-mono text-[9.5px] uppercase tracking-[0.16em] ${map[state]} ${className}`}
    >
      <span aria-hidden className="size-1 rounded-full bg-current" />
      {state}
    </span>
  );
}

/* ------------------------------- Proof chain ----------------------------- */

function ProofChain() {
  const steps = [
    {
      label: "Observation",
      body: "Multiple contact attempts occurred during the scheduled window.",
    },
    {
      label: "Event",
      body: "Three outbound attempts were recorded between 7:12 PM and 7:36 PM.",
    },
    { label: "Citation", body: "Message export · Entries 1183–1185" },
    {
      label: "Excerpt",
      body: "“Three outbound attempts recorded. No connected call appears in the sampled record.”",
    },
    { label: "Source", body: "messages_aug_14.txt · EO-9F2A…" },
  ];

  return (
    <Section id="proof-chain">
      <div className="max-w-3xl">
        <Eyebrow>Trace every observation</Eyebrow>
        <h2 className="mt-4 text-balance text-[32px] font-semibold leading-[1.05] tracking-tight sm:text-[40px]">
          See exactly where the statement came from.
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
          TruthTrace connects observations to timeline events, exact citations, source excerpts,
          and originating evidence records.
        </p>
      </div>

      {/* Horizontal on desktop, stacked on mobile */}
      <ol className="mt-10 grid gap-3 lg:grid-cols-5">
        {steps.map((s, i) => (
          <li
            key={s.label}
            className="relative rounded-sm border border-border bg-surface/30 p-4"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
                {s.label}
              </span>
              <span className="font-mono text-[10px] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <p className="mt-3 text-[13.5px] leading-snug text-foreground/90">{s.body}</p>
            {i < steps.length - 1 && (
              <ChevronRight
                aria-hidden
                className="absolute -right-2 top-1/2 hidden size-4 -translate-y-1/2 text-border lg:block"
              />
            )}
          </li>
        ))}
      </ol>

      <p className="mt-8 max-w-3xl border-l-2 border-primary/50 pl-4 text-[13.5px] leading-relaxed text-foreground/80">
        This source documents activity in the sampled record. It does not independently determine
        intent, credibility, fault, admissibility, or legal significance.
      </p>
    </Section>
  );
}

/* -------------------------- Two role pathways ---------------------------- */

function Pathways() {
  return (
    <section className="relative border-y border-border bg-surface/20">
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <PathwayColumn
            id="parents"
            eyebrow="For parents"
            title="Bring order to the records you already have."
            body="See messages, documents, recordings, and events in one structured view before discussing them with counsel or another qualified professional."
            outcomes={[
              "Understand what has been collected",
              "Identify missing context",
              "Follow events back to their source",
            ]}
            action="Parent Workflow"
          />
          <PathwayColumn
            id="professionals"
            eyebrow="For professionals"
            title="Review the chronology—not another evidence dump."
            body="Inspect events, excerpts, citations, and source relationships while retaining professional control over relevance, foundation, strategy, and use."
            outcomes={[
              "Review source-supported events",
              "Locate exact excerpts faster",
              "Identify unresolved or unsupported items",
            ]}
            action="Professional Workflow"
          />
        </div>

        <p className="mt-12 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/75">
          The view may change. The underlying evidence does not.
        </p>
      </Section>
    </section>
  );
}

function PathwayColumn({
  id,
  eyebrow,
  title,
  body,
  outcomes,
  action,
}: {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  outcomes: string[];
  action: string;
}) {
  return (
    <div id={id} className="scroll-mt-20 rounded-sm border border-border bg-background/60 p-6 sm:p-8">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h3 className="mt-4 text-balance text-[24px] font-semibold leading-[1.15] tracking-tight sm:text-[28px]">
        {title}
      </h3>
      <p className="mt-4 text-[14.5px] leading-relaxed text-muted-foreground">{body}</p>
      <ul className="mt-6 space-y-2.5">
        {outcomes.map((o) => (
          <li key={o} className="flex items-start gap-2.5 text-[14px] text-foreground/85">
            <span aria-hidden className="mt-1.5 size-1 shrink-0 rounded-full bg-primary" />
            {o}
          </li>
        ))}
      </ul>
      <div className="mt-7 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/60">
        {action} <ArrowRight aria-hidden className="size-3.5" />
      </div>
    </div>
  );
}

/* --------------------------- Trust architecture -------------------------- */

function TrustArchitecture() {
  const flow = [
    "Source Record",
    "Evidence Identity",
    "Structured Event",
    "Citation",
    "Human Review",
    "Reviewable Output",
  ];
  const principles = [
    {
      title: "Source relationships remain visible",
      body: "A reviewer can trace an observation to its originating evidence.",
    },
    {
      title: "Unsupported statements remain blocked",
      body: "Missing citations are treated as review issues, not completed conclusions.",
    },
    {
      title: "Processing history is reviewable",
      body: "Original records and derived outputs remain distinguishable.",
    },
    {
      title: "Judgment remains human",
      body: "TruthTrace does not make legal, diagnostic, credibility, or custody determinations.",
    },
  ];
  return (
    <Section id="trust">
      <div className="max-w-3xl">
        <Eyebrow>Built to show its work</Eyebrow>
        <h2 className="mt-4 text-balance text-[32px] font-semibold leading-[1.05] tracking-tight sm:text-[40px]">
          Evidence intelligence without the black box.
        </h2>
      </div>

      {/* Flow diagram */}
      <div className="mt-10 rounded-sm border border-border bg-surface/25 p-5 sm:p-6">
        <RailLabel>Processing flow</RailLabel>
        <ol className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-3 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/85">
          {flow.map((step, i) => (
            <li key={step} className="flex items-center gap-2">
              <span className="rounded-sm border border-border bg-background/70 px-2.5 py-1.5">
                {step}
              </span>
              {i < flow.length - 1 && (
                <ChevronRight aria-hidden className="size-3.5 text-muted-foreground" />
              )}
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        {principles.map((p) => (
          <div
            key={p.title}
            className="rounded-sm border border-border bg-background/60 p-5"
          >
            <h3 className="text-[15px] font-semibold tracking-tight text-foreground">{p.title}</h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{p.body}</p>
          </div>
        ))}
      </div>

      <p className="mt-10 max-w-3xl border-l-2 border-primary/50 pl-4 text-[15px] leading-relaxed text-foreground/85">
        Evidence can be structured by software. Judgment remains human.
      </p>
    </Section>
  );
}

/* ---------------------------- Final statement ---------------------------- */

function FinalStatement() {
  return (
    <section className="relative border-t border-border bg-surface/30">
      <Section className="!py-24 sm:!py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-[34px] font-semibold leading-[1.05] tracking-tight sm:text-[46px]">
            Clarity begins when the evidence can be followed.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            TruthTrace creates a structured path from fragmented records to chronology, citations,
            source excerpts, and professional review.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              hash="platform"
              activeOptions={{ includeHash: true }}
              className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-primary/60 bg-primary/15 px-5 text-[13.5px] font-medium tracking-tight text-foreground transition-colors hover:bg-primary/25"
            >
              Explore the Platform
              <ArrowRight aria-hidden className="size-4" />
            </Link>
            <Link
              to="/"
              hash="trust"
              activeOptions={{ includeHash: true }}
              className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-border bg-transparent px-5 text-[13.5px] font-medium tracking-tight text-foreground/85 transition-colors hover:border-foreground/40 hover:text-foreground"
            >
              Review the Trust Model
            </Link>
          </div>
        </div>
      </Section>
    </section>
  );
}

/* --------------------------------- Footer -------------------------------- */

function Footer() {
  return (
    <footer className="relative border-t border-border px-5 py-10 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto]">
        <div className="max-w-xl">
          <div className="flex items-center gap-2.5">
            <div aria-hidden className="grid size-7 place-items-center rounded-sm bg-primary/15 ring-1 ring-primary/40">
              <div className="h-1.5 w-1.5 rounded-[1px] bg-primary" />
            </div>
            <span className="text-[14px] font-semibold tracking-tight">TruthTrace</span>
          </div>
          <p className="mt-4 text-[12.5px] leading-relaxed text-muted-foreground">
            {"TruthTrace provides evidence-organization and review-support technology. It does not provide legal advice, determine admissibility, recommend custody outcomes, diagnose individuals, or replace qualified professional judgment."}
          </p>
          <p className="mt-3 text-[12px] leading-relaxed text-muted-foreground">
            No evidence uploads on this site · No real family information shown
          </p>
          <p className="mt-4 text-[11.5px] text-muted-foreground">
            © {new Date().getFullYear()} TruthTrace
          </p>
        </div>

        <nav
          aria-label="Footer"
          className="grid grid-cols-2 gap-x-10 gap-y-2 text-[13px] sm:grid-cols-[auto_auto]"
        >
          <FooterCol
            heading="Platform"
            items={[
              { label: "Platform", to: "/", hash: "platform" },
              { label: "Parents", to: "/", hash: "parents" },
              { label: "Professionals", to: "/", hash: "professionals" },
              { label: "Trust", to: "/", hash: "trust" },
            ]}
          />
          <FooterCol
            heading="Company"
            items={[
              { label: "Design principles", to: "/technology" },
              { label: "Privacy", to: "/privacy" },
              { label: "Terms", to: "/terms" },
              { label: "Contact", to: "/contact" },
            ]}
          />
        </nav>
      </div>
    </footer>
  );
}

function FooterCol({
  heading,
  items,
}: {
  heading: string;
  items: { label: string; to: "/" | "/technology" | "/privacy" | "/terms" | "/contact"; hash?: string }[];
}) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        {heading}
      </div>
      <ul className="mt-3 space-y-2">
        {items.map((it) =>
          it.hash ? (
            <li key={it.label}>
              <Link
                to={it.to}
                hash={it.hash}
                activeOptions={{ includeHash: true }}
                className="text-foreground/80 hover:text-foreground"
              >
                {it.label}
              </Link>
            </li>
          ) : (
            <li key={it.label}>
              <Link to={it.to} className="text-foreground/80 hover:text-foreground">
                {it.label}
              </Link>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}
