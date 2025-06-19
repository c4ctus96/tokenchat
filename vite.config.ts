import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/tokenchat/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('@walletconnect')) {
              return 'walletconnect';
            }
            if (id.includes('wagmi') || id.includes('@web3modal')) {
              return 'web3';
            }
            if (id.includes('react')) {
              return 'react';
            }
            return 'vendor';
          }
        }
      }
    },
    sourcemap: true
  },
});
