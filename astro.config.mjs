import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import db from "@astrojs/db";

// Astro OpenAPI integrations
import openapiBackend from "@astro-openapi/backend";
import openapiTypegen from "@astro-openapi/typegen";
import openapiBundler from "@astro-openapi/bundler";
import openapiClient from "@astro-openapi/client";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), db(), openapiBackend(), openapiTypegen(), openapiBundler(), openapiClient(), react()],
  vite: {
    optimizeDeps: {
      exclude: ["oslo", "astro:db"]
    }
  }
});