import { motion } from "framer-motion";
import { Briefcase, Check, Eye, Fingerprint, GitBranch, Layers3, Quote, ShieldCheck, UserCheck, UserRound } from "lucide-react";
import type { ReactNode } from "react";

import { Nav } from "@/components/site/Nav";
import { Eyebrow, Section, SectionHeader } from "@/components/site/Section";

const trustStrip = ["Evidence Identity", "Provenance", "Deterministic Processing", "Citation-Bound Outputs", "Human-Reviewable"];
const workflow = ["Upload Evidence", "Preserve Source Identity", "Normalize Into Timeline", "Bind Findings To Citations", "Generate Reviewable Packets"];
const pillars = [
  { icon: Fingerprint, title: "Evidence Identity", body: "Keeps each record distinguishable as fragmented materials become a structured body of evidence." },
  { icon: GitBranch, title: "Provenance", body: "Preserves source context so reviewers can understand where information originated." },
  { icon: Layers3, title: "Deterministic Processing", body: "Creates repeatable, consistent treatment of evidence across professional review cycles." },
  { icon: Quote, title: "Citation-Bound Outputs", body: "Connects reviewable findings to the records that support them." },
  { icon: UserCheck, title: "Professional Review", body: "Supports qualified judgment while keeping attorneys, evaluators, and courts in control." },
];
const audiences = [
  { title: "Parents", body: "Reduce chaos and prepare cleaner evidence for counsel.", icon: UserRound },
  { title: "Attorneys", body: "Review source-linked timelines and packets faster.", icon: Briefcase },
  { title: "Evaluators", body: "See neutral, citation-supported chronology without relying on raw evidence dumps.", icon: Eye },
  { title: "Strategic Partners", body: "Explore evidence-intelligence infrastructure for family-law workflows.", icon: ShieldCheck },
];
const guardrails = ["Evidence-Constrained Outputs", "Source-Linked Findings", "Human-Reviewable Summaries", "Professional Review Required", "No Legal Advice", "No Custody Recommendations", "No Diagnosis"];

export function HomePage() {
  return <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
    <Background /><Nav />
    <main className="relative pt-14"><Hero /><Problem /><EvidenceMetric /><HowItWorks /><LaborMetric /><TechnologyPillars /><ProcessingMetric /><Audiences /><Trust /><Patent /><Status /></main>
    <Footer />
  </div>;
}

function Background() {
  return <div aria-hidden className="pointer-events-none fixed inset-0"><div className="absolute inset-0 grid-bg opacity-30" /><div className="absolute -top-48 left-1/2 h-[700px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--primary)_16%,transparent),transparent)] blur-3xl" /></div>;
}

function Hero() {
  return <Section className="!pb-16 !pt-20 sm:!pb-24 sm:!pt-28 lg:!pb-28 lg:!pt-36">
    <div className="max-w-6xl"><Eyebrow>Forensic Evidence Intelligence for Family Law</Eyebrow>
      <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-6 max-w-5xl text-balance text-[42px] font-semibold leading-[1.01] tracking-tight sm:text-[60px] lg:text-[78px]">Turn Evidence Chaos Into <span className="text-gradient-primary">Court-Ready Clarity.</span></motion.h1>
      <p className="mt-7 max-w-4xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-xl">TruthTrace helps transform messages, emails, screenshots, recordings, and documents into structured timelines, source-linked findings, and attorney-reviewable evidence packets.</p>
      <div className="mt-10 border-y border-border py-5"><div className="flex flex-wrap gap-x-5 gap-y-3 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/80 sm:text-[11px]">{trustStrip.map((item, index) => <span key={item} className="flex items-center gap-5">{index > 0 && <span className="hidden size-1 rounded-full bg-primary sm:block" />}{item}</span>)}</div></div>
      <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Patent-pending forensic evidence processing technology.</p>
    </div>
  </Section>;
}

function Problem() {
  return <section className="relative border-y border-border bg-surface/20"><Section><div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"><SectionHeader eyebrow="The Problem" title={<>Evidence Is Not The Problem.<br /><span className="text-gradient-primary">Evidence Entropy Is.</span></>} /><div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg"><p>Most high-conflict cases already contain thousands of messages, screenshots, recordings, documents, and court filings.</p><p className="text-foreground/85">The challenge is turning that evidence into something professionals can realistically review.</p></div></div></Section></section>;
}

function EvidenceMetric() {
  const values = [["7,380", "Messages"], ["977", "Relevant Records"], ["498", "Structured Evidence Items"], ["", "Reviewable Timeline"]];
  return <MetricShell eyebrow="Evidence Compression" title="From Thousands of Messages to Structured Evidence"><div className="grid items-stretch gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">{values.map(([value,label], i) => <div key={label} className="contents"><div className="flex min-h-40 flex-col justify-end border-l border-primary/45 bg-background/45 p-6 sm:min-h-48"><div className={`${value ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl"} font-semibold tracking-tight text-foreground`}>{value || label}</div>{value && <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{label}</div>}</div>{i < values.length - 1 && <div className="grid place-items-center text-2xl text-primary lg:rotate-[-90deg]">↓</div>}</div>)}</div></MetricShell>;
}

