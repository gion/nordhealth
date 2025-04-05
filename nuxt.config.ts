// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/test-utils', '@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt'],
  ssr: false,
  devtools: { enabled: true },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.includes('-'),
    },
  },
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-11-01',
})
