<template>
  <img
    v-bind:src="`src/assets/img/${
      getProduct(x).medias.find((x) => x.targetAttr === 'sliderImage')?.path
    }`"
    alt=""
  />
  <p>{{}}</p>
</template>
<script lang="ts">
import { state } from '@/store'
export default {
  name: 'SliderItem',
  setup(props, ctx) {
    const products = 'test'
    return {
      products,
    }
  },
}
</script>
