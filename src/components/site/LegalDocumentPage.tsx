import { Link } from "@tanstack/react-router";

import type { WebsiteLegalDocument } from "@/content/website-legal";
import { Nav } from "@/components/site/Nav";
import { Eyebrow, Section } from "@/components/site/Section";

interface LegalDocumentPageProps {
  document: WebsiteLegalDocument;
  eyebrow: string;
}

export function LegalDocumentPage({ document, eyebrow }: LegalDocumentPageProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div aria-hidden className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute left-1/2 top-0 h-[540px] w-[880px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--primary)_11%,transparent),transparent)] blur-3xl" />
      </div>

      <Nav />

      <main id="main-content" className="relative pt-14" tabIndex={-1}>
        <Section className="!pb-16 !pt-20 sm:!pb-24 sm:!pt-28">
          <article className="mx-auto max-w-4xl">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              {document.title}
            </h1>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Effective Date: {document.effectiveDate}
            </p>

            <div className="mt-10 rounded-2xl border border-primary/25 bg-primary/5 p-6 sm:p-8">
              {document.introduction.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-4 text-base leading-relaxed text-foreground/90 first:mt-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 space-y-12">
              {document.sections.map((section) => (
                <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`}>
                  <h2
                    id={`${section.id}-title`}
                    className="text-2xl font-semibold tracking-tight text-foreground"
                  >
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
                    {section.blocks.map((block) => {
                      if (block.type === "list") {
                        return (
                          <ul
                            key={block.id}
                            className="ml-5 list-disc space-y-2 marker:text-primary"
                          >
                            {block.items.map((item) => (
                              <li key={item} className="pl-1">
                                {item}
                              </li>
                            ))}
                          </ul>
                        );
                      }

                      if (block.type === "url") {
                        return (
                          <p key={block.id}>
                            <a
                              href={block.href}
                              className="font-medium text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
                            >
                              {block.label}
                            </a>
                          </p>
                        );
                      }

                      return <p key={block.id}>{block.text}</p>;
                    })}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-14 flex flex-wrap gap-3 border-t border-border pt-8">
              <Link
                to="/"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground/85 hover:border-foreground/40"
              >
                Return to homepage
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-primary/60 bg-primary/15 px-5 py-2.5 text-sm font-medium text-foreground hover:bg-primary/25"
              >
                Review the contact boundary
              </Link>
            </div>
          </article>
        </Section>
      </main>
    </div>
  );
}
