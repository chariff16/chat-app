import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath, URL } from "url";

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [
    vue(),
    tailwindcss(),
  ],
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
    strictPort: true,
  },
  envPrefix: "APP_",
})
