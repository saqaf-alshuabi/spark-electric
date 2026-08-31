<script setup lang="ts">
import { site } from '@/shared/data'

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
      <SharedContactButton
        channel="whatsapp"
        icon-only
        color="neutral"
        variant="link"
        size="xs"
        class="hidden lg:inline-flex"
      />
    </template>
  </UFooter>
</template>
