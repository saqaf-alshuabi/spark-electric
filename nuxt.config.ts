// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/image', '@nuxt/fonts'],
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ar',
        dir: 'rtl',
      },
    },
  },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
        indent: 2,
        semi: true,
        arrowParens: true,
        commaDangle: 'always-multiline',
      },
    },
  },
});
