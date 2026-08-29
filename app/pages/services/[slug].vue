<script setup lang="ts">
import { site } from '@/shared/data'

const { service } = useServiceDetail()

useSeoMeta({
  title: `${service.title} في ${site.city}`,
  description: `${service.description} — كهربائي في ${site.city} وضواحيها`,
})
</script>

<template>
  <SiteServiceDetailHero :service="service" />
</template>
