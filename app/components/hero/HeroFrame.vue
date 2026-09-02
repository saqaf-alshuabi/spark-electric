<script setup lang="ts">
defineOptions({ inheritAttrs: false })
</script>

<template>
  <section class="relative isolate overflow-hidden hero-y">
    <div
      class="pointer-events-none absolute inset-0 -z-10 hero-aura"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute inset-0 -z-10 hero-grid"
      aria-hidden="true"
    />

    <UContainer v-bind="$attrs">
      <slot />
    </UContainer>
  </section>
</template>
