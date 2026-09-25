<script setup lang="ts">
import type { FaqItem } from '~/shared/types/site'

defineProps<{
  faqs: FaqItem[]
  heading: string
}>()
</script>

<template>
  <section class="section-y">
    <UContainer class="stack-md items-center">
      <h2 class="reveal">
        {{ heading }}
      </h2>

      <ul class="mx-auto stack-xs w-full max-w-3xl">
        <li
          v-for="faq in faqs"
          :key="faq.question"
          class="reveal"
        >
          <details
            name="service-faq"
            class="group details-reveal card-surface motion-press transition-colors open:bg-default active:bg-default can-hover:hover:bg-default"
          >
            <summary
              class="flex cursor-pointer list-none items-center justify-between gap-4 card-p focus-ring [&::-webkit-details-marker]:hidden"
            >
              <h3 class="text-start">
                {{ faq.question }}
              </h3>
              <ServiceIconBadge
                name="i-ph-plus"
                tone="open"
              />
            </summary>

            <p class="px-(--space-card) pb-(--space-card) text-start">
              {{ faq.answer }}
            </p>
          </details>
        </li>
      </ul>
    </UContainer>
  </section>
</template>
