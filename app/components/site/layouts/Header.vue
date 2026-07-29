<script setup lang="ts">
import { navItems } from '@/shared/data/site';
</script>

<template>
  <UHeader>
    <template #title>
      <SharedLogo />
    </template>
    <UNavigationMenu :items="navItems" />
    <template #right>
      <UButton
        icon="i-heroicons-chat-bubble-bottom-center-text"
        label="واتساب"
        variant="ghost"
      />
    </template>
    <template #body>
      <UNavigationMenu
        :items="navItems"
        orientation="vertical"
      />
    </template>
  </UHeader>
</template>
