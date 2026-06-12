import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, ShieldCheck, GitBranch, Quote, Lock, Cpu, FileCheck2,
  Database, Hash, Fingerprint, ScrollText, Layers, Sparkles, Check, X,
  Smartphone, FileText, Camera, AudioLines, MessageSquare, Mail, ArrowDown,
  Box, Package, Workflow, Eye, Gavel, UserRound, Briefcase,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Nav } from "@/components/site/Nav";
import { HeroPipeline } from "@/components/site/HeroPipeline";
import { Workspace } from "@/components/site/Workspace";
import { Section, SectionHeader, Eyebrow } from "@/components/site/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TruthTrace — Forensic Evidence Intelligence" },
      { name: "description", content: "TruthTrace transforms fragmented evidence into immutable EvidenceObjects, citation-bound timelines, and attorney-reviewable packets. Reduce evidence entropy." },
      { property: "og:title", content: "TruthTrace — Forensic Evidence Intelligence" },
      { property: "og:description", content: "Stop drowning in evidence. Evidence entropy becomes attorney-reviewable clarity." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div id="top" className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 grid-bg opacity-[0.35]" />
        <div className="absolute -top-40 left-1/2 h-[720px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--primary)_18%,transparent),transparent)] blur-2xl" />
        <div className="absolute bottom-0 left-0 h-[480px] w-[640px] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--accent)_12%,transparent),transparent)] blur-3xl" />
      </div>

      <Nav />

      <main className="relative pt-14">
        <Hero />
        <TrustBar />
        <Problem />
        <WhatItDoes />
        <WorkspaceSection />
        <ForParents />
        <HowItWorks />
        <MultipleViews />
        <NotAChatbot />
        <Architecture />
        <ModeledImpact />
        <Category />
        <MobileIntake />
        <FinalCta />
        <Footer />
      </main>
    </div>
  );
}

/* ───────────────────────────── Hero ───────────────────────────── */

