<script setup lang="ts">
import { site } from '@/shared/data'

usePageSeo({
  title: `كهربائي في ${site.city} — تأسيس وإنارة وأعطال`,
  description: `كهربائي في ${site.city} وضواحيها على مدار الساعة: تأسيس كهرباء مع البناء، تركيب ثريا وسبوت، ليد مخفي، انتركوم، تأسيس تكييف، وكشف وإصلاح أعطال. للبيت والمحل — تدق، نجي، ونخلّصها.`,
  ogTitle: `كهربائي في ${site.city} وضواحيها`,
})
</script>

<template>
  <div>
    <HeroSection />
    <LazyServicesSection hydrate-on-visible />
  </div>
</template>
