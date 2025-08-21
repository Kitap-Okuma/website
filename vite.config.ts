import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import eslintPlugin from "vite-plugin-eslint2";
import { VitePWA } from "vite-plugin-pwa";
import viteCompression from "vite-plugin-compression";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import CleanBuild from "vite-plugin-clean-build";
import AppLoading from "vite-plugin-app-loading";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import nitro from "vite-plugin-with-nitro";
import { fileURLToPath } from "node:url";
// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  optimizeDeps: {
    include: ["lodash-es"],
  },
  plugins: [
    svelte(),
    eslintPlugin(),
    VitePWA({}),
    command === "build" && viteCompression.default(),
    ViteImageOptimizer(),
    CleanBuild(),
    AppLoading(),
    tailwindcss(),
    nitro(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "src"),
    },
  },
}));
