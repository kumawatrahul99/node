const express = require("express");
const router = express.Router();

const productsmodel = require("../schema/newproducts");

router.post("/add", async (req, res) => {
  const productsave = new productsmodel(req.body);
  const savedata = await productsave.save();

  if (savedata) {
    res.status(201).json({
      message: "product successfully added",
    });
  } else {
    res.status(406).json({
      message: "something went wrong",
    });
  }
});
router.get("/allproducts/:id", async (req, res) => {
  const id = req.params.id;

  const singleproduct = await productsmodel.findById(id);

  if (singleproduct) {
    res.status(200).json(singleproduct);
  } else {
    res.status(404).json({
      message: "product not found",
    });
  }
});

router.get("/allproducts", async (req, res) => {
  const allproducts = await productsmodel.find({});
  res.send(allproducts);
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const deleteproduct = await productsmodel.findByIdAndDelete(id);

  if (deleteproduct) {
    res.status(200).json({
      message: "product deleted",
    });
  } else {
    res.status(403).json({
      message: "something went wrong",
    });
  }
});

router.patch("/editproduct/:id", async (req, res) => {
  const id = req.params.id;
  const editproduct = await productsmodel.findByIdAndUpdate(id, req.body);

  if (editproduct) {
    res.status(200).json({
      message: "product updated successfully",
    });
  } else {
    res.status(403).json({
      message: "something went wrong",
    });
  }
});

module.exports = router;