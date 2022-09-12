const http = require('http')
const fs = require('fs')
const path = require('path')

let server = http.createServer((request, response) => {
    let url = request.url;
    console.log(url)
    response.writeHead(200, { 'Content-Type': 'text/html' })
    if (url === '/') {
        fs.readFile(path.join(__dirname, 'static', 'index.html'), 'utf-8', (err, data) => {
            if (err) throw err
            response.end(data)
        })
    }
    else
        if (url === "/about") {
            fs.readFile(path.join(__dirname, 'static', 'about.html'), 'utf-8', (err, data) => {
                if (err) throw err
                response.end(data)
            })
        }
        else
            if (url === '/service') {
                fs.readFile(path.join(__dirname, 'static', 'service.html'), 'utf-8', (err, data) => {
                    if (err) throw err
                    response.end(data)
                })
            }
            else
                if (url === "/home") {
                    fs.readFile(path.join(__dirname, 'static', 'index.html'), 'utf-8', (err, data) => {
                        if (err) throw err
                        response.end(data)
                    })
                }
                else
                    if (url === "/product") {
                        fs.readFile(path.join(__dirname, 'static', 'product.html'), 'utf-8', (err, data) => {
                            if (err) throw err
                            response.end(data)
                        })
                    }
                    else
                        if (url === '/contact') {
                            fs.readFile(path.join(__dirname, 'static', 'contact.html'), 'utf-8', (err, data) => {
                                if (err) throw err
                                response.end(data)
                            })
                        }
                        else {
                            fs.readFile(path.join(__dirname, 'static', '404.html'), 'utf-8', (err, data) => {
                                if (err) throw err
                                response.end(data)
                            })
                        }
})
server.listen(8080, (err) => {
    if (err) throw err
    console.log(`Server Running one PORT! 8080`)
})