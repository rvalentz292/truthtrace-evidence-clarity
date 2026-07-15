import { createFileRoute } from "@tanstack/react-router";

import { LegalDocumentPage } from "@/components/site/LegalDocumentPage";
import { WEBSITE_TERMS } from "@/content/website-terms";
import { createPageHead } from "@/lib/site-metadata";

export const Route = createFileRoute("/terms")({
  head: () =>
    createPageHead({
      path: "/terms",
      title: "Website Terms of Use | TruthTrace",
      description:
        "Terms governing the browse-only public TruthTrace website, including its informational, no-intake, illustrative-content, and no-professional-advice boundaries.",
    }),
  component: TermsPage,
});

function TermsPage() {
  return <LegalDocumentPage document={WEBSITE_TERMS} eyebrow="Public Website Terms" />;
}
