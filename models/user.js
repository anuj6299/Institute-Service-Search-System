var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
      },
    password: {
        type: String,
        required: true,
        minlength: 4,
        trim: true
      }
});

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("User", UserSchema);
