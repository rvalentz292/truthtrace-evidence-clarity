import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, MotionConfig } from "framer-motion";
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
  Mail,
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
  const [pilotOpen, setPilotOpen] = useState(false);
  const pilotTriggerRef = useRef<HTMLElement | null>(null);

  function openPilot() {
    pilotTriggerRef.current = document.activeElement as HTMLElement | null;
    setPilotOpen(true);
  }

  function closePilot() {
    setPilotOpen(false);
    requestAnimationFrame(() => pilotTriggerRef.current?.focus());
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
        <Background />
        <Nav onRequestPilot={openPilot} />
        <main id="main-content" className="relative pt-14" tabIndex={-1}>
          <Hero onRequestPilot={openPilot} />
          <ChaosToIntelligence />
          <PlatformArchitecture />
          <ProofChain />
          <ProcessingLedger />
          <NoCitationNoClaim />
          <Differentiators />
          <RoleView />
          <EvidenceCategories />
          <TrustArchitecture />
          <ClosingCta onRequestPilot={openPilot} />
        </main>
        <Footer />
        {pilotOpen && <PilotModal onClose={closePilot} />}
      </div>
    </MotionConfig>
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

function Hero({ onRequestPilot }: { onRequestPilot: () => void }) {
  return (
    <Section className="!pb-16 !pt-20 sm:!pb-24 sm:!pt-28 lg:!pb-28 lg:!pt-32">
      <div className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12">
        <div className="min-w-0">
          <Eyebrow>Forensic Evidence Intelligence for Family Law</Eyebrow>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 max-w-4xl text-balance text-[38px] font-semibold leading-[1.03] tracking-tight sm:text-[52px] lg:text-[62px]"
          >
            Turn evidence chaos into{" "}
            <span className="text-gradient-primary">source-verifiable case intelligence.</span>
          </motion.h1>
          <p className="mt-7 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            TruthTrace transforms fragmented family-law messages, documents, images, recordings, and
            case records into a structured timeline, citation-bound findings, and evidence packages
            for attorney and professional review.
          </p>
          <p className="mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-foreground/75 sm:text-base">
            Originals preserved. Every finding traceable. No citation, no claim.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onRequestPilot}
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-primary/60 bg-primary/15 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Request Controlled Pilot Access
            </button>
            <Link
              to="/"
              hash="proof-chain"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-foreground/85 transition-colors hover:border-foreground/40 hover:text-foreground"
            >
              View the forensic demonstration
            </Link>
          </div>

          <div className="mt-10 border-y border-border py-5">
            <div className="flex flex-wrap gap-x-5 gap-y-3 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/80 sm:text-[11px]">
              {[
                "Evidence Identity",
                "Provenance",
                "Processing Records",
                "Citation-Bound Outputs",
                "Human Review",
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
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Currently operating in controlled pilot · Not a general-availability product
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

      <div className="relative mb-4 flex items-center justify-between border-b border-border/60 pb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        <span className="flex items-center gap-2">
          <span
            aria-hidden
            className="size-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]"
          />
          Forensic Review Workstation
        </span>
        <span className="text-foreground/60">Representative demonstration dataset</span>
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
            Scheduled contact window was not completed during the documented period.
          </p>
          <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
            Describes cited records only. Does not determine intent, credibility, or legal
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
            "…voicemail excerpt referencing the prior scheduling agreement…"
          </blockquote>
          <div className="mt-2 font-mono text-[10px] text-muted-foreground">
            voicemail-2024-03-18.m4a · t=00:18–00:34
          </div>
        </div>
        {/* EvidenceObject */}
        <div className="sm:col-span-2 rounded-lg border border-border bg-surface/40 p-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            EvidenceObject
          </span>
          <div className="mt-3 font-mono text-[11px] text-foreground/90">EO-2024-03-18-7f3a</div>
          <div className="mt-2 grid gap-1 font-mono text-[10px] text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Hash className="size-3" />
              a3f2…91c7
            </div>
            <div className="inline-flex items-center gap-1 text-success">
              <Check className="size-3" /> original preserved
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
        <span className="text-foreground/85">EvidenceObject · SHA-256</span>
      </div>
    </div>
  );
}

/* ------------------------ Evidence chaos → reviewable --------------------- */

function ChaosToIntelligence() {
  const before = [
    "7,380 raw messages",
    "683 pages of documents",
    "Mixed screenshots, emails, recordings",
    "Unclear chronology",
    "Manual review burden",
  ];
  const after = [
    "Identified EvidenceObjects",
    "Normalized timeline",
    "Source-linked findings",
    "Citation registry",
    "Reviewable evidence package",
  ];
  const proofOutputs = [
    ["Evidence inventory", "Each source retains a distinct evidence identifier"],
    ["Traceable chronology", "Events link back to exact records and locators"],
    ["Citation-gated findings", "Unsupported assertions are flagged before export"],
  ];
  return (
    <section id="how" className="relative scroll-mt-14 border-y border-border bg-surface/20">
      <Section>
        <SectionHeader
          eyebrow="Evidence Chaos → Reviewable Intelligence"
          title={
            <>
              Evidence does not arrive organized.{" "}
              <span className="text-gradient-primary">TruthTrace makes it reviewable.</span>
            </>
          }
          sub="Mixed-format records are preserved, identified, normalized, and linked into one inspectable evidence chain."
        />
        <div className="mt-12 grid gap-3 lg:grid-cols-[1fr_auto_1fr]">
          <ChaosColumn label="Before · Evidence dump" tone="muted" items={before} />
          <div className="grid place-items-center py-2 text-primary lg:py-0">
            <ChevronRight className="size-6 rotate-90 lg:rotate-0" />
          </div>
          <ChaosColumn label="After · Reviewable intelligence" tone="primary" items={after} />
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {proofOutputs.map(([title, detail]) => (
            <div key={title} className="border-l border-primary/45 bg-background/45 p-5">
              <div className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
                {title}
              </div>
              <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{detail}</div>
            </div>
          ))}
        </div>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          Representative modeled case example · Not measured customer results
        </p>
      </Section>
    </section>
  );
}

const PLATFORM_STAGES = [
  {
    title: "Evidence Intake",
    body: "Register mixed-format source material while keeping the original artifact distinct.",
  },
  {
    title: "Evidence Identity",
    body: "Assign durable evidence identifiers and source relationships for later inspection.",
  },
  {
    title: "Chronology",
    body: "Normalize dated records into a reviewable event sequence without deciding significance.",
  },
  {
    title: "Source Intelligence",
    body: "Bind findings to citations, exact excerpts, pages, message ranges, or timecodes.",
  },
  {
    title: "Review and Export",
    body: "Prepare role-aware materials with citations, limitations, and human-review status intact.",
  },
  {
    title: "Trust and Governance",
    body: "Preserve provenance, review boundaries, access context, and inspectable processing records.",
  },
];

function PlatformArchitecture() {
  return (
    <section id="platform" className="relative scroll-mt-14">
      <Section>
        <SectionHeader
          eyebrow="Platform Architecture"
          title={
            <>
              One evidence system.{" "}
              <span className="text-gradient-primary">Six connected layers.</span>
            </>
          }
          sub="TruthTrace is designed as an evidence operating model: source material enters once, then remains identifiable as chronology, citations, review surfaces, and exports are assembled around it."
        />

        <ol className="mt-10 grid overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {PLATFORM_STAGES.map((stage, index) => (
            <li key={stage.title} className="relative bg-background p-6">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                  Layer {String(index + 1).padStart(2, "0")}
                </span>
                {index < PLATFORM_STAGES.length - 1 && (
                  <ChevronRight aria-hidden className="size-4 text-muted-foreground" />
                )}
              </div>
              <h3 className="mt-5 text-base font-semibold tracking-tight">{stage.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{stage.body}</p>
            </li>
          ))}
        </ol>
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
    text: "Scheduled contact window was not completed during the documented period.",
    qualifier:
      "Describes cited records only. Does not determine intent, credibility, or legal significance.",
    event: { id: "EVT-0921", when: "2024-03-18 · 21:07", actor: "Co-parent", kind: "Audio" },
    citation: {
      id: "CIT-0417",
      excerpt: "…voicemail excerpt referencing the prior scheduling agreement…",
      source: "voicemail-2024-03-18.m4a",
      locator: "t=00:18–00:34",
    },
    evidence: { id: "EO-2024-03-18-7f3a", hash: "a3f2c81d…91c7", type: "audio/m4a" },
  },
  {
    id: "FND-0192",
    text: "Pickup discrepancy recorded by a third-party administrator on the cited date.",
    qualifier:
      "Reflects the third-party record as documented. No credibility determination is made.",
    event: {
      id: "EVT-0944",
      when: "2024-03-14 · 08:11",
      actor: "School administrator",
      kind: "Document",
    },
    citation: {
      id: "CIT-0422",
      excerpt: "…discrepancy between scheduled pickup and actual attendance logged…",
      source: "school-attendance-2024-03-14.pdf",
      locator: "p. 2",
    },
    evidence: { id: "EO-2024-03-14-1c02", hash: "b1e7d40a…4e12", type: "application/pdf" },
  },
  {
    id: "FND-0207",
    text: "Message thread contains statements that appear inconsistent with an earlier cited message.",
    qualifier:
      "Consistency observation limited to the cited records. Interpretation is left to qualified reviewers.",
    event: { id: "EVT-0977", when: "2024-03-22 · 16:58", actor: "Co-parent", kind: "Messages" },
    citation: {
      id: "CIT-0451",
      excerpt: "…prior statement on 03-11 conflicts with the message on 03-22…",
      source: "messages-export-2024-Q1.rsmf",
      locator: "msg #4218",
    },
    evidence: { id: "EO-2024-03-22-9b8d", hash: "c99a12ef…7a03", type: "application/rsmf" },
  },
];

