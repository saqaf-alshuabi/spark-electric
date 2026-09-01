<script setup lang="ts">
import { site } from '@/shared/data'
</script>

<template>
  <SharedHeroFrame class="grid grid-cols-1 items-center split-gap md:grid-cols-2">
    <div class="stack-md items-center text-center md:items-start md:text-start">
      <SharedHeroIntro
        live
        :badge="`كهربائي في ${site.city} وضواحيها`"
        :heading="site.name"
        :body="site.tagline"
      />

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
  </SharedHeroFrame>
</template>
