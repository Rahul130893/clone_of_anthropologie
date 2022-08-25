const mongoose = require("mongoose");

const dotenv = require("dotenv")
dotenv.config()

const db= process.env.MongoURI

module.exports = () => {
  return mongoose.connect(db);
};
