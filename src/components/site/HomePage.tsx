import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  AudioLines,
  Briefcase,
  Camera,
  Check,
  ChevronRight,
  Circle,
  Database,
  Eye,
  FileCheck2,
  FileText,
  Fingerprint,
  GitBranch,
  Hash,
  Layers3,
  Lock,
  MessageSquare,
  Quote,
  ShieldCheck,
  UserCheck,
  UserRound,
  Video,
  X,
} from "lucide-react";
import type { ComponentType, ReactNode, SVGProps } from "react";

import { Nav } from "@/components/site/Nav";
import { Eyebrow, Section, SectionHeader } from "@/components/site/Section";

/* ------------------------------- Page shell ------------------------------- */

export function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Background />
      <Nav />
      <main id="main-content" className="relative pt-14" tabIndex={-1}>
        <Hero />
        <ChaosToIntelligence />
        <ProofChain />
        <ProcessingLedger />
        <NoCitationNoClaim />
        <Differentiators />
        <RoleView />
        <EvidenceCategories />
        <TrustArchitecture />
        <ClosingCta />
      </main>
      <Footer />
    </div>
  );
}

function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute -top-48 left-1/2 h-[720px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--primary)_14%,transparent),transparent)] blur-3xl" />
    </div>
  );
}

/* ---------------------------------- Hero ---------------------------------- */

