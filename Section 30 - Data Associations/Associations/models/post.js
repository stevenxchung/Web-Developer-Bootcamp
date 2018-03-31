var mongoose = require("mongoose"),
    express = require("express");

// Post - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

module.exports = mongoose.model("Post", postSchema);