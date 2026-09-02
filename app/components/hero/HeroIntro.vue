<script setup lang="ts">
const { live = false } = defineProps<{
  badge: string
  heading: string
  body: string
  live?: boolean
}>()
</script>

<template>
  <div class="stack-sm items-center text-center md:items-start md:text-start">
    <p class="rise pill caption-sm">
      <span
        v-if="live"
        class="relative flex size-2"
      >
        <span class="absolute inline-flex size-full animate-ping rounded-full bg-primary/60 motion-reduce:animate-none" />
        <span class="relative inline-flex size-2 rounded-full bg-primary" />
      </span>
      {{ badge }}
    </p>

    <h1 class="rise heading-gradient [animation-delay:80ms]">
      {{ heading }}
    </h1>

    <p class="rise max-w-md [animation-delay:160ms]">
      {{ body }}
    </p>
  </div>
</template>
