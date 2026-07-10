import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Fingerprint, GitBranch, Layers3, Quote, UserCheck } from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Eyebrow, Section, SectionHeader } from "@/components/site/Section";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology | TruthTrace" },
      { name: "description", content: "Why TruthTrace is different: evidence identity, provenance, incremental processing, citation-bound outputs, and professional review." },
      { property: "og:title", content: "TruthTrace Evidence Technology" },
      { property: "og:description", content: "Evidence infrastructure designed for integrity, efficiency, and professional review." },
    ],
  }),
  component: TechnologyPage,
});

const differentiators = [
  { icon: Fingerprint, title: "Evidence Identity", body: "Every record remains distinguishable and reviewable as evidence moves from fragmented source material into a structured record." },
  { icon: GitBranch, title: "Provenance", body: "Source relationships remain visible so professionals can understand where information came from and evaluate it in context." },
  { icon: Layers3, title: "Incremental Processing", body: "Validated work can be reused as new evidence arrives, reducing unnecessary reprocessing and preserving continuity across review cycles." },
  { icon: Quote, title: "Citation-Bound Outputs", body: "Findings remain connected to supporting records, helping reviewers move from an observation back to its source." },
  { icon: UserCheck, title: "Professional Review", body: "Outputs are designed to support qualified judgment—not replace attorneys, evaluators, courts, or other professionals." },
];

function TechnologyPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div aria-hidden className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="absolute left-1/2 top-0 h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--primary)_13%,transparent),transparent)] blur-3xl" />
      </div>
      <Nav />
      <main className="relative pt-14">
        <Section className="!pb-16 !pt-20 sm:!pb-24 sm:!pt-28">
          <div className="max-w-5xl">
            <Eyebrow>TruthTrace Technology</Eyebrow>
            <h1 className="mt-6 max-w-4xl text-balance text-[40px] font-semibold leading-[1.02] tracking-tight sm:text-[58px] lg:text-[72px]">
              Why TruthTrace <span className="text-gradient-primary">Is Different.</span>
            </h1>
            <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Evidence infrastructure designed to preserve integrity, reduce repeated work, and make complex records easier for qualified professionals to review.
            </p>
          </div>
        </Section>

        <section className="relative border-y border-border bg-surface/20">
          <Section>
            <SectionHeader eyebrow="Core Differentiation" title={<>Built around the integrity of the <span className="text-gradient-primary">evidence record.</span></>} />
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-5">
              {differentiators.map((item) => (
                <article key={item.title} className="min-h-64 bg-background p-6 lg:min-h-80">
                  <item.icon className="size-5 text-primary" />
                  <h2 className="mt-8 text-lg font-semibold tracking-tight">{item.title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </article>
              ))}
            </div>
          </Section>
        </section>

        <Section>
          <div className="grid gap-8 border-y border-border py-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">Evidence-Focused Technology</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">Built for defensible review.</h2>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="mt-1 size-5 shrink-0 text-success" />
              <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
                TruthTrace uses an architecture focused on evidence identity, provenance, consistent processing, and source-linked outputs.
              </p>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
