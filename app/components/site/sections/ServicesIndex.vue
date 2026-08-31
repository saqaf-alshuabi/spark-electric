<script setup lang="ts">
import type { ServiceSummary } from '@/shared/types/site'

const { services, title } = defineProps<{ services: ServiceSummary[], title: string }>()

const activeSlug = ref(services[0]?.slug ?? '')
const setActive = (slug: string) => {
  activeSlug.value = slug
}
const setActiveHover = useDebounceFn(setActive, 140)
const isActive = (slug: string) => activeSlug.value === slug
const activeService = computed(() => services.find(service => service.slug === activeSlug.value) ?? services[0])
const linkClass = (slug: string) => isActive(slug) ? 'bg-muted/40 text-highlighted' : 'text-muted hover:bg-muted/25 hover:text-highlighted'
</script>

<template>
  <div class="hidden items-start split-gap lg:grid lg:grid-cols-12">
    <div class="stack-lg min-w-0 lg:col-span-7">
      <div class="stack-sm ">
        <h1 class="reveal">
          {{ title }}
        </h1>
      </div>

      <ol class="divide-y divide-muted/50">
        <li
          v-for="(service, index) in services"
          :key="service.slug"
        >
          <NuxtLink
            :to="`/services/${service.slug}`"
            class="group flex items-start gap-5 rounded-lg card-p transition-colors focus-ring"
            :class="linkClass(service.slug)"
            @mouseenter="setActiveHover(service.slug)"
            @focus="setActive(service.slug)"
          >
            <span class="mt-1 w-8 shrink-0 mono-nums text-primary/80">
              {{ String(index + 1).padStart(2, '0') }}
            </span>

            <div class="min-w-0 flex-1 stack-sm">
              <div class="flex items-center justify-between gap-3">
                <h3
                  :class="{ 'text-muted': !isActive(service.slug) }"
                >
                  {{ service.title }}
                </h3>
                <SharedLinkArrow
                  reveal="hover"
                  :active="isActive(service.slug)"
                />
              </div>

              <template v-if="isActive(service.slug)">
                <p>
                  {{ service.description }}
                </p>
              </template>
            </div>
          </NuxtLink>
        </li>
      </ol>
    </div>

    <div class="sticky top-28 lg:col-span-5 ">
      <div class="relative aspect-4/3 overflow-hidden rounded-lg bg-muted/40">
        <Transition name="soft-fade">
          <div
            v-if="activeService"
            :key="activeService.slug"
            class="absolute inset-0"
          >
            <NuxtPicture
              :src="activeService.image"
              :alt="activeService.imageAlt"
              class="block size-full"
              preload
              loading="eager"
              :img-attrs="{ class: 'size-full object-cover' }"
              sizes="480px lg:560px"
            />
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>
