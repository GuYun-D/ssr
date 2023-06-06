const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { VueLoaderPlugin } = require("vue-loader/dist/index")

module.exports = {
    target: 'node', // 
    mode: 'development',
    entry: './src/server/index.js',
    output: {
        filename: 'server.bundle.js',
        path: path.resolve(__dirname, "../build/server")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    },
    plugins: [new VueLoaderPlugin()],
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.vue']
    },
    externals: [nodeExternals()] // 排除node_moudles中的包，这个只针对node环境的
}