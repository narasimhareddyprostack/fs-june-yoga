const http = require('http')
let server = http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'text/plain' })
    resp.end("Hello,GM. MR Rahul Ji")
})

server.listen(8080, () => {
    console.log("Server Running on PORT NO ")
})