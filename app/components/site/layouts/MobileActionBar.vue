<script setup lang="ts">
const { site, ui } = useAppConfig()
const whatsappUrl = `https://wa.me/${site.phone}`
</script>

<template>
  <UButton
    :icon="ui.icons.whatsapp"
    label="واتساب"
    variant="outline"
    size="lg"
    class="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 lg:hidden shadow-lg"
    :to="whatsappUrl"
    target="_blank"
    rel="noopener noreferrer"
  />
</template>
