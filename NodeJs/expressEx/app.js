const express = require('express')
const app = express();
const morgan = require('morgan')

app.use(morgan('tiny'))
app.get("/", (request, response) => {
    response.send("Hello,GT Express !")
})
app.get('/about', (request, response) => {
    response.send("About Page")
})
app.get('/movie', (request, response) => {
    response.send("Dont go to Movie. use Movie Rulz")
})
app.listen(8080, (err) => {
    if (err) throw err
    console.log("Server is Runnning on PORT No:8080")
})