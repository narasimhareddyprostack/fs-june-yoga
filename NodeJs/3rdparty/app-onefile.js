const http = require('http')
const fs = require('fs')
const path = require('path')
let server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    //response.end("Hello,GM")
    //response.end("<h1>Hello,GM</h1>")
    //response.end("static/index.html")
    //console.log(path.join(__dirname, 'static', 'index.html'))
    fs.readFile(path.join(__dirname, 'static', 'index.html'), 'utf-8', (err, data) => {
        if (err) throw err
        response.end(data)
    })
})
server.listen(8080, (err) => {
    if (err) throw err
    console.log(`Server Running one PORT! 8080`)
})