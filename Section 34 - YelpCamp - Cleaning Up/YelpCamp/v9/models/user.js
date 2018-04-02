var mongoose = require("mongoose"),
    passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
    username: String,
    password: String
});

// This will add methods from passport-local-mongoose into userSchema
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);