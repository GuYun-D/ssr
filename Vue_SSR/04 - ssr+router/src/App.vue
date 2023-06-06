<template>
  <div class="app" style="border: 1px solid red">
    <h2>Vue App</h2>
    <div>{{ count }}</div>
    <button @click="handleAddConter">+1</button>

    <div class="buttons">
      <router-link to="/">
        <button>Home</button>
      </router-link>

      <router-link to="/about">
        <button>About</button>
      </router-link>
    </div>

    <div style="margin-top: 50px">
      <router-view></router-view>
    </div>
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
