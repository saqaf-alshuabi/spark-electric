<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: false,
    default: 'size-6 text-primary',
  },
});
</script>

<template>
  <div class="flex items-center gap-2">
    <UIcon
      :name="props.icon"
      :class="props.class"
    />
    <span class="text-sm text-Dimmed">
      {{ props.title }}
    </span>
  </div>
</template>
