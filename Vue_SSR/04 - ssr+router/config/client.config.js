const path = require("path");
const { DefinePlugin } = require("webpack");
const { merge } = require("webpack-merge");
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
