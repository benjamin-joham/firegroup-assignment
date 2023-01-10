<template>
  <div class="infobox">
    <span class="category">
      {{ `${activeProduct?.category.toUpperCase()} WATCHES` }}
    </span>
    <h1 class="title">{{ activeProduct?.title }}</h1>
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
</template>

<script setup lang="ts">
import { state } from '@/store'

const { activeProduct, getFormattedProductPrice } = state
</script>

<style scoped lang="scss">
.infobox {
  padding: 50px 0;

  // .category {
  //   color: var(--color-accent);
  //   display: block;
  //   font-size: 0.8em;
  //   font-family: 'Trade Gothic LT Bold';
  //   margin-bottom: 1em;
  // }

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
</style>
