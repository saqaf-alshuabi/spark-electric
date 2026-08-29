<script setup lang="ts">
import { site } from '@/shared/data'

const { ui } = useAppConfig()
const { whatsappUrl } = useContact()
const year = new Date().getFullYear()
</script>

<template>
  <UFooter>
    <template #left>
      <p class="caption-sm">
        &copy; {{ year }} {{ site.name }}
      </p>
    </template>

    <template #right>
      <UButton
        :icon="ui.icons.whatsapp"
        aria-label="واتساب"
        color="neutral"
        variant="link"
        size="xs"
        class="hidden lg:inline-flex"
        :to="whatsappUrl"
        target="_blank"
        rel="noopener noreferrer"
      />
    </template>
  </UFooter>
</template>
