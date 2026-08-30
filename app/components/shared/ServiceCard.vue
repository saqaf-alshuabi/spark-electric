<script setup lang="ts">
import type { HomeServiceItem } from '@/shared/types/site'

defineProps<HomeServiceItem>()
</script>

<template>
  <NuxtLink
    :to="to"
    class="stack-sm focus-ring items-center rounded-lg bg-default/60 p-4 text-center transition-colors hover:bg-default active:bg-accented"
  >
    <UIcon
      :name="icon"
      class="size-6 text-primary md:size-7"
    />
    <span class="text-base font-medium text-highlighted">
      {{ title }}
    </span>
  </NuxtLink>
</template>
