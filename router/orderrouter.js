const express = require("express");
const router = express.Router();

const ordermodel = require("../schema/orderlist");

router.post("/add", async (req, res) => {
  const ordersave = new ordermodel(req.body);
  const savedata = await ordersave.save();

  if (savedata) {
    res.status(201).json({
      message: "order successfully added",
    });
  } else {
    res.status(406).json({
      message: "something went wrong",
    });
  }
});

router.get("/allorders", async (req, res) => {
  const allorders = await ordermodel.find({});
  res.send(allorders);
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const deleteorder = await ordermodel.findByIdAndDelete(id);

  if (deleteorder) {
    res.status(200).json({
      message: "order deleted",
    });
  } else {
    res.status(403).json({
      message: "something went wrong",
    });
  }
});

router.patch("/editorder/:id", async (req, res) => {
  const id = req.params.id;
  const editorder = await ordermodel.findByIdAndUpdate(id, req.body);

  if (editorder) {
    res.status(200).json({
      message: "order updated successfully",
    });
  } else {
    res.status(403).json({
      message: "something went wrong",
    });
  }
});

module.exports = router;
