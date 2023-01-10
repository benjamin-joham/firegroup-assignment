<template>
  <img
    v-bind:src="`src/assets/img/${
      item.medias.find((x) => x.targetAttr === 'sliderImage')?.path
    }`"
    alt=""
  />
  <p class="p-0 mb-2 mt-3 category">
    {{ item.category.toUpperCase() }}
  </p>
  <p class="mb-1 subtitle title">{{ item.subTitle }}</p>
  <p class="p-0 mb-4 sku">Watch {{ item.sku }}</p>
  <p class="p-0 mb-4 price">
    {{ getFormattedProductPrice(item.sku) }}
  </p>
</template>

<script setup lang="ts">
import { state, type ProductWithPrice } from '@/store'

defineProps<{ item: ProductWithPrice }>()

const { getFormattedProductPrice } = state
</script>

<style scoped lang="scss">
img {
  height: 180px;
}
p {
  color: var(--color-text-white);
  &.category {
    font-family: 'Trade Gothic LT Bold';
    font-size: 0.8em;
    color: var(--color-text);
  }
  &.sku {
    font-family: 'Trade Gothic LT Light';
    position: relative;
    font-size: 0.7em;
    color: var(--color-text-related-sku);
  }
  &.price {
    font-size: 0.8em;
  }
}
</style>
