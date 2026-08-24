<script setup lang="ts">
import { serviceBadges } from '@/shared/data'
</script>

<template>
  <ul class="mx-auto grid w-fit grid-cols-2 gap-x-8 gap-y-3 md:mx-0 md:gap-4">
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
