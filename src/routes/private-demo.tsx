import { createFileRoute, Link } from "@tanstack/react-router";
import { FileCheck2, LockKeyhole, ShieldCheck } from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Eyebrow, Section } from "@/components/site/Section";
import { createPageHead } from "@/lib/site-metadata";

export const Route = createFileRoute("/private-demo")({
  head: () => {
    const head = createPageHead({
      path: "/private-demo",
      title: "Controlled Product Review | TruthTrace",
      description:
        "A static, illustrative TruthTrace product-review surface with no evidence intake, account, upload, or production processing connection.",
    });

    return {
      ...head,
      meta: [...head.meta, { name: "robots", content: "noindex, nofollow, noarchive" }],
    };
  },
  component: PrivateDemoPage,
});

function PrivateDemoPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div aria-hidden className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 grid-bg opacity-20" />
      </div>

      <Nav />

      <main id="main-content" className="relative pt-14" tabIndex={-1}>
        <div className="border-b border-primary/25 bg-primary/[0.07] px-5 py-3">
          <div className="mx-auto flex max-w-7xl items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/80">
            <LockKeyhole aria-hidden className="size-3.5 shrink-0 text-primary" />
            <strong className="font-medium text-foreground">Private Demo Environment</strong>
            <span className="text-border">·</span>
            <span>Not for public distribution</span>
          </div>
        </div>

        <Section className="!pb-16 !pt-20 sm:!pb-24 sm:!pt-28">
          <div className="mx-auto max-w-4xl">
            <Eyebrow>Controlled Product Review</Eyebrow>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Static product context, separated from production systems.
            </h1>
            <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              This is an illustrative, non-interactive review page. It does not accept evidence,
              case details, accounts, forms, or uploads and does not connect to TruthTrace AI or
              production evidence processing.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <article className="rounded-2xl border border-border bg-surface/30 p-6">
                <ShieldCheck aria-hidden className="size-5 text-primary" />
                <h2 className="mt-5 text-lg font-semibold">Browse-only boundary</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  No case intake, personal information collection, or visitor-tracking feature is
                  provided by this page.
                </p>
              </article>
              <article className="rounded-2xl border border-border bg-surface/30 p-6">
                <FileCheck2 aria-hidden className="size-5 text-primary" />
                <h2 className="mt-5 text-lg font-semibold">Illustrative content</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Nothing here is live product telemetry, legal advice, a custody recommendation, or
                  a representation of real family information.
                </p>
              </article>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-primary/60 bg-primary/15 px-5 py-2.5 text-sm font-medium text-foreground hover:bg-primary/25"
              >
                Return to homepage
              </Link>
              <Link
                to="/privacy"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground/85 hover:border-foreground/40"
              >
                Review privacy notice
              </Link>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
