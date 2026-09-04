// https://nuxt.com/docs/api/configuration/nuxt-config
import { localBusinessIdentity } from './app/shared/data/identity'
import { site } from './app/shared/data/site'

function productionSiteUrl(raw: string | undefined) {
  const value = raw?.trim()
  if (!value) {
    return undefined
  }

  try {
    return new URL(value).origin
  }
  catch {
    return undefined
  }
}

const siteUrl = process.env.NODE_ENV === 'production'
  ? productionSiteUrl(process.env.NUXT_PUBLIC_SITE_URL)
  : undefined

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxt/hints',
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
        lang: site.locale,
        dir: 'rtl',
        class: 'dark',
      },
      titleTemplate: `%s %separator ${site.name}`,
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
    ...(siteUrl ? { url: siteUrl } : {}),
    name: site.name,
    description: site.description,
    defaultLocale: site.locale,
    trailingSlash: false,
    indexable: true,
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: '',
    storageKey: 'spark-theme',
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
    prerender: {
      crawlLinks: true,
      autoSubfolderIndex: false,
      routes: ['/', '/404.html', '/robots.txt', '/sitemap.xml'],
      failOnError: true,
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
    quality: 90,
    densities: [1, 2],
    format: ['avif', 'webp'],
  },
  linkChecker: {
    failOnError: true,
  },
  ogImage: {
    zeroRuntime: true,
    security: {
      renderTimeout: 60_000,
    },
    defaults: {
      width: 1200,
      height: 630,
      extension: 'png',
      emojis: false,
    },
  },
  robots: {
    // AI assistants are a lead source for local trades, so they stay allowed.
    blockAiBots: false,
    blockNonSeoBots: true,
    credits: false,
    mergeWithRobotsTxtPath: false,
    groups: [
      {
        userAgent: '*',
        allow: '/',
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
    identity: localBusinessIdentity(siteUrl),
  },
  sitemap: {
    discoverImages: true,
    credits: false,
    zeroRuntime: true,
    defaults: {
      changefreq: 'monthly',
      priority: 0.8,
    },
  },
})
