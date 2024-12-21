import { model, Schema } from "mongoose";
import { Category } from "../entities/Category";

const CategorySchema = new Schema<Category>({
  name: {type: String, required: true},
  created_at: {type: Date, required: true, default: Date.now()},
})

export default model<Category>("categories", CategorySchema);