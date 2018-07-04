
/*SETUP*/
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

/*APP VARIABLES*/
var friends = ["Nina","Louies","Marco","Nena","Robert"];

/*ROUTES*/
app.get("/", function(req,res){
    res.render("home");
});

app.post("/addfriend",function(req,res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.get("/friends",function(req,res){
    res.render("friends",{friends: friends});
});


/*SERVER SETUP*/
app.listen(process.env.PORT, process.env.IP,function(){
    console.log("Server is online...");
});