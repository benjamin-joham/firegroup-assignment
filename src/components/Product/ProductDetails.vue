<template>
  <div class="container">
    <div class="row justify-content-between">
      <div class="col-7 ps-0 d-flex flex-column align-items-center">
        <div class="col-10 mb-5">
          <span class="category text-uppercase">Product Details</span>
          <h2>{{ details?.title }}</h2>
        </div>
        <div
          class="row-expand justify-content-between align-self-baseline w-100"
        >
          <DataList />
        </div>
      </div>
      <div class="col-4 pe-0 text-end">
        <img
          class="product bg-black"
          src="@/assets/img/product-detail.png"
          alt="Product Detail"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/store'
import DataList from '../common/DataList.vue'
defineProps<{ details?: Product['productDetails'] }>()
</script>

<style lang="scss">
.product {
  width: 350px;
}
.img {
  width: 40px;
  height: 40px;
}
</style>
