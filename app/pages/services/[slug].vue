<script setup lang="ts">
const { service } = useServiceDetail()
definePageMeta({
  hideMobileActionBar: true,
})
</script>

<template>
  <SiteServiceDetailHero
    :service="service"
  />
  <SiteServiceDetailHowWeWork />
  <SiteSectionsCtaSection />
</template>
