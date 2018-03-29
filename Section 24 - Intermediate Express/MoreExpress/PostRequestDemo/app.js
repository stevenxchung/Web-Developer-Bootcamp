var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// Uses body-parser from npm body-parser package to store new friend into var newFriend below
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// Outside of all routes so that friends can be accessed by any route below
var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/friends", function(req, res) {
    res.render("friends", {friends: friends});
});

// Adding data (new friends) to friends list using post()
app.post("/addfriend", function(req, res) {
    // Note that req.body.newfriend requires body-parser in order to function properly
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server started!");
});