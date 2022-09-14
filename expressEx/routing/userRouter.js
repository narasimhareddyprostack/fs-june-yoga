const express = require('express')
const router = express.Router();

//API : localhost:8080/user/about
//API : localhost:8080/user/more

router.get("/about", (req, res) => {
    res.send("USer Router - about url")
})
router.get("/more", (req, res) => {
    res.send("User Router - more ulr")
})
module.exports = router;