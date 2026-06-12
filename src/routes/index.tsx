import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, ShieldCheck, Quote, Lock, Cpu, FileCheck2,
  Database, Fingerprint, Check, X, ArrowDown,
  Box, UserRound, Briefcase, Eye,
  Inbox, Calendar, FileBadge2, Network,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Nav } from "@/components/site/Nav";
import { HeroPipeline } from "@/components/site/HeroPipeline";
import { Workspace } from "@/components/site/Workspace";
import { Section, SectionHeader, Eyebrow } from "@/components/site/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TruthTrace | Forensic Evidence Intelligence" },
      { name: "description", content: "Turn family law evidence chaos into structured timelines, source-linked findings, and attorney-ready evidence packets." },
      { property: "og:title", content: "TruthTrace | Forensic Evidence Intelligence" },
      { property: "og:description", content: "The forensic evidence intelligence layer between raw family law case materials and professional review." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div id="top" className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div aria-hidden className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 grid-bg opacity-[0.35]" />
        <div className="absolute -top-40 left-1/2 h-[720px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--primary)_18%,transparent),transparent)] blur-2xl" />
        <div className="absolute bottom-0 left-0 h-[480px] w-[640px] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--accent)_12%,transparent),transparent)] blur-3xl" />
      </div>

      <Nav />

      <main className="relative pt-14">
        <Hero />
        <TrustBar />
        <CategoryFlow />
        <WhyExists />
        <BeforeAfter />
        <RoleValue />
        <WorkspaceSection />
        <AttorneyPacket />
        <PatentTech />
        <TrustLimits />
        <FinalCta />
        <Footer />
      </main>
    </div>
  );
}

/* ─────────────── 1. Hero ─────────────── */

function Hero() {
  return (
    <Section className="!pt-12 sm:!pt-16 md:!pt-24 !pb-12 sm:!pb-16">
      <div className="grid items-end gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Eyebrow>The Forensic Evidence Intelligence Layer for Family Law</Eyebrow>
          <h1 className="mt-5 text-balance text-[34px] font-semibold leading-[1.05] tracking-tight sm:text-[44px] sm:leading-[1.02] md:text-[56px] lg:text-[64px]">
            Turn Evidence Chaos Into <span className="text-gradient">Court-Ready Clarity.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base md:text-[17px]">
            TruthTrace transforms messages, emails, screenshots, recordings, and documents into structured
            timelines, source-linked findings, and attorney-ready evidence packets.
          </p>

          <p className="mt-4 max-w-2xl text-[12.5px] leading-relaxed text-muted-foreground/80">
            Built for evidence organization, review, and attorney preparation. Not legal advice.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              Request Early Access <ArrowRight className="size-4" />
            </Button>
            <Button variant="wire" size="xl" asChild className="w-full sm:w-auto">
              <a href="#how">See How It Works</a>
            </Button>
          </div>

          <div className="mt-8 grid max-w-2xl grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-5">
            {["Upload Evidence", "Create EvidenceObjects", "Build Timeline", "Link Citations", "Generate Packet"].map((step, index) => (
              <div key={step} className="flex items-center gap-2 bg-background/80 px-3 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-foreground/80">
                <span className="text-primary">0{index + 1}</span>
                <span>{step}</span>
              </div>
            ))}
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

/* ─────────────── Trust Bar ─────────────── */

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
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-6 py-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/80">
        <span className="inline-block size-1 rounded-full bg-primary/70 shadow-[0_0_8px_var(--primary)]" />
        <span>Patent Pending Technology</span>
      </div>
    </div>
  );
}

/* ─────────────── 2. Category Creation ─────────────── */

