<template>
  <section id="relatedProducts" class="container">
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
          <div class="wrapper position-relative">
            <ul class="items p-0 list-unstyled position-relative">
              <li v-for="x in data" :key="x.title" class="item">
                <div class="d-flex flex-column align-items-center">
                  <img
                    v-bind:src="`src/assets/img/${
                      x.medias.find((x) => x.targetAttr === 'sliderImage')?.path
                    }`"
                    alt=""
                  />
                  <p class="p-0 m-0 mt-4 category">
                    {{ x.category.toUpperCase() }}
                  </p>
                  <p class="p-0 m-0 subtitle title">{{ x.subTitle }}</p>
                  <p class="p-0 m-0 mb-2 sku">Watch {{ x.sku }}</p>
                  <p class="p-0 m-0 price">
                    {{ getFormattedProductPrice(x.sku) }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { type Price, type Product, state, type State } from '@/store'
import { ref, type Ref } from 'vue'

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
    // const relatedProducts = state.products.filter((x) =>
    //   state.activeProduct?.relatedProducts.includes(x.sku)
    // )
    // const relatedProductsPrice = relatedProducts.fi
    const data = ref<ProductWithPrice[] | null>(null)
    return {
      activeProduct: state.activeProduct,
      products: state.products,
      getProductPrice: state.getProductPrice,
      data,
      getFormattedProductPrice: state.getFormattedProductPrice,
    }
  },
  beforeMount() {
    const relatedProducts = state.products.filter((x) =>
      state.activeProduct?.relatedProducts.includes(x.sku)
    )
    const relatedProductsPrice = relatedProducts
      .map((x) => {
        const test = {
          ...x,
          price: this.getProductPrice(x.sku),
        }
        return test
      })
      .sort((a, b) => b.price - a.price)
    console.log(relatedProductsPrice)
    this.data = relatedProductsPrice
  },
  mounted() {
    const sliderScript = document.createElement('script')
    sliderScript.setAttribute('src', 'src/scripts/slider.js')
    document.head.appendChild(sliderScript)
  },
}
</script>

<style scoped lang="scss">
$bg-color: #222;
$margin: 50px;

#relatedProducts {
  color: white;
  background-color: rgb(15, 15, 15);
  // height: 400px;
  > div {
    padding: 0 auto;
  }
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

  .wrapper {
    position: relative;

    &:after {
      position: absolute;
      top: 0;
      z-index: 1;

      content: '';
      display: block;
      height: 100%;
    }

    &:after {
      right: 0;
      background: linear-gradient(-90deg, black, transparent);
      width: 150px;
    }
  }

  .items {
    position: relative;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    font-size: 0;
    cursor: pointer;

    &.active {
      cursor: grab;
    }
  }

  .item {
    display: inline-block;
    margin-left: 30px;
    user-select: none;
    overflow: visible;
    width: 250px;
    color: $bg-color;
    font-size: 1rem;
    font-weight: bold;
    background-color: black;

    &:last-child {
      margin-right: $margin;
    }

    img {
      height: 180px;
    }

    p {
      color: white;
      &.category {
        font-family: 'Trade Gothic LT Bold';
        font-size: 0.5em;
        color: rgb(140, 140, 140);
      }
      &.sku {
        font-family: 'Trade Gothic LT Light';
        position: relative;
        top: -0.5em;
        font-size: 0.5em;
        color: rgb(128, 128, 128);
      }
      &.price {
        font-size: 0.8em;
      }
    }
  }
}
</style>
