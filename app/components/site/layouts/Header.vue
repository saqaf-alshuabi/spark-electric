<script setup lang="ts">
import { navItems } from '@/shared/data/site';
</script>

<template>
  <UHeader>
    <template
      #title
    >
      <SharedLogo class="h-6 w-auto" />
    </template>
    <UNavigationMenu :items="navItems" />
    <template #right>
      <UButton
        icon="i-heroicons-chat-bubble-bottom-center-text"
        label="واتساب"
        variant="ghost"
        class="hidden lg:inline-flex"
      />
    </template>
    <template #body>
      <UNavigationMenu
        :items="navItems"
        orientation="vertical"
      />
    </template>
  </UHeader>
  <SiteLayoutsMobileActionBar />
</template>
