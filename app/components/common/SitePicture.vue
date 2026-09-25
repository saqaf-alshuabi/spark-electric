<script setup lang="ts">
/**
 * Thin NuxtPicture wrapper:
 * - Legacy WebP fallback so IPX does not bake a third JPEG set.
 * - Resolves preset `sizes` explicitly. NuxtPicture does `props.sizes || screens`,
 *   which overrides the preset and bloats every srcset to 640…3072.
 */
defineOptions({ inheritAttrs: false })

withDefaults(defineProps<{
  legacyFormat?: string
}>(), {
  legacyFormat: 'webp',
})

const attrs = useAttrs()
const $img = useImage()

const sizes = computed(() => {
  if (attrs.sizes != null && attrs.sizes !== '')
    return attrs.sizes as string | Record<string, string | number>

  const preset = attrs.preset as string | undefined
  if (!preset)
    return undefined

  return $img.options.presets?.[preset]?.sizes as string | undefined
})
</script>

<template>
  <NuxtPicture
    v-bind="attrs"
    :sizes="sizes"
    :legacy-format="legacyFormat"
  />
</template>
