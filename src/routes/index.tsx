import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TruthTrace | Forensic Evidence Intelligence" },
      {
        name: "description",
        content:
          "TruthTrace structures family-law evidence into source-linked timelines, findings, and attorney-reviewable packets.",
      },
      { property: "og:title", content: "TruthTrace | Forensic Evidence Intelligence" },
      {
        property: "og:description",
        content:
          "A calm, evidence-constrained layer between fragmented family-law records and professional review.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});
