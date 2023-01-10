<template>
  <section id="hero" class="container text-center">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-2 h-100">
          <div class="thumbnails row-expand h-100">
            <div
              class="vstack gap-3 align-items-end h-100 justify-content-center"
            >
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
        <div class="col-4 h-100">
          <img
            id="mainImage"
            v-bind:src="`src/assets/img/${thumbnails[active].split('_')[1]}`"
            alt="Piaget ALtiplano Ultimate front"
          />
        </div>
        <div class="col-6 h-100 text-start info">
          <span class="category">
            {{ `${activeProduct?.category.toUpperCase()} WATCHES` }}
          </span>
          <h1>{{ activeProduct?.title }}</h1>
          <div class="extras">
            <p class="price">
              {{ getFormattedProductPrice(activeProduct?.sku || '') }}
            </p>
            <p class="sku">Watch {{ activeProduct?.sku }}</p>
            <p class="description">{{ activeProduct?.shortDescription }}</p>
            <button class="cta">
              {{ `${'Add to Shopping Bag'.toUpperCase()}` }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { type State, state } from '@/store'
import { ref, type Ref } from 'vue'
// import products from '@/assets/data/products.json'
interface Props {
  category: string
  active: Ref<number>
  thumbnails: string[]
}
export default {
  name: 'HeroWrapper',
  setup(): Props & Partial<State> {
    const active = ref(0)
    return {
      activeProduct: state.activeProduct,
      products: state.products,
      productPrices: state.productPrices,
      getFormattedProductPrice: state.getFormattedProductPrice,
      category: 'Piaget Watches',
      active,
      thumbnails: [
        'thumb_ultimate.png',
        'thumb_ultimate-01.png',
        'thumb_ultimate-02.png',
      ],
    }
  },
}
</script>

<style scoped lang="scss">
#hero {
  background-color: rgb(240, 240, 240);
  padding: 4rem;

  .container > div {
    // height: 500px;
  }

  .thumbnails img {
    width: 45%;
    background-color: white;
    // opacity: 0.5;
    // .active {
    //   opacity: inherit !important;
    // }
  }
  #mainImage {
    //   width: 100%;
    max-width: 100%;
    height: 500px;
    object-fit: cover;
  }

  .info {
    padding: 50px 0;
  }

  .extras {
    color: rgb(140, 140, 140);
    margin-left: 4.5rem;
  }
}
</style>
