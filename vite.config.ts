import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import kirby from 'vite-plugin-kirby'
import kirbyTemplateSugar from 'vite-plugin-kirby-template-sugar'

export default defineConfig(({ mode }) => ({
	root: 'site',

	base: mode === 'development' ? '/' : '/dist/',
	resolve: { alias: { '~': resolve(process.cwd(), './site') } },
	publicDir: false,

	css: { devSourcemap: true },

	build: {
		outDir: resolve(process.cwd(), 'public/dist'),
		emptyOutDir: true,
		rollupOptions: { input: resolve(process.cwd(), 'site/scripts/index.ts') },
	},

	plugins: [
		kirby({ watch: false }),
		kirbyTemplateSugar('**/*.kirby', { outDir: 'compiled' }),
	],
}))
