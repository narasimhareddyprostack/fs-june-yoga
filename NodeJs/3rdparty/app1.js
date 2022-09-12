const http = require('http')
const dotenv = require('dotenv')
const chalk = require('chalk')

dotenv.config({ path: 'config/config.env' })
console.log(process.env.PORT)

let server = http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'text/html' })
    resp.end("<h1>Hello,GM. MR Rahul JI.sdfdssdfasdfafd.</h1>")
})

server.listen(process.env.PORT, () => {
    console.log(chalk.red(`Buyya sleepy..Server is Running be carefull your port number is ${process.env.PORT}`))
}
)
//console.log(chalk.blue("Hello,GM"))
