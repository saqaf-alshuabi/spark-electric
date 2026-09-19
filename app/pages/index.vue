<script setup lang="ts">
import { site } from '~/shared/data/site'

usePageSeo({
  title: `كهربائي في ${site.city}: تأسيس، ثريا وسبوت، وأعطال`,
  description: `كهربائي في ${site.city} وضواحيها على مدار الساعة: تأسيس كهرباء مع البناء، ثريا وسبوت، ليد مخفي، انتركوم، تأسيس تكييف، وكشف أعطال. للبيت والمحل. تدق، نجي، ونخلّصها.`,
  ogTitle: `كهربائي في ${site.city} وضواحيها`,
})
</script>

<template>
  <HeroSection />
  <LazyServicesSection hydrate-on-visible />
</template>
