<template>
  <nav class="navbar-expand my-4 container">
    <ul class="navbar-nav justify-content-between">
      <li v-for="item in getFirstNavItemsHalf()" :key="item" class="nav-item">
        <a href="#" class="nav-text text-uppercase"> {{ item }}</a>
      </li>
      <li class="navbar-brand mx-2">
        <Logo />
      </li>
      <li
        v-for="item in getFirstNavItemsHalf(false)"
        :key="item"
        class="nav-item"
      >
        <a href="#" class="nav-text text-uppercase"> {{ item }}</a>
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
