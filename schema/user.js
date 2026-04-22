const mongoose = require("mongoose");

const usermodel = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
  phone: String,
  dob: String,
  image: String,
  address: String,
  city: String,
  pincode: String,
});

const user = mongoose.model("userdata", usermodel, "userdata");

module.exports = user;
