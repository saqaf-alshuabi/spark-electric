<script setup lang="ts">
import { site } from '@/shared/data'
</script>

<template>
  <section class="section-y">
    <UContainer class="stack-md items-center text-center">
      <h2 class="reveal">
        وين نشتغل
      </h2>

      <p class="reveal max-w-2xl">
        نغطي {{ site.city }} وضواحيها، ونوصلك في نفس اليوم داخل النطاق.
        لو حيّك مو مكتوب تحت، كلّمنا وقول لنا موقعك.
      </p>

      <ul class="reveal flex flex-wrap justify-center gap-2">
        <li
          v-for="area in site.areasServed"
          :key="area"
          class="rounded-full border border-default bg-default/40 px-3.5 py-1.5 caption-sm"
        >
          {{ area }}
        </li>
      </ul>

      <p class="reveal flex items-center gap-2 caption-sm">
        <UIcon
          name="i-ph-clock-duotone"
          class="size-5 text-primary"
        />
        على مدار الساعة، طول أيام الأسبوع
      </p>
    </UContainer>
  </section>
</template>
