import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, ArrowDown, ShieldCheck, GitBranch, Quote, Hash, ScrollText,
  Package, FileCheck2, Layers, Eye, UserRound, Briefcase, Gavel, Users,
  Scale, Building2, Search, FileSearch, Sparkles, Check, X, Compass,
  Workflow, Lock, Microscope, Network,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Nav } from "@/components/site/Nav";
import { Section, SectionHeader, Eyebrow } from "@/components/site/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About TruthTrace — Building the Evidence Intelligence Category" },
      { name: "description", content: "TruthTrace transforms fragmented evidence into immutable EvidenceObjects, citation-bound timelines, and attorney-reviewable outputs. We're building forensic evidence intelligence." },
      { property: "og:title", content: "About TruthTrace — Forensic Evidence Intelligence" },
      { property: "og:description", content: "Why TruthTrace exists, what evidence entropy is, and the new category we're creating." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div aria-hidden className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 grid-bg opacity-[0.30]" />
        <div className="absolute -top-40 left-1/2 h-[720px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--primary)_16%,transparent),transparent)] blur-2xl" />
        <div className="absolute bottom-0 right-0 h-[520px] w-[680px] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--accent)_10%,transparent),transparent)] blur-3xl" />
      </div>

      <Nav />

      <main className="relative pt-14">
        <Hero />
        <Entropy />
        <WhyBuilt />
        <Category />
        <System />
        <Principles />
        <HumanReview />
        <WhoWeServe />
        <IntellectualProperty />
        <Future />
        <FinalCta />
        <Footer />
      </main>
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <Section className="!pt-12 sm:!pt-20 md:!pt-28 !pb-10 sm:!pb-12">
      <div className="grid grid-cols-12 gap-8 items-center lg:gap-10">
        <div className="col-span-12 lg:col-span-7">
          <Eyebrow>About TruthTrace</Eyebrow>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-5 text-balance text-[36px] font-semibold leading-[1.05] tracking-tight sm:text-[44px] md:text-[56px] lg:text-[64px] lg:leading-[1.02]"
          >
            <span className="text-gradient">We believe the truth is often</span>
            <br />
            <span className="text-gradient-primary">buried in the evidence.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 max-w-2xl text-pretty text-[14px] leading-relaxed text-muted-foreground sm:text-[15px] md:text-[17px]"
          >
            TruthTrace was created to reduce <span className="text-foreground">evidence entropy</span> — transforming fragmented evidence into immutable <span className="text-foreground">EvidenceObjects</span>, citation-bound timelines, and attorney-reviewable outputs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <Button variant="hero" size="lg" className="w-full sm:w-auto">Request Demo <ArrowRight /></Button>
            <Button variant="wire" size="lg" asChild className="w-full sm:w-auto">
              <Link to="/">Explore Platform</Link>
            </Button>
          </motion.div>

          <div className="mt-8 grid grid-cols-3 gap-2 max-w-xl sm:gap-4">
            {[
              { k: "Deterministic", v: "ingest" },
              { k: "Citation-bound", v: "findings" },
              { k: "Attorney-reviewable", v: "outputs" },
            ].map((s) => (
              <div key={s.k} className="rounded-md border border-border/70 bg-surface/40 p-2.5 sm:p-3">
                <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground sm:text-[10px] sm:tracking-[0.18em]">{s.k}</div>
                <div className="mt-1 text-xs text-foreground sm:text-sm">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="col-span-12 lg:col-span-5">
          <HeroVisual />
        </div>
      </div>
    </Section>
  );
}


function HeroVisual() {
  // Abstract fragments flowing into structured nodes
  const fragments = Array.from({ length: 14 }).map((_, i) => ({
    id: i,
    x: 6 + (i % 5) * 18 + (i % 2) * 5,
    y: 12 + Math.floor(i / 5) * 24 + (i % 3) * 4,
    w: 22 + ((i * 7) % 18),
    h: 6 + (i % 3) * 2,
  }));

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-surface/60 to-background/40 p-5">
      <div className="pointer-events-none absolute inset-0 grid-bg radial-fade opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,color-mix(in_oklab,var(--primary)_18%,transparent),transparent)]" />

      <div className="relative mb-3 flex items-center justify-between border-b border-border/60 pb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_8px_var(--success)] pulse-soft" />
          entropy.resolve
        </div>
        <div>fragments → structure</div>
      </div>

      <div className="relative h-[360px]">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="flow" x1="0" x2="1">
              <stop offset="0" stopColor="color-mix(in oklab, var(--primary) 0%, transparent)" />
              <stop offset="0.5" stopColor="color-mix(in oklab, var(--primary) 80%, transparent)" />
              <stop offset="1" stopColor="color-mix(in oklab, var(--accent) 0%, transparent)" />
            </linearGradient>
          </defs>
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={i}
              x1="45"
              y1={20 + i * 8}
              x2="92"
              y2={50}
              stroke="url(#flow)"
              strokeWidth="0.3"
              className="flow-line"
              opacity={0.6}
            />
          ))}
        </svg>

        {/* Left: chaotic fragments */}
        <div className="absolute inset-y-0 left-0 w-[55%]">
          {fragments.map((f) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, x: -10, rotate: -8 + (f.id % 5) * 2 }}
              animate={{ opacity: 0.85, x: 0, rotate: -6 + (f.id % 5) * 2 }}
              transition={{ delay: 0.05 * f.id, duration: 0.6 }}
              className="absolute rounded-sm border border-border/70 bg-surface/50"
              style={{
                left: `${f.x}%`,
                top: `${f.y}%`,
                width: `${f.w}%`,
                height: `${f.h}%`,
              }}
            >
              <div className="h-full w-full bg-[linear-gradient(90deg,transparent,color-mix(in_oklab,var(--foreground)_8%,transparent),transparent)]" />
            </motion.div>
          ))}
        </div>

        {/* Right: structured nodes */}
        <div className="absolute inset-y-0 right-0 flex w-[40%] flex-col justify-center gap-2.5">
          {[
            { icon: Hash, label: "EvidenceObject", sub: "sha-256" },
            { icon: ScrollText, label: "Timeline", sub: "chronology" },
            { icon: Quote, label: "Citation", sub: "source-bound" },
            { icon: FileCheck2, label: "Finding", sub: "reviewed" },
            { icon: Package, label: "Export", sub: "packet" },
          ].map((n, i) => (
            <motion.div
              key={n.label}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.12, duration: 0.5 }}
              className="flex items-center gap-2.5 rounded-md border border-border/70 bg-background/60 px-2.5 py-2 backdrop-blur"
            >
              <div className="grid size-7 shrink-0 place-items-center rounded-md bg-primary/15 ring-1 ring-primary/30">
                <n.icon className="size-3.5 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-medium text-foreground">{n.label}</div>
                <div className="font-mono text-[10px] text-muted-foreground">{n.sub}</div>
              </div>
              <span className="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_8px_var(--success)]" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-3 border-t border-border/60 pt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        <span className="text-success">entropy ↓ 92%</span> · structure resolved
      </div>
    </div>
  );
}

