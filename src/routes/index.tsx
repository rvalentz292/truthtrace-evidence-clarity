import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";
import { createPageHead } from "@/lib/site-metadata";

export const Route = createFileRoute("/")({
  head: () =>
    createPageHead({
      path: "/",
      title: "TruthTrace | Forensic Evidence Intelligence for Family Law",
      description:
        "TruthTrace preserves and organizes family-law evidence into source-linked timelines, reviewable findings, and controlled professional workflows.",
      ogTitle: "Turn evidence chaos into a timeline you can prove.",
      ogDescription:
        "Preserved sources, structured chronology, citation-aware review, and human-controlled evidence workflows.",
    }),
  component: HomePage,
});
