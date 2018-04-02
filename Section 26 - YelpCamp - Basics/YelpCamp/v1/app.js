// Initialize express and bodyParser to use in our app
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// Standard format to use bodyParser and render to ejs files in /views
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// Due to scope, we need to move this outside of all routes so campgrounds can be used in multiple routes
var campgrounds = [
    {name: "Salmon Creek", image: "https://thumbor-static.factorymedia.com/jy6_PJSyOitaQOKIAGfk-1SSRJ4=/1000x667/smart/http%3A%2F%2Fcdn.coresites.factorymedia.com%2Fmpora_new%2Fwp-content%2Fuploads%2F2015%2F01%2Fheiplanet1.jpg"},    
    {name: "Granite Hill", image: "https://thumbor-static.factorymedia.com/3dNzHD0fgn0FYeUjjmwp3N1EFA0=/1000x667/smart/http%3A%2F%2Fcdn.coresites.factorymedia.com%2Fmpora_new%2Fwp-content%2Fuploads%2F2015%2F01%2FJoshua-Tree-P-Scott-Rinckenberger.jpg"},
    {name: "Dragon's Rest", image: "https://thumbor-static.factorymedia.com/2HeO5Y4RHBI5Zp75OiYFb_z3VgE=/1000x667/smart/http%3A%2F%2Fcdn.coresites.factorymedia.com%2Fmpora_new%2Fwp-content%2Fuploads%2F2015%2F01%2FArtesonraju-Morraine-Camp-Cordiliera-Blanca-Peru-P-Mikadun.jpg"},
    {name: "Bridle Path", image: "https://images.theoutbound.com/uploads/1437140402255/wumsmrfw78e/ca76c0961beec40ee34c0e8b7997e543?w=900&h=600&fit=crop"}
];

// Render landing page as our root "/" page
app.get("/", function(req, res) {
    res.render("landing");
});

// Render campgrounds page on request
app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", {campgrounds: campgrounds});
});

// Route to create a new campground
app.post("/campgrounds", function(req, res) {
    // Get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    // Redirect back to campgrounds page (via app.get("/campgrounds") request) after user submits information
    res.redirect("/campgrounds");
});

// Show the form to send data to the campground post route above
app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

// Standard server listen request
app.listen(process.env.PORT, process.env.IP, function() {
   console.log("YelpCamp is online!"); 
});