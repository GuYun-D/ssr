<script lang="ts" setup>
const nuxtApp = useNuxtApp();

nuxtApp.provide("formData", () => {
  return "2022-12-14";
});

nuxtApp.provide("version", "1.0.0");

console.log(nuxtApp.$formData());
console.log(nuxtApp.$version);
</script>

<template>
  <div>Page: foo</div>
</template>

<style scoped></style>
