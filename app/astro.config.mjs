import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import relativeLinks from "astro-relative-links";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      locales: {
        root: {
          label: "日本語",
          lang: "ja",
        },
      },
      title: "Ftscomjp Design System",
      social: {
        github: "https://github.com/ftsmasaki/ftscomjp-design-system",
      },
      sidebar: [
        {
          label: "はじめに",
          autogenerate: {
            directory: "introduction",
          },
        },
        {
          label: "基本要素",
          autogenerate: {
            directory: "basics",
          },
        },
        {
          label: "デザイントークン",
          autogenerate: {
            directory: "design_token",
          },
        },
      ],
    }),
    relativeLinks(),
  ],
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
