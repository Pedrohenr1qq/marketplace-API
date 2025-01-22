import { model, Schema } from "mongoose";
import { Cart } from "../entities/Cart";

const CartShcema = new Schema<Cart>({
  products: [
    {
      _id: {type: Schema.Types.ObjectId, required: true, ref: "products"},
      quantity: {type: Number, required: true}
    }
  ],
  total_price: {type: Number, required: true},
  freight: {type: Number, required: true},
  user_id: {type: Schema.Types.ObjectId, required: true, ref: "users"},
  concluded: {type: Boolean, default: false},
  created_at: {type: Date, required: true, default: Date.now()}
});

export default model<Cart>("carts", CartShcema);