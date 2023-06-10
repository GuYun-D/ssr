<template>
  <div>
    <h1>我要认真了</h1>

    <div>动态路由</div>
    <NuxtLink to="/d-router">
      <button>d-router</button>
    </NuxtLink>

    <NuxtLink to="/d-router/1234567">
      <button>d-router动态路由</button>
    </NuxtLink>

    <NuxtLink to="/role-admin/1234567?name=动态路由">
      <button>d-router动态路由</button>
    </NuxtLink>

    <NuxtLink to="/register/1234567">
      <button>路由验证</button>
    </NuxtLink>

    <NuxtPage></NuxtPage>

    <!-- <nuxt-link to="/">首页</nuxt-link>
    <div style="margin: 40px"></div>
    <nuxt-link to="/category">那啥页面</nuxt-link>
    <nuxt-link to="/car">car yemian1</nuxt-link>
    <button @click="handleToLogin">我要去登录页面</button> -->
  </div>
</template>

<script setup>
const handleToLogin = () => {
  const router = useRouter()
  router.push('/login')
};
</script>
