// https://nuxt.com/docs/api/configuration/nuxt-config
import { localBusinessIdentity } from './app/shared/data/identity'
import { site } from './app/shared/data/site'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/seo',
  ],
  components: {
    dirs: [
      {
        path: '~/components',
        pathPrefix: false,
      },
    ],
  },
  app: {
    head: {
      htmlAttrs: {
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
    url: 'https://spark-electric.saqaf-alshuabi.workers.dev',
    name: site.name,
    description: site.description,
    defaultLocale: site.locale,
    trailingSlash: false,
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: '',
    storageKey: 'spark-theme',
  },
  ui: {
    experimental: {
      componentDetection: true,
    },
    theme: {
      colors: ['primary', 'error'],
    },
  },
  routeRules: {
    '/': { prerender: true },
    '/services': { prerender: true },
    '/services/**': { prerender: true },
  },
  experimental: {
    viewTransition: true,
  },
  compatibilityDate: '2026-09-04',
  nitro: {
    compressPublicAssets: {
      gzip: true,
      brotli: true,
    },
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
      wrangler: {
        name: 'spark-electric',
      },
    },
    prerender: {
      crawlLinks: true,
      autoSubfolderIndex: false,
      routes: ['/', '/404.html'],
      failOnError: true,
    },
  },
  hooks: {
    close: () => {
      if (process.env.npm_lifecycle_event !== 'build') {
        return
      }
      process.exit(process.exitCode ?? 0)
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
        weights: [400, 500, 600],
        display: 'swap',
        // Arabic subsets skip auto-preload unless this is set.
        preload: true,
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
        'ph:lightning-duotone',
        'ph:lightbulb-duotone',
        'ph:sparkle-duotone',
        'ph:security-camera-duotone',
        'ph:snowflake-duotone',
        'ph:wrench-duotone',
        'ph:equals',
        'ph:x',
        'ph:arrow-left',
        'ph:phone',
        'ph:plug-duotone',
        'ph:warning-duotone',
        'ph:clock-duotone',
        'ph:plus',
        'simple-icons:whatsapp',
      ],
    },
  },
  image: {
    quality: 80,
    format: ['avif', 'webp'],
  },
  linkChecker: {
    failOnError: true,
  },
  ogImage: {
    zeroRuntime: true,
    fontSubsets: ['arabic', 'latin'],
    security: {
      renderTimeout: 60_000,
    },
    defaults: {
      height: 630,
      emojis: false,
    },
  },
  robots: {
    // AI assistants are a lead source for local trades, so they stay allowed.
    blockNonSeoBots: true,
    credits: false,
    groups: [
      {
        userAgent: '*',
        contentUsage: {
          'bots': 'y',
          'search': 'y',
          'ai-output': 'y',
          'train-ai': 'y',
        },
        contentSignal: {
          'search': 'yes',
          'ai-input': 'yes',
          'ai-train': 'yes',
        },
      },
    ],
  },
  schemaOrg: {
    // Service-area business: city-level address, districts live on areaServed.
    identity: localBusinessIdentity(),
  },
  sitemap: {
    discoverImages: true,
    credits: false,
    zeroRuntime: true,
  },
})
