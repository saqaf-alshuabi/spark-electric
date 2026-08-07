<script setup lang="ts">
const { site } = useAppConfig()
const whatsappUrl = `https://wa.me/${site.phone}`
</script>

<template>
  <UButton
    icon="i-simple-icons-whatsapp"
    label="واتساب"
    variant="outline"
    size="md"
    class="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 lg:hidden"
    :to="whatsappUrl"
    target="_blank"
    rel="noopener noreferrer"
  />
</template>
