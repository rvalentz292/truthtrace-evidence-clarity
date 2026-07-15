import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Fingerprint, GitBranch, Layers3, Quote, UserCheck } from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Eyebrow, Section, SectionHeader } from "@/components/site/Section";
import { createPageHead } from "@/lib/site-metadata";

export const Route = createFileRoute("/technology")({
  head: () =>
    createPageHead({
      path: "/technology",
      title: "Product Design Principles | TruthTrace",
      description:
        "A public overview of TruthTrace's source identity, visible provenance, citation, uncertainty, and professional-review design objectives.",
    }),
  component: TechnologyPage,
});

const differentiators = [
  {
    icon: Fingerprint,
    title: "Source Identity",
    body: "Design objective: keep source records distinguishable as information is arranged into a structured chronology.",
  },
  {
    icon: GitBranch,
    title: "Visible Provenance",
    body: "Design objective: keep source relationships visible so a reviewer can understand where displayed information came from.",
  },
  {
    icon: Layers3,
    title: "Review Continuity",
    body: "Design objective: make it possible to understand what changed as additional records are considered, without publishing proprietary processing detail.",
  },
  {
    icon: Quote,
    title: "Cited Observations",
    body: "Design objective: connect displayed observations to a source locator and excerpt rather than free-floating generated text.",
  },
  {
    icon: UserCheck,
    title: "Professional Judgment",
    body: "Boundary: attorneys, evaluators, courts, and other qualified professionals remain responsible for interpretation.",
  },
];

function TechnologyPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div aria-hidden className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="absolute left-1/2 top-0 h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--primary)_13%,transparent),transparent)] blur-3xl" />
      </div>
      <Nav />
      <main id="main-content" className="relative pt-14" tabIndex={-1}>
        <Section className="!pb-16 !pt-20 sm:!pb-24 sm:!pt-28">
          <div className="max-w-5xl">
            <Eyebrow>TruthTrace Technology</Eyebrow>
            <h1 className="mt-6 max-w-4xl text-balance text-[40px] font-semibold leading-[1.02] tracking-tight sm:text-[58px] lg:text-[72px]">
              Why TruthTrace <span className="text-gradient-primary">Is Different.</span>
            </h1>
            <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              This public overview describes intended product principles, not production guarantees,
              certifications, or a disclosure of proprietary implementation details.
            </p>
          </div>
        </Section>

        <section className="relative border-y border-border bg-surface/20">
          <Section>
            <SectionHeader
              eyebrow="Core Differentiation"
              title={
                <>
                  Designed around the traceability of the{" "}
                  <span className="text-gradient-primary">evidence record.</span>
                </>
              }
              sub="Each principle is an outcome-level design objective and remains subject to implementation, security, and professional validation."
            />
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
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                Evidence-Focused Technology
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                Built for traceable review.
              </h2>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="mt-1 size-5 shrink-0 text-success" />
              <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
                TruthTrace is being designed around source identity, visible provenance, cited
                observations, transparent limitations, and professional review.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/"
              hash="proof-chain"
              activeOptions={{ includeHash: true }}
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-primary/60 bg-primary/15 px-5 py-2.5 text-sm font-medium text-foreground hover:bg-primary/25"
            >
              View the representative workflow
            </Link>
            <Link
              to="/"
              hash="trust"
              activeOptions={{ includeHash: true }}
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground/85 hover:border-foreground/40"
            >
              Review public-site boundaries
            </Link>
          </div>
        </Section>
      </main>
    </div>
  );
}
