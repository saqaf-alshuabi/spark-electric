<script setup lang="ts">
import type { ContactChannel } from '~/shared/types/site'

defineOptions({ inheritAttrs: false })

const { channel } = defineProps<{
  channel: ContactChannel
}>()

const { ui } = useAppConfig()
const { whatsappUrl, phoneUrl } = useContact()

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

  return config
})
</script>

<template>
  <UButton v-bind="{ ...contact, ...$attrs }" />
</template>
