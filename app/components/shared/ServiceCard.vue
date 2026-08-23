<script setup lang="ts">
import type { HomeServiceItem } from '@/shared/types/site'

defineProps<HomeServiceItem>()
</script>

<template>
  <NuxtLink
    :to="to"
    class="group stack-sm focus-ring items-center rounded-lg bg-default/60 px-3 py-5 text-center transition-all duration-500 hover:-translate-y-1.5 hover:bg-default hover:shadow-lg hover:shadow-primary/5 active:scale-95 active:bg-accented md:active:scale-100"
  >
    <UIcon
      :name="icon"
      class="size-8 text-primary transition-transform duration-500 group-hover:scale-110 sm:size-9"
    />
    <span class="text-sm font-medium text-highlighted sm:text-base">
      {{ title }}
    </span>
  </NuxtLink>
</template>
