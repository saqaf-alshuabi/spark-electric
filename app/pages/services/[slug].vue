<script setup lang="ts">
import { getServiceBySlug } from '@/shared/data'

const route = useRoute()
const service = getServiceBySlug(String(route.params.slug)) ?? notFound('الخدمة غير موجودة')
</script>

<template>
  <div>
    <SiteServiceDetailHero :service="service" />
    <SiteSectionsCtaSection />
  </div>
</template>
