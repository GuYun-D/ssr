<template>
  <div>
    <h1>Hello Nuxt3</h1>

    <Head>
      <Meta name="keyword" content="这是一个简单的网站"></Meta>
    </Head>
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

onMounted(() => { // 只会在客户端运行
  document.title = appConfig.title;
});


useHead({
  bodyAttrs: {
    class: 'body-container'
  },

  script: [
    {
      src: 'http://baidu.com',
      body: true
    }
  ]
})
</script>
