<script setup lang="ts">
const { site } = useAppConfig()
</script>

<template>
  <NuxtImg
    :src="site.logo"
    :alt="site.fullName"
    width="81"
    height="32"
    sizes="81px"
    class="h-8 w-auto shrink-0"
    draggable="false"
  />
</template>
