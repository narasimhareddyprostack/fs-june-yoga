const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })
const mongodb = require('mongodb')

var MongoClient = require('mongodb').MongoClient;


const app = express();
app.get('/', (req, res) => {
    res.send("Testing......")
    console.log(process.env.MONGODB_LOCAL)
})


//db info 
MongoClient.connect(process.env.MONGODB_LOCAL, (err, db) => {
    if (err) throw err
    console.log(db.status)
    app.listen(process.env.PORT, (err) => {
        if (err) throw err
        console.log(`Server Listening on PORT ${process.env.PORT}`)
    })
    db.connection()
})



