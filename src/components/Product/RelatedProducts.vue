<template>
  <div class="container pe-0">
    <div class="row me-0">
      <div class="col-md-3 col-12">
        <div
          class="d-flex h-100 flex-column justify-content-center container align-items-center align-items-md-baseline"
        >
          <div class="align-self-baseline">
            <span class="category mb-4">Altiplano Collection</span>
            <p class="title">Related Pieces</p>
          </div>
          <div
            class="drag my-3 my-md-5 d-flex flex-column align-items-center justify-content-around p-3 p-xl-4"
          >
            <img src="src/assets/icon/arrow.png" alt="Left Arrow Icon" />
            <p class="m-0 lt-bold">DRAG</p>
          </div>
          <div class="slider-count d-flex justify-content-center">
            <p>3</p>
            <span>/</span>
            <p>7</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-9 h-auto slider">
        <Slider />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { type Price, type Product, state, type State } from '@/store'
import { ref, type Ref } from 'vue'
import Slider from './ProductSlider.vue'

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
  font-size: 2rem;
  font-weight: initial;
  color: var(--color-text-white);
}

.drag {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid rgba(140, 140, 140, 0.8);

  img {
    width: 30%;
  }

  p {
    font-family: 'Trade Gothic LT Bold';
    font-size: 1rem;
    color: var(--color-text-white);
  }
}

.slider {
  margin: 50px 0;
}

.slider-count {
  width: 100px;

  * {
    font-size: 1.5rem;
  }
}

@media (max-width: 1200px) {
  .drag {
    width: 80px;
    height: 80px;

    img {
      width: 40%;
    }

    p {
      font-family: 'Trade Gothic LT Bold';
      font-size: 0.8rem;
      color: var(--color-text-white);
    }
  }

  .slider-count {
    width: 80px;

    * {
      font-size: 1.2rem;
    }
  }
}

@media (max-width: 576px) {
  .drag {
    width: 80px;
    height: 80px;

    img {
      width: 40%;
    }

    p {
      font-family: 'Trade Gothic LT Bold';
      font-size: 0.8rem;
      color: var(--color-text-white);
    }
  }

  .slider-count {
    width: 80px;

    * {
      font-size: 1rem;
    }
  }
}
</style>
