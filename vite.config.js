// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		base: '/Air-quality-App/', // Base URL pour les ressources statiques
		sourcemap: true, // Générer des sourcemaps
		outDir: 'dist', // Répertoire de sortie pour la construction
		assetsDir: 'assets', // Répertoire des ressources statiques
	},
});


