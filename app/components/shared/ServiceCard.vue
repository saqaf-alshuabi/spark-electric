<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
  to: string;
}>();
</script>

<template>
  <NuxtLink
    :to="to"
    class="stack-sm items-center rounded-lg bg-default/60
     px-3 py-5 text-center transition-colors hover:bg-default
      active:bg-accented focus-visible:outline-none focus-visible:ring-1
      focus-visible:ring-primary/60"
  >
    <UIcon
      :name="icon"
      class="size-8 text-primary sm:size-9"
    />
    <span class="text-sm font-medium text-highlighted sm:text-base">
      {{ title }}
    </span>
  </NuxtLink>
</template>
