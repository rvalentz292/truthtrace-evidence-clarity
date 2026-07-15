type PageMetadata = {
  path: string;
  title: string;
  description: string;
};

function configuredSiteOrigin(): string | undefined {
  const value = import.meta.env.VITE_SITE_URL?.trim();
  if (!value) return undefined;

  try {
    const url = new URL(value);
    if (url.protocol !== "https:" || url.username || url.password) return undefined;
    return url.origin;
  } catch {
    return undefined;
  }
}

export function createPageHead({ path, title, description }: PageMetadata) {
  const origin = configuredSiteOrigin();
  const canonical = origin ? new URL(path, origin).toString() : undefined;
  const socialImage = origin ? new URL("/og.png", origin).toString() : undefined;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      ...(canonical ? [{ property: "og:url", content: canonical }] : []),
      ...(socialImage
        ? [
            { property: "og:image", content: socialImage },
            { property: "og:image:width", content: "1731" },
            { property: "og:image:height", content: "909" },
            {
              property: "og:image:alt",
              content:
                "TruthTrace — structured, source-linked clarity for family-law evidence review",
            },
          ]
        : []),
      { name: "twitter:card", content: socialImage ? "summary_large_image" : "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      ...(socialImage ? [{ name: "twitter:image", content: socialImage }] : []),
    ],
    links: canonical ? [{ rel: "canonical", href: canonical }] : [],
  };
}
