

const express = require("express");
const router = express.Router();

const adminmodel = require("../schema/admin");


router.post("/add", async (req, res) => {
  const adminsave = new adminmodel(req.body);
  const savedata = await adminsave.save();

  if (savedata) {
    res.status(200).json({
      message: "admin successfully registered",
    });
  } else {
    res.status(400).json({
      message: "something went wrong",
    });
  }
});


router.get("/alladmins", async (req, res) => {
  const alladmins = await adminmodel.find({});
  res.send(alladmins);
});


router.get("/admins/:id", async (req, res) => {
  const id = req.params.id;
  const admin = await adminmodel.findById(id);
  res.send(admin);
});


router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const deleteadmin = await adminmodel.findByIdAndDelete(id);

  if (deleteadmin) {
    res.status(200).json({
      message: "admin deleted",
    });
  } else {
    res.status(403).json({
      message: "something went wrong",
    });
  }
});

// ✅ EDIT ADMIN
router.patch("/editadmin/:id", async (req, res) => {
  const id = req.params.id;
  const editadmin = await adminmodel.findByIdAndUpdate(id, req.body);

  if (editadmin) {
    res.status(200).json({
      message: "admin updated successfully",
    });
  } else {
    res.status(403).json({
      message: "something went wrong",
    });
  }
});

module.exports = router;