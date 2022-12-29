const express = require("express");
const Cloth = require("../models/cloth.model");
const router = express.Router();
const authenticate = require("../middlewares/authenticate");

router.get("", async (req, res) => {
  try {
    const cloths = await Cloth.find().lean().exec();

    return res.status(200).send({ cloths: cloths }); // []
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const cloth = await Cloth.findById(req.params.id).lean().exec();
    return res.status(200).send(cloth);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});



router.delete("/:id", async (req, res) => {
  try {
    const item = await Cloth.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send(item);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("/", authenticate, async (req, res) => {
  req.body.user_id = req.user._id;
  try {
    const cloth = await Cloth.create(req.body);
    return res.status(200).send(cloth);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
