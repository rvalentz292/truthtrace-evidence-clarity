import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpenCheck,
  Braces,
  Check,
  ChevronRight,
  CircleDot,
  Eye,
  FileStack,
  FileText,
  Fingerprint,
  GitBranch,
  Link2,
  MessageSquareText,
  Quote,
  SearchCheck,
  ShieldCheck,
  TriangleAlert,
  UserRoundCheck,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";

import { BrandMark } from "@/components/site/BrandMark";
import { EvidenceCommandCenter, type EvidenceEvent } from "@/components/site/EvidenceCommandCenter";
import evidence from "@/content/homepage-evidence.json";

type Icon = ComponentType<{ className?: string; "aria-hidden"?: boolean }>;

type SelectionProps = {
  selectedId: string;
  selectedEvent: EvidenceEvent;
  onSelect: (id: string) => void;
};

const primaryLink =
  "group inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-primary/65 bg-primary px-4 py-2.5 text-[12px] font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:px-5 sm:text-[13px]";
const secondaryLink =
  "inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-border bg-surface/25 px-4 py-2.5 text-[12px] font-medium text-foreground/90 transition-colors hover:border-foreground/35 hover:bg-surface/55 sm:px-5 sm:text-[13px]";

function focusHomepageTarget(id: string) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => document.getElementById(id)?.focus({ preventScroll: true }));
  });
}

export function SiteBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute left-1/2 top-[-24rem] h-[52rem] w-[78rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--primary)_11%,transparent),transparent)] blur-3xl" />
    </div>
  );
}

export function HeroSection({ selectedId, selectedEvent, onSelect }: SelectionProps) {
  return (
    <section
      id="platform"
      tabIndex={-1}
      className="relative mx-auto w-full max-w-7xl scroll-mt-20 px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-28 lg:pb-28 lg:pt-32"
      aria-labelledby="homepage-heading"
    >
      <div className="grid gap-8 sm:gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.72fr)] lg:items-end lg:gap-16">
        <div className="min-w-0">
          <Eyebrow>Forensic Evidence Intelligence for Family Law</Eyebrow>
          <h1
            id="homepage-heading"
            data-testid="homepage-value-proposition"
            className="mt-5 max-w-4xl text-balance font-display text-[42px] font-semibold leading-[0.98] tracking-[-0.035em] sm:mt-6 sm:text-[62px] lg:text-[76px]"
          >
            Turn scattered evidence into a record you can follow.
          </h1>
          <p className="mt-6 max-w-3xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:mt-7 sm:text-[18px]">
            TruthTrace organizes supported messages, documents, images, and exports into a
            structured chronology with citations back to exact source locations—so parents and
            professionals can review the record without losing the evidence trail.
          </p>
          <p className="mt-4 max-w-2xl text-[14px] font-medium leading-relaxed text-foreground/85 sm:mt-5">
            Built to support evidence review—not replace legal or professional judgment.
          </p>
          <div className="mt-7 grid grid-cols-2 gap-2 sm:mt-9 sm:flex sm:flex-wrap sm:gap-3">
            <Link
              to="/"
              hash="command-center"
              activeOptions={{ includeHash: true }}
              onClick={() => focusHomepageTarget("command-center")}
              className={primaryLink}
              data-testid="primary-workflow-cta"
              aria-label="Explore the platform"
            >
              <span className="sm:hidden">Platform</span>
              <span className="hidden sm:inline">Explore the platform</span>
              <ArrowRight
                aria-hidden
                className="size-4 transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              to="/"
              hash="proof-chain"
              activeOptions={{ includeHash: true }}
              onClick={() => focusHomepageTarget("proof-chain")}
              className={secondaryLink}
              aria-label="Inspect the proof chain"
            >
              <span className="sm:hidden">Proof chain</span>
              <span className="hidden sm:inline">Inspect the proof chain</span>
            </Link>
          </div>
          <div className="mt-6 flex max-w-3xl flex-wrap items-center gap-x-3 gap-y-2 text-[11px] leading-relaxed text-muted-foreground sm:mt-8">
            <span className="inline-flex items-center gap-2 font-mono uppercase tracking-[0.14em] text-foreground/75">
              <CircleDot aria-hidden className="size-3 text-primary" />
              Illustrative product demonstration
            </span>
            <span aria-hidden className="hidden text-border sm:inline">
              /
            </span>
            <span>Illustrative case data</span>
            <span aria-hidden className="text-border">
              /
            </span>
            <span>No real family information shown</span>
            <span aria-hidden className="text-border">
              /
            </span>
            <span>No evidence uploads on this site</span>
          </div>
        </div>

        <aside
          className="min-w-0 overflow-hidden rounded-md border border-border bg-surface/35"
          aria-label="Selected illustrative proof summary"
        >
          <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
              Selected observation
            </span>
            <span className="font-mono text-[9px] text-primary">{selectedEvent.id}</span>
          </div>
          <div className="p-5 sm:p-6">
            <Quote aria-hidden className="size-5 text-primary" />
            <p className="mt-5 text-[17px] font-medium leading-relaxed text-foreground/90">
              {selectedEvent.observation}
            </p>
            <dl className="mt-6 space-y-3 border-t border-border pt-5">
              <ProofSummaryRow label="Citation" value={selectedEvent.citation} />
              <ProofSummaryRow label="Source" value={selectedEvent.sourceIdentity} />
              <ProofSummaryRow label="Review" value={selectedEvent.reviewState} />
            </dl>
          </div>
          <div className="border-t border-border bg-primary/[0.055] px-4 py-3 text-[11px] leading-relaxed text-foreground/75">
            Source identity visible in this demonstration. Citations inspectable. Human review
            required.
          </div>
        </aside>
      </div>

      <div className="mt-14 sm:mt-16">
        <EvidenceCommandCenter selectedId={selectedId} onSelect={onSelect} />
      </div>
    </section>
  );
}

