<script setup lang="ts">
import type { HomeServiceItem } from '@/shared/types/site'

defineProps<HomeServiceItem>()
</script>

<template>
  <NuxtLink
    :to="to"
    class="stack-sm card-p focus-ring items-center rounded-lg bg-default/60 text-center transition-colors hover:bg-default active:bg-accented"
  >
    <UIcon
      :name="icon"
      class="size-7 text-primary md:size-8"
    />
    <h3>
      {{ title }}
    </h3>
  </NuxtLink>
</template>
