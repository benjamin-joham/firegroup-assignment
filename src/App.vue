<template>
  <header class="container">
    <Header />
  </header>

  <main>
    <section id="hero" class="mx-3 py-5">
      <HeroWrapper />
    </section>
    <section
      id="productDetails"
      class="container-fluid container-lg my-lg-5 py-3 py-md-5"
    >
      <ProductDetails :details="data?.productDetails" />
    </section>

    <section
      id="productSpecifications"
      class="container-fluid container-lg my-lg-5 py-3 py-md-5"
    >
      <ProductSpecifications :details="data?.productSpecifications" />
    </section>

    <section id="relatedPieces" class="my-lg-5 py-3 py-lg-5 mx-3">
      <RelatedProducts />
    </section>
  </main>
  <footer class="container my-5 py-5">
    <Footer />
  </footer>
</template>

<script setup lang="ts">
import { state } from './store'
import Footer from './components/Footer.vue'
import Header from './components/Header/Header.vue'
import HeroWrapper from './components/Hero/HeroWrapper.vue'
import ProductDetails from './components/Product/ProductDetails.vue'
import ProductSpecifications from './components/Product/ProductSpecifications.vue'
import RelatedProducts from './components/Product/RelatedProducts.vue'

const data = state.products.find(({ isActive }) => isActive)
state.setActiveProduct(data!)
</script>

<style scoped>
header {
  background-color: var(--color-background);
}

#hero {
  background-color: var(--color-background-hero);
}

#relatedPieces {
  background-color: var(--color-background-related-pieces);
}
</style>
