<script setup lang="ts">
import { site } from '@/shared/data'
</script>

<template>
  <section class="section-y">
    <UContainer class="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-12">
      <div class="content-w mx-auto stack-md items-center lg:mx-0 lg:items-start">
        <h1 class="flex w-full flex-col items-center gap-1 text-wrap-normal lg:items-start lg:text-4xl">
          <span>{{ site.name }}</span>
          <span class="text-sm font-medium text-muted md:text-base">
            في
            <span class="text-primary">{{ site.city }}</span>
            وضواحيها
          </span>
        </h1>
        <SiteHomeServiceBadge />
      </div>
      <SiteSectionsCardService />
    </UContainer>
  </section>
</template>
