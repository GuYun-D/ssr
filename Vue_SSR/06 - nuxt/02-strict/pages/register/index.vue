<script lang="ts" setup>
definePageMeta({
  validate: (route) => {
    console.log(route);
    return {
      statusCode: 401,
    };
  },
});
</script>

<template>
  <div>Page: foo 注册</div>
</template>

<style scoped></style>
