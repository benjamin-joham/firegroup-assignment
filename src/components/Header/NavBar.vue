<template>
  <nav class="navbar navbar-expand-lg my-4 container border-lg pb-0">
    <div
      class="container-fluid px-0"
      :style="menuOpen ? { border: '1px solid var(--color-accent)' } : {}"
    >
      <a href="#" class="d-lg-none navbar-brand" :class="menuOpen && 'open'">
        <img class="brand" src="@/assets/logo.png" alt="Brand Logo" />
      </a>

      <button
        class="navbar-toggler custom-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#menuItems"
        aria-controls="menuItems"
        aria-expanded="false"
        aria-label="Toggle Navigation"
        @click="handleClick"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse w-100" id="menuItems">
        <ul class="navbar-nav w-100 align-items-center justify-content-between">
          <li
            v-for="item in getFirstNavItemsHalf()"
            :key="item"
            class="nav-item"
          >
            <a href="#" class="nav-link text-uppercase"> {{ item }}</a>
          </li>
          <a href="#" class="d-none d-lg-block">
            <img class="brand" src="@/assets/logo.png" alt="Brand Logo" />
          </a>
          <li
            v-for="item in getFirstNavItemsHalf(false)"
            :key="item"
            class="nav-item"
          >
            <a href="#" class="nav-link text-uppercase"> {{ item }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const getFirstNavItemsHalf = (first: boolean = true) => {
  const navItems = [
    'Watches',
    'Jewellery',
    'Wedding',
    'Academy',
    'Company',
    'Stores',
  ]
  return navItems.filter((_item, idx) => (first ? idx < 3 : idx > 2))
}
const menuOpen = ref(false)
const handleClick = (e: Event) => {
  e.preventDefault()
  menuOpen.value = !menuOpen.value
}
</script>

<style scoped lang="scss">
.navbar-brand {
  // move to mid
  margin: 0 auto;
  // adjust burger menu width
  padding-left: 55px;
}
img {
  &.brand {
    width: 13rem;

    @media (max-width: 992px) {
      top: 0;
    }
  }
}

a {
  color: var(--color-links);
}
.custom-toggler.navbar-toggler {
  border: 1px solid var(--color-accent);
}
.custom-toggler .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(202, 162, 92, 0.8)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
  stroke: var(--color-accent);
}

@media (max-width: 992px) {
  a {
    color: var(--color-text-white);
  }
  #menuItems {
    text-align: center;
    background-color: rgba(202, 162, 92, 0.6);

    .nav-item {
      margin: 0.5em;
      width: 200px;
    }
  }
}
</style>
