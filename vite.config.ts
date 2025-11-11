import postcssGlobalData from '@csstools/postcss-global-data'
import postcssFluid from '@lehoczky/postcss-fluid'
import { resolve } from 'node:path'
import postcssCustomMedia from 'postcss-custom-media'
import postcssNesting from 'postcss-nesting'
import { defineConfig } from 'vite'
import kirby from 'vite-plugin-kirby'
import templateSugar from 'vite-plugin-kirby-template-sugar'

export default defineConfig(({ mode }) => ({
  root: 'site',

  base: mode === 'development' ? '/' : '/dist/',
  resolve: { alias: { '~': resolve(process.cwd(), './site') } },
  publicDir: false,

  server: {
    cors: { origin: 'https://kirby-kit.ddev.site' },
  },

  css: {
    devSourcemap: true,
    postcss: {
      plugins: [
        postcssGlobalData({
          files: ['site/styles/media.css', 'site/styles/layers.css'],
        }),
        postcssCustomMedia(),
        postcssNesting(),
        postcssFluid(),
      ],
    },
  },

  build: {
    outDir: resolve(process.cwd(), 'public/dist'),
    emptyOutDir: true,
    rollupOptions: { input: resolve(process.cwd(), 'site/scripts/index.ts') },
  },

  plugins: [
    kirby({ watch: false }),
    templateSugar('**/*.kirby', { outDir: 'compiled' }),
  ],
}))
