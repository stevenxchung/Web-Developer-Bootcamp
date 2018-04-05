var express = require("express"),
    router = express.Router(),
    passport = require("passport"),
    User = require("../models/user");

// Render landing page as our root "/" page
router.get("/", function(req, res) {
    res.render("landing");
});

// ======================
// AUTHENTICATION ROUTES
// ======================

// Register form
router.get("/register", function(req, res) {
    res.render("register");
});

// Sign up logic
router.post("/register", function(req, res) {
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user) {
        if (err) {
            console.log(err);
            req.flash("error", err.message);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function() {
            req.flash("success", "Welcome to YelpCamp " + user.username);
            res.redirect("/campgrounds");
        });
    });
});

// Login form
router.get("/login", function(req, res) {
    res.render("login");
});

// Login logic
// Includes passport.authenticate() middleware
router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), function(req, res) {
});

// Logout route
router.get("/logout", function(req, res) {
    req.logout();
    req.flash("success", "Logged you out!")
    res.redirect("/campgrounds");
});

module.exports = router;