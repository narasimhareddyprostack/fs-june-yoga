const express = require('express')
const router = express.Router();

//API - localhost:8080/product/all
router.get("/all", (req, res) => {
    res.send("Displaying all Products")
})
//localhost:8080/product/456
router.get("/id", (req, res) => {
    res.send("Displaying one item")
})
router.post("/new", (req, res) => { })
router.put("/update", (req, res) => { })
router.delete("/del", (req, res) => { })

module.exports = router