const dotenv = require('dotenv')
dotenv.config({ path: './config/config.env' })

console.log(process.env.PORT)
console.log(process.env.HOSTNAME)