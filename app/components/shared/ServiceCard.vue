<script setup lang="ts">
import type { HomeServiceItem } from '@/shared/types/site'

defineProps<HomeServiceItem>()
</script>

<template>
  <NuxtLink
    :to="to"
    class="stack-sm focus-ring items-center rounded-lg bg-default/60 px-2 py-3 text-center transition-colors hover:bg-default active:bg-accented md:px-3 md:py-4"
  >
    <UIcon
      :name="icon"
      class="size-6 text-primary md:size-7"
    />
    <span class="text-sm font-medium text-highlighted">
      {{ title }}
    </span>
  </NuxtLink>
</template>
