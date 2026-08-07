<script setup lang="ts">
const { site } = useAppConfig()
</script>

<template>
  <img
    :src="site.logo"
    :alt="`${site.name} — ${site.fullName}`"
    class="h-7 w-auto shrink-0 object-contain"
  >
</template>
