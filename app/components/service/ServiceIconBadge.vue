<script setup lang="ts">
const { name, tone = 'default' } = defineProps<{
  name: string
  /** default = cards; media = on photos; open = FAQ details */
  tone?: 'default' | 'media' | 'open'
}>()

const hoverIcon =
  'size-5 text-primary transition-colors motion-press group-active:text-inverted can-hover:group-hover:text-inverted'

const shell = {
  default:
    'flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors motion-press group-active:bg-primary can-hover:group-hover:bg-primary',
  media:
    'flex size-11 items-center justify-center rounded-lg border border-white/15 bg-black/30 backdrop-blur-md transition-colors motion-press group-active:bg-primary can-hover:group-hover:bg-primary',
  open:
    'flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300 group-open:bg-primary',
} as const

const icon = {
  default: hoverIcon,
  media: hoverIcon,
  open:
    'size-5 text-primary transition-transform duration-300 group-open:rotate-45 group-open:text-inverted',
} as const
</script>

<template>
  <span :class="shell[tone]">
    <UIcon
      :name="name"
      :class="icon[tone]"
    />
  </span>
</template>
