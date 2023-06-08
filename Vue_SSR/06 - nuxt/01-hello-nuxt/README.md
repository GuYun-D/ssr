# nuxt.config.ts

## runtimeConfig：运行时配置，即定义环境变量

```js
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    appKey: "aabbcc",
    public: { // 写在pubiole中的配置在服务端和客户端都可以访问到，其他的只能在服务端进行访问，如：appKey
      baseUrl: "http://codercba.com",
    },
  },
});

```

在项目中获取运行时的配置参数

```js
const runtimeConfig = useRuntimeConfig();
```



### 根据当前环境做不同的操作

```js
// 判断代码执行的环境
if (process.server) {
  console.log("运行在服务端");
  console.log(runtimeConfig.appKey);
  console.log(runtimeConfig.public.baseUrl);
}

if (process.client) {
  console.log("运行在客户端");
  console.log(runtimeConfig.public.baseUrl);
}
```





**可通过.env文件中的环境变量来覆盖，优先级（.env > runtimeConfig）**

- .env的变量会打入到process.env中，符合规则的会覆盖runtimeConfig的变量
- .env一般用于某些终端启动应用时动态指定配置，同时支持dev和pro 

根目录下创建`.env`文件

```js
NUXT_APP_KEY = "代文辉"
```

此时`nuxt.config.ts`文件的appKey就会被覆盖，如果要覆盖public中的baserUrl就是

```js
NUXT_PUBLIC_BASE_URL="NIMEIDE"
```

