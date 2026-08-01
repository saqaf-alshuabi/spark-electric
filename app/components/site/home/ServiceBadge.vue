<script setup lang="ts">
import { serviceBadges } from '@/shared/data/site';
</script>

<template>
  <ul
    class="mx-auto grid max-w-xs list-none grid-cols-2
  gap-x-3 gap-y-4 p-0 sm:max-w-sm md:mx-0 md:max-w-none
   md:gap-x-4 md:gap-y-5"
  >
    <li
      v-for="badge in serviceBadges"
      :key="badge.title"
    >
      <SharedFeatureBadge
        :icon="badge.icon"
        :title="badge.title"
        :icon-class="badge.iconClass"
      />
    </li>
  </ul>
</template>
