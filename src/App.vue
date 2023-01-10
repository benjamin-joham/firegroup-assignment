<template>
  <!-- <img src="@/assets/Layout.png" alt="" /> -->
  <header class="container bg-white">
    <SystemBar />
    <NavBar />
  </header>

  <main>
    <HeroWrapper />
    <div class="my-5">
      <ProductDetails :details="activeProduct?.productDetails" />
      <ProductSpecifications :details="activeProduct?.productSpecifications" />
    </div>
    <RelatedProducts />
  </main>
</template>

<script lang="ts">
import NavBar from './components/Header/NavBar.vue'
import SystemBar from './components/Header/SystemBar.vue'
import HeroWrapper from './components/HeroWrapper.vue'
import ProductDetails from './components/ProductDetails.vue'
import ProductSpecifications from './components/ProductSpecifications.vue'
import RelatedProducts from './components/RelatedProducts.vue'
import { type State, state } from './store'
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
export default {
  name: 'App',
  components: {
    HeroWrapper,
    NavBar,
    SystemBar,
    RelatedProducts,
    ProductDetails,
    ProductSpecifications,
  },
  setup(): Pick<State, 'activeProduct'> {
    const data = state.products.find(({ isActive }) => isActive) || null
    state.setActiveProduct(data)
    return {
      activeProduct: state.activeProduct,
    }
  },
}
</script>

<style scoped>
header {
  padding: 0 8%;
}
/* 
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
