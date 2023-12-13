// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
	base: '/Air-quality-App/', // Ajoutez cette ligne
	build: {
		sourcemap: true,
		outDir: 'dist',
		assetsDir: 'assets',
	},
});
