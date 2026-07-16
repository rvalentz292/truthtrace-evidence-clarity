type PageMetadata = {
  path: string;
  title: string;
  description: string;
};

export const APPROVED_SITE_ORIGIN = "https://truthtrace.ai";

function requireConfiguredSiteOrigin(): string {
  if (import.meta.env.VITE_SITE_URL?.trim() !== APPROVED_SITE_ORIGIN) {
    throw new Error(
      `VITE_SITE_URL must equal the approved publication origin ${APPROVED_SITE_ORIGIN}.`,
    );
  }

  return APPROVED_SITE_ORIGIN;
}

export function createPageHead({ path, title, description }: PageMetadata) {
  const origin = requireConfiguredSiteOrigin();
  const canonical = new URL(path, origin).toString();
  const socialImage = new URL("/og.png", origin).toString();

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "TruthTrace" },
      { property: "og:url", content: canonical },
      { property: "og:image", content: socialImage },
      { property: "og:image:width", content: "1731" },
      { property: "og:image:height", content: "909" },
      {
        property: "og:image:alt",
        content: "TruthTrace — source-linked evidence intelligence for family-law review",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: socialImage },
      {
        name: "twitter:image:alt",
        content: "TruthTrace — source-linked evidence intelligence for family-law review",
      },
    ],
    links: [{ rel: "canonical", href: canonical }],
  };
}
