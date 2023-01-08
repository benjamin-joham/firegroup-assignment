<template>
  <div class="hstack gap-5 mt-2">
    <img src="../../assets/icon/Contact.png" alt="Contact logo" />
    <img src="../../assets/icon/Stores.png" alt="Stores logo" />
    <img src="../../assets/icon/Language.png" alt="Language logo" />
    <div class="ms-auto hstack gap-5">
      <img src="../../assets/icon/bag.png" alt="Bad logo" />
      <img src="../../assets/icon/wishlist.png" alt="Whishlist logo" />
      <img src="../../assets/icon/Login.png" alt="Login logo" />
      <img src="../../assets/icon/Search.png" alt="Search logo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'

defineComponent({
  name: 'SystemBar',
  components: {},
  data() {
    return {
      msg: 'super awesome',
      list: [0, 1, 2],
    }
  },
})
</script>

<style scoped>
img {
  width: 20px;
}
</style>
