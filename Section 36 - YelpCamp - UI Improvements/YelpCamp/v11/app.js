// Initialize express, bodyParser, and mongoose to use in our app
var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    flash = require("connect-flash"),
    passport = require("passport"),
    methodOverride = require("method-override"),
    LocalStrategy = require("passport-local"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment"),
    User = require("./models/user"),
    seedDB = require("./seeds");

// Require files from /routes to route code into app.js
var commentRoutes = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes = require("./routes/index");

// Standard format to use the above tools in this application
mongoose.connect("mongodb://localhost/yelp_camp_v11");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

// Seeding the database to add campgrounds and comments
// seedDB();

// Passport Configurations
app.use(require("express-session")({ 
    secret: "Knock knock",
    resave: false,
    saveUninitialize: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Make currentUser available to every route
app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    // Move on to the next line of code wherever this function is placed
    next();
});

app.use("/campgrounds/:id/comments", commentRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use(indexRoutes);

// Standard server listen request
app.listen(process.env.PORT, process.env.IP, function() {
   console.log("YelpCamp is online!"); 
});