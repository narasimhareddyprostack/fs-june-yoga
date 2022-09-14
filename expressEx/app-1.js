const express = require('express')
const app = express();

//create root require
app.get("/", (request, response) => {
    response.send("Hello,Welcome Expess")
})
//create root require
app.get("/about", (request, response) => {
    response.send("About Application")
})
//create root require
app.get("/contact", (request, response) => {
    response.send("Contact App")
})



//Routing 
const userRouter = require('./routing/userRouter')
const productRouter = require('./routing/productRouter')
app.use('/user', userRouter);
app.use('/product', productRouter);

app.listen(8080, (err) => {
    if (err) throw err
    console.log(`Server is runnning PORT Number:${8080}`)
})