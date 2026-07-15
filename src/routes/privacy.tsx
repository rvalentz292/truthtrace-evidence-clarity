import { createFileRoute } from "@tanstack/react-router";

import { LegalDocumentPage } from "@/components/site/LegalDocumentPage";
import { WEBSITE_PRIVACY } from "@/content/website-privacy";
import { createPageHead } from "@/lib/site-metadata";

export const Route = createFileRoute("/privacy")({
  head: () =>
    createPageHead({
      path: "/privacy",
      title: "Website Privacy Notice | TruthTrace",
      description:
        "How TruthTrace handles limited technical information on its browse-only public website, including its no-intake, no-account, and no-marketing-analytics posture.",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return <LegalDocumentPage document={WEBSITE_PRIVACY} eyebrow="Public Website Privacy" />;
}
