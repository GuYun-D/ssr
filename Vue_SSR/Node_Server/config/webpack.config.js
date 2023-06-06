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