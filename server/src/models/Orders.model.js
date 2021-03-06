const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products_Id: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  ],
  quantity: { type: Number, required: false },
 
});
const Order = mongoose.model("order", OrderSchema);
module.exports = Order;
