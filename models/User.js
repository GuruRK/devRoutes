const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  name: {
    type: String,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", userSchema);
