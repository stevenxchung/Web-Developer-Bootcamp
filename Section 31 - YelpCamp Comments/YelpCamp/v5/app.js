// Initialize express, bodyParser, and mongoose to use in our app
var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment"),
    seedDB = require("./seeds");

// Standard format to use the above tools in this application
mongoose.connect("mongodb://localhost/yelp_camp_v4");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
// Seeding the database to add campgrounds and comments
seedDB();

// Render landing page as our root "/" page
app.get("/", function(req, res) {
    res.render("landing");
});

// INDEX - render campgrounds page on request
app.get("/campgrounds", function(req, res) {
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
app.post("/campgrounds", function(req, res) {
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
            // Redirect back to campgrounds page (via app.get("/campgrounds") request) after user submits information
            res.redirect("/campgrounds");
        }
    });
});

// NEW - show the form to send data to the campground post route above
app.get("/campgrounds/new", function(req, res) {
    res.render("campgrounds/new");
});

// SHOW - show a detailed page of a campground when a specific campground is clicked (must go after NEW route or "/:id" will ignore "/new") 
app.get("/campgrounds/:id", function(req, res) {
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

// ===============
// COMMENTS ROUTES
// ===============

app.get("/campgrounds/:id/comments/new", function(req, res) {
    // Find campground by ID
    Campground.findById(req.params.id, function(err, campground) {
        if (err) {
            console.log(err);
        } else {
            res.render("comments/new", {campground: campground});
        }
    });
});

app.post("/campgrounds/:id/comments", function(req, res) {
    // Lookup campground using ID
    Campground.findById(req.params.id, function(err, campground) {
        if (err) {
            console.log(err);
            res.redirect("/campgrounds");
        } else {
            Comment.create(req.body.comment, function(err, comment) {
                if(err) {
                    console.log(err);
                } else {
                    campground.comments.push(comment);
                    campground.save();
                    res.redirect("/campgrounds/" + campground._id);
                }
            });
        }
    });
    // Create new comment
    // Connect new comment to campground
    // Redirect campground show page
});

// Standard server listen request
app.listen(process.env.PORT, process.env.IP, function() {
   console.log("YelpCamp is online!"); 
});