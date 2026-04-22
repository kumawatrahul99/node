const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./configuration/mongodb");

const products = require("./router/productrouter");
const users = require("./router/userrouter");
const orders = require("./router/orderrouter");
const admins = require("./router/adminrouter");
const newproducts = require("./router/newproduct");

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/product", products);
app.use("/user", users);
app.use("/orders", orders);
app.use("/admin", admins);
app.use("/newproducts", newproducts);

app.get("/", (req, res) => {
  res.send("Server is running successfully");
});

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});