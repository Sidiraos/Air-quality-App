// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		base: ['/Air-quality-App/'],
		sourcemap: true, // Générer des sourcemaps
		outDir: 'dist', // Répertoire de sortie pour la construction
		assetsDir: 'assets', // Répertoire des ressources statiques
	},
});


