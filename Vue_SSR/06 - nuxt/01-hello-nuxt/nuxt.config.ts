// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // 运行时配置
  runtimeConfig: {
    appKey: "aabbcc",
    public: {
      // 写在pubiole中的配置在服务端和客户端都可以访问到，其他的只能在服务端进行访问，如：appKey
      baseUrl: "http://codercba.com",
    },
  },

  // 定义应用的配置
  appConfig: {
    // title: "Hello Nuxt3 EDU",
    // theme: {
    //   primary: "#放0",
    // }
  },

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

  ssr: true,

  router: {
    options: {
      hashMode: true
    }
  }
});
