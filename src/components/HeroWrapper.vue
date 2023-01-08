<template>
  <section id="heroWrapper" class="m-3">
    <div id="hero" class="">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-3">
            <div class="thumbnails row-expand">
              <div class="vstack gap-3 align-items-center">
                <img
                  v-for="(thumbnail, idx) in thumbnails"
                  :key="idx"
                  @click="active = idx"
                  v-bind:src="`src/assets/img/${thumbnail}`"
                  alt="Thumbnail Ultimate 1"
                  :style="{ opacity: idx === active ? 1 : 0.5 }"
                />
              </div>
            </div>
          </div>
          <div class="col-4">
            <img
              id="mainImage"
              v-bind:src="`src/assets/img/${thumbnails[active].split('_')[1]}`"
              alt="Piaget ALtiplano Ultimate front"
            />
          </div>
          <div class="col-5">
            <span class="category">{{
              `${data.category.toUpperCase()} WATCHES`
            }}</span>
            <h2>{{ data.title }}</h2>
            <div class="ms-5 extras">
              <span>{{ getProductPrice(data.sku) }}</span>
              <p class="sku">Watch {{ data.sku }}</p>
              <p class="description">{{ data.shortDescription }}</p>
              <button class="cta">
                {{ `${'Add to Shopping Bag'.toUpperCase()}` }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import type { Product, Price } from '@/store'
import { inject } from 'vue'
// import products from '@/assets/data/products.json'

const mainProduct = 'GOA535'
export default {
  name: 'HeroWrapper',
  setup() {
    const store = inject<{
      state: { products: Product[]; productPrices: Price[] }
    }>('store')
    // console.log('setup', store?.state.productPrices)
    return {
      products: store?.state.products,
      productPrices: store?.state.productPrices,
    }
  },
  data() {
    return {
      category: 'Piaget Watches',
      active: 0,
      thumbnails: [
        'thumb_ultimate.png',
        'thumb_ultimate-01.png',
        'thumb_ultimate-02.png',
      ],
      data: {} as {} | Product,
    }
  },
  methods: {
    getProductPrice(sku: Product['sku']): Price['priceFormatted'] {
      console.log(sku)
      //   return ''
      const price = this.productPrices?.find(
        (x) => x.sku === sku
      )?.priceFormatted
      if (!price) return '0'
      const [extractedPrice, currency] = price.split(' ')
      return `${currency} ${extractedPrice}`
    },
  },
  beforeMount() {
    this.data = this.products?.find(({ sku }) => sku === mainProduct) || {}
  },
  mounted() {
    // console.log(this.products)
  },
}
</script>

<style scoped lang="scss">
#hero {
  background-color: rgb(240, 240, 240);
  //   height: 400px;
  width: 100%;

  .thumbnails img {
    width: 30%;
    background-color: white;
    // opacity: 0.5;
    // .active {
    //   opacity: inherit !important;
    // }
  }
}
#mainImage {
  //   width: 100%;
  height: 400px;
  object-fit: contain;
}

.category {
  font-size: 0.8em;
}
.extras {
  color: rgb(140, 140, 140);
  .sku {
    font-size: small;
    font-family: 'Trade Gothic LT';
    margin: 0;
  }
  button.cta {
    font-size: small;
    display: inline-flex;
    vertical-align: middle;
    padding: 1em;
    font-family: 'Trade Gothic LT Bold';
    background-color: rgb(202, 162, 92);
    border: none;
    color: white;
  }
}
</style>
