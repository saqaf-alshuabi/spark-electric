<script setup lang="ts">
import { navItems, site } from '@/shared/data'
</script>

<template>
  <UHeader
    :title="site.name"
    to="/"
  >
    <template #title>
      <SharedLogo />
    </template>

    <UNavigationMenu :items="navItems" />
    <template #right>
      <SharedContactButton
        channel="whatsapp"
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
</template>
