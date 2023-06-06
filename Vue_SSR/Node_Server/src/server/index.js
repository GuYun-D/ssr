const express = require('express')

const server = express()

server.get("/", (req, res) => {
    res.send(`
        Hello Node Server 我是你爹
    `)
})


server.listen(3000, () => {
    console.log("服务器启动成功");
})