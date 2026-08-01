<script setup lang="ts">
const { site } = useAppConfig();
</script>

<template>
  <NuxtLink
    to="/"
    class="flex min-w-0 items-center gap-2"
    :aria-label="site.fullName"
  >
    <img
      :src="site.logo"
      :alt="`${site.name} — ${site.fullName}`"
      class="h-7 w-auto shrink-0 object-contain"
    >
  </NuxtLink>
</template>
