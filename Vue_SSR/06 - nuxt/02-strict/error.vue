<template>
  <div>womendeai1</div>
  <button @click="backHome">返回首页</button>
</template>

<script setup lang="ts">
const props = defineProps({
  error: Object,
});

const backHome = () => {
  clearError({
    redirect: "/",
  });
};

console.log(props.error);
</script>