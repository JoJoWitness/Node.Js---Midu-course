const http = require('node:http')
const { findAvailablePort } = require('./10.freeport')

const desirePORT = process.env.PORT ?? 3000
const server = http.createServer((req, res) =>{
    console.log('request received')
    res.end('Hello world')
})

findAvailablePort(desirePORT).then(port => {
    server.listen(port, () =>{
        console.log(`server listening on port http://localhost:${port}`)
    })
})
