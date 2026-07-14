import { createFileRoute, Link } from "@tanstack/react-router";
import { Fingerprint, Quote, Scale, UserCheck } from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Eyebrow, Section, SectionHeader } from "@/components/site/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | TruthTrace" },
      {
        name: "description",
        content:
          "TruthTrace is building forensic evidence intelligence for family law around source traceability, human review, and trauma-aware restraint.",
      },
      { property: "og:title", content: "About TruthTrace" },
      {
        property: "og:description",
        content: "Evidence infrastructure for reviewable, source-linked family-law records.",
      },
    ],
  }),
  component: AboutPage,
});

const principles = [
  {
    icon: Fingerprint,
    title: "Evidence before inference",
    body: "Keep the original record distinguishable from every transcript, extraction, event, finding, and export built around it.",
  },
  {
    icon: Quote,
    title: "Source before summary",
    body: "A reviewer should be able to move from a statement to its citation, excerpt, locator, and evidence identity without guesswork.",
  },
  {
    icon: UserCheck,
    title: "Judgment stays human",
    body: "TruthTrace is designed to support qualified review, not to decide credibility, intent, legal significance, or custody outcomes.",
  },
];

function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div aria-hidden className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="absolute left-1/2 top-0 h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--primary)_12%,transparent),transparent)] blur-3xl" />
      </div>

      <Nav />
      <main id="main-content" className="relative pt-14" tabIndex={-1}>
        <Section className="!pb-16 !pt-20 sm:!pb-24 sm:!pt-28">
          <div className="max-w-5xl">
            <Eyebrow>About TruthTrace</Eyebrow>
            <h1 className="mt-6 max-w-4xl text-balance text-[40px] font-semibold leading-[1.02] tracking-tight sm:text-[58px] lg:text-[72px]">
              Evidence deserves context.{" "}
              <span className="text-gradient-primary">People deserve restraint.</span>
            </h1>
            <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              TruthTrace is building Forensic Evidence Intelligence for Family Law: an evidence
              layer between fragmented case materials and the attorneys, evaluators, and other
              qualified professionals who must review them.
            </p>
          </div>
        </Section>

        <section className="relative border-y border-border bg-surface/20">
          <Section>
            <SectionHeader
              eyebrow="Operating Principle"
              title={
                <>
                  No citation, <span className="text-gradient-primary">no claim.</span>
                </>
              }
              sub="Traceability is the product thesis. Findings should remain connected to exact sources, and uncertainty should remain visible to the person reviewing the record."
            />

            <div className="mt-10 grid overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
              {principles.map((principle) => (
                <article key={principle.title} className="bg-background p-6">
                  <principle.icon aria-hidden className="size-5 text-primary" />
                  <h2 className="mt-6 text-lg font-semibold tracking-tight">{principle.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {principle.body}
                  </p>
                </article>
              ))}
            </div>
          </Section>
        </section>

        <Section>
          <div className="grid gap-8 rounded-2xl border border-border bg-background/60 p-6 sm:p-8 lg:grid-cols-[auto_1fr] lg:gap-12">
            <Scale aria-hidden className="size-6 text-primary" />
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">A clear system boundary.</h2>
              <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                TruthTrace does not provide legal advice, diagnose individuals, determine
                credibility or intent, recommend custody outcomes, or replace qualified professional
                judgment.
              </p>
              <p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                The product is currently operating in controlled pilot. Representative interfaces
                and datasets on this website are illustrative and are not customer results or live
                case data.
              </p>
              <Link
                to="/"
                hash="pilot"
                className="mt-7 inline-flex min-h-11 items-center justify-center rounded-md border border-primary/60 bg-primary/15 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Request Controlled Pilot Access
              </Link>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
