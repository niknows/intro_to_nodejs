/*SETUP*/
var express = require('express');
var app = express();


/*ROUTES*/
app.get('/',function(req, res){
    res.render('home.ejs');
    
});
app.get("/fallinginlovewith/:thing",function(req,res){
    var thing = req.params.thing;
    res.render("love.ejs",{thingVar: thing});
});
app.get("/posts",function(req,res){
    var posts = [{title: "Post 1",author: "Suzy"},
                 {title: "Second Post",author: "Nik"},
                 {title: "Great News!",author: "Suzy"}
        ];
        res.render("posts.ejs", {posts: posts});
});

/*SERVER SETUP*/
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The server has started");
});
