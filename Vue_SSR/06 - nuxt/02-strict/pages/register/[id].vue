<template>
  <div></div>
</template>

<script setup>
const route = useRoute();
const { id } = route.params;
console.log("进来了", id);
definePageMeta({
  validate: (route) => {
    console.log(route);
    return {
      statusCode: 401
    };
  },
});
</script>

<style lang="scss" scoped></style>
