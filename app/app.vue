<script setup lang="ts">
import { contactPoint, formattedPhone, site } from '@/shared/data'

/**
 * LocalBusiness identity lives at #identity. The schema resolver also emits
 * a thin #organization node (and DevTools grades that one). Fill it here so
 * the two don't disagree, and so the stub is never created empty.
 */
useSchemaOrg([
  defineOrganization({
    '@id': '#organization',
    name: site.name,
    description: site.description,
    url: '/',
    logo: site.logo,
    telephone: formattedPhone,
    contactPoint,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    ...(site.googleBusinessUrl ? { sameAs: [site.googleBusinessUrl] } : {}),
  }),
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
