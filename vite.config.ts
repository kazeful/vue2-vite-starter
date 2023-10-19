import { URL, fileURLToPath } from 'node:url'

import { defineConfig, splitVendorChunkPlugin } from 'vite'
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import Vue from '@vitejs/plugin-vue2'
import VueJsx from '@vitejs/plugin-vue2-jsx'
import Legacy from '@vitejs/plugin-legacy'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    splitVendorChunkPlugin(),

    ReactivityTransform(),

    VueMacros({
      // version: 2,
      plugins: {
        vue: Vue({
          include: [/\.vue$/, /\.setup\.[cm]?[jt]sx?$/],
        }),
        vueJsx: VueJsx(),
      },
    }),

    Legacy({
      targets: ['ie >= 9'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
      ],
      dts: true,
      dirs: [
        './src/composables',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: true,
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),
  ],
})
