import { model, Schema } from "mongoose";
import { Product } from "../entities/Product";

const ProductSchema = new Schema<Product>({
  name: {type: String, required: true},
  description: {type: String, required: true},
  unit_price: {type: Number, required: true},
  image: {type: String, required: true},
  bar_code: {type: Number, required: true, unique: true},
  categories: [
    {
      name: {type: String, required: true},
      created_at: {type: Date, default: Date.now(), required: true}
    }
  ],
  created_at: {type: Date, default: Date.now(), required: true}
})

export default model<Product>("products", ProductSchema);
  
  