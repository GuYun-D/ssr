# layout布局

## 默认布局

使用`NuxtLayout`组件进行跳转

可以在app.vue中使用

```js
<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>
```

在根目录中创建`layout`文件夹，创建default.vue文件

```html
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

```

核心思想就是使用插槽，创建好之后需要重启项目

## 自定义布局

如果我们不想要这种默认布局，比如登录页，肯定要自己去指定了

```js
<NuxtLayout name="custorm-login">
    <NuxtPage></NuxtPage>
</NuxtLayout>
```

就是在NuxtLayout上面显式的指定一个布局方式，但是这样子就不是很灵活了

我们还可以在页面中指定使用那种布局

```js
definePageMeta({
  layout: "custorm-login",
});
```

