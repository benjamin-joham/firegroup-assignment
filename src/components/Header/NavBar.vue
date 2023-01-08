<template>
  <nav class="navbar-expand my-4">
    <ul class="navbar-nav justify-content-between">
      <li v-for="item in getFirstNavItemsHalf()" :key="item" class="nav-item">
        <a href="#" class="nav-text"> {{ item.toUpperCase() }}</a>
      </li>
      <li class="nav-item mx-2">
        <img
          class="navbar-brand mx-auto"
          src="../../assets/logo.png"
          alt="Brand Logo"
        />
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
import { defineComponent } from 'vue'

defineComponent({
  name: 'NavBar',
  components: {},
})

// variables
const navItems = [
  'Watches',
  'Jewellery',
  'Wedding',
  'Acedemy',
  'Company',
  'Stores',
]

const getFirstNavItemsHalf = (first: boolean = true) => {
  return navItems.filter((_item, idx) => (first ? idx < 3 : idx > 2))
}
</script>

<style scoped>
a {
  font-weight: bold;
}
img {
  width: 16em;
}
</style>
