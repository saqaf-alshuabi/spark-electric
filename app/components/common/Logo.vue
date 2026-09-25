<script setup lang="ts">
import { site } from '~/shared/data/site'
</script>

<template>
  <NuxtImg
    preset="logo"
    :src="site.logo"
    :alt="site.name"
    width="71"
    height="28"
    class="h-7 w-auto shrink-0"
    draggable="false"
  />
</template>
