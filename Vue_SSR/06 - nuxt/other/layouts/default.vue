<template>
  <div class="layout">
    <div class="header">我是hrader</div>
    <slot></slot>
    <div class="footer">footer</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  border: 1px solid #f40;
  text-align: center;
  line-height: 80px;
  font-size: 30px;
  background-color: #f40;
}


.footer {
  border: 1px solid rgb(0, 255, 98);
  text-align: center;
  line-height: 80px;
  font-size: 30px;
  background-color: aquamarine;
}
</style>
