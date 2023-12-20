import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/": "/docs/utilities/getting-started",
    "/docs": "/docs/utilities/getting-started",
  },
  integrations: [tailwind()],
});
