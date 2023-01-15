<template>
  <div class="row contact justify-content-between">
    <div
      class="col-xl-3 col-md-4 d-flex align-items-md-baseline align-items-center flex-column mb-md-0 mb-4 mx-auto"
    >
      <a href="#">
        <img class="brand" src="@/assets/logo.png" alt="Brand Logo" />
      </a>
      <p class="mt-4 mb-3">Walcherstrasse 9</p>
      <p>8006 Zürich</p>
      <div class="mt-4">
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
    <div
      class="col-xl-2 col-md-3 d-flex align-items-md-baseline align-items-center flex-column additional-links mx-auto mb-md-0 mb-4"
    >
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
    <div
      class="col-xl-6 col-md-4 d-flex align-items-md-baseline align-items-center text-center flex-column additional-links mx-auto mb-md-0 mb-4"
    >
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
    <div class="border-top mt-5 pt-5 ps-0 mx-2">
      <p class="copyright">© Copyright 2018 The Brand</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './common/BrandLogo.vue'
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
a > img {
  width: 10rem;
}
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
    font-family: 'Trade Gothic LT Bold';
    color: var(--color-details);
  }
  .column-item {
    color: var(--color-text-additional-links);
  }
}
.copyright {
  color: var(--color-text-additional-links);
}
</style>
