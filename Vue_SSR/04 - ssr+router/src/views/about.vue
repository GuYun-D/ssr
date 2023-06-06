<template>
  <div class="app" style="border: 1px solid rgb(140, 0, 255)">
    <h2>about</h2>
    <div>{{ count }}</div>
    <button @click="handleAddConter">+1</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const count = ref(100);

const handleAddConter = () => {
  count.value++;
};
</script>

<style lang="scss" scoped></style>
