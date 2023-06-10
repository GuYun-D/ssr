<template>
  <div>
    <h1>我要认真了</h1>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: [
    function (to, from) {
      console.log("第一个中间件");
    },

    function (to, from) {
      console.log("第二个中间件");
    },

    "home", // 命名中间件
  ],
});
</script>
