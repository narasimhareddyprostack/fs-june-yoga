const mongoose = require('mongoose')
//create Product Schema 
let productSchema = mongoose.Schema({
    name: { type: String, require: true },
    image: { type: String, require: true },
    price: { type: Number, require: true },
    qty: { type: Number, require: true },
    info: { type: String, require: true },
    status: { type: String, default: 'Active' }
})

let Product = mongoose.model('product', productSchema)

module.exports = Product
//export table/collection