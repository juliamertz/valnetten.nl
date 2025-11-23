import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://wwww.valnetten.nl",
  integrations: [
    mdx(),
    tailwind(),
    robotsTxt({
      host: "https://wwww.valnetten.nl",
    }),
    prefetch({
      
    }),
    solidJs(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  vite: {
    ssr: {
      external: ["@11ty/eleventy-img"],
    },
  },
});