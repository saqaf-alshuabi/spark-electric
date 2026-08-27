// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/fonts',
    '@vueuse/nuxt',
    '@nuxt/hints',
    '@nuxtjs/seo',
  ],
  devtools: {
    enabled: false,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ar',
        dir: 'rtl',
        class: 'dark',
      },
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/images/logos/favicon.svg?v=4' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/logos/favicon-32.png?v=4' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/logos/apple-touch-icon.png?v=4' },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    name: 'أبو تيم الكهربائي',
    description: 'كهربائي في مكة وضواحيها، تأسيس وإنارة وتكييف للبيت والمحل، ونجي إذا صار عطل',
    defaultLocale: 'ar',
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: '',
    storageKey: 'spark-theme',
  },
  experimental: {
    viewTransition: true,
  },
  compatibilityDate: '2026-08-19',
  // Allow Cloudflare quick tunnels (preview links change each run)
  vite: {
    server: {
      allowedHosts: ['.trycloudflare.com'],
    },
  },
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
        indent: 2,
        semi: false,
        arrowParens: false,
        commaDangle: 'always-multiline',
        blockSpacing: true,
      },
    },
  },
  fonts: {
    families: [
      {
        name: 'IBM Plex Sans Arabic',
        provider: 'google',
        subsets: ['arabic'],
        weights: [400, 500, 600, 700],
        global: true,
      },
    ],
  },
  icon: {
    clientBundle: {
      // Auto-scan templates + TS data files
      scan: {
        globInclude: ['app/**/*.{vue,ts}'],
      },
      // Icons from shared/data can be missed after HMR — keep them explicit
      icons: [
        'heroicons:clock',
        'heroicons:exclamation-triangle',
        'heroicons:bolt',
        'heroicons:currency-dollar',
        'heroicons:arrow-left',
        'heroicons:arrow-right',
        'heroicons:bars-2',
        'heroicons:x-mark',
        'heroicons:light-bulb',
        'heroicons:sparkles',
        'heroicons:video-camera',
        'heroicons:home-modern',
        'heroicons:wrench-screwdriver',
        'heroicons:phone',
        'heroicons:check',
      ],

    },
  },
  image: {
    quality: 90,
    format: ['avif', 'webp'],
  },
  // Re-enable after the site is complete: ogImage: { enabled: true } + defineOgImage
  ogImage: {
    enabled: false,
  },
})
