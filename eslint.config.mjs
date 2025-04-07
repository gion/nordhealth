import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([
  {
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  },
  {
    rules: {
      'vue/no-deprecated-slot-attribute': 'off',
      'vue/multi-word-component-names': 'off',
    },
  },
])
