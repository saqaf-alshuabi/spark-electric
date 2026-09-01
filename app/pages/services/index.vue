<script setup lang="ts">
import { serviceSummaries, site } from '@/shared/data'

useSeoMeta({
  title: `كهربائي في ${site.city}`,
  description: 'تأسيس، ثريا وسبوت، تكييف، انتركوم، وأعطال، للبيت والمحل في مكة',
})
</script>

<template>
  <SharedHeroFrame class="stack-lg">
    <SharedHeroIntro
      badge="من التأسيس لين آخر لمبة"
      heading="كل اللي نسويه"
      body="اختر الخدمة وشوف الشغل بنفسك"
    />

    <ul class="grid grid-cols-1 grid-gap md:grid-cols-2 lg:grid-cols-3">
      <li
        v-for="(service, index) in serviceSummaries"
        :key="service.slug"
        class="reveal"
      >
        <SharedServiceListCard
          :icon="service.icon"
          :title="service.title"
          :description="service.description"
          :image="service.image"
          :image-alt="service.imageAlt"
          :to="`/services/${service.slug}`"
          :priority="index === 0"
        />
      </li>
    </ul>
  </SharedHeroFrame>
</template>
