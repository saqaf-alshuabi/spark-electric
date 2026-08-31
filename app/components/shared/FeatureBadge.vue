<script setup lang="ts">
const {
  icon,
  title,
  iconClass = 'size-4',
} = defineProps<{
  icon: string
  title: string
  iconClass?: string
}>()
</script>

<template>
  <div class="flex w-full items-center gap-2.5 rounded-lg bg-muted/50 px-4 py-2.5">
    <UIcon
      :name="icon"
      class="shrink-0 text-primary"
      :class="iconClass"
    />
    <span class="min-w-0 text-sm leading-snug text-highlighted">
      {{ title }}
    </span>
  </div>
</template>
