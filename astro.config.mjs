import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel';
import astroIcon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), astroIcon({
      include: {
        mdi: ["*"],
        'ri': ['*'],
        'simple-icons': ['*']
      }
    })
  ],
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    }
  }),
});