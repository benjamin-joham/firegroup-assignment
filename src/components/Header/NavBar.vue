<template>
  <nav class="navbar-expand my-4 container">
    <ul class="navbar-nav justify-content-between">
      <li v-for="item in getFirstNavItemsHalf()" :key="item" class="nav-item">
        <a href="#" class="nav-text"> {{ item.toUpperCase() }}</a>
      </li>
      <li class="nav-item mx-2">
        <Logo />
      </li>
      <li
        v-for="item in getFirstNavItemsHalf(false)"
        :key="item"
        class="nav-item"
      >
        <a href="#" class="nav-text"> {{ item.toUpperCase() }}</a>
      </li>
    </ul>
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
.nav-item {
  &:nth-of-type(2):hover {
    color: blue;
  }
}
.nav-text {
  // font-weight: bold;
  font-size: 1rem;
  // color: var(--color-links);

  // &:nth-child(1):hover {
  //   color: red;
  // }
  // &:hover {
  //   color: var(--color-accent);
  // }
}
</style>
