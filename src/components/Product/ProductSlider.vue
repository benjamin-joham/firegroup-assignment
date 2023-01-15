<template>
  <div class="wrapper position-relative">
    <ul class="items p-0 list-unstyled position-relative w-100 overflow-hidden">
      <li
        v-for="item in data"
        :key="item.title"
        class="item d-inline-block fw-bold"
      >
        <div
          class="d-flex flex-column align-items-center bg-black slider-wrapper"
        >
          <SliderItem :item="item" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue'
import { state, type ProductWithPrice } from '@/store'
import SliderItem from './SliderItem.vue'

const { products, getProductPrice } = state
const data = ref<ProductWithPrice[] | null>(null)

onBeforeMount(() => {
  const relatedProducts = products.filter((x) =>
    state.activeProduct?.relatedProducts.includes(x.sku)
  )
  data.value = relatedProducts
    .map((x) => {
      const test = {
        ...x,
        price: getProductPrice(x.sku),
      }
      return test
    })
    .sort((a, b) => b.price - a.price)
})

onMounted(() => {
  const sliderScript = document.createElement('script')
  sliderScript.setAttribute('src', 'src/scripts/slider.js')
  document.head.appendChild(sliderScript)
})
</script>

<style scoped lang="scss">
.wrapper {
  &:after {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;

    content: '';
    display: block;
    height: 100%;
    background: linear-gradient(
      -90deg,
      var(--color-background-related-pieces),
      transparent 70%
    );
    width: 100px;

    @media (max-width: 576px) {
      position: unset;
    }
  }

  .items {
    white-space: nowrap;
    font-size: 0;
    cursor: pointer;

    &.active {
      cursor: grab;
    }

    .item {
      margin-left: 30px;
      user-select: none;
      width: 250px;
      font-size: 1rem;

      &:last-child {
        margin-right: 50px;
      }

      .slider-wrapper {
        margin-top: 80px;
      }
    }
  }
}
</style>
