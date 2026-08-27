<script setup lang="ts">
import { whyChooseUs } from '@/shared/data'
</script>

<template>
  <section class="section-y">
    <UContainer class="stack-md items-center">
      <div class="stack-sm items-center text-center">
        <h2 class="reveal">
          اللي يهمك
        </h2>
        <p class="reveal">
          قبل لا نبدأ الشغل
        </p>
      </div>

      <ul class="grid w-full grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
        <li
          v-for="item in whyChooseUs"
          :key="item.title"
          class="reveal stack-sm rounded-lg bg-muted/50 px-4 py-5 md:px-5"
        >
          <h3>
            {{ item.title }}
          </h3>
          <p>
            {{ item.description }}
          </p>
        </li>
      </ul>
    </UContainer>
  </section>
</template>
