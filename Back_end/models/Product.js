import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  img: String,
  rating: String,
});

export default mongoose.model("Product", productSchema);
