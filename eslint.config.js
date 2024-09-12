// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  // TypeScript and Vue are auto-detected, you can also explicitly enable them:
  typescript: true,
  vue: {
    vueVersion: 2,
    overrides: {
      'vue/block-order': ['error', {
        order: [['script', 'template'], 'style'],
      }],
      'vue/custom-event-name-casing': ['error', 'kebab-case'],
      'vue/no-unused-refs': 'warn',
      'no-console': 'warn',
    },
  },

  // Disable jsonc and yaml support
  // jsonc: false,
  yaml: false,
  // toml: false,

  unocss: true,
})
