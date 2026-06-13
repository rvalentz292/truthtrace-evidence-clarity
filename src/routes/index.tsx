import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Briefcase,
  Check,
  Eye,
  FileCheck2,
  Fingerprint,
  Inbox,
  Landmark,
  LockKeyhole,
  Quote,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Eyebrow, Section, SectionHeader } from "@/components/site/Section";
import { HomePage } from "@/components/site/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TruthTrace | Forensic Evidence Intelligence" },
      {
        name: "description",
        content: "TruthTrace structures family-law evidence into source-linked timelines, findings, and attorney-reviewable packets.",
      },
      { property: "og:title", content: "TruthTrace | Forensic Evidence Intelligence" },
      {
        property: "og:description",
        content: "A calm, evidence-constrained layer between fragmented family-law records and professional review.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: HomePage,
});

const workflow = [
  { step: "01", title: "Upload evidence", body: "Bring messages, emails, screenshots, recordings, and documents into one review process.", icon: Inbox },
  { step: "02", title: "Preserve source identity", body: "Maintain a durable connection between each item and its original source.", icon: Fingerprint },
  { step: "03", title: "Normalize into timeline", body: "Organize fragmented records into a consistent chronology for review.", icon: Landmark },
  { step: "04", title: "Bind findings to citations", body: "Keep reviewable observations connected to the evidence that supports them.", icon: Quote },
  { step: "05", title: "Generate reviewable packets", body: "Prepare structured materials for attorney and professional review.", icon: FileCheck2 },
];

const audiences = [
  { id: "parents", title: "Parents", body: "Reduce chaos and prepare cleaner evidence for counsel.", icon: UserRound },
  { id: "attorneys", title: "Attorneys", body: "Review source-linked timelines and packets faster.", icon: Briefcase },
  { id: "evaluators", title: "Evaluators", body: "See neutral, citation-supported chronology without relying on raw evidence dumps.", icon: Eye },
  { id: "investors", title: "Strategic Partners / Investors", body: "Explore evidence-intelligence infrastructure for family-law workflows.", icon: Landmark },
];

const guardrails = [
  "Evidence-constrained outputs",
  "Source-linked findings",
  "Human-reviewable summaries",
  "No legal advice",
  "No custody recommendations",
  "No diagnosis",
  "No unsupported claims",
  "Professional review required",
];

function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <Background />
      <Nav />
      <main className="relative pt-14">
        <Hero />
        <Problem />
        <HowItWorks />
        <Audiences />
        <PrivateStatus />
        <Trust />
        <Technology />
        <FinalStatus />
      </main>
      <Footer />
    </div>
  );
}

function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -top-48 left-1/2 h-[700px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--primary)_16%,transparent),transparent)] blur-3xl" />
    </div>
  );
}

