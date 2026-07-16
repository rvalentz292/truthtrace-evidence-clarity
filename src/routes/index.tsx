import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";
import { createPageHead } from "@/lib/site-metadata";

export const Route = createFileRoute("/")({
  head: () =>
    createPageHead({
      path: "/",
      title: "TruthTrace | Source-Linked Evidence Intelligence for Family Law",
      description:
        "TruthTrace helps parents and family-law professionals organize fragmented records into structured chronologies with citations back to exact source locations for human review.",
    }),
  component: HomePage,
});
