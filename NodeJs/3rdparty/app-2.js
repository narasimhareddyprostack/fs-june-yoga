const http = require('http')
const dotenv = require('dotenv')
const chalk = require('chalk')

dotenv.config({ path: 'config/config.env' })
console.log(process.env.PORT)

let server = http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'text/html' })
    resp.end("static/index.html")
})

server.listen(process.env.PORT, () => {
    console.log(chalk.red(`Server is Running on Port Number ${process.env.PORT}`))
}
)
//console.log(chalk.blue("Hello,GM"))
