import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Circle,
  FileCheck2,
  Fingerprint,
  GitBranch,
  Hash,
  Link2,
  LockKeyhole,
  MessageSquareText,
  ScanSearch,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Eyebrow, Section, SectionHeader } from "@/components/site/Section";

const primaryButton =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-primary/60 bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_12px_32px_-18px_var(--primary)] transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const secondaryButton =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border bg-background/40 px-5 py-2.5 text-sm font-medium text-foreground/90 transition-colors hover:border-foreground/35 hover:bg-surface hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Background />
      <Nav />
      <main id="main-content" className="relative pt-14" tabIndex={-1}>
        <Hero />
        <EvidenceEntropy />
        <ProofChain />
        <CompressionExample />
        <HowItWorks />
        <WhoItServes />
        <TrustAndGuardrails />
        <Technology />
        <ControlledPilot />
      </main>
      <Footer />
    </div>
  );
}

function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute -top-56 left-1/2 h-[760px] w-[1180px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--primary)_13%,transparent),transparent)] blur-3xl" />
    </div>
  );
}

function Hero() {
  return (
    <Section id="product" className="!pb-16 !pt-20 sm:!pb-24 sm:!pt-28 lg:!pb-28 lg:!pt-32">
      <div className="grid min-w-0 gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-center lg:gap-14">
        <div className="min-w-0">
          <Eyebrow>Forensic Evidence Intelligence for Family Law</Eyebrow>
          <h1 className="mt-6 max-w-4xl text-balance text-[40px] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-[54px] lg:text-[66px]">
            Turn evidence chaos into a timeline you can prove.
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            TruthTrace preserves source records, structures supported evidence into a reviewable
            timeline, and links findings back to exact source locations—so parents and professionals
            can review what matters without losing the original context.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link to="/contact" className={primaryButton}>
              Request Controlled Pilot <ArrowRight aria-hidden className="size-4" />
            </Link>
            <Link
              to="/"
              hash="how-it-works"
              activeOptions={{ includeHash: true }}
              className={secondaryButton}
            >
              See How It Works
            </Link>
          </div>

          <div className="mt-9 flex items-start gap-3 border-t border-border pt-5 text-sm text-foreground/80">
            <ShieldCheck aria-hidden className="mt-0.5 size-4 shrink-0 text-primary" />
            <p>Originals preserved. Sources linked. Human review required.</p>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            Representative product preview · Illustrative data · No real family information shown ·
            No evidence uploads on this site
          </p>
        </div>

        <HeroWorkflow />
      </div>
    </Section>
  );
}

const WORKFLOW_STEPS = [
  "Upload evidence",
  "Preserve source identity",
  "Build timeline",
  "Link citations",
  "Prepare review packet",
];

function HeroWorkflow() {
  return (
    <figure className="relative min-w-0 overflow-hidden rounded-2xl border border-border bg-surface/55 p-4 shadow-2xl shadow-black/20 sm:p-6">
      <div aria-hidden className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative">
        <figcaption className="flex flex-col gap-2 border-b border-border pb-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.17em] text-foreground/85">
            <ScanSearch aria-hidden className="size-4 text-primary" /> Illustrative product workflow
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            Demo record · Not live
          </span>
        </figcaption>

        <ol className="mt-4 grid gap-2 sm:grid-cols-5" aria-label="Evidence workflow stages">
          {WORKFLOW_STEPS.map((step, index) => (
            <li
              key={step}
              className="relative rounded-lg border border-border bg-background/70 px-3 py-3 sm:min-h-24"
            >
              <span className="font-mono text-[10px] text-primary">0{index + 1}</span>
              <p className="mt-2 text-xs font-medium leading-snug text-foreground/85">{step}</p>
              {index < WORKFLOW_STEPS.length - 1 && (
                <ChevronRight
                  aria-hidden
                  className="absolute -right-2.5 top-1/2 z-10 hidden size-4 -translate-y-1/2 rounded-full bg-background text-primary sm:block"
                />
              )}
            </li>
          ))}
        </ol>

        <div className="mt-4 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          <WorkflowCell label="Source" value="message_export_demo.txt" />
          <WorkflowCell label="EvidenceObject" value="EO-84C3A20F" mono />
          <WorkflowCell label="Timeline event" value="Exchange time changed" />
          <WorkflowCell label="Citation" value="Message 184 · 6:42 PM" mono />
          <div className="bg-background/90 p-4 sm:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              Exact excerpt
            </p>
            <blockquote className="mt-2 border-l-2 border-primary/60 pl-3 text-sm text-foreground/90">
              “Can we move pickup to 7:30?”
            </blockquote>
          </div>
        </div>
      </div>
    </figure>
  );
}

