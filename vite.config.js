// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // Autres options de configuration ici

  build: {
    sourcemap: true, // Générer des sourcemaps
    minify: 'terser', // Minification du code avec Terser
  },
});
