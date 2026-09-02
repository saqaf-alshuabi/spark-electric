<script setup lang="ts">
import type { ContactChannel } from '~/shared/types/site'

defineOptions({ inheritAttrs: false })

const { channel, iconOnly = false } = defineProps<{
  channel: ContactChannel
  iconOnly?: boolean
}>()

const { ui } = useAppConfig()
const { whatsappUrl, phoneUrl } = useContact()

/** Single source for both channels, so call sites only pick a style. */
const contact = computed(() => {
  const config = channel === 'whatsapp'
    ? {
        label: 'واتساب',
        icon: ui.icons.whatsapp,
        to: whatsappUrl,
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {
        label: 'اتصال',
        icon: ui.icons.phone,
        to: phoneUrl,
      }

  return {
    ...config,
    'label': iconOnly ? undefined : config.label,
    'aria-label': iconOnly ? config.label : undefined,
  }
})
</script>

<template>
  <UButton v-bind="{ ...contact, ...$attrs }" />
</template>
