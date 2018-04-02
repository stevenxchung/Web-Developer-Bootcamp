var express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    User = require("./models/user"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost/auth_demo_app");

var app = express();
app.set("view engine", "ejs");

// Anytime we use a form to post we need to use bodyParser
app.use(bodyParser.urlencoded({extended: true}));

app.use(require("express-session")({
    secret: "Knock knock",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ========
// ROUTES
// ========

// Root
app.get("/", function(req, res) {
    res.render("home");
});

// When a request comes in, it is going to check if the user is logged in or "authenticated" using isLoggedIn() middleware
app.get("/secret", isLoggedIn, function(req, res) {
    res.render("secret");
});

// Authentication Route
// Show sign up form
app.get("/register", function(req, res) {
    res.render("register");
});

// Handling user sign up
app.post("/register", function(req, res) {
    // We do not save the password to the database, we hash that password and store into the database
    User.register(new User({username: req.body.username}), req.body.password, function(err, user) {
        if (err) {
            console.log(err);
            res.render("register");
        } else {
            // Authenticate to local API
            passport.authenticate("local")(req, res, function() {
                res.redirect("/secret");
            });
        }
    });
});

// Login Routes
// Render login form
app.get("/login", function(req, res) {
    res.render("login");
});

// Login logic
// Middleware "passport.authenticate()" runs before the final route callback
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function(req, res) {
    // Empty for now
});

// Logout Route
// Destroy user's data in the session, passport resource makes this easy with logout()
app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
})

// Checks if user is logged into a session
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server is online!");
});