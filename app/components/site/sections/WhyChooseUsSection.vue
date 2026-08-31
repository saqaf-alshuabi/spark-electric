<script setup lang="ts">
import { whyChooseUs } from '@/shared/data'
</script>

<template>
  <section class="section-y">
    <UContainer class="stack-md items-center">
      <h2 class="reveal">
        كذا نشتغل
      </h2>

      <ul class="grid w-full grid-cols-1 grid-gap md:grid-cols-3">
        <li
          v-for="item in whyChooseUs"
          :key="item.title"
          class="flex items-start gap-4"
        >
          <UIcon
            :name="item.icon"
            class="mt-1 size-6 shrink-0 text-primary"
          />
          <div class="stack-sm">
            <h3>
              {{ item.title }}
            </h3>
            <p>
              {{ item.description }}
            </p>
          </div>
        </li>
      </ul>
    </UContainer>
  </section>
</template>