function Hero() {
  return (
    <Section className="!pb-16 !pt-20 sm:!pb-24 sm:!pt-28 lg:!pb-28 lg:!pt-32">
      <div className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12">
        <div className="min-w-0">
          <Eyebrow>Forensic Evidence Intelligence for Family Law</Eyebrow>
          <h1 className="mt-6 max-w-4xl text-balance text-[38px] font-semibold leading-[1.03] tracking-tight sm:text-[52px] lg:text-[62px]">
            Turn fragmented evidence into{" "}
            <span className="text-gradient-primary">structured, source-linked clarity.</span>
          </h1>
          <p className="mt-7 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            TruthTrace is being designed to help parents, attorneys, and evaluators organize
            messages, documents, images, recordings, and case records into a reviewable chronology
            with visible links back to source material.
          </p>
          <p className="mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-foreground/75 sm:text-base">
            Built for the evidence work between fragmented files and professional review—not to
            replace legal judgment.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/"
              hash="proof-chain"
              activeOptions={{ includeHash: true }}
              data-testid="primary-workflow-cta"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-primary/60 bg-primary/15 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              View the representative workflow
            </Link>
            <Link
              to="/"
              hash="trust"
              activeOptions={{ includeHash: true }}
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-foreground/85 transition-colors hover:border-foreground/40 hover:text-foreground"
            >
              Review product boundaries
            </Link>
          </div>

          <div className="mt-10 border-y border-border py-5">
            <div className="flex flex-wrap gap-x-5 gap-y-3 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/80 sm:text-[11px]">
              {[
                "Source Identity",
                "Visible Provenance",
                "Structured Chronology",
                "Professional Review",
              ].map((item, i) => (
                <span key={item} className="flex items-center gap-5">
                  {i > 0 && (
                    <span aria-hidden className="hidden size-1 rounded-full bg-primary sm:block" />
                  )}
                  {item}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Representative product preview · Illustrative case data · No real family information
            shown · No evidence uploads on this site
          </p>
        </div>

        <div className="min-w-0">
          <HeroVisual />
        </div>
      </div>
    </Section>
  );
}

/* Forensic workstation visual — restrained, evidence-led. */
function HeroVisual() {
  return (
    <div className="relative w-full min-w-0 overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-surface/70 to-background/40 p-4 sm:p-6">
      <div className="pointer-events-none absolute inset-0 grid-bg radial-fade opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_-10%,color-mix(in_oklab,var(--primary)_16%,transparent),transparent)]" />

      <div className="relative mb-4 flex flex-col gap-2 border-b border-border/60 pb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span className="flex items-center gap-2">
          <span
            aria-hidden
            className="size-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]"
          />
          Forensic Review Workstation
        </span>
        <span className="text-foreground/70">Illustrative data · Not live</span>
      </div>

      <div className="relative grid gap-3 sm:grid-cols-5">
        {/* Finding */}
        <div className="sm:col-span-3 rounded-lg border border-primary/40 bg-primary/[0.08] p-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
              Finding
            </span>
            <span className="font-mono text-[10px] text-muted-foreground">FND-0184</span>
          </div>
          <p className="mt-3 text-sm font-medium leading-snug text-foreground">
            Voicemail and messages reference the same scheduled contact window.
          </p>
          <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
            Shows cited records only. Does not determine what occurred, why, or its legal
            significance.
          </p>
        </div>
        {/* Timeline event */}
        <div className="sm:col-span-2 rounded-lg border border-border bg-surface/40 p-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Timeline Event
          </span>
          <div className="mt-3 font-mono text-[11px] text-foreground/90">2024-03-18 · 21:07</div>
          <div className="mt-1 text-[12px] text-foreground/80">EVT-0921 · Co-parent · Audio</div>
        </div>

        {/* Citation */}
        <div className="sm:col-span-3 rounded-lg border border-border bg-surface/40 p-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              Source Excerpt
            </span>
            <span className="inline-flex items-center gap-1 font-mono text-[10px] text-muted-foreground">
              <Quote className="size-3" /> CIT-0417
            </span>
          </div>
          <blockquote className="mt-2 border-l-2 border-primary/60 pl-2.5 text-[12px] italic text-foreground/90">
            "…voicemail excerpt referencing the documented scheduling window…"
          </blockquote>
          <div className="mt-2 font-mono text-[10px] text-muted-foreground">
            voicemail-2024-03-18.m4a · t=00:18–00:34
          </div>
        </div>
        {/* Representative source record */}
        <div className="sm:col-span-2 rounded-lg border border-border bg-surface/40 p-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Preserved source record
          </span>
          <div className="mt-3 font-mono text-[11px] text-foreground/90">SRC-2024-03-18-7f3a</div>
          <div className="mt-2 grid gap-1 font-mono text-[10px] text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Hash className="size-3" />
              a3f2…91c7
            </div>
            <div className="inline-flex items-center gap-1 text-success">
              <Check className="size-3" /> shown as preserved
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-border/60 pt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        <span>Finding</span>
        <ChevronRight className="size-3" />
        <span>Event</span>
        <ChevronRight className="size-3" />
        <span>Citation</span>
        <ChevronRight className="size-3" />
        <span>Excerpt</span>
        <ChevronRight className="size-3" />
        <span className="text-foreground/85">Source record · illustrative SHA-256</span>
      </div>
    </div>
  );
}

/* ------------------------ Evidence chaos → reviewable --------------------- */

function ChaosToIntelligence() {
  const before = [
    "Message threads across platforms",
    "Long document sets",
    "Mixed screenshots, emails, and recordings",
    "Chronology assembled by hand",
    "Source context that is easy to lose",
  ];
  const after = [
    "Source records kept distinct",
    "Structured chronology",
    "Observations linked to citations",
    "Review boundaries made visible",
    "Focused professional review",
  ];
  return (
    <section id="how" className="relative scroll-mt-20 border-y border-border bg-surface/20">
      <Section>
        <SectionHeader
          eyebrow="Fragmented Evidence → Reviewable Chronology"
          title={
            <>
              Evidence does not arrive organized.{" "}
              <span className="text-gradient-primary">
                The review process still needs structure.
              </span>
            </>
          }
          sub="The representative workflow shows how mixed-format records can remain identifiable while events, excerpts, and citations are arranged for human review."
        />
        <div className="mt-12 grid gap-3 lg:grid-cols-[1fr_auto_1fr]">
          <ChaosColumn label="Before · Evidence dump" tone="muted" items={before} />
          <div className="grid place-items-center py-2 text-primary lg:py-0">
            <ChevronRight className="size-6 rotate-90 lg:rotate-0" />
          </div>
          <ChaosColumn label="After · Reviewable intelligence" tone="primary" items={after} />
        </div>

        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Representative workflow only. No measured customer outcomes or live processing results are
          shown.
        </p>
      </Section>
    </section>
  );
}

function ChaosColumn({
  label,
  items,
  tone,
}: {
  label: string;
  items: string[];
  tone: "muted" | "primary";
}) {
  return (
    <div
      className={`rounded-xl border p-5 sm:p-6 ${tone === "primary" ? "border-primary/40 bg-primary/[0.06]" : "border-border bg-background/40"}`}
    >
      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </div>
      <ul className="mt-5 space-y-2.5">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2.5 text-sm text-foreground/85">
            <span
              aria-hidden
              className={`mt-1.5 size-1.5 shrink-0 rounded-full ${tone === "primary" ? "bg-primary" : "bg-muted-foreground/60"}`}
            />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* --------------------------- Interactive proof chain --------------------- */

type Finding = {
  id: string;
  text: string;
  qualifier: string;
  event: { id: string; when: string; actor: string; kind: string };
  citation: { id: string; excerpt: string; source: string; locator: string };
  evidence: { id: string; hash: string; type: string };
};

const FINDINGS: Finding[] = [
  {
    id: "FND-0184",
    text: "Voicemail and messages reference the same scheduled contact window.",
    qualifier:
      "Shows cited records only. Does not determine what occurred, why, or its legal significance.",
    event: { id: "EVT-0921", when: "2024-03-18 · 21:07", actor: "Co-parent", kind: "Audio" },
    citation: {
      id: "CIT-0417",
      excerpt: "…voicemail excerpt referencing the documented scheduling window…",
      source: "voicemail-2024-03-18.m4a",
      locator: "t=00:18–00:34",
    },
    evidence: { id: "SRC-2024-03-18-7f3a", hash: "a3f2c81d…91c7", type: "audio/m4a" },
  },
  {
    id: "FND-0192",
    text: "School record notes pickup timing on the cited date.",
    qualifier: "Reflects the cited record as written. No conclusion about responsibility is made.",
    event: {
      id: "EVT-0944",
      when: "2024-03-14 · 08:11",
      actor: "School administrator",
      kind: "Document",
    },
    citation: {
      id: "CIT-0422",
      excerpt: "…record includes scheduled and logged pickup times…",
      source: "school-attendance-2024-03-14.pdf",
      locator: "p. 2",
    },
    evidence: { id: "SRC-2024-03-14-1c02", hash: "b1e7d40a…4e12", type: "application/pdf" },
  },
  {
    id: "FND-0207",
    text: "Two cited messages use different dates for the same scheduled exchange.",
    qualifier: "Limited to the cited text. Interpretation is left to qualified reviewers.",
    event: { id: "EVT-0977", when: "2024-03-22 · 16:58", actor: "Co-parent", kind: "Messages" },
    citation: {
      id: "CIT-0451",
      excerpt: "…one message references 03-11; a later message references 03-22…",
      source: "messages-export-2024-Q1.rsmf",
      locator: "msg #4218",
    },
    evidence: { id: "SRC-2024-03-22-9b8d", hash: "c99a12ef…7a03", type: "application/rsmf" },
  },
];

function ProofChain() {
  const [id, setId] = useState<string>(FINDINGS[0].id);
  const selected = useMemo(() => FINDINGS.find((f) => f.id === id)!, [id]);
  return (
    <section id="proof-chain" className="scroll-mt-14 relative">
      <Section>
        <SectionHeader
          eyebrow="Representative Observation → Cited Source"
          title={
            <>
              Inspect how a sample observation links to{" "}
              <span className="text-gradient-primary">its cited source.</span>
            </>
          }
          sub="Select an illustrative observation to view its associated timeline event, excerpt, locator, and source identifier. The example does not determine intent, credibility, or legal significance."
        />

        <p className="mt-6 rounded-lg border border-primary/30 bg-primary/[0.06] px-4 py-3 text-sm leading-relaxed text-foreground/85">
          Representative demonstration · Illustrative case data · No real family information shown ·
          Static interface, not live product telemetry
        </p>

        <div className="mt-10 grid gap-3 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          {/* Finding list */}
          <div
            role="group"
            aria-label="Representative observations"
            className="flex flex-col gap-2"
          >
            {FINDINGS.map((f) => {
              const active = f.id === id;
              return (
                <button
                  key={f.id}
                  type="button"
                  data-finding-id={f.id}
                  aria-pressed={active}
                  onClick={() => setId(f.id)}
                  className={`group rounded-xl border p-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    active
                      ? "border-primary/50 bg-primary/[0.08]"
                      : "border-border bg-surface/40 hover:border-foreground/25"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                      Sample observation
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground">{f.id}</span>
                  </div>
                  <p className="mt-2 text-sm font-medium leading-snug text-foreground">{f.text}</p>
                </button>
              );
            })}
          </div>

          {/* Panel */}
          <div
            id="proof-chain-panel"
            aria-live="polite"
            className="rounded-2xl border border-border bg-background/60 p-5 sm:p-6"
          >
            <ProofRow label="Sample observation" mono={selected.id}>
              <p className="text-sm text-foreground">{selected.text}</p>
              <p className="mt-2 text-[12px] leading-relaxed text-muted-foreground">
                {selected.qualifier}
              </p>
            </ProofRow>
            <ProofArrow />
            <ProofRow label="Timeline event" mono={selected.event.id}>
              <div className="font-mono text-[12px] text-foreground/90">{selected.event.when}</div>
              <div className="mt-1 text-[12px] text-muted-foreground">
                {selected.event.actor} · {selected.event.kind}
              </div>
            </ProofRow>
            <ProofArrow />
            <ProofRow label="Citation" mono={selected.citation.id}>
              <blockquote className="border-l-2 border-primary/60 pl-3 text-[13px] italic text-foreground/90">
                {selected.citation.excerpt}
              </blockquote>
              <div className="mt-2 font-mono text-[11px] text-muted-foreground">
                {selected.citation.source} · {selected.citation.locator}
              </div>
            </ProofRow>
            <ProofArrow />
            <ProofRow label="Source record" mono={selected.evidence.id}>
              <div className="grid gap-2 sm:grid-cols-3">
                <MetaCell k="type" v={selected.evidence.type} />
                <MetaCell k="sample sha-256" v={selected.evidence.hash} />
                <MetaCell k="source state" v="shown as preserved" tone="success" />
              </div>
            </ProofRow>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              Representative demonstration · Identifiers are illustrative
            </p>
            <p className="mt-2 text-[12px] leading-relaxed text-muted-foreground">
              Export limitation: this public preview does not create or download a report.
            </p>
          </div>
        </div>
      </Section>
    </section>
  );
}

function ProofRow({ label, mono, children }: { label: string; mono: string; children: ReactNode }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          {label}
        </span>
        <span className="font-mono text-[10px] text-foreground/70">{mono}</span>
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
}
function ProofArrow() {
  return (
    <div aria-hidden className="my-4 flex items-center gap-3 text-primary/70">
      <span className="h-px flex-1 bg-border" />
      <ChevronRight className="size-4 rotate-90" />
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}
function MetaCell({ k, v, tone }: { k: string; v: string; tone?: "success" }) {
  return (
    <div className="rounded-md border border-border bg-surface/40 p-2.5">
      <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
        {k}
      </div>
      <div
        className={`mt-1 break-all font-mono text-[11px] ${tone === "success" ? "text-success" : "text-foreground/90"}`}
      >
        {v}
      </div>
    </div>
  );
}

/* ------------------ Representative processing record ------------------ */

const LEDGER_STAGES = [
  {
    id: "01",
    stage: "Intake",
    artifact: "8 sample source records listed",
    run: "example-01",
    meta: "source state shown",
  },
  {
    id: "02",
    stage: "Normalization",
    artifact: "12 sample derivatives listed",
    run: "example-01",
    meta: "relationship shown",
  },
  {
    id: "03",
    stage: "Timeline",
    artifact: "24 sample events arranged",
    run: "example-01",
    meta: "chronology shown",
  },
  {
    id: "04",
    stage: "Citations",
    artifact: "31 sample citations mapped",
    run: "example-01",
    meta: "source links shown",
  },
  {
    id: "05",
    stage: "Review",
    artifact: "1 sample review view prepared",
    run: "example-01",
    meta: "review boundary shown",
  },
];

function ProcessingLedger() {
  return (
    <section className="relative border-y border-border bg-surface/20">
      <Section>
        <SectionHeader
          eyebrow="Representative Processing Record"
          title={
            <>
              See what a traceable review record is{" "}
              <span className="text-gradient-primary">intended to show.</span>
            </>
          }
          sub="This static example displays stage names, illustrative artifact counts, example run identifiers, and provenance markers. It does not describe live processing."
        />
        <div className="mt-10 overflow-hidden rounded-2xl border border-border">
          <div className="hidden grid-cols-[80px_1fr_1.4fr_140px_1fr] gap-4 border-b border-border bg-background/60 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground md:grid">
            <span>Stage</span>
            <span>Name</span>
            <span>Artifact</span>
            <span>Run</span>
            <span>Provenance</span>
          </div>
          {LEDGER_STAGES.map((s, i) => (
            <div
              key={s.id}
              className={`grid grid-cols-1 gap-2 border-b border-border px-5 py-4 md:grid-cols-[80px_1fr_1.4fr_140px_1fr] md:gap-4 md:py-3.5 ${i === LEDGER_STAGES.length - 1 ? "border-b-0" : ""} ${i % 2 === 0 ? "bg-background/40" : "bg-background/20"}`}
            >
              <span className="font-mono text-[11px] text-primary">{s.id}</span>
              <span className="text-sm font-medium text-foreground">{s.stage}</span>
              <span className="text-[13px] text-foreground/85">{s.artifact}</span>
              <span className="font-mono text-[11px] text-muted-foreground">{s.run}</span>
              <span className="inline-flex items-center gap-1.5 text-[12px] text-success">
                <Check className="size-3.5" /> {s.meta}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          Representative processing record · Illustrative values · Not live telemetry
        </p>
      </Section>
    </section>
  );
}

/* ---------------------------- No citation, no claim ---------------------- */

function NoCitationNoClaim() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Illustrative Citation Check"
        title={
          <>
            A draft statement without cited support is{" "}
            <span className="text-gradient-primary">held for review.</span>
          </>
        }
        sub="This static comparison shows the intended difference between a source-linked observation and an unsupported inference. It does not establish production export enforcement."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <GateCard
          state="pass"
          claim="The cited voicemail references the documented contact window on 2024-03-18."
          rows={[
            ["Citation attached", "CIT-0417"],
            ["Exact excerpt", "voicemail-2024-03-18.m4a · t=00:18–00:34"],
            ["Review state", "shown as source-linked"],
          ]}
        />
        <GateCard
          state="block"
          claim="Co-parent intentionally interfered with the schedule."
          rows={[
            ["Missing source support", "no citation resolves"],
            ["Review state", "shown as held"],
            ["Human review", "required"],
          ]}
        />
      </div>
    </Section>
  );
}

function GateCard({
  state,
  claim,
  rows,
}: {
  state: "pass" | "block";
  claim: string;
  rows: [string, string][];
}) {
  const pass = state === "pass";
  return (
    <article
      className={`rounded-2xl border p-6 ${pass ? "border-success/40 bg-success/[0.06]" : "border-destructive/40 bg-destructive/[0.06]"}`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] ${pass ? "bg-success/15 text-success ring-1 ring-success/30" : "bg-destructive/15 text-destructive-foreground ring-1 ring-destructive/30"}`}
        >
          {pass ? <Check className="size-3" /> : <X className="size-3" />}
          {pass ? "Linked example" : "Held for review"}
        </span>
        <span className="font-mono text-[10px] text-muted-foreground">illustrative check</span>
      </div>
      <p className="mt-4 text-sm font-medium text-foreground">"{claim}"</p>
      <dl className="mt-5 space-y-2">
        {rows.map(([k, v]) => (
          <div
            key={k}
            className="grid gap-1 border-t border-border/70 pt-2 text-[12px] sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] sm:gap-3"
          >
            <dt className="text-muted-foreground">{k}</dt>
            <dd className="break-words font-mono text-foreground/90 sm:text-right">{v}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

/* --------------------------- Four differentiators ------------------------ */

const DIFFS = [
  {
    icon: Fingerprint,
    title: "Source distinction",
    body: "Designed to keep an original source record distinct from any transcript, extraction, timeline event, or review note.",
  },
  {
    icon: Hash,
    title: "Stable source identity",
    body: "Designed to give reviewers a consistent way to distinguish source records and their related derivatives.",
  },
  {
    icon: Quote,
    title: "Visible citation links",
    body: "Designed to connect an observation to a page, message, excerpt, or timecode that a reviewer can inspect.",
  },
  {
    icon: UserCheck,
    title: "Professional review boundary",
    body: "Designed to support different reviewer needs without presenting automated output as professional judgment.",
  },
];

function Differentiators() {
  return (
    <section className="relative border-y border-border bg-surface/20">
      <Section>
        <SectionHeader
          eyebrow="What Makes TruthTrace Different"
          title={
            <>
              Four product design principles.{" "}
              <span className="text-gradient-primary">One review boundary.</span>
            </>
          }
          sub="These are design objectives for the product direction, not certifications or production guarantees."
        />
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {DIFFS.map((d) => (
            <article key={d.title} className="min-h-56 bg-background p-6">
              <d.icon aria-hidden className="size-5 text-primary" />
              <h3 className="mt-6 text-lg font-semibold tracking-tight">{d.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
            </article>
          ))}
        </div>
      </Section>
    </section>
  );
}

/* ------------------------------ Role view -------------------------------- */

type Role = "parent" | "attorney" | "evaluator";
const ROLE_VIEWS: Record<
  Role,
  {
    label: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    framing: string;
    priority: string;
    nextAction: string;
  }
> = {
  parent: {
    label: "Parent",
    icon: UserRound,
    framing:
      "This sample view links a scheduled contact window to the cited voicemail and messages. It does not say why the records differ.",
    priority: "Review the cited records with your attorney",
    nextAction: "Share the packet with your legal counsel for review",
  },
  attorney: {
    label: "Attorney",
    icon: Briefcase,
    framing:
      "Sample observation FND-0184: the cited voicemail and messages reference the same scheduled contact window. Inspect CIT-0417 and the source messages.",
    priority: "Cross-reference the cited scheduling records",
    nextAction: "Assemble a source-linked exhibit set for review",
  },
  evaluator: {
    label: "Evaluator",
    icon: Eye,
    framing:
      "One source-linked scheduling observation in the illustrative period. Presented without an inference about intent, credibility, or responsibility.",
    priority: "Consider only alongside the cited records",
    nextAction: "Inspect the illustrative source records before drawing inferences",
  },
};

function RoleView() {
  const [role, setRole] = useState<Role>("attorney");
  const v = ROLE_VIEWS[role];
  return (
    <Section id="audiences">
      <SectionHeader
        eyebrow="Illustrative Reviewer Views"
        title={
          <>
            The framing can change.{" "}
            <span className="text-gradient-primary">The cited sample record stays visible.</span>
          </>
        }
        sub="In this representative interface, parent, attorney, and evaluator views use different framing while showing the same sample source identifier, citation, and excerpt."
      />
      <div
        role="group"
        aria-label="Choose a representative reviewer view"
        className="mt-8 flex max-w-full flex-wrap gap-1 rounded-lg border border-border bg-surface/60 p-1 sm:inline-flex"
      >
        {(Object.keys(ROLE_VIEWS) as Role[]).map((r) => {
          const active = r === role;
          const Icon = ROLE_VIEWS[r].icon;
          return (
            <button
              key={r}
              type="button"
              data-role-view={r}
              aria-pressed={active}
              onClick={() => setRole(r)}
              className={`inline-flex min-h-11 items-center gap-2 rounded-md px-4 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                active
                  ? "bg-primary/15 text-foreground ring-1 ring-primary/40"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon aria-hidden className="size-4" />
              {ROLE_VIEWS[r].label}
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid gap-3 lg:grid-cols-[1.2fr_0.8fr]">
        <div aria-live="polite" className="rounded-2xl border border-border bg-background/60 p-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
            Role-adapted framing
          </div>
          <p className="mt-3 text-base leading-relaxed text-foreground">{v.framing}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <InfoRow k="Priority framing" v={v.priority} />
            <InfoRow k="Next action" v={v.nextAction} />
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-surface/40 p-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Unchanged evidence
          </div>
          <ul className="mt-3 space-y-2 text-[13px]">
            {[
              ["Source record", "SRC-2024-03-18-7f3a"],
              ["Citation", "CIT-0417"],
              ["Source excerpt", "voicemail-2024-03-18.m4a · t=00:18–00:34"],
              ["Timeline event", "EVT-0921"],
              ["SHA-256", "a3f2…91c7"],
            ].map(([k, val]) => (
              <li
                key={k}
                className="grid gap-1 border-t border-border/70 pt-2 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-3"
              >
                <span className="text-muted-foreground">{k}</span>
                <span className="break-all font-mono text-[11px] text-foreground/90 sm:text-right">
                  {val}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-success">
            <Check className="mr-1 inline size-3" /> Same illustrative identity · citation · excerpt
          </p>
        </div>
      </div>
    </Section>
  );
}

function InfoRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-lg border border-border bg-surface/40 p-3">
      <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
        {k}
      </div>
      <div className="mt-1 text-sm text-foreground/90">{v}</div>
    </div>
  );
}

/* --------------------------- Evidence categories ------------------------- */

const CATEGORIES: { icon: ComponentType<SVGProps<SVGSVGElement>>; label: string }[] = [
  { icon: MessageSquare, label: "Messages" },
  { icon: FileText, label: "Emails and documents" },
  { icon: Camera, label: "Screenshots and photos" },
  { icon: AudioLines, label: "Audio recordings" },
  { icon: Video, label: "Video recordings" },
  { icon: Database, label: "Co-parenting exports" },
  { icon: Layers3, label: "Device and message exports" },
  { icon: FileCheck2, label: "Existing case records" },
];

function EvidenceCategories() {
  return (
    <section className="relative border-y border-border bg-surface/20">
      <Section>
        <SectionHeader
          eyebrow="Evidence Arrives From Many Sources"
          title={
            <>
              The review problem starts before the records are{" "}
              <span className="text-gradient-primary">in one place.</span>
            </>
          }
          sub="These are common evidence categories shown to explain the product direction. The website does not promise format acceptance and does not provide an upload surface."
        />
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c) => {
            return (
              <div key={c.label} className="min-h-32 bg-background p-5">
                <c.icon aria-hidden className="size-5 text-primary" />
                <div className="mt-5 text-sm font-medium text-foreground">{c.label}</div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  Representative category
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </section>
  );
}

/* ---------------------------- Trust architecture ------------------------- */

const TRUST_ITEMS = [
  {
    icon: Hash,
    title: "Source identity",
    body: "Design objective: keep source records distinguishable as information is arranged for review.",
  },
  {
    icon: Quote,
    title: "Citation visibility",
    body: "Design objective: keep each displayed observation connected to a locator and source excerpt.",
  },
  {
    icon: GitBranch,
    title: "Visible uncertainty",
    body: "Design objective: state what a cited record supports and where interpretation still belongs to a reviewer.",
  },
  {
    icon: UserCheck,
    title: "Professional judgment",
    body: "Attorneys, evaluators, courts, and other qualified professionals remain responsible for interpretation.",
  },
  {
    icon: Lock,
    title: "No public evidence intake",
    body: "This website has no evidence upload, case intake form, account system, or live matter workspace.",
  },
  {
    icon: ShieldCheck,
    title: "No case data submitted here",
    body: "Because this site does not accept evidence, no case material is submitted here for storage or model training.",
  },
  {
    icon: FileCheck2,
    title: "Policy before intake",
    body: "Retention, deletion, transfer, access, and training terms must be approved before any future evidence intake opens.",
  },
  {
    icon: Fingerprint,
    title: "Representative proof only",
    body: "All case-like records and identifiers on this page are illustrative and do not depict a real family.",
  },
];

function TrustArchitecture() {
  return (
    <Section id="trust">
      <SectionHeader
        eyebrow="Public-Site Boundaries"
        title={
          <>
            Trust starts with saying{" "}
            <span className="text-gradient-primary">what this site does not do.</span>
          </>
        }
        sub="Product design objectives are separated from public-site facts so visitors can assess this preview without mistaking it for a live evidence-handling service."
      />
      <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {TRUST_ITEMS.map((t) => (
          <article key={t.title} className="min-h-52 bg-background p-5">
            <t.icon aria-hidden className="size-5 text-primary" />
            <h3 className="mt-6 text-sm font-semibold tracking-tight text-foreground">{t.title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{t.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-surface/40 p-6">
        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          Limitations statement
        </div>
        <p className="mt-3 max-w-4xl text-[14px] leading-relaxed text-foreground/85">
          TruthTrace is designed to support evidence organization, provenance, review, and source
          traceability. It does not provide legal advice, diagnose individuals, determine
          credibility, predict custody outcomes, determine admissibility, or replace professional
          judgment. The representative interface is not a legal conclusion or a live case analysis.
        </p>
      </div>
    </Section>
  );
}

/* ------------------------------- Closing CTA ----------------------------- */

function ClosingCta() {
  return (
    <section className="relative border-t border-border bg-surface/20">
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Eyebrow>Representative Workflow</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Inspect the connection between an observation and its source.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              The public preview shows the intended evidence-to-citation relationship without
              accepting case files, making legal conclusions, or presenting illustrative data as
              customer proof.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/"
                hash="proof-chain"
                activeOptions={{ includeHash: true }}
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-primary/60 bg-primary/15 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                View the representative workflow
              </Link>
              <Link
                to="/technology"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-foreground/85 transition-colors hover:border-foreground/40 hover:text-foreground"
              >
                Review the design principles
              </Link>
            </div>
            <p className="mt-5 max-w-2xl text-[13px] leading-relaxed text-muted-foreground">
              No demo request or evidence intake is offered until a verified contact channel,
              approved data terms, and a secure transfer process are in place.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-background/60 p-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
              Before any future evidence intake
            </div>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                "A verified organization and contact channel",
                "Approved privacy, retention, deletion, and training terms",
                "A documented secure-transfer process",
                "Matter-scoped access and professional consent",
                "Human review and escalation procedures",
              ].map((item, i) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border border-primary/40 bg-primary/10 font-mono text-[10px] text-primary"
                  >
                    {i + 1}
                  </span>
                  <span className="text-foreground/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </section>
  );
}

/* --------------------------------- Footer -------------------------------- */

function Footer() {
  return (
    <footer className="relative border-t border-border px-5 py-8">
      <div className="mx-auto grid max-w-7xl gap-4 text-xs leading-relaxed text-muted-foreground md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-center">
        <span className="inline-flex items-center gap-2 whitespace-nowrap">
          <Circle aria-hidden className="size-2 fill-current opacity-60" /> ©{" "}
          {new Date().getFullYear()} TruthTrace
        </span>
        <span className="md:text-center">
          Evidence-organization and review-support product direction · No legal advice · No evidence
          uploads on this public site
        </span>
        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <Link
            to="/technology"
            className="min-h-11 content-center text-foreground/80 hover:text-foreground"
          >
            Design principles
          </Link>
          <Link
            to="/privacy"
            className="min-h-11 content-center text-foreground/80 hover:text-foreground"
          >
            Privacy
          </Link>
          <Link
            to="/terms"
            className="min-h-11 content-center text-foreground/80 hover:text-foreground"
          >
            Terms
          </Link>
          <Link
            to="/contact"
            className="min-h-11 content-center text-foreground/80 hover:text-foreground"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
