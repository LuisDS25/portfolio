import { defineConfig } from "astro/config";
import github from "@astrojs/github";

export default defineConfig({
    integrations: [github()],
    site: "https://LuisDS25.github.io/portfolio",
    base: "/portfolio",
});
