// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineLocalBusiness } from 'nuxt-schema-org/schema'
import { services } from './app/shared/data/services'
import { contactPoint, formattedPhone, openingHours, site } from './app/shared/data/site'

/**
 * A fake host (the .env.example placeholder) poisons canonicals, sitemap
 * and Schema.org. Treat it as unset so DevTools uses the request origin.
 */
function productionSiteUrl(raw: string | undefined) {
  const value = raw?.trim()
  if (!value) {
    return undefined
  }

  try {
    const url = new URL(value)
    if (url.hostname === 'your-domain.com') {
      return undefined
    }
    return url.origin
  }
  catch {
    return undefined
  }
}

const siteUrl = productionSiteUrl(process.env.NUXT_PUBLIC_SITE_URL)

/** Structured data is only valid with absolute URLs. */
const absolute = (path: string) => siteUrl ? new URL(path, siteUrl).toString() : path

/**
 * Google asks for the most specific LocalBusiness subtype, and 'Electrician'
 * is one (LocalBusiness > HomeAndConstructionBusiness > Electrician). The
 * module's union only enumerates first-level children, hence the cast.
 */
const BUSINESS_TYPE = [
  'Organization',
  'LocalBusiness',
  'Electrician',
] as unknown as 'HomeAndConstructionBusiness'

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
  components: {
    dirs: [
      {
        path: '~/components',
        pathPrefix: false,
      },
    ],
  },
  devtools: {
    enabled: true,
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
  // Canonicals, sitemap and OG URLs are all built from this. Leave the env
  // unset until the real domain exists — a placeholder splits the tags.
  // indexable is on even in `nuxt dev`, so DevTools shows the live robots
  // value instead of the module's localhost noindex.
  site: {
    ...(siteUrl ? { url: siteUrl } : {}),
    name: site.name,
    description: site.description,
    defaultLocale: site.locale,
    indexable: true,
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: '',
    storageKey: 'spark-theme',
  },
  // Fully static output: every route is HTML on disk, so there is no TTFB
  // penalty and no server needed.
  routeRules: {
    '/': { prerender: true },
    '/services': { prerender: true },
    '/services/**': { prerender: true },
  },
  experimental: {
    viewTransition: true,
  },
  compatibilityDate: '2026-08-19',
  nitro: {
    prerender: {
      crawlLinks: true,
      // robots.txt and sitemap.xml are server routes, so a static host only
      // gets them if they are written to disk here.
      routes: ['/', '/404.html', '/robots.txt', '/sitemap.xml'],
      failOnError: true,
    },
    compressPublicAssets: {
      gzip: true,
      brotli: true,
    },
  },
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
    format: ['avif', 'webp'],
  },
  // No shop address: Google calls this a service-area business, so the address
  // stays at city level and areaServed carries the districts.
  schemaOrg: {
    identity: defineLocalBusiness({
      '@type': BUSINESS_TYPE,
      'name': site.name,
      'description': site.description,
      'logo': site.logo,
      'image': site.logo,
      'telephone': formattedPhone,
      'contactPoint': contactPoint,
      'currenciesAccepted': 'SAR',
      'availableLanguage': ['ar'],
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': site.address.locality,
        'addressRegion': site.address.region,
        'addressCountry': site.address.country,
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': site.geo.latitude,
        'longitude': site.geo.longitude,
      },
      'areaServed': site.areasServed.map(name => ({
        '@type': 'Place',
        'name': name,
      })),
      'serviceArea': {
        '@type': 'GeoCircle',
        'geoMidpoint': {
          '@type': 'GeoCoordinates',
          'latitude': site.geo.latitude,
          'longitude': site.geo.longitude,
        },
        'geoRadius': site.serviceRadiusKm * 1000,
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          ...openingHours,
        },
      ],
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': `خدمات الكهرباء في ${site.city}`,
        'itemListElement': services.map(service => ({
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': `${service.serviceType} في ${site.city}`,
            'description': service.seoDescription,
            'serviceType': service.serviceType,
            'url': absolute(`/services/${service.slug}`),
          },
        })),
      },
      // Omitted until the client creates the listing and you paste the URL
      // into site.googleBusinessUrl. An empty sameAs is worse than no sameAs.
      ...(site.googleBusinessUrl ? { sameAs: [site.googleBusinessUrl] } : {}),
    }),
  },
  robots: {
    // AI assistants are a lead source for local trades, so they stay allowed.
    // Only SEO-tool scrapers get turned away.
    blockAiBots: false,
    blockNonSeoBots: true,
    credits: false,
    mergeWithRobotsTxtPath: false,
    // Google's current robots extras: large image preview + no snippet cap.
    robotsEnabledValue: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  },
  sitemap: {
    // Images are picked up from the prerendered HTML automatically.
    discoverImages: true,
    credits: false,
    zeroRuntime: true,
    defaults: {
      changefreq: 'monthly',
      priority: 0.8,
    },
  },
  linkChecker: {
    failOnError: true,
  },
  ogImage: {
    // Cards are rendered during prerender, so nothing ships to the runtime and
    // no signing secret is needed.
    zeroRuntime: true,
    defaults: {
      width: 1200,
      height: 630,
      extension: 'png',
      emojis: false,
    },
  },
})
