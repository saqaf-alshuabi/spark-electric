<script setup lang="ts">
const { service } = useServiceDetail()
</script>

<template>
  <div>
    <SiteServiceDetailHero
      :service="service"
    />
    <SiteServiceDetailHowWeWork />
    <SiteSectionsCtaSection />
  </div>
</template>
