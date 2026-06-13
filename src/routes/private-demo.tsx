import { createFileRoute } from "@tanstack/react-router";
import { FileCheck2, Fingerprint, LockKeyhole, Quote, ShieldCheck } from "lucide-react";

import { Workspace } from "@/components/site/Workspace";
import { Section, SectionHeader } from "@/components/site/Section";

export const Route = createFileRoute("/private-demo")({
  head: () => ({
    meta: [
      { title: "Private Demo | TruthTrace" },
      { name: "description", content: "Controlled TruthTrace product demonstration environment." },
      { name: "robots", content: "noindex, nofollow, noarchive" },
    ],
  }),
  component: PrivateDemo,
});

const proofPoints = [
  { icon: Fingerprint, title: "Evidence identity", body: "Source identity and provenance remain available for controlled review." },
  { icon: Quote, title: "Citation registry", body: "Findings remain bound to reviewable source excerpts and records." },
  { icon: ShieldCheck, title: "Evidence inspector", body: "Review evidence context, source relationships, and status in one surface." },
  { icon: FileCheck2, title: "Packet preview", body: "Preview structured materials prepared for attorney and professional review." },
];

function PrivateDemo() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div aria-hidden className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 grid-bg opacity-25" />
      </div>
      <main className="relative">
        <div className="border-b border-primary/25 bg-primary/[0.07] px-5 py-3">
          <div className="mx-auto flex max-w-7xl items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/80">
            <LockKeyhole className="size-3.5 shrink-0 text-primary" />
            Private demo environment. Not for public distribution.
          </div>
        </div>

        <Section className="!pb-12 !pt-14 sm:!pt-20">
          <SectionHeader
            eyebrow="Controlled Product Review"
            title={<>TruthTrace <span className="text-gradient-primary">workspace demonstration</span></>}
            sub="Illustrative product proof for professional, pilot, investor, strategic-partner, and IP-review contexts. Content shown here is not case data and does not provide legal advice or custody recommendations."
          />
        </Section>

        <section className="relative mx-auto max-w-[1520px] px-4 pb-16 sm:px-6 lg:px-8">
          <Workspace />
        </section>

        <Section className="!pt-4">
          <SectionHeader eyebrow="Review Surfaces" title="Controlled proof, separated from public positioning." />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {proofPoints.map((item) => (
              <article key={item.title} className="min-h-52 rounded-xl border border-border bg-surface/40 p-6">
                <item.icon className="size-5 text-primary" />
                <h2 className="mt-6 text-lg font-semibold tracking-tight">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}