<script setup lang="ts">
import { contactPoint, formattedPhone, sameAs, site } from '@/shared/data'

const { url: siteUrl } = useSiteConfig()

/**
 * LocalBusiness lives at #identity. DevTools grades the extra Organization
 * node at #organization. A full @id is required — a relative #organization
 * gets rewritten to #/schema/organization/#organization and misses the merge.
 */
useSchemaOrg([
  {
    '@id': new URL('#organization', siteUrl).toString(),
    '@type': 'Organization',
    name: site.name,
    description: site.description,
    url: siteUrl,
    logo: new URL(site.logo, siteUrl).toString(),
    telephone: formattedPhone,
    contactPoint,
    sameAs,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
  },
])
</script>

<template>
  <UApp
    dir="rtl"
    lang="ar"
  >
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
