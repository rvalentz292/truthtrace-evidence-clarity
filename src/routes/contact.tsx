import { createFileRoute, Link } from "@tanstack/react-router";

import { Nav } from "@/components/site/Nav";
import { Eyebrow, Section } from "@/components/site/Section";
import { createPageHead } from "@/lib/site-metadata";

export const Route = createFileRoute("/contact")({
  head: () =>
    createPageHead({
      path: "/contact",
      title: "Contact Boundary | TruthTrace",
      description:
        "TruthTrace's temporary browse-only contact boundary, with no form, evidence upload, case intake, or collection of family information.",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div aria-hidden className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute left-1/2 top-0 h-[540px] w-[880px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--primary)_11%,transparent),transparent)] blur-3xl" />
      </div>

      <Nav />

      <main id="main-content" className="relative pt-14" tabIndex={-1}>
        <Section className="!pb-16 !pt-20 sm:!pb-24 sm:!pt-28">
          <div className="mx-auto max-w-4xl">
            <Eyebrow>Public Website Boundary</Eyebrow>
            <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Contact information will follow verified approvals.
            </h1>

            <aside
              className="mt-10 rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:p-8"
              aria-label="Temporary contact policy"
            >
              <p className="text-base leading-relaxed text-foreground/90 sm:text-lg">
                TruthTrace is currently operating this website as a public informational experience.
                Do not submit case details, evidence, confidential family information, or
                child-related records through this website. A verified contact channel will be
                published after the required privacy and operational approvals are complete.
              </p>
            </aside>

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
              <Link
                to="/terms"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground/85 hover:border-foreground/40"
              >
                Review website terms
              </Link>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
