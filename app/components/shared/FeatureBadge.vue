<script setup lang="ts">
withDefaults(defineProps<{
  icon: string
  title: string
  iconClass?: string
}>(), {
  iconClass: 'size-4 sm:size-5',
})
</script>

<template>
  <div class="flex items-start gap-2 min-w-0">
    <UIcon
      :name="icon"
      class="mt-0.5 shrink-0 text-primary"
      :class="iconClass"
    />
    <span class="text-xs sm:text-sm text-muted leading-snug">
      {{ title }}
    </span>
  </div>
</template>
