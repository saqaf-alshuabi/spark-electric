<script setup lang="ts">
import type { HomeServiceItem } from '@/shared/types/site'

defineProps<HomeServiceItem>()
</script>

<template>
  <NuxtLink
    :to="to"
    class="group stack-sm focus-ring items-center rounded-lg bg-default/60 px-2 py-3 text-center transition-all duration-500 hover:-translate-y-1 hover:bg-default hover:shadow-lg hover:shadow-primary/5 active:scale-95 active:bg-accented md:px-3 md:py-4 md:active:scale-100"
  >
    <UIcon
      :name="icon"
      class="size-6 text-primary transition-transform duration-500 group-hover:scale-110 md:size-7"
    />
    <span class="text-sm font-medium text-highlighted">
      {{ title }}
    </span>
  </NuxtLink>
</template>
