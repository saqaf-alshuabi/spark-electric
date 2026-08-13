<script setup lang="ts">
import type { ServiceItem } from '@/shared/types/site'

const props = defineProps<{
  services: ServiceItem[]
  title: string
  description: string
}>()

const activeSlug = ref(props.services[0]?.slug ?? '')

const activeService = computed(() =>
  props.services.find(service => service.slug === activeSlug.value) ?? props.services[0],
)

function setActive(slug: string) {
  activeSlug.value = slug
}
</script>

<template>
  <div class="hidden items-start gap-10 lg:grid lg:grid-cols-12 xl:gap-12">
    <div class="stack-lg min-w-0 lg:col-span-7">
      <div class="stack-sm max-w-xl">
        <h1>
          {{ title }}
        </h1>
        <p>
          {{ description }}
        </p>
      </div>

      <ol class="list-none divide-y divide-muted/50">
        <li
          v-for="(service, index) in services"
          :key="service.slug"
        >
          <NuxtLink
            :to="`/services/${service.slug}`"
            class="group -mx-3 flex items-start gap-4 rounded-lg px-3 py-6 transition-colors"
            :class="activeSlug === service.slug
              ? 'bg-muted/40 text-highlighted'
              : 'text-muted hover:bg-muted/25 hover:text-highlighted'"
            @mouseenter="setActive(service.slug)"
            @focus="setActive(service.slug)"
          >
            <span class="mt-1 w-8 shrink-0 font-mono text-sm tabular-nums text-primary/80">
              {{ String(index + 1).padStart(2, '0') }}
            </span>

            <div class="min-w-0 flex-1 stack-sm">
              <div class="flex items-center justify-between gap-3">
                <h3 :class="activeSlug === service.slug ? 'text-highlighted' : ''">
                  {{ service.title }}
                </h3>
                <SharedLinkArrow
                  reveal="hover"
                  :active="activeSlug === service.slug"
                />
              </div>

              <template v-if="activeSlug === service.slug">
                <p>
                  {{ service.description }}
                </p>
                <ul class="flex flex-wrap gap-x-3 gap-y-1.5 text-sm text-muted">
                  <li
                    v-for="item in service.highlights"
                    :key="item"
                    class="flex items-center gap-1.5"
                  >
                    <SharedBulletDot />
                    {{ item }}
                  </li>
                </ul>
              </template>
            </div>
          </NuxtLink>
        </li>
      </ol>
    </div>

    <div class="sticky top-28 lg:col-span-5">
      <div class="relative aspect-4/3 overflow-hidden rounded-lg bg-muted/40">
        <Transition
          name="slide-image"
          mode="out-in"
        >
          <NuxtImg
            v-if="activeService"
            :key="activeService.slug"
            :src="activeService.image"
            :alt="activeService.imageAlt"
            class="absolute inset-0 size-full object-contain p-3"
            sizes="480px lg:560px"
          />
        </Transition>
      </div>
    </div>
  </div>
</template>
