import postcssGlobalData from '@csstools/postcss-global-data'
import postcssFluid from '@lehoczky/postcss-fluid'
import { resolve } from 'node:path'
import postcssCustomMedia from 'postcss-custom-media'
import postcssNesting from 'postcss-nesting'
import { defineConfig, Plugin } from 'vite'
import kirby from 'vite-plugin-kirby'
import templateSugar from 'vite-plugin-kirby-template-sugar'
import type { Plugin as PostcssPlugin } from 'postcss'

// Inject CSS layers into each file to ensure correct order during development.
const postcssLayers = (): PostcssPlugin => ({
  postcssPlugin: 'layers',
  Once(root) {
    root.prepend('@layer reset, default, component, override;')
  },
})

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
        postcssGlobalData({ files: ['site/styles/media.css'] }),
        postcssFluid({ min: '640px', max: '1024px' }),
        postcssCustomMedia(),
        postcssNesting(),
        postcssLayers(),
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
