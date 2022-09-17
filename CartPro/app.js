const express = require('express')
const app = express();
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

//configure or read env variable
dotenv.config({ path: './config/config.env' })

let hostname = process.env.HOST_NAME;
let port = process.env.PORT;

app.use(morgan('tiny'));//HTTP Logger

// configure express to accept form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//enable cors 
app.use(cors())

app.get("/", (request, response) => {
    response.send("Express App is Runnning...")
})
//routing
app.use("/api", require('./router/productRouter'))
//app.user("/user")
//connect mongodb database 
mongoose.connect(process.env.MONGO_DB_LOCAL_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then((response) => {
    console.log("Mongodb connection successfull")
}).catch(() => {
    console.log("Unable to Connect")
})
app.listen(port, hostname, (err) => {
    if (err) throw err
    console.log(`Server Running on http://${hostname}:${port}`)
})