function Hero() {
  return (
    <Section className="!pt-16 md:!pt-24 !pb-16">
      <div className="grid items-end gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Eyebrow>Forensic Evidence Intelligence</Eyebrow>
          <h1 className="mt-6 text-balance text-[44px] font-semibold leading-[1.02] tracking-tight md:text-[68px]">
            <span className="text-gradient">Stop Drowning In Evidence.</span>
          </h1>
          <h2 className="mt-4 text-balance text-2xl font-medium tracking-tight text-foreground/85 md:text-[28px]">
            Evidence Entropy becomes <span className="text-gradient-primary">attorney-reviewable clarity</span>.
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-[15px] leading-relaxed text-muted-foreground md:text-base">
            TruthTrace transforms fragmented texts, emails, recordings, screenshots, PDFs, court
            filings, and exports into immutable <span className="text-foreground">EvidenceObjects</span>,
            citation-bound timelines, and attorney-reviewable evidence packets.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button variant="hero" size="xl">
              Request Demo <ArrowRight className="size-4" />
            </Button>
            <Button variant="wire" size="xl" asChild>
              <a href="#workspace">Explore the Workspace</a>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Lock className="size-3" /> chain-of-custody</span>
            <span className="text-border">·</span>
            <span className="inline-flex items-center gap-1.5"><Fingerprint className="size-3" /> SHA-256 identity</span>
            <span className="text-border">·</span>
            <span className="inline-flex items-center gap-1.5"><Quote className="size-3" /> citation enforced</span>
          </div>
        </div>
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <HeroPipeline />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────────────── Trust Bar ───────────────────────────── */

function TrustBar() {
  const items = [
    { icon: Box,         label: "Immutable EvidenceObjects" },
    { icon: Quote,       label: "Citation-Bound Findings" },
    { icon: ShieldCheck, label: "Chain of Custody" },
    { icon: Cpu,         label: "Deterministic Processing" },
    { icon: Database,    label: "Evidence-Constrained Analysis" },
    { icon: FileCheck2,  label: "Export Provenance" },
  ];
  return (
    <div className="relative border-y border-border/70 bg-surface/30">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden bg-border md:grid-cols-3 lg:grid-cols-6">
        {items.map((i) => (
          <div key={i.label} className="flex items-center gap-2.5 bg-background/60 px-5 py-5">
            <i.icon className="size-4 shrink-0 text-primary" />
            <span className="text-[12px] font-medium tracking-tight text-foreground/90">{i.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ───────────────────────────── Problem ───────────────────────────── */

function Problem() {
  return (
    <Section id="problem">
      <SectionHeader
        eyebrow="The Problem"
        title={<>The problem is not missing evidence. <span className="text-gradient-primary">It's evidence entropy.</span></>}
        sub="Most families don't suffer from a lack of evidence. They suffer from an inability to organize, understand, and present it."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {/* Chaos */}
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/30 p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Before · evidence entropy</div>
            <div className="font-mono text-[10px] text-destructive/80">unstructured</div>
          </div>
          <div className="relative h-[280px] rounded-lg border border-border bg-background/40 p-3">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="relative grid h-full grid-cols-8 gap-1.5">
              {Array.from({ length: 96 }).map((_, i) => {
                const types = ["msg", "mail", "pdf", "img", "aud"];
                const t = types[i % 5];
                const colors: Record<string, string> = {
                  msg:  "bg-foreground/10 text-muted-foreground",
                  mail: "bg-accent/10 text-accent/70",
                  pdf:  "bg-foreground/15 text-foreground/60",
                  img:  "bg-primary/10 text-primary/70",
                  aud:  "bg-success/10 text-success/70",
                };
                return (
                  <div
                    key={i}
                    className={`grid place-items-center rounded-sm font-mono text-[7px] ${colors[t]}`}
                    style={{ transform: `rotate(${(i % 7) - 3}deg)` }}
                  >
                    {t}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 text-[11px] text-muted-foreground">
            <Stat n="4,023" l="messages" />
            <Stat n="287" l="screenshots" />
            <Stat n="638" l="files" />
          </div>
          <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><X className="size-3.5 text-destructive/80" /> no structure</li>
            <li className="flex items-center gap-2"><X className="size-3.5 text-destructive/80" /> no chronology</li>
            <li className="flex items-center gap-2"><X className="size-3.5 text-destructive/80" /> no clarity</li>
          </ul>
        </div>

        {/* Clarity */}
        <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.06] to-background p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">After · TruthTrace</div>
            <div className="font-mono text-[10px] text-success">structured · cited · sealed</div>
          </div>
          <div className="rounded-lg border border-border bg-background/40 p-4">
            <div className="space-y-2.5">
              {[
                { l: "Timeline",         k: "498 events",        c: "primary" },
                { l: "EvidenceObjects",  k: "7,380 sealed",      c: "primary" },
                { l: "Citations",        k: "2,941 verified",    c: "accent" },
                { l: "Findings",         k: "126 high-evidence", c: "accent" },
                { l: "Packet",           k: "1 attorney-ready",  c: "success" },
              ].map((r, i) => (
                <motion.div
                  key={r.l}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i }}
                  className="flex items-center justify-between rounded-md border border-border bg-surface/40 px-3 py-2.5"
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`size-1.5 rounded-full ${
                      r.c === "primary" ? "bg-primary shadow-[0_0_8px_var(--primary)]" :
                      r.c === "accent"  ? "bg-accent" : "bg-success shadow-[0_0_8px_var(--success)]"
                    }`} />
                    <span className="text-sm font-medium">{r.l}</span>
                  </div>
                  <span className="font-mono text-[11px] text-muted-foreground">{r.k}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <ul className="mt-4 space-y-1 text-sm text-foreground/85">
            <li className="flex items-center gap-2"><Check className="size-3.5 text-success" /> deterministic ingest</li>
            <li className="flex items-center gap-2"><Check className="size-3.5 text-success" /> source-bound citations</li>
            <li className="flex items-center gap-2"><Check className="size-3.5 text-success" /> attorney-reviewable export</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="rounded-md border border-border bg-surface/40 px-3 py-2">
      <div className="font-mono text-base text-foreground">{n}</div>
      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{l}</div>
    </div>
  );
}

/* ───────────────────────────── What it does ───────────────────────────── */

function WhatItDoes() {
  const cards = [
    { icon: Lock,        title: "Preserve",  body: "Create immutable EvidenceObjects with SHA-256 identity and full provenance from the moment of ingestion." },
    { icon: GitBranch,   title: "Normalize", body: "Build structured timelines from fragmented evidence — events, actors, dates, and relationships." },
    { icon: ShieldCheck, title: "Validate",  body: "Generate citation-bound findings, each linked back to its underlying source material and excerpt." },
  ];
  return (
    <Section>
      <SectionHeader eyebrow="What TruthTrace Does" title="Three primitives. One evidence base." />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-xl border border-border bg-surface/40 p-6"
          >
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="grid size-10 place-items-center rounded-md bg-primary/15 ring-1 ring-primary/30">
              <c.icon className="size-5 text-primary" />
            </div>
            <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">0{i + 1}</div>
            <h3 className="mt-1 text-xl font-semibold tracking-tight">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ───────────────────────────── Workspace (centerpiece) ───────────────────────────── */

function WorkspaceSection() {
  return (
    <section id="workspace" className="relative">
      <div className="mx-auto max-w-7xl px-6 pt-24">
        <SectionHeader
          eyebrow="The Workspace"
          title={<>Evidence becomes timeline. <br className="hidden md:block" />Timeline becomes <span className="text-gradient-primary">findings</span>.</>}
          sub="A live forensic intelligence surface — sources on the left, normalized timeline at the center, evidence inspector on the right. Every event is traceable to source, every citation is sealed."
        />
      </div>

      <div className="mx-auto mt-12 max-w-7xl px-6 pb-24">
        <Workspace />
        <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
          {[
            { k: "Left panel",   v: "Evidence sources, types, counts, metadata, custody chain." },
            { k: "Center panel", v: "Normalized timeline of events, actors, tags, severity, relationships." },
            { k: "Right panel",  v: "EvidenceObject identity, source excerpt, citations, review status, confidence." },
          ].map((x) => (
            <div key={x.k} className="rounded-md border border-border bg-surface/40 px-4 py-3 text-xs">
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{x.k}</div>
              <div className="mt-1 text-foreground/90">{x.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── For overwhelmed parents ───────────────────────────── */

function ForParents() {
  const before = [
    { n: "4,000", l: "Messages" },
    { n: "300",   l: "Screenshots" },
    { n: "12",    l: "Recordings" },
    { n: "5",     l: "PDF Binders" },
  ];
  const after = [
    { n: "7,380", l: "EvidenceObjects" },
    { n: "498",   l: "Timeline events" },
    { n: "126",   l: "Findings" },
    { n: "1",     l: "Attorney-ready packet" },
  ];
  return (
    <Section id="parents">
      <SectionHeader
        eyebrow="Built for Overwhelmed Parents"
        title={<>You already have the evidence. <br className="hidden md:block" /><span className="text-gradient-primary">TruthTrace helps you understand it.</span></>}
        sub="TruthTrace helps parents organize and understand evidence before sharing it with legal professionals. We never promise outcomes, custody results, or legal advice."
      />
      <div className="mt-12 grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr]">
        <ColumnList label="Before" tone="muted" items={before} foot={["no timeline", "no structure", "no clarity"]} />
        <div className="grid place-items-center">
          <div className="grid size-12 place-items-center rounded-full border border-border bg-surface/60 text-muted-foreground">
            <ArrowRight className="size-5 md:rotate-0" />
          </div>
        </div>
        <ColumnList label="After" tone="primary" items={after} foot={["chronology built", "citations bound", "packet generated"]} />
      </div>
    </Section>
  );
}

function ColumnList({
  label, tone, items, foot,
}: { label: string; tone: "muted" | "primary"; items: { n: string; l: string }[]; foot: string[] }) {
  return (
    <div className={`rounded-2xl border p-6 ${tone === "primary" ? "border-primary/25 bg-gradient-to-br from-primary/[0.06] to-background" : "border-border bg-surface/30"}`}>
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {items.map((i) => (
          <div key={i.l} className="rounded-md border border-border bg-background/40 px-3 py-3">
            <div className={`font-mono text-2xl tracking-tight ${tone === "primary" ? "text-foreground" : "text-foreground/70"}`}>{i.n}</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{i.l}</div>
          </div>
        ))}
      </div>
      <ul className="mt-4 space-y-1.5 text-[13px]">
        {foot.map((f) => (
          <li key={f} className="flex items-center gap-2">
            {tone === "primary"
              ? <Check className="size-3.5 text-success" />
              : <X className="size-3.5 text-muted-foreground/60" />}
            <span className={tone === "primary" ? "text-foreground/85" : "text-muted-foreground"}>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ───────────────────────────── How it works ───────────────────────────── */

function HowItWorks() {
  const steps = [
    { k: "Upload Evidence",                       sub: "Messages · audio · screenshots · emails · PDFs · photos", icon: Layers },
    { k: "TruthTrace creates EvidenceObjects",    sub: "SHA-256 identity · provenance · chunk reuse",             icon: Box },
    { k: "Timeline is constructed",               sub: "Events · actors · dates · relationships",                 icon: ScrollText },
    { k: "Findings are citation-bound",           sub: "Each finding linked to its source excerpt",               icon: Quote },
    { k: "Generate attorney-reviewable packet",   sub: "Exportable · provenance manifest · sealed",               icon: Package },
  ];
  return (
    <Section id="how">
      <SectionHeader eyebrow="How It Works" title="A deterministic pipeline. From raw artifact to sealed export." />
      <div className="mt-12 grid gap-3 md:grid-cols-5">
        {steps.map((s, i) => (
          <motion.div
            key={s.k}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="relative rounded-xl border border-border bg-surface/40 p-5"
          >
            <div className="flex items-center justify-between">
              <div className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground">STEP {String(i + 1).padStart(2, "0")}</div>
              <s.icon className="size-4 text-primary" />
            </div>
            <div className="mt-3 text-[15px] font-semibold leading-snug">{s.k}</div>
            <div className="mt-1.5 text-[12px] leading-relaxed text-muted-foreground">{s.sub}</div>
            {i < steps.length - 1 && (
              <div className="pointer-events-none absolute -right-2 top-1/2 hidden -translate-y-1/2 md:block">
                <ArrowRight className="size-4 text-border" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ───────────────────────────── Multiple Views ───────────────────────────── */

function MultipleViews() {
  const tabs = [
    { id: "parent",    label: "Parent",    icon: UserRound },
    { id: "attorney",  label: "Attorney",  icon: Briefcase },
    { id: "evaluator", label: "Evaluator", icon: Eye },
    { id: "gal",       label: "GAL",       icon: Gavel },
  ];
  const [active, setActive] = useState("attorney");
  const content: Record<string, { headline: string; rows: { k: string; v: string }[] }> = {
    parent: {
      headline: "Plain-English timeline of key events.",
      rows: [
        { k: "Mar 18 · evening", v: "Co-parent referenced an agreement that was never made." },
        { k: "Mar 19 · morning", v: "Pediatrician appointment scheduled without notice." },
        { k: "Mar 22 · afternoon", v: "Text thread directly contradicted earlier voicemail." },
      ],
    },
    attorney: {
      headline: "Claim matrix with citations, evidence links, provenance.",
      rows: [
        { k: "Claim · notice violation",      v: "5 supporting citations · 3 high-evidence · EO-…7f3a, EO-…ce21" },
        { k: "Claim · agreement misrepresent.", v: "4 citations · transcribed audio EO-…7f3a#t=00:18" },
        { k: "Claim · pattern of inconsistency", v: "12 citations · 8 distinct events · provenance verified" },
      ],
    },
    evaluator: {
      headline: "Chronology, patterns, and supporting evidence.",
      rows: [
        { k: "Pattern", v: "Communication breakdown clusters around scheduled exchanges." },
        { k: "Frequency", v: "31 inconsistency events across 90-day window." },
        { k: "Severity distribution", v: "high: 18 · supporting: 80 · low: 400" },
      ],
    },
    gal: {
      headline: "Child-centered timeline with third-party corroboration.",
      rows: [
        { k: "Third-party records", v: "School (4), pediatrician (2), therapist (1)" },
        { k: "Direct child impact", v: "12 events with documented effect" },
        { k: "Corroborated events", v: "26 of 31 inconsistencies cross-referenced" },
      ],
    },
  };
  const c = content[active];
  return (
    <Section id="views">
      <SectionHeader
        eyebrow="One Evidence Base · Multiple Professional Views"
        title="Same evidence. Different presentation."
        sub="Every audience sees a presentation tuned to their role — built deterministically from one shared evidence base."
      />
      <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface/30">
        <div className="flex flex-wrap gap-1 border-b border-border bg-background/40 p-2">
          {tabs.map((t) => {
            const a = t.id === active;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-[13px] transition-colors ${
                  a ? "bg-primary/15 text-foreground ring-1 ring-primary/30" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <t.icon className="size-3.5" /> {t.label}
              </button>
            );
          })}
        </div>
        <div className="grid gap-0 md:grid-cols-12">
          <div className="border-b border-border p-6 md:col-span-4 md:border-b-0 md:border-r">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{active} view</div>
            <h3 className="mt-2 text-xl font-semibold leading-snug">{c.headline}</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Built from the same EvidenceObjects, the same timeline, and the same citations as every other view.
            </p>
          </div>
          <div className="p-6 md:col-span-8">
            <div className="space-y-2.5">
              {c.rows.map((r, i) => (
                <motion.div
                  key={r.k}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col gap-2 rounded-md border border-border bg-background/40 px-4 py-3 sm:flex-row sm:items-start sm:gap-4"
                >
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground sm:w-44 sm:shrink-0">{r.k}</div>
                  <div className="text-sm text-foreground/90">{r.v}</div>
                </motion.div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────────────── Not a chatbot ───────────────────────────── */

function NotAChatbot() {
  const cards = [
    { t: "Immutable EvidenceObjects", s: "Every artifact is sealed at ingest. Nothing is rewritten." },
    { t: "SHA-256 Identity",          s: "Cryptographic identity for each evidence chunk and parent." },
    { t: "Deterministic Chunk Reuse", s: "Same input → same chunks → reproducible processing." },
    { t: "Timeline Normalization",    s: "Schema-bound events, actors, and relationships." },
    { t: "Citation Enforcement",      s: "No finding without a source-pointer back to evidence." },
    { t: "Export Provenance",         s: "Every export carries a verifiable manifest." },
  ];
  return (
    <Section id="pipeline">
      <SectionHeader
        eyebrow="Architecture"
        title={<>Not a chatbot. <span className="text-gradient-primary">A deterministic evidence pipeline.</span></>}
        sub="TruthTrace is built around evidence identity, chronology, provenance, and citation discipline — not generic AI generation."
      />
      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
        {cards.map((c) => (
          <div key={c.t} className="bg-background/60 p-6">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
              <Hash className="size-3" /> primitive
            </div>
            <h3 className="mt-3 text-[17px] font-semibold tracking-tight">{c.t}</h3>
            <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{c.s}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ───────────────────────────── Architecture / Moat ───────────────────────────── */

function Architecture() {
  const layers = [
    { l: "Original Artifact",  s: "raw upload · preserved" },
    { l: "EvidenceObject",     s: "sha-256 · sealed identity" },
    { l: "Normalized Event",   s: "actor · date · relationship" },
    { l: "Citation Pointer",   s: "source-bound reference" },
    { l: "Finding",            s: "evidence-constrained" },
    { l: "Report",             s: "claim matrix · structured" },
    { l: "Export Manifest",    s: "attorney-reviewable · verifiable" },
  ];
  return (
    <Section id="moat">
      <SectionHeader
        eyebrow="Technical Moat"
        title={<>Evidence architecture. <span className="text-gradient-primary">Not AI magic.</span></>}
        sub="Every finding remains traceable to source evidence."
      />
      <div className="mt-12 grid gap-8 md:grid-cols-12">
        <div className="md:col-span-7">
          <div className="rounded-2xl border border-border bg-surface/30 p-6">
            <div className="space-y-2">
              {layers.map((x, i) => (
                <div key={x.l} className="flex items-stretch gap-3">
                  <div className="flex w-10 flex-col items-center">
                    <div className="grid size-8 place-items-center rounded-md border border-primary/30 bg-primary/10 font-mono text-[11px] text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    {i < layers.length - 1 && <div className="my-1 flex-1 w-px bg-gradient-to-b from-primary/40 to-transparent" />}
                  </div>
                  <div className="flex-1 rounded-md border border-border bg-background/50 px-4 py-3">
                    <div className="text-sm font-medium">{x.l}</div>
                    <div className="font-mono text-[11px] text-muted-foreground">{x.s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:col-span-5 space-y-3">
          {[
            { t: "Idempotent ingest",     s: "Re-running the pipeline produces identical EvidenceObjects.", icon: Workflow },
            { t: "Source-pointer discipline", s: "Findings cannot exist without a verifiable citation chain.", icon: Quote },
            { t: "Provenance manifests",   s: "Every exported packet ships with a verifiable origin trail.", icon: FileCheck2 },
            { t: "Evidence-constrained reasoning", s: "Analysis is bounded by what evidence actually supports.", icon: ShieldCheck },
          ].map((c) => (
            <div key={c.t} className="flex gap-3 rounded-xl border border-border bg-surface/30 p-4">
              <div className="grid size-9 shrink-0 place-items-center rounded-md bg-primary/15 ring-1 ring-primary/30">
                <c.icon className="size-4 text-primary" />
              </div>
              <div>
                <div className="text-sm font-semibold">{c.t}</div>
                <div className="mt-0.5 text-[13px] text-muted-foreground">{c.s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────────────── Modeled Impact ───────────────────────────── */

function ModeledImpact() {
  return (
    <Section id="impact">
      <SectionHeader
        eyebrow="Modeled Impact"
        title="Modeled. Illustrative. Validation ongoing."
        sub="Internal modeling against representative case volumes. Results are illustrative — empirical validation is in progress."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <FlowCard
          title="Funnel"
          rows={[
            { l: "Ingested messages",       v: "7,380" },
            { l: "Relevant items",          v: "977"   },
            { l: "High-evidence items",     v: "498"   },
          ]}
        />
        <FlowCard
          title="Labor"
          rows={[
            { l: "Manual review",           v: "75–100 hrs" },
            { l: "With TruthTrace",         v: "10–20 hrs"  },
            { l: "Modeled reduction",       v: "68%", accent: true },
          ]}
        />
        <FlowCard
          title="Efficiency"
          rows={[
            { l: "Embedding reuse",         v: "60%" },
            { l: "Readiness compression",   v: "4–24 wks" },
            { l: "Citation density",        v: "5.9 / event" },
          ]}
        />
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
        <Badge>modeled</Badge>
        <Badge>illustrative</Badge>
        <Badge>validation ongoing</Badge>
      </div>
    </Section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-surface/60 px-2 py-1 text-muted-foreground">
      {children}
    </span>
  );
}

function FlowCard({ title, rows }: { title: string; rows: { l: string; v: string; accent?: boolean }[] }) {
  return (
    <div className="rounded-2xl border border-border bg-surface/30 p-6">
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{title}</div>
      <div className="mt-4 space-y-3">
        {rows.map((r, i) => (
          <div key={r.l}>
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-muted-foreground">{r.l}</span>
              <span className={`font-mono ${r.accent ? "text-2xl text-gradient-primary" : "text-base text-foreground"}`}>{r.v}</span>
            </div>
            {i < rows.length - 1 && <div className="mt-3 flex justify-center"><ArrowDown className="size-3 text-border" /></div>}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ───────────────────────────── Category ───────────────────────────── */

function Category() {
  const rows = [
    "Evidence Identity",
    "Timeline Normalization",
    "Citation Enforcement",
    "Chain of Custody",
    "Evidence-Constrained Analysis",
    "Attorney Packet Generation",
    "Export Provenance",
  ];
  const cols = [
    { k: "Communication Apps", marks: [false, false, false, false, false, false, false] },
    { k: "Document Storage",   marks: [false, false, false, true,  false, false, false] },
    { k: "Generic AI",         marks: [false, false, false, false, false, false, false] },
    { k: "TruthTrace",         marks: [true,  true,  true,  true,  true,  true,  true], hi: true },
  ];
  return (
    <Section id="category">
      <SectionHeader
        eyebrow="Category Positioning"
        title="TruthTrace is the evidence intelligence layer."
        sub="A new category — distinct from messaging, storage, and generic AI."
      />
      <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-surface/30">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse">
            <thead>
              <tr className="border-b border-border bg-background/40">
                <th className="px-5 py-4 text-left font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Capability</th>
                {cols.map((c) => (
                  <th
                    key={c.k}
                    className={`px-5 py-4 text-center text-[12px] font-medium ${c.hi ? "bg-primary/[0.08] text-foreground" : "text-muted-foreground"}`}
                  >
                    {c.k}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r} className="border-b border-border/60 last:border-0">
                  <td className="px-5 py-4 text-sm text-foreground/90">{r}</td>
                  {cols.map((c) => (
                    <td key={c.k} className={`px-5 py-4 text-center ${c.hi ? "bg-primary/[0.05]" : ""}`}>
                      {c.marks[i]
                        ? <Check className={`mx-auto size-4 ${c.hi ? "text-success" : "text-muted-foreground"}`} />
                        : <span className="text-border">—</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────────────── Mobile Intake ───────────────────────────── */

function MobileIntake() {
  const inputs = [
    { icon: Camera,        l: "Screenshot" },
    { icon: AudioLines,    l: "Audio" },
    { icon: ImageIconSafe, l: "Photo" },
    { icon: FileText,      l: "PDF" },
  ];
  const flow = ["Preserve source", "Extract context", "Build timeline", "Review findings", "Generate packet"];
  return (
    <Section id="mobile">
      <SectionHeader
        eyebrow="Mobile Intake"
        title="Evidence collection starts on the phone."
        sub="Capture in the moment. Preserve in the cloud. Surface in the workspace."
      />
      <div className="mt-12 grid items-center gap-10 lg:grid-cols-12">
        {/* Phone */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto w-[280px]">
            <div className="absolute -inset-6 rounded-[48px] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--primary)_22%,transparent),transparent)] blur-xl" />
            <div className="relative rounded-[40px] border border-border bg-surface/60 p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
              <div className="rounded-[32px] border border-border bg-background p-4">
                <div className="mb-3 flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                  <span>9:41</span>
                  <span>● ● ●</span>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Capture</div>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {inputs.map((i) => (
                    <div key={i.l} className="flex items-center gap-2 rounded-lg border border-border bg-surface/40 px-2.5 py-3">
                      <i.icon className="size-4 text-primary" />
                      <span className="text-[12px]">{i.l}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-lg border border-border bg-surface/40 p-3">
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Last upload</div>
                  <div className="mt-1 text-[12px]">voicemail_2024-03-18.m4a</div>
                  <div className="mt-2 flex items-center gap-2 font-mono text-[10px] text-success">
                    <span className="size-1.5 rounded-full bg-success shadow-[0_0_8px_var(--success)]" /> sealed · EO-…7f3a
                  </div>
                </div>
                <button className="mt-4 w-full rounded-lg bg-primary py-2.5 text-[13px] font-medium text-primary-foreground">
                  Capture evidence
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Flow */}
        <div className="lg:col-span-7">
          <ol className="space-y-2.5">
            {flow.map((f, i) => (
              <motion.li
                key={f}
                initial={{ opacity: 0, x: 8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-center gap-4 rounded-xl border border-border bg-surface/40 px-4 py-4"
              >
                <div className="grid size-9 place-items-center rounded-md border border-primary/30 bg-primary/10 font-mono text-[12px] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex-1 text-[15px] font-medium">{f}</div>
                <ArrowRight className="size-4 text-muted-foreground/60" />
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}

// alias to avoid clash with lucide ImageIcon already imported elsewhere — local safe re-export
function ImageIconSafe(props: React.SVGProps<SVGSVGElement>) {
  return <Camera {...props} />;
}

/* ───────────────────────────── Final CTA ───────────────────────────── */

function FinalCta() {
  return (
    <Section id="cta">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-surface/60 to-background p-10 md:p-16">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.35]" />
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--primary)_25%,transparent),transparent)] blur-2xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <Eyebrow>Reduce Evidence Entropy</Eyebrow>
          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight md:text-[56px] md:leading-[1.05]">
            <span className="text-gradient">Transform evidence into clarity.</span>
          </h2>
          <p className="mt-5 text-pretty text-[15px] text-muted-foreground md:text-base">
            TruthTrace reduces evidence entropy through deterministic processing, citation-bound findings, and attorney-reviewable outputs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button variant="hero" size="xl">Request Demo <ArrowRight className="size-4" /></Button>
            <Button variant="wire" size="xl">Schedule Review</Button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            <span>not legal advice</span>
            <span className="text-border">·</span>
            <span>not a chatbot</span>
            <span className="text-border">·</span>
            <span>evidence-constrained</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────────────── Footer ───────────────────────────── */

function Footer() {
  return (
    <footer className="relative border-t border-border bg-background/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <div className="relative grid size-7 place-items-center rounded-md bg-primary/15 ring-1 ring-primary/40">
              <div className="size-2 rounded-sm bg-primary shadow-[0_0_12px_var(--primary)]" />
            </div>
            <span className="text-[15px] font-semibold tracking-tight">TruthTrace</span>
          </div>
          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            The forensic evidence intelligence platform. Immutable EvidenceObjects, citation-bound timelines, attorney-reviewable packets.
          </p>
        </div>
        <FooterCol title="Platform" items={["Workspace", "Pipeline", "Architecture", "Mobile intake"]} />
        <FooterCol title="Company" items={["Category", "Modeled impact", "Patent strategy", "Contact"]} />
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-5 font-mono text-[11px] text-muted-foreground">
          <div>© {new Date().getFullYear()} TruthTrace · Forensic Evidence Intelligence</div>
          <div className="flex items-center gap-4">
            <span>not legal advice</span>
            <span className="text-border">·</span>
            <span>chain-of-custody preserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{title}</div>
      <ul className="mt-3 space-y-2 text-sm">
        {items.map((i) => (
          <li key={i}><a href="#" className="text-foreground/85 hover:text-foreground">{i}</a></li>
        ))}
      </ul>
    </div>
  );
}
