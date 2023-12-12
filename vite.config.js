// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
	// Autres options de configuration ici
	build: {
		base: ['air-quality-app'],
		sourcemap: true, // Générer des sourcemaps
	},
});
