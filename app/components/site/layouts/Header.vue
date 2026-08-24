<script setup lang="ts">
import { navItems } from '@/shared/data'

const { ui } = useAppConfig()
const { whatsappUrl } = useContact()
</script>

<template>
  <UHeader to="/">
    <template #title>
      <SharedLogo />
    </template>

    <UNavigationMenu :items="navItems" />
    <template #right>
      <UButton
        :icon="ui.icons.whatsapp"
        label="واتساب"
        variant="ghost"
        class="hidden lg:inline-flex"
        :to="whatsappUrl"
        target="_blank"
        rel="noopener noreferrer"
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
