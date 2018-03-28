var express = require("express");
var app = express();

// Routes to "/"
app.get("/", function(req, res) {
   res.send("Hi there!"); 
});

// Routes to "/bye"
app.get("/bye", function(req, res) {
   res.send("Goodbye!"); 
});

// Routes to "/dog"
app.get("/dog", function(req, res) {
   res.send("Woof!"); 
});

app.get("/r/:subredditName", function(req, res) {
    // Store route parameter "subredditName"
    var subreddit = req.params.subredditName;
    res.send("Welcome to \"" + subreddit + "\" subreddit!");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res) {
    // Log route parameter "subredditName", "id", and "title"
    console.log(req.params)
    res.send("Welcome to a comments page!");
});

// Routes to a default page if a route is undefined (should be the last of the get() requests)
app.get("*", function(req, res) {
   res.send("You are a star!"); 
});

// Listen on a particular port and ip
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started!");
});