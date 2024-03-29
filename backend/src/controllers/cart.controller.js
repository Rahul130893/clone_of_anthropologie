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

//singel cart items by its id
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



// to get the cartItems of every single user who login 
router.get("/singleUser/:id", async (req, res) => { //here id is of user 
  

  try {
    const ALLClothbyoneuser = await Cart.find({ user_id: req.params.id })
      .populate("user_id")
      .lean()
      .exec();
    return res.status(200).send(ALLClothbyoneuser);
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
