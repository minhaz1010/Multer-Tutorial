const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  imageCover: String,
  photos: [String],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
