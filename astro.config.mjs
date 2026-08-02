// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
  site: "https://enquire-guide.vercel.app/",
  build: {
    inlineStylesheets: "always",
  },
  integrations: [sitemap()],
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["noopener", "noreferrer"],
        },
      ],
    ],
  },
});
