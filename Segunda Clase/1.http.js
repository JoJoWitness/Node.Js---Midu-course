const http = require('node:http')
const fs = require('node:fs')

const desirePORT = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  if (req.url == '/') {
    res.statusCode = 200
    res.end('<h1>Welcome to my home page</h1>')
  } else if (req.url == '/baby-ryuk') {
    fs.readFile('./CAM01301.jpg', (err, data) =>{
      if (err) {
        res.statusCode = 500
        res.end('<h1>500 internal server error</h1>')
      } else {
        res.setHeader('Content-Type', 'image/jpg')
        res.end(data)
      }
    })
  } else if (req.url == '/contact') {
    res.statusCode = 200
    res.end('<h1>Contact</h1>')
  } else {
    res.statusCode = 404
    res.end('<h1>Error 404</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(desirePORT, () => {
  console.log(`server listening on port http://localhost:${desirePORT}`)
})
