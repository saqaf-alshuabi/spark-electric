<script setup lang="ts">
import { navItems } from '~/shared/data/nav'
import { site } from '~/shared/data/site'
</script>

<template>
  <UHeader
    :title="site.name"
    to="/"
  >
    <template #title>
      <Logo />
    </template>

    <UNavigationMenu :items="navItems" />
    <template #right>
      <ContactButton
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
