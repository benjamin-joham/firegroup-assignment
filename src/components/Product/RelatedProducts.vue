<template>
  <div class="container pe-0">
    <div class="row me-0">
      <div class="col-3">
        <div
          class="d-flex h-100 flex-column align-items-center justify-content-center"
        >
          <span class="category">Altiplano Collection</span>
          <p class="title">Related Pieces</p>
          <div
            class="drag d-flex flex-column align-items-center justify-content-center"
          >
            <img src="src/assets/icon/arrow.png" alt="Left Arrow Icon" />
            <p class="m-0 lt-bold">DRAG</p>
          </div>
        </div>
      </div>
      <div class="col-9 h-auto slider">
        <Slider />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { type Price, type Product, state, type State } from '@/store'
import { ref, type Ref } from 'vue'
import Slider from './Slider.vue'

type ProductWithPrice = Product & {
  price: Price['price']
}

export default {
  name: 'RelatedProducts',
  setup(): Pick<
    State,
    | 'products'
    | 'activeProduct'
    | 'getProductPrice'
    | 'getFormattedProductPrice'
  > & {
    data: Ref<ProductWithPrice[] | null>
  } {
    const data = ref<ProductWithPrice[] | null>(null)
    return {
      activeProduct: state.activeProduct,
      products: state.products,
      getProductPrice: state.getProductPrice,
      data,
      getFormattedProductPrice: state.getFormattedProductPrice,
    }
  },
  components: { Slider },
}
</script>

<style scoped lang="scss">
.title {
  font-family: 'Minion Pro Regular';
}

.drag {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid rgb(140, 140, 140);
}

.slider {
  margin: 50px 0;
}
</style>
