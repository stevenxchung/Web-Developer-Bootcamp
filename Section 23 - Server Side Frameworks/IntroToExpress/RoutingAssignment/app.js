// Express Routing Assignment

var express = require("express");
var app = express();

// Routes to "/"
app.get("/", function(req, res) {
   res.send("Hi there, welcome to my assignment!"); 
});

// Routes to a specific page based on the animal
app.get("/speak/:animal", function(req, res) {
    // Declare object to store sounds corresponding to each animal
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        cat: "Meow",
        chicken: "Cock-a-doodle-doo!"
    };
    // Store route parameter "animal" (case insensitive)
    var animal = req.params.animal.toLowerCase();
    // Sound corresponding to a specific animal
    var sound = sounds[animal];
    // Log route parameter
    console.log(animal);
    // Displays differently depending on animal
    if (sound) {
        res.send("The " + animal + " says '" + sound + "'");
    }
    else {
        res.send("Sorry, page not found... What are you doing with your life?");
    }
});

// Routes to a specific page based on greeting and num
app.get("/repeat/:greeting/:num", function(req, res) {
    // Store route parameters "greeting" and "num"
    var greeting = req.params.greeting;
    var num = req.params.num;
    // Log route parameter
    console.log(greeting, num);
    // Displays differently depending on greeting and num
    res.send((greeting + " ").repeat(num));
});

// Routes to a default page if a route is undefined (should be the last of the get() requests)
app.get("*", function(req, res) {
   res.send("Sorry, page not found... What are you doing with your life?"); 
});

// Listen on a particular port and ip
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started!");
});