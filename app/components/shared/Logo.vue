<script setup lang="ts">
import { site } from '@/shared/data'
</script>

<template>
  <NuxtImg
    :src="site.logo"
    :alt="site.name"
    width="71"
    height="28"
    sizes="71px"
    class="h-7 w-auto shrink-0"
    draggable="false"
  />
</template>
