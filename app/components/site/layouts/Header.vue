<script setup lang="ts">
import { navItems } from '@/shared/data/site';
</script>

<template>
  <UHeader>
    <template #title>
      <SharedLogo />
    </template>
    <UHeaderNav :items="navItems" />
  </UHeader>
</template>
