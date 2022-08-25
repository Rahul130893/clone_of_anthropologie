const express = require("express");
const Shoes = require("../models/shoes.model");
const router = express.Router();
const authenticate = require("../middlewares/authenticate");

router.get("", async (req, res) => {
  try {
    const shoes = await Shoes.find().lean().exec();

    return res.status(200).send({ shoes: shoes }); // []
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const Shoes = await Shoes.findById(req.params.id).lean().exec();
    return res.status(200).send(shoes);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const item = await Shoes.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send(item);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("/", authenticate, async (req, res) => {
  req.body.user_id = req.user._id;
  try {
    const shoes = await Shoes.create(req.body);
    return res.status(200).send(shoes);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
