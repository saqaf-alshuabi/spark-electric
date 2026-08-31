<script setup lang="ts">
import type { ServiceDetail } from '~/shared/types/site'

const { whatsappUrl } = useContact()
const { service } = defineProps<{ service: ServiceDetail }>()
const { ui } = useAppConfig()
const images = ref([...service.gallery])

const canSwap = (index: number) =>
  index > 0 && index < images.value.length

const selectImage = (index: number) => {
  if (!canSwap(index)) return

  const big = images.value[0]
  const next = images.value[index]
  if (!big || !next) return

  images.value[0] = next
  images.value[index] = big
}
</script>

<template>
  <section class="section-y">
    <UContainer class="grid grid-cols-1 items-start split-gap md:grid-cols-2 md:items-center">
      <div class="order-1 stack-sm md:order-2">
        <div class="relative aspect-16/10 overflow-hidden rounded-2xl bg-muted/40">
          <Transition name="soft-fade">
            <div
              :key="images[0]?.src"
              class="absolute inset-0 overflow-hidden"
            >
              <NuxtPicture
                :src="images[0]?.src"
                :alt="images[0]?.alt"
                class="block size-full"
                :preload="{ fetchPriority: 'high' }"
                loading="eager"
                :img-attrs="{ class: 'size-full object-cover object-center' }"
                sizes="100vw md:50vw"
              />
            </div>
          </Transition>
        </div>

        <ul
          v-if="images.length > 1"
          class="grid grid-cols-3 gap-3"
        >
          <li
            v-for="(shot, index) in images.slice(1)"
            :key="shot.src"
            class="aspect-square cursor-pointer overflow-hidden rounded-xl bg-muted/40 focus-ring"
            @click="selectImage(index + 1)"
          >
            <NuxtPicture
              :src="shot.src"
              :alt="shot.alt"
              class="block size-full"
              loading="lazy"
              :img-attrs="{ class: 'size-full object-cover' }"
              sizes="280px"
            />
          </li>
        </ul>
      </div>

      <div class="order-2 stack-md md:order-1">
        <div class="stack-sm">
          <h1>
            {{ service.title }}
          </h1>
          <p>
            {{ service.description }}
          </p>
        </div>

        <div class="flex flex-wrap gap-3">
          <UButton
            :to="whatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            label="واتساب"
            :icon="ui.icons.whatsapp"
          />
          <UButton
            to="/services"
            label="خدمات"
            color="neutral"
            variant="link"
            class="lg:hidden"
          />
        </div>
      </div>
    </UContainer>
  </section>
</template>
