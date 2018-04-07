var express = require("express"),
    app = express();
    
app.set("view engine", "ejs");

// Required to correctly specify directory after nodemon or node app.js is run
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/about", function(req, res) {
    res.render("about");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server Online!")
});