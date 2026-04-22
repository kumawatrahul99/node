const express = require("express");
const router = express.Router();

const usermodel = require("../schema/user");

router.post("/add", async (req, res) => {
  const usersave = new usermodel(req.body);
  const savadata = await usersave.save();
  if (savadata) {
    res.status(200).json({
      message: "user succssfully registred",
    });
  } else {
    res.status(400).json({
      message: "soething went worng",
    });
  }
});

router.get("/allusers", async (req, res) => {
  const allusers = await usermodel.find({});
  res.send(allusers);
});


router.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  const user = await usermodel.findById(id);
  res.send(user);
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const deleteuser = await usermodel.findByIdAndDelete(id);
  if (deleteuser) {
    res.status(200).json({
      message: "user deleted",
    });
  } else {
    res.status(403).json({
      message: "soething went worng",
    });
  }
});



router.patch("/edituser/:id", async (req, res) => {
  const id = req.params.id;
  const edituser = await usermodel.findByIdAndUpdate(id, req.body);
  if (edituser) {
    res.status(200).json({
      message: "user update succssfully",
    });
  } else {
    res.status(403).json({
      message: "soething went worng",
    });
  }
});

router.put("/putuser/:id", async (req, res) => {
  const id = req.params.id;

  const edituser = await usermodel.findByIdAndUpdate(id, req.body, { new: true });

  if (edituser) {
    res.status(200).json({
      message: "putuser update successfully",
      data: edituser
    });
  } else {
    res.status(403).json({
      message: "put something went wrong",
    });
  }
});

module.exports = router;
