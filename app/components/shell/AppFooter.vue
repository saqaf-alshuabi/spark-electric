<script setup lang="ts">
import { site } from '~/shared/data/site'

const year = new Date().getFullYear()
</script>

<template>
  <UFooter :ui="{ root: 'border-t border-default', container: 'py-6' }">
    <p class="caption-sm">
      &copy; {{ year }} {{ site.name }}
    </p>
  </UFooter>
</template>
