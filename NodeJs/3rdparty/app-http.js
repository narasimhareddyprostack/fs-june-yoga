const http = require('http')
const dotenv = require('dotenv')

dotenv.config({ path: 'config/config.env' })
console.log(process.env.PORT)

let server = http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'text/html' })
    resp.end("<h1>Hello,GM. MR Rahul .</h1>")
})

server.listen(process.env.PORT, () => {
    console.log(`Server Running on PORT NO: ${process.env.PORT}`)
}
)
