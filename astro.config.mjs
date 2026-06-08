// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://riky-dev.github.io/enquire",
  build: {
    inlineStylesheets: "always",
  },
  integrations: [sitemap()],
});
