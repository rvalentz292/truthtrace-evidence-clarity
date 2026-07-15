type PageMetadata = {
  path: string;
  title: string;
  description: string;
};

export const APPROVED_SITE_ORIGIN = "https://truth-trace-forge.lovable.app";

function normalizeConfiguredSiteOrigin(value: string | undefined): string {
  if (!value?.trim()) {
    throw new Error(`VITE_SITE_URL is required and must equal ${APPROVED_SITE_ORIGIN}.`);
  }

  let url: URL;
  try {
    url = new URL(value.trim());
  } catch {
    throw new Error(
      `VITE_SITE_URL must be a valid absolute HTTPS origin: ${APPROVED_SITE_ORIGIN}.`,
    );
  }

  if (
    url.protocol !== "https:" ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  ) {
    throw new Error(
      `VITE_SITE_URL must be an HTTPS origin without credentials, a path, query, or fragment: ${APPROVED_SITE_ORIGIN}.`,
    );
  }

  const normalizedOrigin = url.origin;
  if (normalizedOrigin !== APPROVED_SITE_ORIGIN) {
    throw new Error(
      `VITE_SITE_URL must equal the approved publication origin ${APPROVED_SITE_ORIGIN}.`,
    );
  }

  return normalizedOrigin;
}

export function createPageHead({ path, title, description }: PageMetadata) {
  const origin = normalizeConfiguredSiteOrigin(import.meta.env.VITE_SITE_URL);
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
        content: "TruthTrace — structured, source-linked clarity for family-law evidence review",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: socialImage },
      {
        name: "twitter:image:alt",
        content: "TruthTrace — structured, source-linked clarity for family-law evidence review",
      },
    ],
    links: [{ rel: "canonical", href: canonical }],
  };
}
