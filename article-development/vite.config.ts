import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  // ホットリロード
  server: {
    watch: { usePolling: true },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // ビルド時の各ファイルのサイズ制限(かな?)
  build: {
    chunkSizeWarningLimit: 1000,
  },
});
