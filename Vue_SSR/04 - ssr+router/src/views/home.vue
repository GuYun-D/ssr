<template>
  <div class="app" style="border:  1px solid rgb(30, 255, 0);">
      <h2>Home</h2>
      <div>{{ count }}</div>
      <button @click="handleAddConter">+1</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(100)

const handleAddConter = () => {
  count.value++
}
</script>

<style lang="scss" scoped></style>