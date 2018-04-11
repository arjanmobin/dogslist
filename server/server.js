const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const hbs = require("hbs");

var app = express();
const port = process.env.PORT || 3000;

app.get("/", function(req, res){
   res.send("GET/");
});

app.post("/dogs", function(req,res){
   res.send("POST /dogs");
});



app.listen(port, function(){
    console.log("Serber running");
});