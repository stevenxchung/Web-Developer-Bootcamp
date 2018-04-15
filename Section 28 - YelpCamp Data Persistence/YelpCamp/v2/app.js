// Initialize express, bodyParser, and mongoose to use in our app
var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

// Standard format to use the above tools in this application
mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//Schema setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

// Compile object definitions above into Campground
var Campground = mongoose.model("Campground", campgroundSchema);

// The method .create() will create AND save a new campground to our database
// Campground.create(
//     {
//         name: "Bridle Path", 
//         image: "https://images.theoutbound.com/uploads/1437140402255/wumsmrfw78e/ca76c0961beec40ee34c0e8b7997e543?w=900&h=600&fit=crop",
//         description: "One of a kind listing for a campground in a pristine and private location in the Appalachian mountains."
//     }, function(err, campground) {
//         if(err){
//             console.log(err);
//         } else {
//             console.log("Newly created campground: ");
//             console.log(campground);
//         }
//     });

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
            res.render("index", {campgrounds: allCampgrounds});
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
    res.render("new");
});

// SHOW - show a detailed page of a campground when a specific campground is clicked (must go after NEW route or "/:id" will ignore "/new") 
app.get("/campgrounds/:id", function(req, res) {
    // Find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
            // Render the show page template with that campground
            res.render("show", {campground: foundCampground});
        }
    });
});

// Standard server listen request
app.listen(process.env.PORT, process.env.IP, function() {
   console.log("YelpCamp is online!"); 
});