// Mongoose is an ODM - object data mapper which allows us to write JS to interact with our database
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

// Define a pattern for our cat data
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

// Compile object definitions above into Cat
var Cat = mongoose.model("Cat", catSchema);

// Adding a new cat to the database
// var george = new Cat ({
//     name: "George",
//     age: 11,
//     temperament: "Grouchy"
// });

// george.save(function(err, cat) {
//     if (err) {
//         console.log("Something went wrong!");
//     } else {
//         console.log("We just added a cat to the database");
//         console.log(cat);
//     }
// });

// The method .create() will create AND save a new cat to our database
Cat.create({
   name: "Snow White",
   age: 15,
   temperament: "Bland"
}, function(err, cat) {
       if (err) {
       console.log("Error!");
       console.log(err);
   } else {
       console.log("A new cat has been added");
       console.log(cat);
   }
});

// Retrieve all cats from the database and console.log each log
Cat.find({}, function(err, cats) {
   if (err) {
       console.log("Error!");
       console.log(err);
   } else {
       console.log("All the cats...");
       console.log(cats);
   }
});