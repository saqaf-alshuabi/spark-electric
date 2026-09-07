<script setup lang="ts">
import { site } from '@/shared/data'
</script>

<template>
  <HeroFrame class="grid grid-cols-1 items-center split-gap md:grid-cols-2">
    <div class="stack-md items-center text-center md:items-start md:text-start">
      <HeroIntro
        live
        :badge="`كهربائي في ${site.city} وضواحيها`"
        :heading="site.name"
        :body="site.tagline"
      />

      <ContactActions
        class="rise w-full justify-center [animation-delay:240ms] md:justify-start"
      />
    </div>

    <LazyHeroCarousel hydrate-on-idle />
  </HeroFrame>
</template>
