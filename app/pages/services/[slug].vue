<script setup lang="ts">
const { service } = useServiceDetail()
definePageMeta({
  hideMobileActionBar: true,
})
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