const TRANSFORMATION_STEPS: Array<[string, string, Icon]> = [
  ["Register", "Keep each source identifiable.", Fingerprint],
  ["Structure", "Place supported records in time.", FileStack],
  ["Connect", "Link observations to exact locators.", GitBranch],
  ["Review", "Keep gaps and uncertainty visible.", SearchCheck],
  ["Prepare", "Create a narrower record for review.", BookOpenCheck],
];

export function TransformationSection() {
  return (
    <section
      className="relative border-y border-border bg-surface/20"
      aria-labelledby="transformation-heading"
    >
      <SectionShell>
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <SectionHeader
            eyebrow="From fragments to structure"
            id="transformation-heading"
            title="Evidence arrives scattered. Review needs a traceable sequence."
            description="Messages, documents, images, and exports often live in different formats and contexts. TruthTrace is designed to keep the supporting record visible while organizing what happened, when, and where the support can be inspected."
          />
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3">
            {[
              "Long message exports",
              "Disconnected screenshots",
              "PDFs and email threads",
              "Repeated records",
              "Uncertain chronology",
              "Missing context",
            ].map((item, index) => (
              <div key={item} className="min-h-24 bg-background/90 p-4">
                <span className="font-mono text-[9px] text-primary">0{index + 1}</span>
                <p className="mt-4 text-[12px] leading-snug text-foreground/80">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-5">
          {TRANSFORMATION_STEPS.map(([title, body, StepIcon], index) => (
            <li key={title} className="relative min-h-52 bg-background/95 p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="grid size-9 place-items-center rounded-sm border border-primary/35 bg-primary/[0.07] text-primary">
                  <StepIcon aria-hidden className="size-4" />
                </span>
                <span className="font-mono text-[9px] text-muted-foreground">0{index + 1}</span>
              </div>
              <h3 className="mt-9 text-[16px] font-semibold">{title}</h3>
              <p className="mt-3 text-[12px] leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ol>
      </SectionShell>
    </section>
  );
}

export function ProofChainSection({ selectedId, selectedEvent, onSelect }: SelectionProps) {
  const steps: Array<[string, string, Icon]> = [
    ["Observation", selectedEvent.observation, Eye],
    ["Timeline event", selectedEvent.timelineEvent, GitBranch],
    ["Citation", selectedEvent.citation, Link2],
    ["Exact excerpt", selectedEvent.excerpt, Quote],
    ["Source record", `${selectedEvent.sourceLocator} · ${selectedEvent.sourceIdentity}`, FileText],
  ];

  return (
    <section
      id="proof-chain"
      tabIndex={-1}
      className="relative scroll-mt-20"
      aria-labelledby="proof-heading"
    >
      <SectionShell>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="The proof difference"
            id="proof-heading"
            title="Follow an observation all the way back to its source."
            description="A structured record is useful only when a reviewer can inspect what supports it. Choose an illustrative observation to see the chain update."
          />
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Choose a proof-chain example"
          >
            {evidence.events.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={item.id === selectedId}
                onClick={() => onSelect(item.id)}
                className={`min-h-11 rounded-sm border px-4 font-mono text-[10px] transition-colors ${
                  item.id === selectedId
                    ? "border-primary/60 bg-primary/10 text-foreground"
                    : "border-border text-muted-foreground hover:border-foreground/35 hover:text-foreground"
                }`}
              >
                {item.id}
              </button>
            ))}
          </div>
        </div>

        <ol className="mt-12 grid gap-3 lg:grid-cols-5 lg:gap-2">
          {steps.map(([title, value, StepIcon], index) => (
            <li
              key={title}
              className="relative min-w-0 rounded-sm border border-border bg-surface/25 p-4 sm:p-5"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="grid size-8 place-items-center rounded-sm border border-primary/30 bg-primary/[0.06] text-primary">
                  <StepIcon aria-hidden className="size-3.5" />
                </span>
                <span className="font-mono text-[9px] text-muted-foreground">0{index + 1}</span>
              </div>
              <h3 className="mt-7 font-mono text-[9px] uppercase tracking-[0.17em] text-muted-foreground">
                {title}
              </h3>
              <p className="mt-3 break-words text-[11.5px] leading-relaxed text-foreground/85">
                {value}
              </p>
              {index < steps.length - 1 && (
                <ChevronRight
                  aria-hidden
                  className="absolute -right-[11px] top-1/2 z-10 hidden size-5 -translate-y-1/2 rounded-full border border-border bg-background p-1 text-primary lg:block"
                />
              )}
            </li>
          ))}
        </ol>

        <aside
          aria-labelledby="interpretation-boundary-heading"
          className="mt-6 grid gap-4 rounded-sm border border-warning/25 bg-warning/[0.045] p-5 sm:grid-cols-[auto_1fr] sm:items-start sm:p-6"
        >
          <TriangleAlert aria-hidden className="size-5 text-warning" />
          <div>
            <h3
              id="interpretation-boundary-heading"
              className="text-[13px] font-semibold text-foreground/90"
            >
              Interpretation remains bounded.
            </h3>
            <p className="mt-2 max-w-4xl text-[12px] leading-relaxed text-muted-foreground">
              A source-linked record can show what supports an observation. It does not
              independently determine intent, credibility, fault, admissibility, or legal
              significance.
            </p>
          </div>
        </aside>
      </SectionShell>
    </section>
  );
}

const parentPoints = [
  "Organize the record you already have",
  "See where context or support is missing",
  "Trace events to exact source locations",
  "Prepare for a focused professional discussion",
];

const professionalPoints = [
  "Review a chronology instead of another evidence dump",
  "Inspect exact excerpts and locators",
  "Identify unsupported or unresolved material",
  "Retain control over relevance, foundation, strategy, and use",
];

export function AudiencePathways() {
  return (
    <section
      className="relative border-y border-border bg-surface/20"
      aria-labelledby="audience-heading"
    >
      <SectionShell>
        <SectionHeader
          eyebrow="One record · two review paths"
          id="audience-heading"
          title="Built for the person carrying the record and the professional reviewing it."
          description="The evidence trail stays visible while each audience focuses on the decisions they are responsible for making."
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border lg:grid-cols-2">
          <AudienceCard
            id="parents"
            eyebrow="For parents"
            title="Bring order to the record you already have."
            intro="Move from a folder of fragments toward a chronology you can inspect before discussing it with counsel or another qualified professional."
            points={parentPoints}
            linkLabel="See how the record is structured"
            linkHash="proof-chain"
            icon={MessageSquareText}
          />
          <AudienceCard
            id="professionals"
            eyebrow="For legal professionals"
            title="Review the chronology without losing the evidence trail."
            intro="Move quickly from a structured event to its excerpt, locator, evidence identity, and current review state."
            points={professionalPoints}
            linkLabel="Review the trust model"
            linkHash="trust"
            icon={UserRoundCheck}
          />
        </div>
      </SectionShell>
    </section>
  );
}

const TRUST_FLOW: Array<[string, Icon]> = [
  ["Source record", FileText],
  ["Evidence identity", Fingerprint],
  ["Structured event", Braces],
  ["Citation", Link2],
  ["Human review", UserRoundCheck],
  ["Reviewable output", BookOpenCheck],
];

export function TrustArchitecture() {
  return (
    <section
      id="trust"
      tabIndex={-1}
      className="relative scroll-mt-20"
      aria-labelledby="trust-heading"
    >
      <SectionShell>
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <SectionHeader
            eyebrow="Trust architecture"
            id="trust-heading"
            title="Evidence stays distinct from the work built around it."
            description="TruthTrace is designed so sources, derived structure, citations, uncertainty, and review state remain visible as separate parts of the record."
          />
          <div className="grid gap-3 sm:grid-cols-3">
            <TrustPrinciple
              icon={Fingerprint}
              title="Identity stays visible"
              body="Source identifiers and abbreviated integrity references help reviewers distinguish one record from another."
            />
            <TrustPrinciple
              icon={TriangleAlert}
              title="Gaps stay visible"
              body="This illustration marks missing context and unresolved support for review instead of presenting them as settled facts."
            />
            <TrustPrinciple
              icon={UserRoundCheck}
              title="Judgment stays human"
              body="Relevance, credibility, foundation, strategy, admissibility, and legal use remain professional decisions."
            />
          </div>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-6">
          {TRUST_FLOW.map(([label, FlowIcon], index) => (
            <li key={label} className="relative min-h-40 bg-background/95 p-4 sm:p-5">
              <div className="flex items-center justify-between gap-2">
                <FlowIcon aria-hidden className="size-4 text-primary" />
                <span className="font-mono text-[8px] text-muted-foreground">0{index + 1}</span>
              </div>
              <p className="mt-9 text-[12px] font-medium leading-snug text-foreground/85">
                {label}
              </p>
              {index < TRUST_FLOW.length - 1 && (
                <ArrowRight
                  aria-hidden
                  className="absolute -right-2.5 top-1/2 z-10 hidden size-5 -translate-y-1/2 rounded-full border border-border bg-background p-1 text-primary lg:block"
                />
              )}
            </li>
          ))}
        </ol>

        <div className="mt-6 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-3">
          <BoundaryStatement
            title="Sources and derived work"
            body="The trust model keeps source records distinguishable from excerpts, observations, and review notes."
          />
          <BoundaryStatement
            title="Processing history"
            body="The workflow model calls for a reviewable processing history, with validation required before operational use."
          />
          <BoundaryStatement
            title="Professional control"
            body="Software structures the evidence trail. People decide what the record means and how, if at all, it should be used."
          />
        </div>
      </SectionShell>
    </section>
  );
}

export function ClosingSection() {
  return (
    <section
      className="relative border-t border-border bg-surface/20"
      aria-labelledby="closing-heading"
    >
      <SectionShell className="!py-20 sm:!py-24 lg:!py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-4xl">
            <Eyebrow>Review starts with a visible trail</Eyebrow>
            <h2
              id="closing-heading"
              className="mt-5 text-balance font-display text-[38px] font-semibold leading-[1.02] tracking-[-0.025em] sm:text-[54px]"
            >
              Review the record, not a black box.
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              Explore the illustrative proof chain to see how an observation remains connected to
              its source—and where human review still matters.
            </p>
          </div>
          <Link
            to="/"
            hash="proof-chain"
            activeOptions={{ includeHash: true }}
            onClick={() => focusHomepageTarget("proof-chain")}
            className={primaryLink}
          >
            Inspect the proof chain
            <ArrowRight aria-hidden className="size-4" />
          </Link>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-[11px] leading-relaxed text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>Public informational website · Browse-only product demonstration</span>
          <span>TruthTrace does not provide legal advice.</span>
        </div>
      </SectionShell>
    </section>
  );
}

export function SiteFooter() {
  const links: Array<{
    label: string;
    to: "/" | "/technology" | "/privacy" | "/terms" | "/contact";
    hash?: string;
  }> = [
    { label: "Platform", to: "/", hash: "platform" },
    { label: "Technology", to: "/technology" },
    { label: "Privacy", to: "/privacy" },
    { label: "Terms", to: "/terms" },
    { label: "Contact boundary", to: "/contact" },
  ];

  return (
    <footer className="relative border-t border-border bg-background/95">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Link
            to="/"
            className="inline-flex min-h-11 items-center gap-2.5"
            aria-label="TruthTrace home"
          >
            <BrandMark />
            <span className="font-display text-[22px] font-semibold tracking-tight">
              TruthTrace
            </span>
          </Link>
          <p className="mt-4 max-w-lg text-[12px] leading-relaxed text-muted-foreground">
            Forensic Evidence Intelligence for Family Law. Built to support evidence review—not
            replace legal or professional judgment.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-3 text-[12px]">
          {links.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              hash={item.hash}
              activeOptions={{ includeHash: Boolean(item.hash) }}
              onClick={() => item.hash && focusHomepageTarget(item.hash)}
              className="inline-flex min-h-11 min-w-11 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 py-4 font-mono text-[8.5px] uppercase tracking-[0.14em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© 2026 TruthTrace</span>
          <span>Illustrative case data · No evidence uploads on this site</span>
        </div>
      </div>
    </footer>
  );
}

function SectionShell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24 ${className}`}>
      {children}
    </div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
      <span aria-hidden className="h-px w-8 bg-primary" />
      {children}
    </div>
  );
}

function SectionHeader({
  eyebrow,
  id,
  title,
  description,
}: {
  eyebrow: string;
  id: string;
  title: ReactNode;
  description: ReactNode;
}) {
  return (
    <div className="max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className="mt-5 text-balance font-display text-[34px] font-semibold leading-[1.03] tracking-[-0.025em] sm:text-[46px] lg:text-[52px]"
      >
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-pretty text-[14px] leading-relaxed text-muted-foreground sm:text-[16px]">
        {description}
      </p>
    </div>
  );
}

function ProofSummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid min-w-0 grid-cols-[4.5rem_minmax(0,1fr)] gap-3">
      <dt className="font-mono text-[8px] uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </dt>
      <dd className="break-words font-mono text-[9.5px] leading-relaxed text-foreground/75">
        {value}
      </dd>
    </div>
  );
}

function AudienceCard({
  id,
  eyebrow,
  title,
  intro,
  points,
  linkLabel,
  linkHash,
  icon: CardIcon,
}: {
  id: "parents" | "professionals";
  eyebrow: string;
  title: string;
  intro: string;
  points: string[];
  linkLabel: string;
  linkHash: "proof-chain" | "trust";
  icon: Icon;
}) {
  return (
    <article
      id={id}
      tabIndex={-1}
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-20 bg-background/95 p-6 sm:p-8 lg:min-h-[34rem]"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[9px] uppercase tracking-[0.19em] text-primary">
          {eyebrow}
        </span>
        <span className="grid size-10 place-items-center rounded-sm border border-primary/30 bg-primary/[0.07] text-primary">
          <CardIcon aria-hidden className="size-4" />
        </span>
      </div>
      <h3
        id={`${id}-heading`}
        className="mt-12 max-w-xl font-display text-[30px] font-semibold leading-tight tracking-tight sm:text-[36px]"
      >
        {title}
      </h3>
      <p className="mt-5 max-w-xl text-[13px] leading-relaxed text-muted-foreground">{intro}</p>
      <ul className="mt-8 space-y-3">
        {points.map((point) => (
          <li key={point} className="flex gap-3 text-[12.5px] leading-relaxed text-foreground/80">
            <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-success" />
            {point}
          </li>
        ))}
      </ul>
      <Link
        to="/"
        hash={linkHash}
        activeOptions={{ includeHash: true }}
        onClick={() => focusHomepageTarget(linkHash)}
        className="mt-9 inline-flex min-h-11 items-center gap-2 text-[12px] font-medium text-foreground/90 hover:text-primary"
      >
        {linkLabel}
        <ArrowRight aria-hidden className="size-3.5" />
      </Link>
    </article>
  );
}

function TrustPrinciple({
  icon: PrincipleIcon,
  title,
  body,
}: {
  icon: Icon;
  title: string;
  body: string;
}) {
  return (
    <article className="rounded-sm border border-border bg-surface/25 p-5">
      <PrincipleIcon aria-hidden className="size-4 text-primary" />
      <h3 className="mt-6 text-[13px] font-semibold">{title}</h3>
      <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">{body}</p>
    </article>
  );
}

function BoundaryStatement({ title, body }: { title: string; body: string }) {
  return (
    <article className="bg-background/95 p-5 sm:p-6">
      <ShieldCheck aria-hidden className="size-4 text-primary" />
      <h3 className="mt-6 text-[13px] font-semibold">{title}</h3>
      <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">{body}</p>
    </article>
  );
}