function MetricShell({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <Section><div className="overflow-hidden rounded-2xl border border-border bg-surface/35 p-5 sm:p-8 lg:p-10"><div className="mb-9"><div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">{eyebrow}</div><h2 className="mt-4 max-w-4xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">{title}</h2></div>{children}</div></Section>;
}

function HowItWorks() {
  return <section id="how" className="relative scroll-mt-14 border-y border-border bg-surface/20"><Section><SectionHeader eyebrow="How It Works" title={<>A clear path to <span className="text-gradient-primary">professional review.</span></>} /><div className="mt-12 grid gap-3 md:grid-cols-5">{workflow.map((item,i) => <div key={item} className="relative min-h-40 border-t border-border bg-background/35 p-5"><span className="font-mono text-[10px] text-primary">0{i+1}</span><h3 className="mt-8 text-base font-semibold leading-snug">{item}</h3>{i < 4 && <span className="absolute -bottom-3 left-5 z-10 text-primary md:-right-2.5 md:bottom-auto md:left-auto md:top-1/2 md:-translate-y-1/2 md:-rotate-90">↓</span>}</div>)}</div></Section></section>;
}

function LaborMetric() {
  return <MetricShell eyebrow="Professional Efficiency" title="68% Reduction In Evidence Processing Labor"><div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-[1fr_1fr_0.8fr]"><MetricCell label="Traditional Review" value="1,090" unit="Hours" /><MetricCell label="TruthTrace" value="349" unit="Hours" /><MetricCell label="Labor Reduction" value="68%" unit="Reduction" accent /></div></MetricShell>;
}

function MetricCell({label,value,unit,accent=false}:{label:string;value:string;unit:string;accent?:boolean}) { return <div className={`min-h-48 p-6 sm:p-8 ${accent ? "bg-primary/10" : "bg-background"}`}><div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{label}</div><div className={`mt-10 text-5xl font-semibold tracking-tight sm:text-6xl ${accent ? "text-primary" : "text-foreground"}`}>{value}</div><div className="mt-2 text-sm text-muted-foreground">{unit}</div></div>; }

function TechnologyPillars() {
  return <section className="relative border-y border-border bg-surface/20"><Section><SectionHeader eyebrow="Technology Pillars" title={<>Infrastructure built for <span className="text-gradient-primary">evidence integrity.</span></>} sub="The public view focuses on why the system matters—not the mechanics behind it." /><div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-5">{pillars.map(item => <article key={item.title} className="min-h-64 bg-background p-6"><item.icon className="size-5 text-primary"/><h3 className="mt-8 text-lg font-semibold tracking-tight">{item.title}</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.body}</p></article>)}</div></Section></section>;
}

function ProcessingMetric() {
  return <MetricShell eyebrow="Incremental Evidence Processing" title="Built For Incremental Evidence Processing"><div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-[1fr_1fr_0.8fr]"><MetricCell label="Traditional Systems" value="28,750" unit="Processing Events" /><MetricCell label="TruthTrace" value="11,500" unit="Processing Events" /><MetricCell label="Efficiency" value="60%" unit="Less Reprocessing" accent /></div><p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">TruthTrace reuses validated work instead of repeatedly reprocessing evidence.</p></MetricShell>;
}

function Audiences() {
  return <section id="audiences" className="relative scroll-mt-14 border-y border-border bg-surface/20"><Section><SectionHeader eyebrow="Who It Serves" title={<>Different responsibilities. <span className="text-gradient-primary">One clearer record.</span></>} /><div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">{audiences.map(item => <article key={item.title} className="min-h-56 bg-background p-6"><item.icon className="size-5 text-primary"/><h3 className="mt-8 text-xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p></article>)}</div></Section></section>;
}

function Trust() {
  return <Section id="trust" className="scroll-mt-14"><SectionHeader eyebrow="Trust & Guardrails" title={<>Structured evidence. <span className="text-gradient-primary">Human judgment remains essential.</span></>} sub={<>TruthTrace does not decide custody, diagnose behavior, or replace attorneys, evaluators, or courts.<br className="hidden sm:block" /> It structures evidence so qualified professionals can review the record faster and with clearer source support.</>} /><div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{guardrails.map(item => <div key={item} className="flex min-h-20 items-center gap-3 border-l border-border bg-surface/35 p-4 text-sm"><Check className="size-4 shrink-0 text-success" />{item}</div>)}</div></Section>;
}

function Patent() {
  return <section className="relative border-y border-border bg-surface/20"><Section><div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><div><Eyebrow>Patent-Pending Technology</Eyebrow><h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">Built Around Evidence Identity And Provenance</h2></div><p className="border-l border-primary/45 pl-6 text-base leading-relaxed text-muted-foreground sm:text-lg">TruthTrace incorporates patent-pending technology focused on evidence identity, provenance, deterministic processing, and citation-bound outputs.</p></div></Section></section>;
}

function Status() {
  return <Section><div className="border-y border-border py-10 sm:py-14"><div className="font-mono text-[10px] uppercase tracking-[0.18em] text-success">Private Pilots Active</div><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Current Status</h2><p className="mt-5 max-w-4xl text-base leading-relaxed text-muted-foreground sm:text-lg">TruthTrace is currently operating in private pilot environments focused on evidence organization, timeline generation, source-linked findings, and professional review workflows.</p></div></Section>;
}

function Footer() { return <footer className="relative border-t border-border px-5 py-8"><div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} TruthTrace</span><span>Forensic Evidence Intelligence · Professional review required</span></div></footer>; }