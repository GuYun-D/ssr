# 优化webpack.config

需要使用一个插件`webpack-merge`

安装

```js
npm i webpack-merge -D
```

调整配置文件

```js
config
  |------ base.config.js
  |------ client.config.js
  |------ server.config.js
```

创建`base.config.js`

```js
const { VueLoaderPlugin } = require("vue-loader/dist/index");

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    extensions: [".js", ".json", ".jsx", ".vue"],
  },
};

```

调整`client.config.js`

```js
const path = require("path");
const { DefinePlugin } = require("webpack");
const merge = require("webpack-merge");
const baseConfig = require("./base.config");

module.exports = merge(baseConfig, {
  target: "web",
  entry: "./src/client/index.js",
  output: {
    filename: "client.bundle.js",
    path: path.resolve(__dirname, "../build/client"),
  },
  plugins: [
    new DefinePlugin({
      __VUE_OPTIONS_API__: false, // 不使用options api
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],
});

```

调整`server.config.js`

```js
const { VueLoaderPlugin } = require("vue-loader/dist/index");

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    extensions: [".js", ".json", ".jsx", ".vue"],
  },
};
```

