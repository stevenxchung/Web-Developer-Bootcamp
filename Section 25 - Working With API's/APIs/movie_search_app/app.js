var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

// Render home page for searches
app.get("/", function(req, res) {
    res.render("search");
    res.send("Welcome to the home page!");
});

// Render a page of our movie title search results
app.get("/results", function(req, res) {
    // Store search term entered by user to use in url
    var query = req.query.search;
    var url = "http://www.omdbapi.com/?apikey=4a9a576a&s=" + query;
    // Get data corresponding to the search term entered by the user
    request(url, function(error, response, body) {
        if(!error && response.statusCode == 200) {
            // Turns a string into an object
            var data = JSON.parse(body);
            res.render("results", {data: data});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server is live!");
});