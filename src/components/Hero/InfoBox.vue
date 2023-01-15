<template>
  <div class="infobox py-md-5">
    <span class="category text-uppercase">
      {{ `${activeProduct?.category} WATCHES` }}
    </span>
    <h1 class="title mb-1 mb-md-0">{{ activeProduct?.title }}</h1>
    <div class="extras ms-0 ms-md-2 ms-lg-5">
      <p class="price">
        {{ getFormattedProductPrice(activeProduct?.sku || '') }}
      </p>
      <p class="sku">Watch {{ activeProduct?.sku }}</p>
      <p class="description">{{ activeProduct?.shortDescription }}</p>
      <button class="cta text-uppercase">Add to Shopping Bag</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { state } from '@/store'

const { activeProduct, getFormattedProductPrice } = state
</script>

<style scoped lang="scss">
.infobox {
  .title {
    padding-right: 5rem;
  }

  .extras {
    color: rgb(140, 140, 140);
    margin-left: 4.5rem;

    .price {
      color: rgb(202, 162, 92);
      margin-bottom: 1em;
    }

    .sku {
      font-size: 0.7rem;
      font-family: 'Trade Gothic LT Light';
      margin: 0;
    }

    .description {
      font-size: 1.2rem;
      padding-right: 1rem;
      margin: 0.5rem 0 1.5rem 0;
    }

    .cta {
      font-family: 'Trade Gothic LT Bold';
      background-color: var(--color-accent);
      font-size: small;
      display: inline-flex;
      vertical-align: middle;
      padding: 0.5rem 1rem;
      border: none;
      color: var(--color-text-white);
    }
  }
}

@media (max-width: 992px) {
  h1 {
    font-size: 2.2rem;
  }
  .title {
    padding-right: 0;
  }

  .infobox .extras .description {
    font-size: 1rem;
  }
}
</style>
