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
router.post("/", isLoggedIn, function(req, res) {
    // Get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var des = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newCampground = {name: name, image: image, description: des, author: author};
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
router.get("/new", isLoggedIn, function(req, res) {
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

// Edit Campgound Route
router.get("/:id/edit", checkCampgroundOwnership, function(req, res) {
    Campground.findById(req.params.id, function(err, foundCampground) {
        res.render("campgrounds/edit", {campground: foundCampground});
    });
});

// Update Campground Route
router.put("/:id", checkCampgroundOwnership, function(req, res) {
    // Find and update the correct campground
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground) {
        if (err) {
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
    // Redirect to show page
});

// Destroy Campground Route
router.delete("/:id", checkCampgroundOwnership, function(req, res) {
    Campground.findByIdAndRemove(req.params.id, function(err) {
        if (err) {
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds");
        }
    });
});


// ==========
// MIDDLEWARE
// ==========

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

function checkCampgroundOwnership(req, res, next) {
    // Check if user is logged in
    if (req.isAuthenticated()) {
        Campground.findById(req.params.id, function(err, foundCampground) {
            if (err) {
                res.redirect("back");
            } else {
                // Check if user owns the campground (can't do foundCampground.author.id === req.user._id, not the same type)
                if (foundCampground.author.id.equals(req.user._id)) {
                    // Move on to the next code in the route
                    next();
                } else {
                    res.redirect("back");
                }
            }
        });
    } else {
        res.redirect("back");
    }
}

module.exports = router;