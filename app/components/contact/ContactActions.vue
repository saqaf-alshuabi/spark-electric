<script setup lang="ts">
const anchorRef = useMobileCtaAnchor()
</script>

<template>
  <div
    ref="anchorRef"
    class="flex flex-wrap items-center gap-3"
  >
    <ContactButton
      channel="whatsapp"
      size="lg"
      class="min-h-11"
    />
    <ContactButton
      channel="phone"
      variant="outline"
      size="lg"
      class="min-h-11"
    />
  </div>
</template>
