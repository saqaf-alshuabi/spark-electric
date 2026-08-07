<script setup lang="ts">
import { navItems } from '@/shared/data/site'

const { site } = useAppConfig()
const whatsappUrl = `https://wa.me/${site.phone}`
</script>

<template>
  <UHeader
    :title="site.fullName"
    to="/"
  >
    <template
      #title
    >
      <SharedLogo class="h-6 w-auto" />
    </template>
    <UNavigationMenu :items="navItems" />
    <template #right>
      <UButton
        icon="i-simple-icons-whatsapp"
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
