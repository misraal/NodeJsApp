var express = require("express");

var router = express.Router();

router.get("/", function(req, res){
    console.log("Hello, I am on the start page here.")
    res.render("first");
})

module.exports = router;