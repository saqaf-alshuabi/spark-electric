<script setup lang="ts">
import type { NuxtError } from '#app'

const { error } = defineProps<{ error: NuxtError }>()
const { ui } = useAppConfig()

const status = computed(() => error.status ?? error.statusCode ?? 500)

const message = computed(() => {
  const msg = error.message || ''

  if (status.value === 404)
    return (!msg || msg.startsWith('Page not found')) ? 'الصفحة مو موجودة' : msg

  return msg || 'صار خطأ'
})

const hint = computed(() =>
  status.value === 404
    ? 'يمكن الرابط غلط، أو الصفحة مو هنا'
    : 'ارجع للرئيسية، أو كلمنا على واتساب',
)

const icon = computed(() =>
  status.value === 404 ? 'i-ph-plug-duotone' : 'i-ph-warning-duotone',
)

useSeoMeta({ title: () => `${status.value} - ${message.value}` })

// Error pages carry no content worth ranking, but their links are still worth crawling.
useRobotsRule('noindex, follow')
</script>

<template>
  <UApp
    dir="rtl"
    lang="ar"
  >
    <div class="relative isolate flex min-h-dvh items-center overflow-hidden">
      <div
        class="pointer-events-none absolute inset-0 hero-aura"
        aria-hidden="true"
      />
      <div
        class="pointer-events-none absolute inset-0 hero-grid"
        aria-hidden="true"
      />

      <UContainer class="relative stack-md max-w-xl items-center text-center">
        <div class="rise flex size-16 items-center justify-center rounded-lg bg-primary/10">
          <UIcon
            :name="icon"
            class="size-8 text-primary"
          />
        </div>

        <h1 class="rise [animation-delay:80ms]">
          {{ message }}
        </h1>

        <p class="rise caption-sm [animation-delay:160ms]">
          {{ hint }}
        </p>

        <div class="rise flex flex-wrap justify-center gap-3 [animation-delay:240ms]">
          <UButton
            label="العودة للرئيسية"
            size="lg"
            :trailing-icon="ui.icons.arrowLeft"
            class="min-h-11"
            @click="clearError({ redirect: '/' })"
          />
          <ContactButton
            channel="whatsapp"
            variant="outline"
            size="lg"
            class="min-h-11"
          />
        </div>
      </UContainer>
    </div>
  </UApp>
</template>
