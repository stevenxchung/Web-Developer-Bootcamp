var express = require("express"),
    router = express.Router(),
    Campground = require("../models/campground");

// INDEX - render campgrounds page on request
router.get("/", function(req, res) {
    // Get all campgrounds from database
    Campground.find({}, function(err, allCampgrounds) {
        if (err) {
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds});
        }
    });
});

// CREATE - route to create a new campground
router.post("/", function(req, res) {
    // Get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var des = req.body.description;
    var newCampground = {name: name, image: image, description: des};
    // Create a new campground and save to database
    Campground.create(newCampground, function(err, newlyCreated) {
        if (err) {
            console.log(err);    
        } else {
            // Redirect back to campgrounds page (via router.get("/") request) after user submits information
            res.redirect("/");
        }
    });
});

// NEW - show the form to send data to the campground post route above
router.get("/new", function(req, res) {
    res.render("campgrounds/new");
});

// SHOW - show a detailed page of a campground when a specific campground is clicked (must go after NEW route or "/:id" will ignore "/new") 
router.get("/:id", function(req, res) {
    // Find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
            console.log(foundCampground)
            // Render the show page template with that campground
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

module.exports = router;