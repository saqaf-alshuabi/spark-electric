<script setup lang="ts">
import { site } from '@/shared/data'
</script>

<template>
  <NuxtImg
    :src="site.logo"
    :alt="site.name"
    width="81"
    height="32"
    sizes="81px"
    class="h-8 w-auto shrink-0"
    draggable="false"
  />
</template>
