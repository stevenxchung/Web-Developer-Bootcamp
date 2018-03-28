var express = require("express");
var app = express();

// Express to pull css from public folder
app.use(express.static("public"));
// Expect res.render() to use .ejs files
app.set("view engine", "ejs");

// Render home page
app.get("/", function(req, res) {
    res.render("home");
    res.send("Welcome to the home page!");
});

// Render love page with thing = user input
app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

// Render posts page where each post contains an object (title and author)
app.get("/posts", function(req, res) {
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "My adorable pet bunny", author: "Charlie"},
        {title: "Can you believe this pomsky?", author: "Colt"}
    ];
    
    res.render("posts", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server is listening!");
});