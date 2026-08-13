<script setup lang="ts">
const sizeClass = {
  xs: 'size-1',
  sm: 'size-1.5',
  md: 'size-2',
} as const

const colorClass = {
  primary: 'bg-primary',
  muted: 'bg-muted',
  highlighted: 'bg-highlighted',
} as const

withDefaults(defineProps<{
  size?: keyof typeof sizeClass
  color?: keyof typeof colorClass
}>(), {
  size: 'xs',
  color: 'primary',
})
</script>

<template>
  <span
    class="inline-block shrink-0 rounded-full"
    :class="[sizeClass[size], colorClass[color]]"
    aria-hidden="true"
  />
</template>
