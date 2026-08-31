<script setup lang="ts">
import { site } from '@/shared/data'
</script>

<template>
  <section class="relative isolate overflow-hidden hero-y">
    <div
      class="pointer-events-none absolute inset-0 -z-10 hero-aura"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute inset-0 -z-10 hero-grid"
      aria-hidden="true"
    />

    <UContainer class="grid grid-cols-1 items-center split-gap md:grid-cols-2">
      <div class="stack-md items-center text-center md:items-start md:text-start">
        <div class="stack-sm items-center md:items-start">
          <p class="rise inline-flex items-center gap-2 rounded-full border border-default bg-default/40 py-1.5 ps-2.5 pe-3.5 caption-sm backdrop-blur-sm">
            <span class="relative flex size-2">
              <span class="absolute inline-flex size-full animate-ping rounded-full bg-primary/60 motion-reduce:animate-none" />
              <span class="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            كهربائي في {{ site.city }} وضواحيها
          </p>

          <h1 class="rise heading-gradient [animation-delay:80ms]">
            {{ site.name }}
          </h1>

          <p class="rise max-w-md [animation-delay:160ms]">
            {{ site.tagline }}
          </p>
        </div>

        <div class="rise flex w-full flex-wrap items-center justify-center gap-3 [animation-delay:240ms] md:justify-start">
          <SharedContactButton
            channel="whatsapp"
            size="xl"
            class="min-h-11"
          />
          <SharedContactButton
            channel="phone"
            variant="outline"
            size="xl"
            class="min-h-11"
          />
        </div>
      </div>

      <SiteSectionsCardService />
    </UContainer>
  </section>
</template>
