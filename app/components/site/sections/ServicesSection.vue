<script setup lang="ts">
import { homeServices } from '@/shared/data'
import { MOTION_DELAY, motionStagger } from '@/utils/motion'

const { ui } = useAppConfig()
</script>

<template>
  <section class="section-y bg-muted">
    <UContainer class="stack-md items-center">
      <div class="stack-sm items-center text-center">
        <SharedReveal :delay="MOTION_DELAY.heading">
          <h2>
            خدماتنا
          </h2>
        </SharedReveal>
        <SharedReveal :delay="MOTION_DELAY.copy">
          <p>
            نقدم خدمات الكهرباء المنزلية والتجارية
          </p>
        </SharedReveal>
      </div>

      <ul class="grid w-full grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
        <SharedReveal
          v-for="(service, index) in homeServices"
          :key="service.title"
          tag="li"
          :delay="motionStagger(index)"
        >
          <SharedServiceCard v-bind="service" />
        </SharedReveal>
      </ul>

      <SharedReveal :delay="motionStagger(homeServices.length)">
        <UButton
          to="/services"
          label="عرض كل الخدمات"
          variant="soft"
          :trailing-icon="ui.icons.arrowLeft"
        />
      </SharedReveal>
    </UContainer>
  </section>
</template>
