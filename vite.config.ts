import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Usa il percorso dell'API come chiave
      "/v1": {
        // Target dell'API
        target: "https://ecommerce.gelatoapis.com",
        changeOrigin: true, // Necessario per evitare problemi di CORS
        // Opzionale: riscrive l'URL del percorso se necessario
        // rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
});
