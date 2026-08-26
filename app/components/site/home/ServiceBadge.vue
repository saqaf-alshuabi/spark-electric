<script setup lang="ts">
import { serviceBadges } from '@/shared/data'
</script>

<template>
  <ul class="mx-auto grid w-fit grid-cols-2 gap-x-4 gap-y-2 lg:mx-0 lg:gap-x-6 lg:gap-y-3">
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
