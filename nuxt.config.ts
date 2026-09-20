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
    // Override per env with NUXT_SITE_URL (see .env.example).
    url: process.env.NUXT_SITE_URL || 'https://spark-electric.saqaf-alshuabi.workers.dev',
    name: site.name,
    description: site.description,
    defaultLocale: site.locale,
    trailingSlash: false,
  },
  ui: {
    colorMode: false,
    experimental: {
      componentDetection: true,
    },
    theme: {
      colors: ['primary', 'error'],
    },
  },
  experimental: {
    payloadExtraction: 'client',
  },
  compatibilityDate: '2026-09-04',
  nitro: {
    cloudflare: {
      // Workers Builds would emit a Worker entry; this site is assets-only.
      deployConfig: false,
    },
    compressPublicAssets: {
      gzip: true,
      brotli: true,
    },
    prerender: {
      crawlLinks: true,
      autoSubfolderIndex: false,
      // `/` seeds the crawler; `/404.html` is not linked from the site.
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
      if (process.env.npm_lifecycle_event !== 'build' && process.env.npm_lifecycle_event !== 'generate') {
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
      scan: {
        globInclude: ['app/**/*.{vue,ts}'],
      },
      // Icons from shared/data can be missed after HMR — keep them explicit.
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
    // Name must stay `ipxStatic` for prerender; provider file uses commas (CF Assets 307s on &).
    provider: 'ipxStatic',
    providers: {
      ipxStatic: {
        provider: '~/providers/ipx-cf',
      },
    },
    // Order matters for <NuxtPicture>. Legacy WebP (no JPEG bake) is in <SitePicture>.
    quality: 70,
    format: ['avif', 'webp'],
    presets: {
      hero: {
        sizes: 'sm:92vw md:45vw lg:640px',
      },
      gallery: {
        sizes: 'sm:92vw md:45vw',
      },
      card: {
        sizes: 'sm:92vw md:45vw lg:420px',
      },
      logo: {
        sizes: '71px',
        modifiers: {
          format: 'webp',
          width: 71,
          height: 28,
        },
      },
    },
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
    // Content-Usage is stripped in server/plugins/robots-lighthouse.ts (Lighthouse).
    blockNonSeoBots: true,
    credits: false,
  },
  schemaOrg: {
    // Service-area business: city-level address, coverage is the GeoCircle.
    identity: localBusinessIdentity(),
  },
  sitemap: {
    discoverImages: true,
    credits: false,
    zeroRuntime: true,
  },
})
