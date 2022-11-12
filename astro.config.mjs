import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://valnetten-nl.vercel.app",
  integrations: [mdx(), sitemap(), robotsTxt(), prefetch(), solidJs()],
  vite: {
    ssr: {
      external: ["@11ty/eleventy-img"]
    }
  }
});