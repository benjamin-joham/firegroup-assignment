<template>
  <div class="row contact justify-content-between">
    <div class="col-2 row flex-column">
      <Logo small />
      <p class="mb-3">Walcherstrasse 9</p>
      <p>8006 Zürich</p>
      <div class="mt-5">
        <div class="phone mb-2 d-flex align-items-center">
          <p class="pe-4 type">T</p>
          <p>+41 (0) 10 20 30 40</p>
        </div>
        <div class="phone mb-2 d-flex align-items-center">
          <p class="pe-4 type">F</p>
          <p>+41 (0) 50 60 70 80</p>
        </div>
        <div class="phone mb-2 d-flex align-items-center">
          <p class="pe-4 type">M</p>
          <a class="email position-relative" href="mailto:contact@thebrand.com"
            >contact@thebrand.com</a
          >
        </div>
      </div>
    </div>
    <div class="col-2 row flex-column additional-links">
      <p class="column-title mb-4">Customer Care</p>
      <a
        v-for="item in customerCare"
        :key="item"
        class="mb-2 column-item"
        href="#"
      >
        {{ item }}
      </a>
    </div>
    <div class="col-6 row flex-column additional-links">
      <p class="column-title mb-4">Customer Care</p>
      <a
        v-for="item in stayInTouch"
        :key="item"
        class="mb-2 column-item"
        href="#"
      >
        {{ item }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './common/Logo.vue'
const customerCare = [
  'Contact Us',
  'Track your order',
  'Returns',
  "FAQ's",
  'Location Finder',
  'Service',
  'Product Care',
  'Gift Cards',
  'Sell your jewellery',
]
const stayInTouch = ['Sign up to our Newsletter', 'Magazine Download']
</script>

<style lang="scss">
.contact {
  color: var(--color-details);
}
.type {
  font-family: 'Trade Gothic LT Bold';
  font-size: 1rem;
}
.email {
  color: var(--color-accent);
  font-size: 0.8rem;
  top: 0.1rem;
}

.additional-links {
  font-family: 'Trade Gothic LT';

  .column-title {
    /* font-size: 1.2rem; */
    font-family: 'Trade Gothic LT Bold';
    color: var(--color-details);
  }
  .column-item {
    color: var(--color-text-additional-links);
  }
}
</style>
