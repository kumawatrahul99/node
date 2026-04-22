const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: String,
  name: String,
  email: String,
  address: String,
  phone: String,
  pincode: String,
  city: String,
  totalPrice: Number,
  product: Array,
  ordersDate: String,
  status: {
    type: String,
    default: "confirmed",
  },
});

const Order = mongoose.model("Orderdata", OrderSchema);

module.exports = Order;