function CategoryFlow() {
  const steps = [
    { icon: Inbox,       label: "Upload Evidence",  sub: "Texts · emails · audio · PDFs · exports" },
    { icon: Fingerprint, label: "Create EvidenceObjects",  sub: "Immutable source identity" },
    { icon: Calendar,    label: "Build Timeline",         sub: "Events · actors · chronology" },
    { icon: Quote,       label: "Link Citations",        sub: "Source-bound excerpts" },
    { icon: FileBadge2,  label: "Generate Packet",  sub: "Inventory · findings · provenance" },
  ];
  return (
    <Section id="how">
      <SectionHeader
        eyebrow="Category"
        title={<>Most systems store information. <span className="text-gradient-primary">TruthTrace creates evidence intelligence.</span></>}
        sub="Traditional evidence remains scattered across screenshots, emails, messages, recordings, and documents. TruthTrace organizes evidence into a structured, reviewable system where every finding can be traced back to source material."
      />

      <div className="mt-14 grid gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="relative rounded-xl border border-border bg-surface/40 p-5"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              0{i + 1}
            </div>
            <div className="mt-3 grid size-10 place-items-center rounded-md bg-primary/15 ring-1 ring-primary/30">
              <s.icon className="size-5 text-primary" />
            </div>
            <div className="mt-3 text-sm font-medium text-foreground">{s.label}</div>
            <div className="mt-1 text-[12px] leading-relaxed text-muted-foreground">{s.sub}</div>
            {i < steps.length - 1 && (
              <ArrowDown className="absolute -bottom-3 right-4 size-3.5 text-muted-foreground/50 md:hidden" />
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ─────────────── 3. Why TruthTrace Exists ─────────────── */

function WhyExists() {
  const rows = [
    {
      role: "Parent Side",
      body: "Years of messages, recordings, emails, screenshots, and court documents become difficult to organize and review.",
      icon: UserRound,
    },
    {
      role: "Attorney Side",
      body: "Large evidence collections require significant time to sort, verify, and prepare.",
      icon: Briefcase,
    },
    {
      role: "Evaluator Side",
      body: "Important events are often buried inside fragmented timelines and disconnected records.",
      icon: Eye,
    },
  ];
  return (
    <Section id="why">
      <SectionHeader
        eyebrow="Why TruthTrace Exists"
        title={<>Evidence chaos <span className="text-gradient-primary">creates risk</span>.</>}
        sub="TruthTrace helps create a clearer, more reviewable record across every role in a family law matter."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {rows.map((r, i) => (
          <motion.div
            key={r.role}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="rounded-xl border border-border bg-surface/40 p-6"
          >
            <div className="grid size-10 place-items-center rounded-md bg-accent/15 ring-1 ring-accent/30">
              <r.icon className="size-5 text-accent" />
            </div>
            <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{r.role}</div>
            <p className="mt-2 text-sm leading-relaxed text-foreground/85">{r.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ─────────────── 4. Before / After ─────────────── */

function BeforeAfter() {
  const before = [
    "Screenshots everywhere",
    "Messages without context",
    "Audio disconnected from events",
    "Duplicate records",
    "Manual timelines",
    "Difficult attorney review",
  ];
  const after = [
    "Structured EvidenceObjects",
    "Chronological timeline",
    "Source-linked citations",
    "Centralized review",
    "Attorney packet generation",
    "Reviewable exports",
  ];
  return (
    <Section>
      <SectionHeader
        eyebrow="Before · After"
        title={<>From evidence dump to <span className="text-gradient-primary">reviewable record</span>.</>}
      />
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface/30 p-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Without a system</div>
          <ul className="mt-5 space-y-2.5">
            {before.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-foreground/80">
                <X className="mt-0.5 size-4 shrink-0 text-destructive/80" /> {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.06] to-background p-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">With TruthTrace</div>
          <ul className="mt-5 space-y-2.5">
            {after.map((a) => (
              <li key={a} className="flex items-start gap-3 text-sm text-foreground/90">
                <Check className="mt-0.5 size-4 shrink-0 text-success" /> {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* ─────────────── 5. Role-Based Value ─────────────── */

function RoleValue() {
  const cards = [
    {
      icon: UserRound,
      role: "Parents",
      headline: "Make Sense of Years of Evidence",
      body: "Organize messages, screenshots, recordings, and documents into a structured timeline that is easier to review and share.",
    },
    {
      icon: Briefcase,
      role: "Attorneys",
      headline: "Reduce Evidence Review Time",
      body: "Receive structured timelines, source-linked citations, and attorney-ready packets that reduce evidence preparation overhead.",
    },
    {
      icon: Eye,
      role: "Evaluators",
      headline: "Review Evidence With Context",
      body: "Follow events chronologically and trace findings directly to source material.",
    },
  ];
  return (
    <Section id="roles">
      <SectionHeader
        eyebrow="Who It's For"
        title={<>One platform. <span className="text-gradient-primary">Three perspectives.</span></>}
      />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div
            key={c.role}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-7"
          >
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="grid size-11 place-items-center rounded-lg bg-primary/15 ring-1 ring-primary/30">
              <c.icon className="size-5 text-primary" />
            </div>
            <div className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{c.role}</div>
            <h3 className="mt-1 text-xl font-semibold tracking-tight">{c.headline}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ─────────────── 6. Workspace ─────────────── */

function WorkspaceSection() {
  return (
    <section id="workspace" className="relative">
      <div className="mx-auto max-w-7xl px-5 pt-16 sm:px-6 sm:pt-20 md:pt-24">
        <SectionHeader
          eyebrow="The Workspace"
          title={<>Evidence becomes timeline. Timeline becomes <span className="text-gradient-primary">findings</span>.</>}
          sub="A live forensic intelligence surface — sources, normalized timeline, and an evidence inspector. Every event is traceable to source, every citation is sealed."
        />
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-5 pb-16 sm:px-6 sm:mt-12 sm:pb-20 md:pb-24">
        <Workspace />
      </div>
    </section>
  );
}

/* ─────────────── 7. Attorney Packet ─────────────── */

function AttorneyPacket() {
  const flow = [
    { label: "Evidence Sources",  sub: "All inbound material" },
    { label: "Timeline",          sub: "Events · actors · dates" },
    { label: "Findings",          sub: "Reviewable observations" },
    { label: "Citation Registry", sub: "Every claim · every source" },
    { label: "Packet Export",     sub: "Inventory · provenance · limitations" },
  ];
  return (
    <Section id="packet">
      <SectionHeader
        eyebrow="Attorney Packet"
        title={<>From evidence dump to <span className="text-gradient-primary">attorney-ready packet</span>.</>}
        sub="A structured, reviewable export designed to reduce attorney preparation overhead — without implying filing, conclusions, or legal advice."
      />
      <div className="mt-12 grid gap-3 md:grid-cols-5">
        {flow.map((f, i) => (
          <motion.div
            key={f.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="rounded-xl border border-border bg-surface/40 p-5"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">0{i + 1}</div>
            <div className="mt-2 text-sm font-medium text-foreground">{f.label}</div>
            <div className="mt-1 text-[12px] leading-relaxed text-muted-foreground">{f.sub}</div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface/40 p-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Packet contents</div>
          <ul className="mt-4 space-y-2 text-sm text-foreground/85">
            <li className="flex items-center gap-2"><Check className="size-4 text-success" /> Timeline summary</li>
            <li className="flex items-center gap-2"><Check className="size-4 text-success" /> Key events</li>
            <li className="flex items-center gap-2"><Check className="size-4 text-success" /> Source excerpts</li>
            <li className="flex items-center gap-2"><Check className="size-4 text-success" /> Citation registry</li>
            <li className="flex items-center gap-2"><Check className="size-4 text-success" /> Export package</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-gradient-to-br from-accent/[0.06] to-background p-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Designed for review</div>
          <p className="mt-4 text-sm leading-relaxed text-foreground/80">
            Every export carries provenance, citation IDs, and explicit limitations. TruthTrace does not
            assert filings, conclusions, or legal positions — it produces a reviewable record for
            attorneys and evaluators to assess on their own terms.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ─────────────── 8. Patent-Pending Technology ─────────────── */

function PatentTech() {
  const features = [
    { icon: Fingerprint, label: "Immutable EvidenceObjects", detail: "Source materials receive a stable cryptographic identity." },
    { icon: Cpu, label: "Deterministic Processing", detail: "Repeatable processing keeps transformations traceable." },
    { icon: Calendar, label: "Timeline Normalization", detail: "Events, actors, and dates become structured chronology." },
    { icon: Quote, label: "Citation-Bound Findings", detail: "Reviewable observations remain linked to source excerpts." },
    { icon: ShieldCheck, label: "Chain-of-Custody Tracking", detail: "Provenance follows evidence from intake through export." },
    { icon: Eye, label: "Role-Gated Outputs", detail: "Parents and professionals review the same evidence record through appropriate views." },
  ];
  return (
    <Section id="technology">
      <SectionHeader
        eyebrow="Technology"
        title={<>The evidence layer between raw materials and <span className="text-gradient-primary">professional review</span>.</>}
        sub="TruthTrace structures evidence without obscuring its origin. The system is designed for traceability, repeatability, and human review."
      />
      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="rounded-xl border border-border bg-surface/40 p-5"
          >
            <div className="grid size-9 place-items-center rounded-md bg-primary/15 ring-1 ring-primary/30">
              <f.icon className="size-4 text-primary" />
            </div>
            <div className="mt-4 text-sm font-medium text-foreground">{f.label}</div>
            <p className="mt-2 text-[12px] leading-relaxed text-muted-foreground">{f.detail}</p>
          </motion.div>
        ))}
      </div>
      <p className="mt-6 max-w-3xl text-[12.5px] leading-relaxed text-muted-foreground/80">
        TruthTrace incorporates patent-pending technology related to deterministic evidence processing,
        evidence object identity, timeline normalization, provenance tracking, and citation-bound outputs.
        Patent applications have been filed covering aspects of the platform. Finnegan serves as
        intellectual property counsel.
      </p>
    </Section>
  );
}

/* ─────────────── 9. Trust & Limitations ─────────────── */

function TrustLimits() {
  const not = [
    "Legal advice",
    "Clinical opinions",
    "Custody recommendations",
    "Diagnoses",
    "Truth determinations",
  ];
  return (
    <Section id="trust">
      <div className="grid items-start gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Trust & Limitations"
            title={<>Built for review. <span className="text-gradient-primary">Not conclusions.</span></>}
            sub="TruthTrace helps organize and review evidence. All outputs require user and attorney review."
          />
        </div>
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-border bg-surface/40 p-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">TruthTrace does not provide</div>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {not.map((n) => (
                <li key={n} className="flex items-center gap-2 rounded-md border border-border bg-background/40 px-3 py-2 text-sm text-foreground/85">
                  <X className="size-4 shrink-0 text-destructive/80" /> {n}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              <Network className="size-3.5" /> Human review · attorney workflow · evaluator context
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─────────────── 10. Final CTA ─────────────── */

function FinalCta() {
  return (
    <Section id="cta" className="!pb-28">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/[0.08] via-surface/40 to-background p-10 sm:p-14 md:p-16">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-3xl text-center">
          <Eyebrow>Early Access</Eyebrow>
          <h2 className="mt-5 text-balance text-[32px] font-semibold leading-[1.05] tracking-tight sm:text-[40px] md:text-[52px]">
            Ready to turn evidence chaos into <span className="text-gradient-primary">clarity</span>?
          </h2>
          <p className="mt-5 text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            Join the waitlist to receive updates and early access opportunities.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              Request Early Access <ArrowRight className="size-4" />
            </Button>
            <Button variant="wire" size="xl" asChild className="w-full sm:w-auto">
              <a href="#workspace">Explore the Workspace</a>
            </Button>
          </div>
          <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70">
            Patent Pending Technology · Built for Review · Not Legal Advice
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─────────────── Footer ─────────────── */

function Footer() {
  return (
    <footer className="relative border-t border-border bg-background/60">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-5 py-8 sm:flex-row sm:items-center sm:px-6">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          TruthTrace · Forensic Evidence Intelligence
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
          © {new Date().getFullYear()} TruthTrace. Not legal advice.
        </div>
      </div>
    </footer>
  );
}
