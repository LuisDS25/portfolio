import { defineConfig } from "astro/config";
import react from '@astrojs/react';

export default defineConfig({
    integrations: [react()],
    site: "https://luisds25.github.io",
    base: "/portfolio/",
});
