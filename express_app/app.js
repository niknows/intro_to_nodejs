var express = require("express");
var app = express();

/*ROUTES*/
app.get("/",function(req,res){
   res.send("hi there");
});
app.get("/paypa",function(req,res){
    res.send("This paypa easy");
    console.log("Someone made a request to /paypa");
});
app.get("/bye",function(req,res){
    res.send("Goodbye");
    console.log("Someone made a request to /bye");
});
app.get("/r/:subredditName", function(req,res){
    var subReddit = req.params.subredditName;
    res.send("Welcome to " + subReddit.toUpperCase() + " subreddit!");
});
app.get("*",function(req,res){
   res.send("You are a star"); 
});



/*ENDEREÇAMENTO DO APP*/
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started.");
