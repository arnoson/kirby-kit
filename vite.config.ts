import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import kirby from 'vite-plugin-kirby'

export default defineConfig(({ mode }) => ({
	base: mode === 'development' ? '/' : '/dist/',
	resolve: { alias: { '@': resolve(__dirname, './site') } },
	publicDir: false,

	css: { devSourcemap: true },

	build: {
		outDir: resolve(process.cwd(), 'public/dist'),
		emptyOutDir: true,
		rollupOptions: { input: resolve(process.cwd(), 'site/scripts/index.ts') },
	},

	plugins: [kirby({ watch: ['./site/**/*.php'] })],
}))
