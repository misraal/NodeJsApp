var express = require("express");
var path = require("path");
var routes = require("./router.js");

var app = express();
//app.use(routes);

//app.set("views", path.join(__dirname, "/views"));
//app.set("view engine", "ajx");
app.use(express.static('public'))

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), function(){
    console.log("Server started on port: " + app.get("port"));
});