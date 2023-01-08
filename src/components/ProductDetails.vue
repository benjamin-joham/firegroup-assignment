<template>
  <section id="details">
    <div class="container">
      <div class="row">
        <div class="col-8">
          <div>
            <span v-if="data === 'productDetails'">Product Details</span>
            <span v-else>Specifications</span>
            <h2>{{ product[data].title }}</h2>
          </div>
          <ul>
            <li v-for="detail in product[data].data" :key="detail.title">
              <img
                v-bind:src="`src/assets/icon/${getIconSrc(detail.iconTarget)}`"
                alt="`${detail.brand} Icon`"
              />
              <p>{{ detail.title }}</p>
              <p>{{ detail.text }}</p>
            </li>
          </ul>
        </div>
        <div class="col-4">
          <img
            class="product"
            src="@/assets/img/product-detail.png"
            alt="Product Detail"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import type { Product } from '@/store'
import { defineComponent } from 'vue'
export default {
  name: 'ProductDetails',
  props: {
    product: {
      type: Object,
      default: () => {},
    },
    details: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, ctx) {
    const getIconSrc = (iconTarget: string) => {
      console.log('##', iconTarget)
      return props.product.medias.find((x) => x.targetAttr === iconTarget)?.path
    }
    const data = props.details ? 'productDetails' : 'productSpecifications'

    console.log(data)
    return {
      getIconSrc,
      data,
    }
  },
}
// defineComponent({
//   name: 'ProductDetails',
//   setup(props, ctx) {
//     const getIconSrc = () => {
//       console.log(props)
//     }
//     return {
//       getIconSrc,
//     }
//   },
// })
// defineProps<{

// }>()
</script>

<style lang="scss">
.product {
  width: 100%;
  background-color: black;
}
</style>
