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

  css: {
    devSourcemap: true,
    postcss: {
      plugins: [postcssNesting(), postcssCustomMedia(), postcssFluid()],
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
