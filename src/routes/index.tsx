import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";
import { createPageHead } from "@/lib/site-metadata";

export const Route = createFileRoute("/")({
  head: () =>
    createPageHead({
      path: "/",
      title: "TruthTrace | Forensic Evidence Intelligence for Family Law",
      description:
        "TruthTrace is being designed to turn fragmented family-law evidence into a structured chronology with visible links back to source material for professional review.",
    }),
  component: HomePage,
});
