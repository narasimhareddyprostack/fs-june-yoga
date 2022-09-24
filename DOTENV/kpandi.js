const dotenv = require('dotenv')

//configure - env file setting 
dotenv.config({ path: './config/rajni.env' })

let cost = process.env.MOVIE_TICKET
console.log(cost)