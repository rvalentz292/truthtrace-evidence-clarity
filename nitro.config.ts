import { defineConfig } from "nitro";

export default defineConfig({
  compatibilityDate: "2026-07-15",
  cloudflare: {
    wrangler: {
      compatibility_date: "2026-07-15",
    },
  },
});
