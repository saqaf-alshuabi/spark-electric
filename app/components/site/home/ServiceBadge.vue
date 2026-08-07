<script setup lang="ts">
import { serviceBadges } from '@/shared/data/site'
</script>

<template>
  <ul class="grid w-full list-none grid-cols-2 gap-3 md:gap-4">
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
