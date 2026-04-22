const mongoose = require("mongoose")

const Usermodel = new mongoose.Schema({
   username: String,
   phone: String,
   dob: String,
   email: String,
   password: String,
  role:String

})

const User = mongoose.model("admindata", Usermodel)

module.exports = User