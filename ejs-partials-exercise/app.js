/*SETUP*/
var express = require('express');
var app = express();

/*serving /public */
app.use(express.static("public"));
/*setting templating engine*/
app.set("view engine", "ejs");

/*ROUTES*/
/*root*/
app.get('/',function(req, res){
    res.render('home');
    
});
app.get("/fallinginlovewith/:thing",function(req,res){
    var thing = req.params.thing;
    res.render("love",{thingVar: thing});
});
app.get("/posts",function(req,res){
    var posts = [{title: "Post 1",author: "Suzy"},
                 {title: "Second Post",author: "Nik"},
                 {title: "Great News!",author: "Suzy"}
        ];
        res.render("posts", {posts: posts});
});

/*SERVER CONFIG*/
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The server has started");
});
