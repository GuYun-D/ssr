# 引入vue-router

## 创建目录

```js
src
 | ----------- views
 |               |---------- home.vue
 |               |---------- about.vue
 | ----------- router 
 |               |---------- index.js

```

## 创建router

```js
import { createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/home.vue"),
  },
  {
    path: "/about",
    component: () => import("../views/about.vue"),
  },
];

/**
 * 因为我们不知道当前的路由是在服务端调用还是客户端调用，所以路由模式就应该由外界传递进来
 * @param {*} history
 */
export default (history) => {
  return createRouter({
    history,
    routes,
  });
};

```

然后两个页面都差不多的

```html
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
```

```html
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

```

修改App.vue,添加跳转组件

```html
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
```

