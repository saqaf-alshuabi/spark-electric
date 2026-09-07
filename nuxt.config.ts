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
    // Hashed build files — safe to cache forever. Filename changes on rebuild.
    '/_nuxt/**': {
      headers: { 'cache-control': 'public, max-age=31536000, immutable' },
    },
    '/_fonts/**': {
      headers: { 'cache-control': 'public, max-age=31536000, immutable' },
    },
    '/_ipx/**': {
      headers: { 'cache-control': 'public, max-age=31536000, immutable' },
    },
  },
  experimental: {
    payloadExtraction: 'client',
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
        assets: {
          // Static assets sniff .jpg from the source path. The Worker sets avif/webp.
          run_worker_first: ['/_ipx/*'],
        },
      },
    },
    prerender: {
      crawlLinks: true,
      autoSubfolderIndex: false,
      routes: ['/', '/404.html'],
      failOnError: true,
    },
    hooks: {
      'prerender:generate'(route) {
        const path = decodeURIComponent(route.route.split('?')[0] ?? '')
        if (!path.startsWith('/_ipx/')) {
          return
        }
        if (path.includes('f_avif')) {
          route.contentType = 'image/avif'
        }
        else if (path.includes('f_webp')) {
          route.contentType = 'image/webp'
        }
      },
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
        weights: [400],
        display: 'swap',
        // Arabic subsets skip auto-preload unless this is set.
        preload: true,
      },
      {
        name: 'IBM Plex Sans Arabic',
        provider: 'google',
        subsets: ['arabic'],
        weights: [500, 600],
        display: 'swap',
        preload: false,
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
    // Static files at build — works in `pnpm preview` and on Cloudflare (no Sharp in the Worker).
    provider: 'ipxStatic',
    providers: {
      // Same as ipxStatic, commas instead of & so Cloudflare Assets don't 307.
      ipxStatic: {
        provider: '~/providers/ipx-cf',
      },
    },
    quality: 70,
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
    // AI assistants stay allowed by default (no Disallow). Content-Usage is
    // stripped in server/plugins/robots-lighthouse.ts — Lighthouse flags it.
    blockNonSeoBots: true,
    credits: false,
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
