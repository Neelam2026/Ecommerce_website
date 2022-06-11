
const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  image_url: { type: String, required: false },
  categoryId: [
    { type: mongoose.Schema.Types.ObjectId, ref: "category", required: false },
  ],
  brandId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "brand",
    required: true,
  },
  reviewsId: [
    { ref: "reviews", type: mongoose.Schema.Types.ObjectId, required: false },
  ],
},
{
        timestamps : true,
        versionKey : false,
    })
    
    
module.exports=mongoose.model("product", ProductSchema)
