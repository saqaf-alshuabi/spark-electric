<script setup lang="ts">
const {
  icon,
  title,
  iconClass = 'size-4 sm:size-5',
} = defineProps<{
  icon: string
  title: string
  iconClass?: string
}>()
</script>

<template>
  <div class="flex items-center gap-2">
    <UIcon
      :name="icon"
      class="shrink-0 text-primary"
      :class="iconClass"
    />
    <span class="text-xs leading-snug text-muted sm:text-sm">
      {{ title }}
    </span>
  </div>
</template>
