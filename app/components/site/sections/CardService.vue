<script setup lang="ts">
import { electricalNetworkSlides } from '@/shared/data/site';

const slide = electricalNetworkSlides[0]!;
</script>

<template>
  <div class="content-w mx-auto stack-sm items-center  md:mx-0">
    <NuxtImg
      :src="slide.src"
      :alt="slide.alt"
      class="size-full object-contain"
    />
    <p class="caption-sm text-center">
      {{ slide.caption }}
    </p>
  </div>
</template>
