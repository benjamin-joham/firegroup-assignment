<template>
  <!-- <img src="@/assets/Layout.png" alt="" /> -->
  <header class="container bg-white">
    <SystemBar />
    <NavBar />
  </header>

  <main>
    <HeroWrapper />
    <div class="my-5">
      <ProductDetails :details="data?.productDetails" />
      <ProductSpecifications :details="data?.productSpecifications" />
    </div>
    <RelatedProducts />
  </main>
</template>

<script setup lang="ts">
import NavBar from './components/Header/NavBar.vue'
import SystemBar from './components/Header/SystemBar.vue'
import HeroWrapper from './components/HeroWrapper.vue'
import ProductDetails from './components/ProductDetails.vue'
import ProductSpecifications from './components/ProductSpecifications.vue'
import RelatedProducts from './components/RelatedProducts.vue'
import { state } from './store'

const data = state.products.find(({ isActive }) => isActive) || null
state.setActiveProduct(data)
</script>
