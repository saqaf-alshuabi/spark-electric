<script setup lang="ts">
const { service } = useServiceDetail()
</script>

<template>
  <div>
    <SiteServiceDetailHero
      :service="service"
    />
    <SiteSectionsCtaSection />
  </div>
</template>
