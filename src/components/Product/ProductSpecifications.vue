<template>
  <div class="container-fluid container-md">
    <div
      class="row row-lg-expanded flex-column flex-md-row justify-content-center justify-content-md-between align-items-center align-items-md-baseline"
    >
      <div
        class="col-7 col-md-3 offset-md-0 offset-xl-1 px-0 text-md-end my-auto ms-lg-5 d-flex d-md-block justify-content-center order-last order-md-first"
      >
        <img
          class="product bg-black"
          src="@/assets/img/specification.png"
          alt="Product Detail"
        />
      </div>
      <div
        class="col-7 col-md-6 ps-0 pe-0 pe-md-1 d-flex flex-column align-items-lg-center"
      >
        <div
          class="col-lg-10 mb-3 mb-md-5 align-self-baseline align-self-xl-center"
        >
          <span class="category text-uppercase">Specifications</span>
          <h2>{{ details?.title }}</h2>
        </div>
        <div
          class="row-expand justify-content-between align-self-baseline w-100"
        >
          <DataList :specifications="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/store'
import DataList from '../common/DataList.vue'
defineProps<{ details?: Product['productSpecifications'] }>()
</script>

<style lang="scss">
.product {
  width: 100%;
  max-width: 350px;
}

@media (max-width: 992px) {
  .product {
    max-width: 280px;
    margin-left: -5rem;
  }
}

@media (max-width: 768px) {
  .product {
    max-width: 220px;
    margin-left: -3rem;
  }
}
</style>
