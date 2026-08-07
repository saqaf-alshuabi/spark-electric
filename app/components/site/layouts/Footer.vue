<script setup lang="ts">
import { socialLinks, navItems } from '@/shared/data/site'

const { site } = useAppConfig()
</script>

<template>
  <UFooter>
    <template #left>
      <p class="text-sm text-muted">
        &copy; {{ site.copyright }}
      </p>
    </template>
    <UNavigationMenu
      :items="navItems"
      variant="link"
      color="neutral"
    />
    <template #right>
      <UButton
        v-for="socialLink in socialLinks"
        :key="socialLink.to"
        :icon="socialLink.icon"
        :to="socialLink.to"
        :target="socialLink.target"
        :aria-label="socialLink['aria-label']"
        variant="link"
        color="neutral"
      />
    </template>
  </UFooter>
</template>
