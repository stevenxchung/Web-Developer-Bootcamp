var mongoose = require("mongoose"),
    express = require("express");
    
    
mongoose.connect("mongodb://localhost/blog_demo_2");

// Import Post Model
var Post = require("./models/post");

// Import User Model
var User = require("./models/user");

// Post.create({
//   title: "How to be a pirate part 4",
//   content: "Where is all the rum gone to now?"
// }, function (err, post) {
//     User.findOne({email: "jacksparrow@gmail.com"}, function (err, foundUser) {
//         if (err) {
//             console.log(err);
//         } else {
//             foundUser.posts.push(post);
//             foundUser.save(function (err, data) {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     console.log(data);
//                 }
//             });
//         }
//     })
// });

// User.create({
//     email: "jacksparrow@gmail.com",
//     name: "Jack Sparrow"
// });

// Find user
// Find all posts for that user

// User.findOne({email: "jacksparrow@gmail.com"}).populate("posts").exec(function(err, user) {
//   if (err) {
//       console.log(err);
//   } else {
//       console.log(user);
//   }
// });