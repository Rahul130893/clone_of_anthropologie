const express = require("express");
const Cart = require("../models/cart.model");
const router = express.Router();

router.get("", async (req, res) => {
  try {
    const cartItems = await Cart.find().lean().exec();

    return res.status(200).send({ cartItems: cartItems }); // []
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const cartItem = await Cart.findById(req.params.id).lean().exec();
    return res.status(200).send(cartItem);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const cartItem = await Cart.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send(cartItem);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const cartItem = await Cart.create(req.body);
    return res.status(200).send(cartItem);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
