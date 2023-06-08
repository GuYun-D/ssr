<template>
  <div>
    <h1>Hello Nuxt3</h1>

    <Head>
      <Meta name="keyword" content="这是一个简单的网站"></Meta>
    </Head>

    <ClientOnly fallback-tag="h3" fallback="loading...">
      <div class="global-style-1 hh">我只会在客户端将进行渲染</div>

      <template #fallback> 
        我是自定义的插槽
      </template>
    </ClientOnly>
  </div>
</template>

<script setup>
// 读取运行时的配置
// const runtimeConfig = useRuntimeConfig();

// 判断代码执行的环境
if (process.server) {
  // console.log("运行在服务端");
  // console.log(runtimeConfig.appKey);
  // console.log(runtimeConfig.public.baseUrl);
}

if (process.client) {
  // console.log("运行在客户端");
  // console.log(runtimeConfig.public.baseUrl);
}

// 获取appconfig
let appConfig = useAppConfig(); // 服务端和客户端都可以
console.log(appConfig.title);

onMounted(() => {
  // 只会在客户端运行
  document.title = appConfig.title;
});

useHead({
  bodyAttrs: {
    class: "body-container",
  },

  script: [
    {
      src: "http://baidu.com",
      body: true,
    },
  ],
});
</script>

<style lang="scss" scoped>
// @import '~/assets/styles/vars.scss';

// @use '~/assets/styles/vars.scss' as vb;

h1{
  color: vb.$scolor;
  @include vb.border();
}
</style>