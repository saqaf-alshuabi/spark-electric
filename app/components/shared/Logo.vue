<script setup lang="ts">
import { site } from '@/shared/data'
</script>

<template>
  <NuxtPicture
    :src="site.logo"
    :alt="site.name"
    width="71"
    height="28"
    sizes="71px"
    preload
    loading="eager"
    class="h-7 w-auto shrink-0"
    :img-attrs="{ class: 'h-7 w-auto', draggable: 'false' }"
  />
</template>
