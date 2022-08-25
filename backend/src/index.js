const express = require("express")

const cors = require("cors")
const connect = require("./configs/db");
const cartController = require("./controllers/cart.controller")
const clothController = require("./controllers/cloth.controller")
const userController = require("./controllers/user.controller")
const shoesController= require("./controllers/shoes.controller")
const { register, login } = require("./controllers/auth.controller");
const dotenv = require("dotenv");
dotenv.config();

const app = express()
app.use(cors())

app.use(express.json())

 app.use("/cart", cartController)
app.use("/cloth", clothController)
app.use("/shoes", shoesController)
 app.use("/users", userController)

app.post("/register", register);

app.post("/login", login);

const port=process.env.PORT || 5200

app.listen(port, async function () {
    try {
        await connect()
        console.log(`listening on ${port}`)
    } catch (err) {
        console.log(err.message)
    }
})