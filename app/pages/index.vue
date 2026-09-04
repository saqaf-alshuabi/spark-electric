<script setup lang="ts">
import { site } from '@/shared/data'

usePageSeo({
  title: `كهربائي في ${site.city} — تأسيس وإنارة وأعطال`,
  ogTitle: `كهربائي في ${site.city} وضواحيها`,
})
</script>

<template>
  <HeroSection />
  <ServicesSection />
  <ServiceAreas />
</template>
