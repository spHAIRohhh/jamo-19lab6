const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));


//routes
app.get("/", function(req,res){
    //res.send("it works!");
    res.render("index.ejs");
});
    
app.get("/mercury", function(req,res){
    //res.send("This will be Mercury web page!");
    res.render("mercury.ejs");
    
});

app.get("/venus", function(req,res){
    //res.send("This will be Venus web page!");
    res.render("venus.ejs");
});

app.get("/earth", function(req,res){
    //res.send("This will be Venus web page!");
    res.render("earth.ejs");
});

app.get("/mars", function(req,res){
    //res.send("This will be Mars web page!");
    res.render("mars.ejs");
});

app.get("/jupiter", function(req,res){
    //res.send("This will be Venus web page!");
    res.render("jupiter.ejs");
});

app.get("/saturn", function(req,res){
    //res.send("This will be Venus web page!");
    res.render("saturn.ejs");
});

app.get("/neptune", function(req,res){
    //res.send("This will be Venus web page!");
    res.render("neptune.ejs");
});

app.get("/uranus", function(req,res){
    //res.send("This will be Venus web page!");
    res.render("uranus.ejs");
});

app.get("/pluto", function(req,res){
    //res.send("This will be Venus web page!");
    res.render("pluto.ejs");
});

//server listener
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express Server is Running...")
});