import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [viteReact()],
  resolve: {
    alias: {
      "@client": "/apps/client",
      "@server": "/apps/server",
    },
  },
});
