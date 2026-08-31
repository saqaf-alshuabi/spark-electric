<script setup lang="ts">
import { homeServices } from '@/shared/data'
</script>

<template>
  <section class="section-y">
    <UContainer class="stack-md items-center">
      <h2 class="reveal">
        خدمات
      </h2>

      <ul class="grid w-full grid-cols-2 grid-gap md:grid-cols-3">
        <li
          v-for="(service, index) in homeServices"
          :key="service.title"
          :class="{
            'col-span-2': index === 0,
            'col-span-2 md:col-span-3': index === homeServices.length - 1,
          }"
        >
          <SharedServiceCard
            v-bind="service"
            :wide="index === 0 || index === homeServices.length - 1"
          />
        </li>
      </ul>

      <div>
        <UButton
          to="/services"
          label="كل الخدمات"
          color="neutral"
          variant="link"
        />
      </div>
    </UContainer>
  </section>
</template>
