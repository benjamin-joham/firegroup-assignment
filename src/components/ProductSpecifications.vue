<template>
  <section id="details">
    <div class="container">
      <div class="row">
        <div class="col-4 ps-0">
          <img
            class="product bg-black"
            src="@/assets/img/specification.png"
            alt="Product Detail"
          />
        </div>
        <div class="col-8 pe-0">
          <div>
            <span class="category">Specifications</span>
            <h2>{{ details.title }}</h2>
          </div>
          <ProductDataList :specifications="true" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import ProductDataList from './ProductDataList.vue'
export default {
  name: 'ProductSpecifications',
  props: {
    details: {
      type: Object,
      default: () => {},
    },
  },
  components: { ProductDataList },
}
</script>

<style lang="scss">
.product {
  width: 100%;
}
</style>
