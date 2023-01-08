<template>
  <header class="container bg-white">
    <SystemBar />
    <NavBar />
  </header>

  <!-- <main>
    <TheWelcome />
  </main> -->
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import NavBar from './components/Header/NavBar.vue'
import SystemBar from './components/Header/SystemBar.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
defineComponent({
  name: 'App',
  components: {
    NavBar,
    SystemBar,
  },
})
</script>

<style scoped>
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
