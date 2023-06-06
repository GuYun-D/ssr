# Node Server

## 需要安装的依赖

```js
npm i express nodemon 
npm i webpack@5.75.0 webpack-cli@5.0.1 webpack-node-externals@3.0.0
```

webpack-node-externals：打包的时候排除node_modules中的所有模块，但是这个只针对node环境下才行

## 项目目录划分

```js
root
 | --- build
 |      | --------- server
 |      |              | ---------- server.bundle.js
 | --- config
 |      |  --------- webpack.config.js
 | --- src
 |      | ---------- server
 |      |              | ----- index.js

```

## 配置webpack

```js
const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    target: 'node', // 
    mode: 'development',
    entry: './src/server/index.js',
    output: {
        filename: 'server.bundle.js',
        path: path.resolve(__dirname, "../build/server")
    },
    externals: [nodeExternals()] // 排除node_moudles中的包，这个只针对node环境的
}
```

## 配置打包命令

```js
 "scripts": {
    "dev": "nodemon ./src/server/index.js",
    "build:server": "webpack --config ./config/webpack.config.js --watch",
    "start": "nodemon ./build/server/server.bundle.js"
  },
```

