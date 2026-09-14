<script setup lang="ts">
import type { FaqItem } from '~/shared/types/site'

defineProps<{
  faqs: FaqItem[]
  heading: string
}>()
</script>

<!--
  Native <details> on purpose: the answers stay in the prerendered HTML, so
  crawlers read them even while collapsed, and it costs no JavaScript.
  Shared `name` keeps only one item open at a time.
-->
<template>
  <section class="section-y">
    <UContainer class="stack-md items-center">
      <h2 class="reveal">
        {{ heading }}
      </h2>

      <ul class="stack-xs w-full">
        <li
          v-for="faq in faqs"
          :key="faq.question"
          class="reveal"
        >
          <details
            name="service-faq"
            class="group details-reveal rounded-2xl border border-default/60 bg-default/40 transition-colors duration-300 ease-out open:bg-default can-hover:hover:bg-default"
          >
            <summary
              class="flex cursor-pointer list-none items-center justify-between gap-4 card-p focus-ring [&::-webkit-details-marker]:hidden"
            >
              <h3 class="text-start">
                {{ faq.question }}
              </h3>
              <span
                class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-open:bg-primary"
              >
                <UIcon
                  name="i-ph-plus"
                  class="size-5 text-primary transition-transform duration-300 group-open:rotate-45 group-open:text-inverted"
                />
              </span>
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
