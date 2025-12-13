import { defineConfig } from "astro/config";
import github from "@astrojs/github";

export default defineConfig({
    site: "https://luisds25.github.io",
    base: "/portfolio",
    integrations: [github()],
});
