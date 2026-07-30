// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/image', '@nuxt/fonts', '@vueuse/nuxt'],
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ar',
        dir: 'rtl',
      },
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/logos/favicon-32.png?v=2' },
        { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/logos/favicon-48.png?v=2' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/logos/favicon-192.png?v=2' },
        { rel: 'icon', type: 'image/svg+xml', href: '/logos/logo.svg?v=2' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/logos/apple-touch-icon.png?v=2' },
        { rel: 'shortcut icon', href: '/favicon.ico?v=2' },
      ],
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
  fonts: {
    families: [{
      name: 'Lateef',
      provider: 'google',
      subsets: ['arabic'],
    }],
  },
});
