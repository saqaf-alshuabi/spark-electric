<script setup lang="ts">
import { whyChooseUs } from '@/shared/data'
import { MOTION_DELAY, motionStagger } from '@/utils/motion'
</script>

<template>
  <section class="section-y">
    <UContainer class="stack-md items-center">
      <div class="stack-sm items-center text-center">
        <SharedReveal :delay="MOTION_DELAY.heading">
          <h2>
            لماذا تختارنا؟
          </h2>
        </SharedReveal>
        <SharedReveal :delay="MOTION_DELAY.copy">
          <p>
            ثقة ووضوح في كل خطوة من التشخيص حتى التنفيذ
          </p>
        </SharedReveal>
      </div>

      <ul class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        <SharedReveal
          v-for="(item, index) in whyChooseUs"
          :key="item.title"
          tag="li"
          :delay="motionStagger(index)"
          class="stack-sm rounded-lg bg-muted/60 px-4 py-5 transition-transform duration-300 hover:-translate-y-1 sm:px-5"
        >
          <h3>
            {{ item.title }}
          </h3>
          <p>
            {{ item.description }}
          </p>
        </SharedReveal>
      </ul>
    </UContainer>
  </section>
</template>
