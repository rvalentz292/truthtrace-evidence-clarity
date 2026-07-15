import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage, renderGonePage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

const APPROVED_CANONICAL_HOST = "truthtrace.ai";
const EXCLUDED_FAMILY_LAW_HOSTS = new Set(["truthtrace.app", "www.truthtrace.app"]);
const LOCAL_TEST_HOSTS = new Set(["127.0.0.1", "localhost"]);

const PUBLIC_SECURITY_HEADERS = {
  "cross-origin-opener-policy": "same-origin",
  "permissions-policy": "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  "referrer-policy": "strict-origin-when-cross-origin",
  "x-content-type-options": "nosniff",
  "x-frame-options": "DENY",
} as const;

function withPublicSecurityHeaders(response: Response): Response {
  const headers = new Headers(response.headers);
  for (const [name, value] of Object.entries(PUBLIC_SECURITY_HEADERS)) {
    if (!headers.has(name)) headers.set(name, value);
  }
  if (response.status >= 400 && !headers.has("x-robots-tag")) {
    headers.set("x-robots-tag", "noindex, nofollow, noarchive");
  }
  if (response.status >= 500) {
    headers.set("cache-control", "no-store");
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

function publicationHostResponse(request: Request): Response | undefined {
  const url = new URL(request.url);
  const hostname = url.hostname.toLowerCase().replace(/\.$/, "");

  if (EXCLUDED_FAMILY_LAW_HOSTS.has(hostname)) {
    return new Response("Misdirected Request", {
      status: 421,
      headers: {
        "cache-control": "no-store",
        "content-type": "text/plain; charset=utf-8",
      },
    });
  }

  if (hostname !== `www.${APPROVED_CANONICAL_HOST}`) return undefined;

  url.protocol = "https:";
  url.hostname = APPROVED_CANONICAL_HOST;
  url.port = "";

  return new Response(null, {
    status: 308,
    headers: {
      "cache-control": "public, max-age=3600",
      location: url.toString(),
    },
  });
}

function unauthorizedHostResponse(request: Request): Response | undefined {
  const hostname = new URL(request.url).hostname.toLowerCase().replace(/\.$/, "");
  if (hostname === APPROVED_CANONICAL_HOST || LOCAL_TEST_HOSTS.has(hostname)) return undefined;

  return new Response("Misdirected Request", {
    status: 421,
    headers: {
      "cache-control": "no-store",
      "content-type": "text/plain; charset=utf-8",
    },
  });
}

function retiredRouteResponse(request: Request): Response | undefined {
  const pathname = new URL(request.url).pathname.replace(/\/+$/, "") || "/";
  if (pathname !== "/private-demo") return undefined;

  return new Response(renderGonePage(), {
    status: 410,
    headers: {
      "cache-control": "no-store",
      "content-type": "text/html; charset=utf-8",
    },
  });
}

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const hostResponse = publicationHostResponse(request);
      if (hostResponse) return withPublicSecurityHeaders(hostResponse);
      const unauthorizedResponse = unauthorizedHostResponse(request);
      if (unauthorizedResponse) return withPublicSecurityHeaders(unauthorizedResponse);
      const retiredResponse = retiredRouteResponse(request);
      if (retiredResponse) return withPublicSecurityHeaders(retiredResponse);

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return withPublicSecurityHeaders(await normalizeCatastrophicSsrResponse(response));
    } catch (error) {
      console.error(error);
      return withPublicSecurityHeaders(
        new Response(renderErrorPage(), {
          status: 500,
          headers: { "content-type": "text/html; charset=utf-8" },
        }),
      );
    }
  },
};
