// All Middleware For YelpCamp

var Campground = require("../models/campground"),
    Comment = require("../models/comment");

var middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function(req, res, next) {
    // Check if user is logged in
    if (req.isAuthenticated()) {
        Campground.findById(req.params.id, function(err, foundCampground) {
            if (err) {
                req.flash("error", "Campground not found");
                res.redirect("back");
            } else {
                // Check if user owns the campground (can't do foundCampground.author.id === req.user._id, not the same type)
                if (foundCampground.author.id.equals(req.user._id)) {
                    // Move on to the next code in the route
                    next();
                } else {
                    req.flash("error", "You do not have permission to access that content");
                    res.redirect("back");
                }
            }
        });
    } else {
        req.flash("error", "Login required to perform action");
        res.redirect("back");
    }
};

middlewareObj.checkCommentOwnership = function(req, res, next) {
    // Check if user is logged in
    if (req.isAuthenticated()) {
        Comment.findById(req.params.comment_id, function(err, foundComment) {
            if (err) {
                res.redirect("back");
            } else {
                // Check if user owns the comment
                if (foundComment.author.id.equals(req.user._id)) {
                    // Move on to the next code in the route
                    next();
                } else {
                    req.flash("error", "You do not have permission to access that content");
                    res.redirect("back");
                }
            }
        });
    } else {
        req.flash("error", "Login required to perform action");
        res.redirect("back");
    }
};

middlewareObj.isLoggedIn = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash("error", "Login required to perform action");
    res.redirect("/login");
};

module.exports = middlewareObj;