function Hero() {
  return (
    <Section className="!pb-16 !pt-16 sm:!pb-24 sm:!pt-24 lg:!pt-32">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] lg:gap-16">
        <div className="min-w-0">
          <Eyebrow>Forensic Evidence Intelligence for Family Law</Eyebrow>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 max-w-4xl text-balance text-[38px] font-semibold leading-[1.03] tracking-tight sm:text-[52px] lg:text-[68px]"
          >
            Turn Evidence Chaos Into <span className="text-gradient-primary">Court-Ready Clarity.</span>
          </motion.h1>
          <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            TruthTrace helps parents, attorneys, and evaluators transform messages, emails, screenshots, recordings, and documents into structured timelines, source-linked findings, and attorney-reviewable evidence packets.
          </p>
          <p className="mt-7 max-w-3xl border-l border-primary/50 pl-4 text-sm leading-relaxed text-foreground/75">
            Patent-pending forensic evidence processing technology. Evidence-constrained. Human-reviewable. Built for high-conflict custody documentation.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/45 p-5 sm:p-7">
          <div className="pointer-events-none absolute inset-0 grid-bg radial-fade opacity-45" />
          <div className="relative flex items-center justify-between border-b border-border pb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            <span>Evidence clarity</span>
            <span className="text-success">reviewable</span>
          </div>
          <div className="relative mt-6 space-y-3">
            {[
              ["Fragmented records", "Preserved sources"],
              ["Scattered chronology", "Structured timeline"],
              ["Unsupported summaries", "Citation-bound findings"],
              ["Evidence dump", "Reviewable packet"],
            ].map(([before, after], index) => (
              <motion.div
                key={before}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.09 }}
                className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 rounded-xl border border-border bg-background/55 p-4"
              >
                <span className="min-w-0 text-sm text-muted-foreground">{before}</span>
                <span aria-hidden className="text-primary">→</span>
                <span className="min-w-0 text-right text-sm font-medium text-foreground">{after}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Problem() {
  return (
    <section className="relative border-y border-border bg-surface/20">
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <SectionHeader eyebrow="The Problem" title={<>Most families do not suffer from a lack of evidence. <span className="text-gradient-primary">They suffer from evidence entropy.</span></>} />
          <div className="grid gap-3 sm:grid-cols-2">
            {["Thousands of texts", "Screenshots out of order", "Recordings buried on phones", "PDFs and court orders scattered"].map((item) => (
              <div key={item} className="flex min-h-20 items-center gap-3 border-l border-border bg-background/30 px-4 py-3 text-sm text-foreground/85">
                <span className="size-1.5 shrink-0 rounded-full bg-primary" />{item}
              </div>
            ))}
          </div>
        </div>
        <p className="mt-10 max-w-4xl text-base leading-relaxed text-muted-foreground">
          Attorneys are overloaded by volume. Judges and evaluators need clarity, not evidence dumps. TruthTrace is designed to help turn fragmented records into a record that can be followed, checked, and reviewed.
        </p>
      </Section>
    </section>
  );
}

function HowItWorks() {
  return (
    <Section id="how">
      <SectionHeader eyebrow="How TruthTrace Works" title={<>A clear path from raw records to <span className="text-gradient-primary">professional review.</span></>} sub="A high-level, evidence-constrained workflow designed to preserve source support without replacing professional judgment." />
      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {workflow.map((item) => (
          <div key={item.step} className="min-h-64 rounded-xl border border-border bg-surface/40 p-6">
            <div className="flex items-center justify-between">
              <item.icon className="size-5 text-primary" />
              <span className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground">{item.step}</span>
            </div>
            <h3 className="mt-8 text-lg font-semibold tracking-tight">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Audiences() {
  return (
    <section className="relative border-y border-border bg-surface/20">
      <Section>
        <SectionHeader eyebrow="Built for the Record Around the Case" title={<>Different responsibilities. <span className="text-gradient-primary">One clearer record.</span></>} />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {audiences.map((item) => (
            <article id={item.id} key={item.id} className="scroll-mt-24 rounded-xl border border-border bg-background/45 p-6 sm:p-7">
              <item.icon className="size-5 text-primary" />
              <h3 className="mt-5 text-xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>
    </section>
  );
}

function PrivateStatus() {
  return (
    <Section>
      <div className="grid gap-8 rounded-2xl border border-border bg-surface/35 p-7 sm:p-10 lg:grid-cols-[auto_1fr] lg:items-center">
        <div className="grid size-12 place-items-center rounded-xl border border-primary/30 bg-primary/10">
          <LockKeyhole className="size-5 text-primary" />
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-success">Controlled pilots underway</div>
          <p className="mt-3 max-w-4xl text-lg leading-relaxed text-foreground/90">
            TruthTrace is currently working with pilot participants in controlled review environments. The full workspace remains private for pilot, professional, investor, and IP-review contexts.
          </p>
        </div>
      </div>
    </Section>
  );
}

function Trust() {
  return (
    <section className="relative border-y border-border bg-surface/20">
      <Section id="trust">
        <SectionHeader eyebrow="Trust & Guardrails" title={<>Structured evidence. <span className="text-gradient-primary">Human judgment remains essential.</span></>} sub="TruthTrace does not decide custody, diagnose behavior, or replace attorneys, evaluators, or courts. It structures evidence so qualified professionals can review the record faster and with clearer source support." />
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {guardrails.map((item) => (
            <div key={item} className="flex min-h-20 items-center gap-3 rounded-lg border border-border bg-background/40 p-4 text-sm text-foreground/85">
              <Check className="size-4 shrink-0 text-success" />{item}
            </div>
          ))}
        </div>
      </Section>
    </section>
  );
}

function Technology() {
  return (
    <Section id="technology">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <Eyebrow>Patent-Pending Technology</Eyebrow>
          <h2 className="mt-5 text-balance text-[30px] font-semibold leading-tight tracking-tight sm:text-[42px]">IP-protected architecture for evidence integrity and review.</h2>
        </div>
        <div className="rounded-2xl border border-primary/25 bg-primary/[0.06] p-7 sm:p-9">
          <ShieldCheck className="size-6 text-primary" />
          <p className="mt-5 text-base leading-relaxed text-foreground/85">
            Patent-pending technology focused on evidence identity, provenance, deterministic processing, and citation-bound outputs.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Public materials describe the product at a high level. Detailed architecture and processing mechanics remain within controlled review environments.
          </p>
        </div>
      </div>
    </Section>
  );
}

function FinalStatus() {
  return (
    <section className="relative border-t border-border bg-surface/25">
      <Section className="text-center">
        <h2 className="mx-auto max-w-4xl text-balance text-[30px] font-semibold leading-tight tracking-tight sm:text-[44px]">Built for evidence clarity, professional review, and high-conflict custody documentation.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">TruthTrace is currently conducting controlled pilots and professional product reviews.</p>
      </Section>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-border px-5 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} TruthTrace</span>
        <span>Forensic Evidence Intelligence · Professional review required</span>
      </div>
    </footer>
  );
}