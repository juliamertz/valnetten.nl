import { defineConfig } from "astro/config";

import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap(), robotsTxt(), prefetch()],
  vite: {
    ssr: {
      external: ["@11ty/eleventy-img"],
    },
  },
});
