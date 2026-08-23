<script setup lang="ts">
import { MOTION_DELAY } from '@/utils/motion'

const { ui } = useAppConfig()
const { whatsappUrl, phoneUrl } = useContact()
</script>

<template>
  <section class="section-y bg-muted">
    <UContainer class="stack-md items-center">
      <div class="stack-sm items-center text-center">
        <SharedReveal :delay="MOTION_DELAY.heading">
          <h2>
            تحتاج كهربائي في مكة؟
          </h2>
        </SharedReveal>
        <SharedReveal :delay="MOTION_DELAY.copy">
          <p>
            تواصل معنا الآن لتشخيص سريع وتسعير واضح
          </p>
        </SharedReveal>
      </div>

      <SharedReveal
        :delay="MOTION_DELAY.cta"
        class="flex flex-wrap items-center justify-center gap-3"
      >
        <UButton
          :to="whatsappUrl"
          target="_blank"
          rel="noopener noreferrer"
          label="واتساب"
          :icon="ui.icons.whatsapp"
          size="lg"
        />
        <UButton
          :to="phoneUrl"
          label="اتصال"
          :icon="ui.icons.phone"
          variant="outline"
          size="md"
        />
      </SharedReveal>
    </UContainer>
  </section>
</template>
