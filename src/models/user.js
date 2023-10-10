const Mongoose = require("mongoose");

const schema = new Mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    referant: { type: Boolean, required: true, default: false },
    referantpicurepath: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = Mongoose.model("User", schema);