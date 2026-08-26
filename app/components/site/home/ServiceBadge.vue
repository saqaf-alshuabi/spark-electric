<script setup lang="ts">
import { serviceBadges } from '@/shared/data'
</script>

<template>
  <ul class="grid w-full grid-cols-2 gap-2">
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