function ProofChain() {
  const [id, setId] = useState<string>(FINDINGS[0].id);
  const selected = useMemo(() => FINDINGS.find((f) => f.id === id)!, [id]);
  return (
    <section id="proof-chain" className="scroll-mt-14 relative">
      <Section>
        <SectionHeader
          eyebrow="Finding → Source Proof Chain"
          title={
            <>
              Every finding traces back to{" "}
              <span className="text-gradient-primary">an original source.</span>
            </>
          }
          sub="Select a finding to inspect its timeline event, citation, source excerpt, and the EvidenceObject with SHA-256 identity."
        />

        <div className="mt-10 grid gap-3 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          {/* Finding list */}
          <div role="tablist" aria-label="Findings" className="flex flex-col gap-2">
            {FINDINGS.map((f, index) => {
              const active = f.id === id;
              return (
                <button
                  key={f.id}
                  id={`finding-tab-${f.id}`}
                  role="tab"
                  aria-selected={active}
                  aria-controls="proof-chain-panel"
                  tabIndex={active ? 0 : -1}
                  onClick={() => setId(f.id)}
                  onKeyDown={(event) => {
                    const lastIndex = FINDINGS.length - 1;
                    let nextIndex: number | undefined;
                    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
                      nextIndex = index === lastIndex ? 0 : index + 1;
                    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                      nextIndex = index === 0 ? lastIndex : index - 1;
                    } else if (event.key === "Home") {
                      nextIndex = 0;
                    } else if (event.key === "End") {
                      nextIndex = lastIndex;
                    }

                    if (nextIndex === undefined) return;
                    event.preventDefault();
                    const nextFinding = FINDINGS[nextIndex];
                    setId(nextFinding.id);
                    requestAnimationFrame(() => {
                      document.getElementById(`finding-tab-${nextFinding.id}`)?.focus();
                    });
                  }}
                  className={`group rounded-xl border p-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    active
                      ? "border-primary/50 bg-primary/[0.08]"
                      : "border-border bg-surface/40 hover:border-foreground/25"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                      Finding
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
            role="tabpanel"
            aria-labelledby={`finding-tab-${selected.id}`}
            className="rounded-2xl border border-border bg-background/60 p-5 sm:p-6"
          >
            <ProofRow label="Finding" mono={selected.id}>
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
            <ProofRow label="EvidenceObject" mono={selected.evidence.id}>
              <div className="grid gap-2 sm:grid-cols-3">
                <MetaCell k="type" v={selected.evidence.type} />
                <MetaCell k="sha-256" v={selected.evidence.hash} />
                <MetaCell k="original" v="preserved" tone="success" />
              </div>
            </ProofRow>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              Representative demonstration dataset
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
        className={`mt-1 truncate font-mono text-[11px] ${tone === "success" ? "text-success" : "text-foreground/90"}`}
      >
        {v}
      </div>
    </div>
  );
}

/* -------------------------- Deterministic ledger -------------------------- */

const LEDGER_STAGES = [
  {
    id: "01",
    stage: "Intake",
    artifact: "8 EvidenceObjects registered",
    run: "run_a3f2c8",
    meta: "originals preserved",
  },
  {
    id: "02",
    stage: "Normalization",
    artifact: "12 derived artifacts produced",
    run: "run_a3f2c8",
    meta: "derived · versioned",
  },
  {
    id: "03",
    stage: "Timeline",
    artifact: "24 events assembled",
    run: "run_a3f2c8",
    meta: "chronology built",
  },
  {
    id: "04",
    stage: "Citations",
    artifact: "31 citations bound",
    run: "run_a3f2c8",
    meta: "source-linked",
  },
  {
    id: "05",
    stage: "Packet",
    artifact: "1 review packet prepared",
    run: "run_a3f2c8",
    meta: "reviewable",
  },
];

function ProcessingLedger() {
  return (
    <section className="relative border-y border-border bg-surface/20">
      <Section>
        <SectionHeader
          eyebrow="Inspectable Processing Ledger"
          title={
            <>
              The system can <span className="text-gradient-primary">show its work.</span>
            </>
          }
          sub="Each processing stage records artifacts, run identifiers, and provenance markers so reviewers can inspect how a case was assembled."
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
          Representative demonstration ledger · Not live telemetry
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
        eyebrow="No Citation, No Claim"
        title={
          <>
            Unsupported assertions do{" "}
            <span className="text-gradient-primary">not pass the export gate.</span>
          </>
        }
        sub="Every generated factual assertion must resolve to a source citation. When support is missing, the system flags or blocks the claim instead of filling the gap."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <GateCard
          state="pass"
          claim="Scheduled contact window was not completed on 2024-03-18."
          rows={[
            ["Citation attached", "CIT-0417"],
            ["Exact excerpt", "voicemail-2024-03-18.m4a · t=00:18–00:34"],
            ["Export eligible", "yes"],
          ]}
        />
        <GateCard
          state="block"
          claim="Co-parent intentionally interfered with the schedule."
          rows={[
            ["Missing source support", "no citation resolves"],
            ["Export prevented", "yes"],
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
          className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] ${pass ? "bg-success/15 text-success ring-1 ring-success/30" : "bg-destructive/15 text-red-300 ring-1 ring-red-400/30"}`}
        >
          {pass ? <Check className="size-3" /> : <X className="size-3" />}
          {pass ? "Pass · Citation-bound" : "Blocked · No support"}
        </span>
        <span className="font-mono text-[10px] text-muted-foreground">export gate</span>
      </div>
      <p className="mt-4 text-sm font-medium text-foreground">"{claim}"</p>
      <dl className="mt-5 space-y-2">
        {rows.map(([k, v]) => (
          <div
            key={k}
            className="flex items-center justify-between border-t border-border/70 pt-2 text-[12px]"
          >
            <dt className="text-muted-foreground">{k}</dt>
            <dd className={`font-mono ${pass ? "text-foreground/90" : "text-foreground/90"}`}>
              {v}
            </dd>
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
    title: "Original evidence preserved",
    body: "The original artifact remains distinct from every derived transcript, extraction, timeline event, or report.",
  },
  {
    icon: Hash,
    title: "Verifiable evidence identity",
    body: "SHA-256 identity and versioned derived artifacts support repeatable processing and change detection.",
  },
  {
    icon: Quote,
    title: "Citation-bound intelligence",
    body: "Findings remain linked to exact pages, messages, excerpts, bounding boxes, or timecodes.",
  },
  {
    icon: UserCheck,
    title: "Role-aware, reviewable outputs",
    body: "Language and priority can adapt for parents, attorneys, and evaluators while the underlying evidence remains unchanged.",
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
              Four principles shape <span className="text-gradient-primary">the review model.</span>
            </>
          }
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
      "A scheduled contact window on 2024-03-18 does not appear to have been completed. This is drawn only from the cited voicemail and messages.",
    priority: "Bring this to your attorney",
    nextAction: "Share the packet with your legal counsel for review",
  },
  attorney: {
    label: "Attorney",
    icon: Briefcase,
    framing:
      "Finding FND-0184: scheduled contact window not completed on 2024-03-18. Supported by CIT-0417 (voicemail excerpt) and prior scheduling messages.",
    priority: "Cross-reference with the prior scheduling agreement",
    nextAction: "Assemble a source-linked exhibit set for review",
  },
  evaluator: {
    label: "Evaluator",
    icon: Eye,
    framing:
      "One documented instance in the cited period where the scheduled contact window was not completed. Presented as a discrete, source-linked observation.",
    priority: "Consider alongside other cited observations",
    nextAction: "Inspect original EvidenceObjects before drawing inferences",
  },
};

function RoleView() {
  const [role, setRole] = useState<Role>("attorney");
  const v = ROLE_VIEWS[role];
  const roles = Object.keys(ROLE_VIEWS) as Role[];
  return (
    <Section id="audiences" className="scroll-mt-14">
      <SectionHeader
        eyebrow="Role-Aware Output"
        title={
          <>
            The view changes. <span className="text-gradient-primary">The evidence does not.</span>
          </>
        }
        sub="Language, priority, and framing adapt for parents, attorneys, and evaluators. The underlying EvidenceObjects, citations, and excerpts stay identical."
      />
      <div
        role="tablist"
        aria-label="Role view"
        className="mt-8 inline-flex rounded-lg border border-border bg-surface/60 p-1"
      >
        {roles.map((r, index) => {
          const active = r === role;
          const Icon = ROLE_VIEWS[r].icon;
          return (
            <button
              key={r}
              id={`role-tab-${r}`}
              role="tab"
              aria-selected={active}
              aria-controls="role-view-panel"
              tabIndex={active ? 0 : -1}
              onClick={() => setRole(r)}
              onKeyDown={(event) => {
                const lastIndex = roles.length - 1;
                let nextIndex: number | undefined;
                if (event.key === "ArrowRight") nextIndex = index === lastIndex ? 0 : index + 1;
                else if (event.key === "ArrowLeft") nextIndex = index === 0 ? lastIndex : index - 1;
                else if (event.key === "Home") nextIndex = 0;
                else if (event.key === "End") nextIndex = lastIndex;

                if (nextIndex === undefined) return;
                event.preventDefault();
                const nextRole = roles[nextIndex];
                setRole(nextRole);
                requestAnimationFrame(() =>
                  document.getElementById(`role-tab-${nextRole}`)?.focus(),
                );
              }}
              className={`inline-flex min-h-9 items-center gap-2 rounded-md px-4 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
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

      <div
        id="role-view-panel"
        role="tabpanel"
        aria-labelledby={`role-tab-${role}`}
        className="mt-6 grid gap-3 lg:grid-cols-[1.2fr_0.8fr]"
      >
        <div className="rounded-2xl border border-border bg-background/60 p-6">
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
              ["EvidenceObject", "EO-2024-03-18-7f3a"],
              ["Citation", "CIT-0417"],
              ["Source excerpt", "voicemail-2024-03-18.m4a · t=00:18–00:34"],
              ["Timeline event", "EVT-0921"],
              ["SHA-256", "a3f2…91c7"],
            ].map(([k, val]) => (
              <li
                key={k}
                className="flex items-center justify-between border-t border-border/70 pt-2"
              >
                <span className="text-muted-foreground">{k}</span>
                <span className="font-mono text-[11px] text-foreground/90">{val}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-success">
            <Check className="mr-1 inline size-3" /> Identity · citation · excerpt preserved
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

const CATEGORIES: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  status: "core" | "pilot" | "dev";
}[] = [
  { icon: MessageSquare, label: "Messages", status: "core" },
  { icon: Mail, label: "Emails", status: "core" },
  { icon: FileText, label: "PDFs & documents", status: "core" },
  { icon: Camera, label: "Screenshots & photos", status: "core" },
  { icon: AudioLines, label: "Audio recordings", status: "pilot" },
  { icon: Video, label: "Video recordings", status: "dev" },
  { icon: Database, label: "Co-parenting exports", status: "pilot" },
  { icon: Layers3, label: "iMazing / RSMF", status: "pilot" },
];

const STATUS_LABEL = {
  core: { text: "Core pilot support", cls: "text-success" },
  pilot: { text: "Supported in select pilots", cls: "text-primary" },
  dev: { text: "In development", cls: "text-muted-foreground" },
} as const;

function EvidenceCategories() {
  return (
    <section className="relative border-y border-border bg-surface/20">
      <Section>
        <SectionHeader
          eyebrow="Designed For Real Evidence Chaos"
          title={
            <>
              Built for the record as it actually{" "}
              <span className="text-gradient-primary">arrives.</span>
            </>
          }
        />
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c) => {
            const s = STATUS_LABEL[c.status];
            return (
              <div key={c.label} className="min-h-32 bg-background p-5">
                <c.icon aria-hidden className="size-5 text-primary" />
                <div className="mt-5 text-sm font-medium text-foreground">{c.label}</div>
                <div className={`mt-2 font-mono text-[10px] uppercase tracking-[0.14em] ${s.cls}`}>
                  {s.text}
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
    title: "SHA-256 evidence identity",
    body: "Each ingested artifact carries a durable hash so identity is verifiable across processing runs.",
  },
  {
    icon: Lock,
    title: "Original artifact preservation",
    body: "Originals remain stored and distinct from any derived transcript or extraction.",
  },
  {
    icon: GitBranch,
    title: "Versioned derived artifacts",
    body: "Extractions, transcriptions, and normalizations are tracked as versioned derivatives of the original.",
  },
  {
    icon: ShieldCheck,
    title: "Chain-of-custody events",
    body: "Ingest, processing, review, and export actions are recorded as inspectable events.",
  },
  {
    icon: Quote,
    title: "Citation pointers",
    body: "Findings reference pages, messages, excerpts, timecodes, or bounding boxes rather than free-floating text.",
  },
  {
    icon: UserCheck,
    title: "Human review boundaries",
    body: "Qualified professionals remain the interpreters. TruthTrace supports, does not replace, their judgment.",
  },
  {
    icon: FileCheck2,
    title: "Export gating",
    body: "Unsupported claims are flagged or blocked at the export gate rather than emitted as conclusions.",
  },
  {
    icon: ShieldCheck,
    title: "Role-based access",
    body: "Access surfaces are scoped by role and matter within controlled pilot deployments.",
  },
];

function TrustArchitecture() {
  return (
    <Section id="trust" className="scroll-mt-14">
      <SectionHeader
        eyebrow="Trust Architecture"
        title={
          <>
            A forensic trust model,{" "}
            <span className="text-gradient-primary">not a marketing checklist.</span>
          </>
        }
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
          TruthTrace does not provide legal advice, diagnose individuals, determine credibility or
          intent, recommend custody outcomes, or replace qualified professional judgment. It does
          not guarantee admissibility. All outputs require professional review.
        </p>
      </div>
    </Section>
  );
}

/* ------------------------------- Closing CTA ----------------------------- */

function ClosingCta({ onRequestPilot }: { onRequestPilot: () => void }) {
  return (
    <section id="pilot" className="scroll-mt-14 relative border-t border-border bg-surface/20">
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Eyebrow>Controlled Pilot</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Bring one difficult evidence set.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              See whether TruthTrace can turn it into a structured, source-verifiable record that a
              professional can actually review.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onRequestPilot}
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-primary/60 bg-primary/15 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Request Controlled Pilot Access
              </button>
              <Link
                to="/"
                hash="proof-chain"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-foreground/85 transition-colors hover:border-foreground/40 hover:text-foreground"
              >
                View the forensic demonstration
              </Link>
            </div>
            <p className="mt-5 max-w-2xl text-[13px] leading-relaxed text-muted-foreground">
              Controlled pilot access is limited. Submitted matters remain subject to intake,
              privacy, and technical-fit review.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-background/60 p-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
              Pilot intake checkpoints
            </div>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                "Matter fit and evidence composition review",
                "Privacy, data-custody, and access agreements",
                "Technical intake for source materials",
                "Controlled processing and review window",
                "Structured, source-linked packet delivered for professional review",
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

/* --------------------------------- Modal --------------------------------- */

function PilotModal({ onClose }: { onClose: () => void }) {
  const mailto = "mailto:pilots@truthtrace.app?subject=Controlled%20pilot%20access%20request";
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousOverflow = document.body.style.overflow;
    const focusable = Array.from(
      dialog.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    document.body.style.overflow = "hidden";
    first?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="pilot-modal-title"
      className="fixed inset-0 z-[100] grid place-items-center bg-background/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-2xl border border-border bg-background p-6 shadow-[0_30px_80px_-20px_rgba(79,140,255,0.35)]"
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-3 top-3 grid size-8 place-items-center rounded-md text-muted-foreground hover:bg-surface/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <X className="size-4" />
        </button>
        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
          Controlled Pilot
        </div>
        <h3 id="pilot-modal-title" className="mt-3 text-2xl font-semibold tracking-tight">
          Request Controlled Pilot Access
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Pilot intake is handled directly by the TruthTrace team. Send a short note describing the
          matter type, evidence composition, and professional context. Do not include sensitive case
          records in the initial email.
        </p>
        <a
          href={mailto}
          className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-md border border-primary/60 bg-primary/15 px-5 py-2.5 text-sm font-medium text-foreground hover:bg-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          Email Pilot Intake
        </a>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          Submissions subject to intake, privacy, and technical-fit review
        </p>
      </div>
    </div>
  );
}

/* --------------------------------- Footer -------------------------------- */

function Footer() {
  return (
    <footer className="relative border-t border-border px-5 py-10">
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
            <Circle aria-hidden className="size-2 fill-current text-primary" />
            TruthTrace
          </div>
          <p className="mt-3 max-w-xl text-xs leading-relaxed text-muted-foreground">
            Forensic Evidence Intelligence for Family Law. Controlled pilot. Professional review
            required.
          </p>
        </div>
        <nav
          aria-label="Footer"
          className="flex flex-wrap gap-x-5 gap-y-3 text-xs text-muted-foreground"
        >
          <Link to="/about" className="hover:text-foreground">
            About
          </Link>
          <Link to="/technology" className="hover:text-foreground">
            Technology
          </Link>
          <Link to="/" hash="trust" className="hover:text-foreground">
            Trust
          </Link>
        </nav>
        <div className="border-t border-border pt-5 text-[11px] text-muted-foreground sm:col-span-2 sm:flex sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} TruthTrace</span>
          <span className="mt-2 block sm:mt-0">No citation, no claim.</span>
        </div>
      </div>
    </footer>
  );
}
