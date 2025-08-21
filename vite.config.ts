import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import eslintPlugin from "vite-plugin-eslint2";
import { VitePWA } from "vite-plugin-pwa";
import compression from "vite-plugin-compression";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import CleanBuild from "vite-plugin-clean-build";
import AppLoading from "vite-plugin-app-loading";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  optimizeDeps: {
    include: ["lodash-es"],
  },
  plugins: [
    svelte(),
    eslintPlugin(),
    VitePWA({}),
    command === "build" && compression(),
    ViteImageOptimizer(),
    CleanBuild(),
    AppLoading(),
    tailwindcss(),
  ],
}));
