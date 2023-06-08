# ssr +pinia

首先安装pinia

```js
yarn add pinia
```

## 创建仓库

```js
import { defineStore } from "pinia";

export const useHomeStore = defineStore("home", {
  state() {
    return {
      count: 0,
    };
  },

  actions: {
    increment() {
      this.count++;
    },

    decrement() {
      this.count--;
    },
  },
});

```

然后在client和server中分别使用，为了避免跨端污染，还是要创建一个新的pinia

- 服务端

```js

import { createPinia } from "pinia";

server.get("/*", async (req, res) => {

  let app = createApp();
  let pinia = createPinia();

  app.use(pinia);
  
});

server.listen(3000, () => {
  console.log("服务器启动成功");
});

```

- 客户端

```js
import { createApp } from "vue";
import { createWebHashHistory } from "vue-router";
import { createPinia } from "pinia";
import App from "../App.vue";
import createRouter from "../router";

const router = createRouter(createWebHashHistory());
const pinia = createPinia();

let app = createApp(App);

app.use(router);
app.use(pinia);
router.isReady().then((res) => {
  app.mount("#app");
});

```

然后页面使用

```html
<template>
  <div class="app" style="border: 1px solid rgb(140, 0, 255)">
    <h2>about</h2>
    <div>{{ count }}</div>
    <button @click="handleAddConter">+1</button>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useHomeStore } from "../store";

const homeStore = useHomeStore();
const { count } = storeToRefs(homeStore);
const handleAddConter = () => {
  count.value++;
};
</script>
```