/* ---------- Evidence Entropy ---------- */
function Entropy() {
  return (
    <Section id="entropy">
      <SectionHeader
        eyebrow="What is evidence entropy"
        title={<>Evidence doesn't disappear. <span className="text-gradient-primary">It becomes harder to understand.</span></>}
        sub="Evidence entropy occurs when messages, screenshots, recordings, PDFs, emails, exports, photos, and court records become fragmented across systems — until reconstructing events becomes slow, expensive, and increasingly difficult."
      />

      <div className="mt-14 grid grid-cols-12 gap-6 items-stretch">
        {/* Chaos */}
        <div className="col-span-12 md:col-span-6">
          <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-surface/30 p-6">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              <span>state.before</span>
              <span className="text-destructive">entropy: high</span>
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">Evidence chaos</h3>
            <p className="mt-1 text-sm text-muted-foreground">Thousands of disconnected files. No structure. No chronology. No citations.</p>

            <div className="relative mt-6 h-[280px]">
              {Array.from({ length: 42 }).map((_, i) => {
                const rot = ((i * 37) % 60) - 30;
                const x = (i * 53) % 88;
                const y = (i * 29) % 80;
                const w = 16 + ((i * 11) % 26);
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.7 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.015, duration: 0.4 }}
                    className="absolute rounded-sm border border-border/70 bg-background/40"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      width: `${w}%`,
                      height: `${5 + (i % 3) * 2}%`,
                      transform: `rotate(${rot}deg)`,
                    }}
                  />
                );
              })}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,transparent_40%,var(--background)_90%)]" />
            </div>

            <div className="mt-2 grid grid-cols-3 gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              <div>14,212 messages</div>
              <div>3,841 photos</div>
              <div>922 PDFs</div>
            </div>
          </div>
        </div>

        {/* Intelligence layer */}
        <div className="col-span-12 md:col-span-6">
          <div className="relative h-full overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-b from-surface/60 to-background/40 p-6 glow-primary">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              <span>state.after</span>
              <span className="text-success">entropy: resolved</span>
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">TruthTrace intelligence layer</h3>
            <p className="mt-1 text-sm text-muted-foreground">Structured, source-linked, attorney-reviewable.</p>

            <div className="mt-6 space-y-2.5">
              {[
                { icon: Hash, k: "EvidenceObjects", v: "Immutable, hashed identity" },
                { icon: ScrollText, k: "Timeline", v: "Deterministic chronology" },
                { icon: Quote, k: "Citations", v: "Every claim source-pointed" },
                { icon: FileCheck2, k: "Findings", v: "Evidence-constrained" },
                { icon: Package, k: "Exports", v: "Attorney-reviewable packets" },
              ].map((n, i) => (
                <motion.div
                  key={n.k}
                  initial={{ opacity: 0, x: 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex items-center gap-3 rounded-lg border border-border/70 bg-surface/50 px-3 py-2.5"
                >
                  <div className="grid size-8 shrink-0 place-items-center rounded-md bg-primary/15 ring-1 ring-primary/30">
                    <n.icon className="size-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-foreground">{n.k}</div>
                    <div className="font-mono text-[11px] text-muted-foreground">{n.v}</div>
                  </div>
                  <Check className="size-4 text-success" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- Why we built ---------- */
function WhyBuilt() {
  const groups = [
    { icon: UserRound, k: "Parents", v: "overwhelmed by years of communications." },
    { icon: Briefcase, k: "Attorneys", v: "reviewing massive evidence collections." },
    { icon: Microscope, k: "Evaluators", v: "reconstructing chronology from disconnected records." },
    { icon: Gavel, k: "Courts", v: "receiving evidence that is difficult to follow." },
  ];
  return (
    <Section id="why">
      <SectionHeader
        eyebrow="Why we built TruthTrace"
        title={<>The problem was never a lack of evidence. <span className="text-gradient-primary">The problem was structure.</span></>}
      />
      <div className="mt-12 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {groups.map((g, i) => (
            <motion.div
              key={g.k}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="rounded-xl border border-border bg-surface/40 p-5"
            >
              <div className="flex items-center gap-2.5">
                <div className="grid size-8 place-items-center rounded-md bg-primary/15 ring-1 ring-primary/30">
                  <g.icon className="size-4 text-primary" />
                </div>
                <div className="text-sm font-semibold tracking-tight">{g.k}</div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{g.v}</p>
            </motion.div>
          ))}
        </div>

        <div className="col-span-12 md:col-span-5">
          <div className="surface-panel rounded-2xl p-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Thesis</div>
            <div className="mt-3 space-y-3 text-[15px] leading-relaxed">
              <p className="text-foreground/90">The evidence existed.</p>
              <p className="text-muted-foreground">The structure did not.</p>
              <div className="my-4 h-px bg-border" />
              <p className="text-lg font-medium text-foreground">TruthTrace was built to create that structure.</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- Category ---------- */
function Category() {
  const isnt = [
    "A co-parenting application",
    "A document repository",
    "A chatbot",
    "Legal advice",
    "Attorney replacement software",
  ];
  return (
    <Section id="category">
      <SectionHeader
        align="center"
        eyebrow="A new category"
        title={<>Forensic <span className="text-gradient-primary">Evidence Intelligence</span></>}
        sub="TruthTrace transforms fragmented evidence into structured, source-linked, attorney-reviewable outputs. It is not advice. It is not storage. It is infrastructure for evidence."
      />

      <div className="mt-14 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6">
          <div className="rounded-2xl border border-border bg-surface/40 p-6">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              <X className="size-3.5 text-destructive" /> TruthTrace is not
            </div>
            <ul className="mt-5 divide-y divide-border">
              {isnt.map((x) => (
                <li key={x} className="flex items-center gap-3 py-3 text-sm">
                  <X className="size-4 text-destructive/80" />
                  <span className="text-muted-foreground line-through decoration-destructive/40">{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6">
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-b from-surface/60 to-background/40 p-6 glow-primary">
            <div className="pointer-events-none absolute inset-0 grid-bg radial-fade opacity-40" />
            <div className="relative">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                <Check className="size-3.5 text-success" /> TruthTrace is
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight md:text-[28px] leading-tight">
                A forensic evidence intelligence platform designed to transform fragmented evidence into structured, source-linked, attorney-reviewable outputs.
              </h3>
              <div className="mt-6 grid grid-cols-3 gap-2">
                {[
                  { icon: Hash, l: "Hashed" },
                  { icon: Network, l: "Linked" },
                  { icon: Lock, l: "Auditable" },
                ].map((b) => (
                  <div key={b.l} className="rounded-md border border-border/70 bg-background/40 p-3 text-center">
                    <b.icon className="mx-auto size-4 text-primary" />
                    <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{b.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- System ---------- */
function System() {
  const stages = [
    { icon: Layers, k: "Original Artifact", v: "Message, screenshot, PDF, email, export" },
    { icon: Hash, k: "EvidenceObject", v: "Immutable, SHA-256 identity" },
    { icon: GitBranch, k: "Normalization", v: "Schema-bound representation" },
    { icon: ScrollText, k: "Timeline", v: "Deterministic chronology" },
    { icon: Quote, k: "Citation Binding", v: "Source-pointer linked" },
    { icon: FileCheck2, k: "Finding", v: "Evidence-constrained conclusion" },
    { icon: Package, k: "Export Package", v: "Attorney-reviewable packet" },
  ];

  return (
    <Section id="system">
      <SectionHeader
        eyebrow="The TruthTrace system"
        title={<>How TruthTrace <span className="text-gradient-primary">works</span></>}
        sub="Every output remains connected to source material. Every finding remains traceable. Every export preserves provenance."
      />

      <div className="mt-12 grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-surface/40 to-background/30 p-6">
            <div className="pointer-events-none absolute inset-0 grid-bg radial-fade opacity-40" />
            <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent scan-line" />
            <div className="relative space-y-2.5">
              {stages.map((s, i) => (
                <div key={s.k}>
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.45 }}
                    className="flex items-center gap-3 rounded-lg border border-border/70 bg-surface/50 px-4 py-3"
                  >
                    <div className="grid size-8 shrink-0 place-items-center rounded-md bg-primary/15 ring-1 ring-primary/30">
                      <s.icon className="size-4 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-foreground">{s.k}</span>
                        <span className="font-mono text-[10px] text-muted-foreground">stage.{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <div className="font-mono text-[11px] text-muted-foreground">{s.v}</div>
                    </div>
                    <span className="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_8px_var(--success)]" />
                  </motion.div>
                  {i < stages.length - 1 && (
                    <div className="flex justify-center py-1.5">
                      <ArrowDown className="size-3.5 text-muted-foreground/70" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-4">
          {[
            { icon: ShieldCheck, k: "Source-linked", v: "Every output points back to its origin artifact." },
            { icon: Workflow, k: "Deterministic", v: "Same evidence in → same structure out, reproducibly." },
            { icon: Lock, k: "Provenance preserved", v: "Chain of custody is intact through export." },
          ].map((p) => (
            <div key={p.k} className="rounded-xl border border-border bg-surface/40 p-5">
              <div className="flex items-center gap-2.5">
                <div className="grid size-8 place-items-center rounded-md bg-primary/15 ring-1 ring-primary/30">
                  <p.icon className="size-4 text-primary" />
                </div>
                <div className="text-sm font-semibold">{p.k}</div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{p.v}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Principles ---------- */
function Principles() {
  const items = [
    { icon: FileSearch, k: "Source Before Summary", v: "We surface evidence first. Interpretation is always anchored to artifacts." },
    { icon: Workflow, k: "Structure Before Narrative", v: "Chronology and citations precede any claim about what occurred." },
    { icon: Eye, k: "Transparency Before Automation", v: "Every transformation is inspectable. Black boxes are unacceptable." },
    { icon: ShieldCheck, k: "Evidence Before Assumptions", v: "Findings are evidence-constrained — never inferred without source pointers." },
    { icon: Users, k: "Human Review Before Reliance", v: "TruthTrace assists professional judgment. It does not replace it." },
  ];
  return (
    <Section id="principles">
      <SectionHeader
        eyebrow="Our principles"
        title={<>Built around <span className="text-gradient-primary">evidence integrity</span></>}
      />
      <div className="mt-12 grid grid-cols-12 gap-4">
        {items.map((it, i) => (
          <motion.div
            key={it.k}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            className={`group relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 transition-all duration-300 hover:border-primary/40 hover:-translate-y-0.5 ${
              i < 2 ? "col-span-12 md:col-span-6" : i === 4 ? "col-span-12 md:col-span-4 md:col-start-5" : "col-span-12 md:col-span-4"
            }`}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_0%_0%,color-mix(in_oklab,var(--primary)_8%,transparent),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative">
              <div className="flex items-center gap-2">
                <div className="grid size-8 place-items-center rounded-md bg-primary/15 ring-1 ring-primary/30">
                  <it.icon className="size-4 text-primary" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Principle 0{i + 1}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{it.k}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.v}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Human Review ---------- */
function HumanReview() {
  const not = ["attorneys", "evaluators", "therapists", "judges"];
  return (
    <Section id="human-review">
      <div className="grid grid-cols-12 gap-10 items-center">
        <div className="col-span-12 md:col-span-6">
          <Eyebrow>Designed for human review</Eyebrow>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-[44px] md:leading-[1.05]">
            <span className="text-gradient">Technology assists.</span>
            <br />
            <span className="text-gradient-primary">People decide.</span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            TruthTrace exists to help professionals spend less time organizing evidence and more time evaluating it.
          </p>
          <div className="mt-6 surface-panel rounded-xl p-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">TruthTrace does not replace</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {not.map((r) => (
                <span key={r} className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-foreground/90">
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-6">
            <div className="pointer-events-none absolute inset-0 grid-bg radial-fade opacity-40" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-background/50 p-4">
                <Compass className="size-4 text-primary" />
                <div className="mt-3 text-sm font-semibold">Less time organizing</div>
                <div className="mt-1 font-mono text-[10px] text-muted-foreground">ingest · normalize · index</div>
              </div>
              <div className="rounded-lg border border-primary/40 bg-primary/5 p-4">
                <Scale className="size-4 text-primary" />
                <div className="mt-3 text-sm font-semibold">More time evaluating</div>
                <div className="mt-1 font-mono text-[10px] text-muted-foreground">review · interpret · decide</div>
              </div>
              <div className="col-span-2 rounded-lg border border-border bg-background/50 p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">workflow split</div>
                <div className="mt-3 flex h-3 overflow-hidden rounded-full border border-border">
                  <div className="w-[28%] bg-primary/60" />
                  <div className="w-[72%] bg-success/50" />
                </div>
                <div className="mt-2 flex justify-between font-mono text-[10px] text-muted-foreground">
                  <span>Organize 28%</span>
                  <span>Evaluate 72%</span>
                </div>
                <div className="mt-2 font-mono text-[10px] text-muted-foreground">Modeled. Not a guarantee. Always under professional review.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- Who we serve ---------- */
function WhoWeServe() {
  const now = [
    { icon: UserRound, k: "Parents" },
    { icon: Briefcase, k: "Attorneys" },
    { icon: Microscope, k: "Evaluators" },
    { icon: ShieldCheck, k: "Guardians ad Litem" },
    { icon: Scale, k: "Family Law Professionals" },
  ];
  const future = [
    { icon: Search, k: "Investigations" },
    { icon: Building2, k: "Employment" },
    { icon: Lock, k: "Compliance" },
    { icon: Gavel, k: "Civil Litigation" },
  ];
  return (
    <Section id="who">
      <SectionHeader
        eyebrow="Who TruthTrace serves"
        title={<>Built for evidence-driven <span className="text-gradient-primary">professionals</span></>}
      />
      <div className="mt-12">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Today</div>
        <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-5">
          {now.map((a, i) => (
            <motion.div
              key={a.k}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
              className="rounded-xl border border-border bg-surface/40 p-4 transition-colors hover:border-primary/40"
            >
              <div className="grid size-8 place-items-center rounded-md bg-primary/15 ring-1 ring-primary/30">
                <a.icon className="size-4 text-primary" />
              </div>
              <div className="mt-3 text-sm font-medium">{a.k}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Future markets</div>
        <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4">
          {future.map((a, i) => (
            <motion.div
              key={a.k}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
              className="rounded-xl border border-dashed border-border bg-background/40 p-4"
            >
              <div className="flex items-center justify-between">
                <div className="grid size-8 place-items-center rounded-md bg-surface/60 ring-1 ring-border">
                  <a.icon className="size-4 text-accent" />
                </div>
                <span className="rounded-full border border-border bg-background px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                  Roadmap
                </span>
              </div>
              <div className="mt-3 text-sm font-medium">{a.k}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Future ---------- */
function Future() {
  return (
    <Section id="future">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-surface/60 to-background/30 p-10 md:p-16">
        <div className="pointer-events-none absolute inset-0 grid-bg radial-fade opacity-40" />
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--primary)_22%,transparent),transparent)] blur-2xl" />
        <div className="relative max-w-3xl">
          <Eyebrow>The future</Eyebrow>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-[48px] md:leading-[1.05]">
            <span className="text-gradient">The future of</span>{" "}
            <span className="text-gradient-primary">evidence review.</span>
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground md:text-base">
            <p>
              We believe the future is not built on larger repositories or more AI-generated content.
            </p>
            <p className="text-foreground">
              It is built on better evidence infrastructure.
            </p>
            <p>
              A future where evidence can be preserved, organized, understood, reviewed, and shared with greater transparency and less friction.
            </p>
            <p className="text-foreground">
              TruthTrace is building that future.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- Intellectual Property & Innovation ---------- */
function IntellectualProperty() {
  const pillars = [
    { icon: Fingerprint, label: "Evidence Identity" },
    { icon: Cpu, label: "Deterministic Processing" },
    { icon: GitBranch, label: "Timeline Normalization" },
    { icon: Quote, label: "Citation-Bound Outputs" },
    { icon: ShieldCheck, label: "Provenance & Custody" },
    { icon: Microscope, label: "Forensic Evidence Intelligence" },
  ];
  return (
    <Section id="ip">
      <SectionHeader
        eyebrow="Intellectual Property & Innovation"
        title={<>A proprietary foundation for <span className="text-gradient-primary">forensic evidence intelligence</span>.</>}
        sub="TruthTrace is developing proprietary technology across evidence identity, deterministic processing, timeline normalization, citation-bound outputs, and provenance."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-12">
        {/* Left: filings panel */}
        <div className="lg:col-span-7 relative overflow-hidden rounded-2xl border border-border bg-surface/30 p-7 md:p-9">
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.18]" />
          <div className="relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                <Lock className="size-3.5 text-primary" />
                <span>Patent Status</span>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary/90">Pending</div>
            </div>

            <h3 className="mt-5 text-balance text-2xl font-semibold tracking-tight md:text-[28px]">
              Patent applications have been filed covering aspects of the TruthTrace platform.
            </h3>
            <p className="mt-4 max-w-2xl text-pretty text-[15px] leading-relaxed text-muted-foreground">
              Our filings span the systems and methods that turn fragmented artifacts into immutable
              EvidenceObjects, normalize them into citation-bound timelines, and produce
              attorney-reviewable packets with verifiable provenance.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-border md:grid-cols-3">
              {pillars.map((p) => (
                <div key={p.label} className="flex items-center gap-2.5 bg-background/60 px-4 py-4">
                  <p.icon className="size-4 shrink-0 text-primary" />
                  <span className="text-[12px] font-medium tracking-tight text-foreground/90">{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: counsel panel */}
        <div className="lg:col-span-5 relative overflow-hidden rounded-2xl border border-border bg-background/40 p-7 md:p-9">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            <Scale className="size-3.5 text-primary" />
            <span>Intellectual Property Counsel</span>
          </div>

          <div className="mt-5 rounded-xl border border-border/80 bg-surface/30 p-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/80">Counsel of Record</div>
            <div className="mt-2 text-xl font-semibold tracking-tight">Finnegan</div>
            <div className="mt-1 text-[12px] text-muted-foreground">Intellectual property law</div>
          </div>

          <p className="mt-5 text-[14px] leading-relaxed text-muted-foreground">
            TruthTrace's intellectual property strategy and patent filings are being developed with the
            assistance of <span className="text-foreground">Finnegan</span>, one of the world's leading
            intellectual property law firms.
          </p>

          <div className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-lg bg-border text-center">
            {[
              { k: "Strategy", v: "Portfolio" },
              { k: "Filings", v: "Pending" },
              { k: "Scope", v: "Platform" },
            ].map((s) => (
              <div key={s.k} className="bg-background/60 px-3 py-3">
                <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">{s.k}</div>
                <div className="mt-1 text-[12px] font-medium tracking-tight text-foreground/90">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/80">
        Patent pending · No legal endorsement implied · Counsel relationship disclosed for transparency
      </p>
    </Section>
  );
}
function FinalCta() {
  return (
    <Section className="pb-28">
      <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-b from-surface/60 to-background/40 p-10 md:p-16 glow-primary">
        <div className="pointer-events-none absolute inset-0 grid-bg radial-fade opacity-40" />
        <div className="relative text-center max-w-3xl mx-auto">
          <Eyebrow>Get started</Eyebrow>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-[56px] md:leading-[1.02]">
            <span className="text-gradient">Transform evidence</span>{" "}
            <span className="text-gradient-primary">into clarity.</span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground md:text-base">
            TruthTrace reduces evidence entropy through deterministic processing, citation-bound findings, and attorney-reviewable outputs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button variant="hero" size="xl">Request Demo <ArrowRight /></Button>
            <Button variant="wire" size="xl" asChild>
              <Link to="/">Explore Platform</Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-10 md:flex-row md:items-center">
        <div className="flex items-center gap-2.5">
          <div className="grid h-6 w-6 place-items-center rounded-md bg-primary/15 ring-1 ring-primary/40">
            <div className="h-1.5 w-1.5 rounded-sm bg-primary shadow-[0_0_10px_var(--primary)]" />
          </div>
          <span className="text-sm font-semibold">TruthTrace</span>
          <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Forensic Evidence Intelligence</span>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          TruthTrace is evidence infrastructure. It does not provide legal advice.
        </div>
      </div>
    </footer>
  );
}
