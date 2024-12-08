import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [viteReact()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    alias: {
      "@client": "/apps/client",
      "@server": "/apps/server",
    },
  },
});
