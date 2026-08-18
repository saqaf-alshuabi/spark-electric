<script setup lang="ts">
import type { NuxtError } from '#app'

const { error } = defineProps<{ error: NuxtError }>()
const { ui } = useAppConfig()
const status = computed(() => error.status ?? error.statusCode ?? 500)

const message = computed(() => {
  const msg = error.message || ''

  if (status.value === 404)
    return (!msg || msg.startsWith('Page not found')) ? 'الصفحة غير موجودة' : msg

  return msg || 'حدث خطأ'
})

useSeoMeta({ title: () => `${status.value} - ${message.value}` })
</script>

<template>
  <UApp
    dir="rtl"
    lang="ar"
  >
    <div class="flex min-h-dvh items-center">
      <UContainer class="stack-md max-w-xl items-center text-center">
        <p class="mono-nums text-primary">
          {{ status }}
        </p>

        <h1>
          {{ message }}
        </h1>

        <UButton
          label="العودة للرئيسية"
          :trailing-icon="ui.icons.arrowLeft"
          @click="clearError({ redirect: '/' })"
        />
      </UContainer>
    </div>
  </UApp>
</template>
