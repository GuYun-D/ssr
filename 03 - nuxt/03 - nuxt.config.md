[toc]



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

这些配置也回导入到`process.env`中去



## app.config 应用配置，定义在构建时确定的公共变量，如：theme

```js
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 定义应用的配置
  appConfig: {
    title: "Hello Nuxt3 EDU",
    theme: {
      primary: "#放0",
    }
  },
});
```

这个是在项目构建的时候就已经确定的了的参数，不会被修改

在页面中访问和运行时参数也是差不多的

```js
let appConfig = useAppConfig(); // 服务端和客户端都可以
console.log(appConfig.title);

onMounted(() => { // 只会在客户端运行
  document.title = appConfig.title;
});
```

这个参数在客户端和服务端都是可以运行的

当然app.config也可以抽离出来，创建`app.config.ts`文件

```typescript
export default defineAppConfig({
  title: "Hello Nuxt3 EDU",
  theme: {
    primary: "#放0",
  },
});
```

nuxt会读取这个文件到项目中的，如果两个地方都有的话那就会`merge`，优先级就是`app.config.ts` > `nuxt.config.ts`



**`不要将秘密或者敏感的信息放在app.config.ts`文件中，该文件是客户端公开的**

## app配置

### seo head 优化

给app所有页面head添加配置（SEO，添加外部的资源）

```js
app: {
    head: {
      title: "YNGY",
      charset: "UTF-8",
      viewport:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no",
      meta: [
        {
          name: "keywords",
          content: "欢迎来到 | 豫南古韵",
        },
        {
          name: "description",
          content: "雅俗公勺",
        },
      ],
      link: [
        {
          rel: "shortcut icon",
          href: "favicon.icon",
          type: "image/x-icon",
        },
      ],
      style: [
        {
          children: `body{color: red}`,
        },
      ],
      script: [
        {
          src: "http://codercba.com",
        },
      ],
    },
  },
```

这样子写都是写死的，如何动态来修改呢？`useHead`

```typescript
interface MergeHead {
    base?: {};
    link?: {};
    meta?: {};
    style?: {};
    script?: {};
    noscript?: {};
    htmlAttrs?: {};
    bodyAttrs?: {};
}
```

```typescript
useHead({
  // 上面的也就是配置在nuxt.config中的都是可以写的
  bodyAttrs: {
    class: 'body-container'
  },

  script: [
    {
      src: 'http://baidu.com',
      body: true  // 代表将该script插入到body中，不要放在head里面
    }
  ]
})
```



还可以使用nuxt提供的内置组件

```html
<Head>
  <Meta name="keyword" content="这是一个简单的网站"></Meta>
</Head>
```

优先级就是：`内置组件` > `useHead` >`config`



## ssr:指定项目的渲染模式

```js
ssr: false
```

默认就是true，使用服务端渲染，false就是SPA



## router

```js
ssr: true,

  router: {
    options: {
      hashMode: true // 使用hash模式，好像只在spa页面下生效
    }
  }
```



## alias

路径别名，默认已经配置好了

## modules

配置nuxt扩展模块，如：@pinia/nuxt、@nuxt/image

## routeRules

定义路由规则，可更改路由渲染模式或者分配基于路由缓存策略（2022年还是公测阶段）

## builder

指定使用vite还是webpack来构建应用，默认是vite。如果要切换为webpack还需要安装其他额外的依赖

