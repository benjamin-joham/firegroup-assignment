<template>
  <nav class="navbar-expand-lg my-4 container">
    <a href="#" class="d-lg-none navbar-brand">
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
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse w-100" id="menuItems">
      <ul class="navbar-nav mx-auto">
        <li v-for="item in getFirstNavItemsHalf()" :key="item" class="nav-item">
          <a href="#" class="nav-link"> {{ item.toUpperCase() }}</a>
        </li>
        <a href="#" class="d-none d-lg-block">
          <img class="brand" src="@/assets/logo.png" alt="Brand Logo" />
        </a>
        <li
          v-for="item in getFirstNavItemsHalf(false)"
          :key="item"
          class="nav-item"
        >
          <a href="#" class="nav-link"> {{ item.toUpperCase() }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import Logo from '../common/Logo.vue'

const getFirstNavItemsHalf = (first: boolean = true) => {
  const navItems = [
    'Watches',
    'Jewellery',
    'Wedding',
    'Acedemy', // Academy
    'Company',
    'Stores',
  ]
  return navItems.filter((_item, idx) => (first ? idx < 3 : idx > 2))
}
</script>

<style scoped lang="scss">
// @import '../../../node_modules/bootstrap/scss/mixins';
// @import '../../../node_modules/bootstrap/scss/variables';
// :root {
//   --menu-item-url: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(202, 162, 92, 0.8)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
// }
img {
  &.brand {
    width: 13rem;
    // position: relative;
    // top: -0.5rem;

    @media (max-width: 992px) {
      top: 0;
    }
  }
  &.small {
    width: 11rem;
  }
}
#menuItems {
  background-color: var(--color-accent);
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
}
</style>
