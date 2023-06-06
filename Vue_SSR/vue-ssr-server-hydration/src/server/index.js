import createApp from '../app'
import { renderToString } from '@vue/server-renderer'

const express = require('express')
const server = express()

server.use(express.static('build'))

server.get("/", async (req, res) => {
    let app = createApp()
    let appStringHTML = await renderToString(app)

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
    `)
})


server.listen(3000, () => {
    console.log("服务器启动成功");
})