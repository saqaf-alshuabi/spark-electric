<script setup lang="ts">
/** Legacy WebP fallback so IPX does not bake a third JPEG set. */
defineOptions({ inheritAttrs: false })

withDefaults(defineProps<{
  legacyFormat?: string
}>(), {
  legacyFormat: 'webp',
})
</script>

<template>
  <NuxtPicture
    v-bind="$attrs"
    :legacy-format="legacyFormat"
  />
</template>
