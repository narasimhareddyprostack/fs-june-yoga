const express = require('express')
const router = express()
const Product = require('../models/Product')
//url: localhost:8080/api
router.get("/", (req, res) => {
    res.send("Testing product Router")
})


//API Development
/*
Info: Get All Product
URL: http://127.0.0.1:8080/api/products
METHOD:GET
Req Fields: No  
*/
router.get("/products", async (request, response) => {
    let products = await Product.find();
    if (!products) {
        response.status(401).json({ message: "Product Not Found" })
    }
    response.status(200).json(products)
})
/*
Info: Display In Active Product
URL: http://127.0.0.1:8080/api/products
METHOD:GET
Req Fields: No  
*/
router.get("/products/inActive", async (request, response) => {
    let products = await Product.find({ status: 'InActive' });
    if (!products) {
        response.status(401).json({ message: "Product Not Found" })
    }
    response.status(200).json(products)
})
/*
Info: Get Single Product 
URL: http://127.0.0.1:8080/api/products/:id
METHOD:GET
Req Fields: No  
*/
router.get("/product/:id", async (request, resposne) => {
    try {
        let productId = request.params.id;
        console.log(productId)
        let product = await Product.findById(productId)
        if (!product) {
            return resposne.status(401).json({ message: "Product Not Found" })
        }
        resposne.status(200).json(product)
    }
    catch (err) {
        console.log(err)
        resposne.status(500).json({ message: message })
    }
    //logic
})
/*
Info: Create Product
URL: http://127.0.0.1:8080/api/product
METHOD:POST
Req Fields: name, image,price,qty, info  
*/
router.post("/product/", async (request, response) => {
    console.log("inside create Product API")
    try {
        //reading data from form body
        let newProduct = {
            name: request.body.name,
            price: request.body.price,
            image: request.body.image,
            qty: request.body.qty,
            info: request.body.info
        }
        let product = new Product(newProduct);
        product = await product.save()
        response.status(200).json({ result: "Product created Successfully", product: product })
    }
    catch (err) {
        console.log(err)
        return response.status(500).json({ message: message })
    }

})

router.delete("/product/:id", async (request, response) => {
    try {
        let productId = request.params.id
        product = await Product.findByIdAndDelete(productId)
        response.status(200).json({ restult: "Product Delete Successfully" })

    } catch (err) {
        console.log(err)
        return response.status(500).json({ message: message })
    }

})
module.exports = router;