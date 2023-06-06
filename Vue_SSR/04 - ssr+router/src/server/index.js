import createApp from "../app";
import { renderToString } from "@vue/server-renderer";
import createRouter from "../router";

/**
 * 内存路由， -> node 使用的
 */
import { createMemoryHistory } from "vue-router";

const express = require("express");
const server = express();

server.use(express.static("build"));

server.get("/*", async (req, res) => {
  const router = createRouter(createMemoryHistory());

  let app = createApp();

  app.use(router);
  /**
   * 等待页面跳转好
   * 根据当前用户访问的路径地址进行页面跳转
   */
  await router.push(req.url || "/");
  /**
   * 等待（异步）路由加载完毕，再进行页面的渲染
   */
  await router.isReady();

  let appStringHTML = await renderToString(app);

  res.send(`
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>

    <body>
        <h1>Vue3 Side Render</h1>
        <div id="app">${appStringHTML}</div>

    <script src="/client/client.bundle.js"></script>

    </body>
    </html>
    `);
});

server.listen(3000, () => {
  console.log("服务器启动成功");
});