function WorkflowCell({
  label,
  value,
  mono = false,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="min-w-0 bg-background/90 p-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </p>
      <p
        className={`mt-2 break-words text-sm text-foreground/90 ${mono ? "font-mono text-xs" : ""}`}
      >
        {value}
      </p>
    </div>
  );
}

function EvidenceEntropy() {
  return (
    <section className="relative border-y border-border bg-surface/20">
      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
          <SectionHeader
            eyebrow="The Evidence Problem"
            title={
              <>
                The problem is not missing evidence.
                <br />
                <span className="text-gradient-primary">It is evidence entropy.</span>
              </>
            }
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Messages, emails, screenshots, recordings, documents, and exports often accumulate
              faster than anyone can organize them. Chronology is lost, context becomes fragmented,
              and professionals receive an evidence dump instead of a reviewable record.
            </p>
            <p className="font-medium text-foreground/85">
              TruthTrace restores structure while keeping source relationships visible.
            </p>
          </div>
        </div>
      </Section>
    </section>
  );
}

function ProofChain() {
  const [eventHighlighted, setEventHighlighted] = useState(false);
  const [sourceExpanded, setSourceExpanded] = useState(true);

  return (
    <Section id="proof-chain">
      <SectionHeader
        eyebrow="Proof Chain"
        title="Click the finding. See the source."
        sub="TruthTrace is designed so supported findings can be inspected through their event, citation, exact source location, and preserved record."
      />

      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
        <span>Representative demonstration</span>
        <span>Illustrative data</span>
        <span>No real family information shown</span>
      </div>

      <div className="mt-9 grid gap-4 lg:grid-cols-3">
        <button
          type="button"
          aria-pressed={eventHighlighted}
          aria-controls="timeline-event"
          onClick={() => setEventHighlighted(true)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setEventHighlighted(true);
            }
          }}
          className="group min-h-64 rounded-2xl border border-primary/35 bg-primary/[0.06] p-6 text-left transition-colors hover:bg-primary/[0.1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
              Finding
            </span>
            <span className="font-mono text-[10px] text-muted-foreground">Click to trace</span>
          </div>
          <p className="mt-8 text-lg font-semibold leading-snug">
            Exchange time changed after the original schedule was confirmed.
          </p>
          <div className="mt-8 border-t border-border pt-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              Status
            </span>
            <p className="mt-2 inline-flex items-center gap-2 text-sm text-amber-300">
              <Circle aria-hidden className="size-2 fill-current" /> Needs professional review
            </p>
          </div>
        </button>

        <article
          id="timeline-event"
          aria-live="polite"
          className={`min-h-64 rounded-2xl border p-6 transition-colors ${
            eventHighlighted
              ? "border-primary bg-primary/[0.1] shadow-[0_0_0_1px_color-mix(in_oklab,var(--primary)_35%,transparent)]"
              : "border-border bg-surface/35"
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              Timeline Event
            </span>
            {eventHighlighted && (
              <span className="inline-flex items-center gap-1 font-mono text-[10px] text-primary">
                <Check aria-hidden className="size-3" /> Finding linked
              </span>
            )}
          </div>
          <p className="mt-8 font-mono text-sm text-foreground">June 14 · 6:42 PM</p>
          <dl className="mt-8 grid gap-4 border-t border-border pt-4 text-sm">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                Channel
              </dt>
              <dd className="mt-1 text-foreground/90">Message export</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                Context
              </dt>
              <dd className="mt-1 text-foreground/90">Time confirmed from source metadata</dd>
            </div>
          </dl>
        </article>

        <article className="min-h-64 rounded-2xl border border-border bg-surface/35 p-6">
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              Source Proof
            </span>
            <span className="rounded-full border border-border px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-foreground/70">
              Illustrative data
            </span>
          </div>

          <button
            type="button"
            aria-expanded={sourceExpanded}
            aria-controls="source-proof-details"
            onClick={() => setSourceExpanded((open) => !open)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setSourceExpanded((open) => !open);
              }
            }}
            className="mt-6 flex min-h-11 w-full items-center justify-between rounded-lg border border-primary/35 bg-primary/[0.06] px-4 text-left text-sm text-foreground transition-colors hover:bg-primary/[0.12]"
          >
            <span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                Citation
              </span>
              <span className="mt-1 block font-mono text-xs">Message 184</span>
            </span>
            <ChevronRight
              aria-hidden
              className={`size-4 text-primary transition-transform ${sourceExpanded ? "rotate-90" : ""}`}
            />
          </button>

          {sourceExpanded && (
            <div id="source-proof-details" className="mt-5 space-y-4 text-sm">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  Exact excerpt
                </p>
                <blockquote className="mt-2 border-l-2 border-primary/60 pl-3 text-foreground/90">
                  “Can we move pickup to 7:30?”
                </blockquote>
              </div>
              <ProofDetail label="Source" value="message_export_demo.txt" />
              <ProofDetail label="EvidenceObject" value="EO-84C3A20F" />
              <ProofDetail label="SHA-256" value="84c3a20f…91bd" />
            </div>
          )}
        </article>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
        Use Tab to reach each control, then Enter or Space to trace the finding and expand the
        citation. The source relationship remains visible without motion.
      </p>
    </Section>
  );
}

function ProofDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 break-all font-mono text-xs text-foreground/85">{value}</p>
    </div>
  );
}

const COMPRESSION_STEPS = [
  { value: "7,380", label: "raw messages" },
  { value: "977", label: "potentially relevant records" },
  { value: "498", label: "structured evidence items" },
  { value: "Reviewable", label: "timeline" },
];

function CompressionExample() {
  return (
    <section className="relative border-y border-border bg-surface/20">
      <Section>
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
          Illustrative Case Compression Example
        </div>
        <div className="mt-7 grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-center">
          {COMPRESSION_STEPS.map((step, index) => (
            <div key={step.value} className="contents">
              <div className="rounded-xl border border-border bg-background/65 p-5">
                <div className="font-mono text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {step.value}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{step.label}</p>
              </div>
              {index < COMPRESSION_STEPS.length - 1 && (
                <ArrowRight
                  aria-hidden
                  className="mx-auto size-4 rotate-90 text-primary md:rotate-0"
                />
              )}
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-4xl text-sm leading-relaxed text-muted-foreground">
          Illustrative example from a representative evidence-processing workflow. Results vary by
          evidence type, quality, scope, and human review decisions.
        </p>
      </Section>
    </section>
  );
}

const STAGES = [
  {
    title: "Preserve",
    body: "Original source records remain separate from derived processing outputs.",
    icon: LockKeyhole,
  },
  {
    title: "Structure",
    body: "Supported content becomes source-linked records and candidate events.",
    icon: FileCheck2,
  },
  {
    title: "Normalize",
    body: "Dates, participants, channels, and uncertainty are organized into a reviewable timeline.",
    icon: GitBranch,
  },
  {
    title: "Cite",
    body: "Supported findings remain connected to pages, messages, excerpts, metadata, or timecodes.",
    icon: Link2,
  },
  {
    title: "Review",
    body: "Humans accept, reject, qualify, or request more context before controlled outputs are prepared.",
    icon: UserCheck,
  },
];

function HowItWorks() {
  return (
    <Section id="how-it-works">
      <SectionHeader
        eyebrow="How TruthTrace Works"
        title="A disciplined path from source record to reviewed output."
        sub="Five concise stages keep the preserved record, structured chronology, citations, and human decisions connected."
      />
      <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-5">
        {STAGES.map((stage, index) => (
          <li key={stage.title} className="min-h-64 bg-background p-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-primary">0{index + 1}</span>
              <stage.icon aria-hidden className="size-4 text-muted-foreground" />
            </div>
            <h3 className="mt-10 text-lg font-semibold">{stage.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{stage.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

const AUDIENCES = [
  {
    title: "Parents",
    body: "Replace scattered records with a calmer, more reviewable evidence history before sharing it with counsel.",
  },
  {
    title: "Attorneys",
    body: "Inspect structured timelines, source locations, citations, and review status without beginning with a raw evidence dump.",
  },
  {
    title: "Evaluators",
    body: "Review neutral, source-linked chronology while uncertainty and professional boundaries remain visible.",
  },
  {
    title: "Strategic Partners",
    body: "Evaluate defensible evidence infrastructure designed for family-law workflows.",
  },
];

function WhoItServes() {
  return (
    <section className="relative border-y border-border bg-surface/20">
      <Section id="who-it-serves">
        <SectionHeader
          eyebrow="Who It Serves"
          title="Different views. One shared evidence record."
          sub="TruthTrace is designed to make the same source-linked record easier to review from distinct professional and personal perspectives."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCES.map((audience) => (
            <article
              key={audience.title}
              className="rounded-2xl border border-border bg-background/65 p-6"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-primary">
                {audience.title}
              </h3>
              <p className="mt-6 text-sm leading-relaxed text-foreground/80">{audience.body}</p>
            </article>
          ))}
        </div>
      </Section>
    </section>
  );
}

const GUARDRAILS = [
  [Fingerprint, "Preserved source records"],
  [Hash, "Source-linked identity"],
  [GitBranch, "Processing provenance"],
  [MessageSquareText, "Explicit uncertainty"],
  [Link2, "Citation-aware outputs"],
  [UserCheck, "Human review controls"],
] as const;

function TrustAndGuardrails() {
  return (
    <Section id="trust">
      <SectionHeader
        eyebrow="Trust and Guardrails"
        title="Structured evidence. Human judgment remains essential."
        sub="TruthTrace is designed around inspectable source relationships, bounded outputs, and visible review status."
      />
      <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {GUARDRAILS.map(([Icon, label]) => (
          <div key={label} className="flex min-h-24 items-center gap-4 bg-background p-5">
            <Icon aria-hidden className="size-5 shrink-0 text-primary" />
            <span className="text-sm font-medium text-foreground/90">{label}</span>
          </div>
        ))}
      </div>
      <aside className="mt-8 rounded-2xl border border-amber-400/25 bg-amber-400/[0.06] p-6 sm:p-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-amber-300">
          Professional boundary
        </p>
        <p className="mt-4 max-w-5xl text-sm leading-relaxed text-foreground/85 sm:text-base">
          TruthTrace does not determine truth, diagnose behavior, provide legal advice, guarantee
          admissibility, or predict custody outcomes. Professional review remains required.
        </p>
      </aside>
    </Section>
  );
}

const TECHNOLOGY_PILLARS = [
  {
    title: "Evidence identity",
    body: "Records receive distinguishable source-linked identities in validated workflows.",
  },
  {
    title: "Timeline normalization",
    body: "Supported events are organized into a coherent chronology without hiding ambiguity.",
  },
  {
    title: "Citation discipline",
    body: "Findings remain connected to the records and source locations that support them.",
  },
  {
    title: "Processing provenance",
    body: "Relevant processing stages, versions, warnings, and review status remain inspectable.",
  },
];

function Technology() {
  return (
    <section className="relative border-y border-border bg-surface/20">
      <Section id="technology">
        <SectionHeader
          eyebrow="Technology"
          title="Evidence architecture—not AI magic."
          sub="The defensible layer is the relationship between identity, chronology, citations, provenance, and review—not an uninspectable answer."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {TECHNOLOGY_PILLARS.map((pillar, index) => (
            <article
              key={pillar.title}
              className="rounded-2xl border border-border bg-background/65 p-6 sm:p-7"
            >
              <div className="font-mono text-[10px] text-primary">0{index + 1}</div>
              <h3 className="mt-6 text-lg font-semibold">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
            </article>
          ))}
        </div>
        <Link to="/technology" className={`${secondaryButton} mt-8`}>
          Review Technology Principles <ArrowRight aria-hidden className="size-4" />
        </Link>
      </Section>
    </section>
  );
}

function ControlledPilot() {
  return (
    <Section id="controlled-pilot" className="!py-20 sm:!py-28">
      <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-primary/[0.06] px-6 py-12 sm:px-10 sm:py-16 lg:px-14">
        <div aria-hidden className="absolute inset-0 grid-bg opacity-25" />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <Eyebrow>Controlled Pilot</Eyebrow>
            <h2 className="mt-6 max-w-4xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Bring one difficult evidence set. See whether TruthTrace can make it reviewable.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              TruthTrace is currently available for controlled product reviews focused on evidence
              organization, timeline generation, source-linked findings, and professional workflows.
            </p>
          </div>
          <div className="flex min-w-56 flex-col gap-3">
            <Link to="/contact" className={primaryButton}>
              Request Controlled Pilot <ArrowRight aria-hidden className="size-4" />
            </Link>
            <Link
              to="/"
              hash="product"
              activeOptions={{ includeHash: true }}
              className={secondaryButton}
            >
              Return to Product Overview
            </Link>
          </div>
        </div>
        <p className="relative mt-8 max-w-3xl text-xs leading-relaxed text-muted-foreground">
          The public site does not accept case evidence. The contact page states the current
          verified contact boundary and will not display a false submission confirmation.
        </p>
      </div>
    </Section>
  );
}

const FOOTER_LINKS = [
  ["Product", "product"],
  ["How It Works", "how-it-works"],
  ["Trust", "trust"],
  ["Technology", "technology"],
] as const;

function Footer() {
  return (
    <footer className="relative border-t border-border px-5 py-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <div className="flex items-center gap-2.5 text-sm font-semibold">
            <span
              data-brand-mark
              aria-hidden
              className="grid size-7 place-items-center rounded-md bg-primary/15 ring-1 ring-primary/40"
            >
              <span className="size-1.5 rounded-sm bg-primary" />
            </span>
            TruthTrace
          </div>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
            Status: Controlled pilot
          </p>
        </div>
        <div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {FOOTER_LINKS.map(([label, hash]) => (
              <Link
                key={label}
                to="/"
                hash={hash}
                activeOptions={{ includeHash: true }}
                className="min-h-11 content-center text-foreground/75 transition-colors hover:text-foreground"
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="min-h-11 content-center text-foreground/75 transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </nav>
          <p className="mt-5 max-w-3xl text-xs leading-relaxed text-muted-foreground">
            {
              "TruthTrace supports evidence organization, provenance, and review. It does not provide legal advice, determine truth, diagnose conduct, guarantee admissibility, or predict legal outcomes."
            }
          </p>
        </div>
      </div>
    </footer>
  );
}
