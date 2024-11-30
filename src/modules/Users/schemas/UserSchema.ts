import { model, Schema } from "mongoose";
import { User } from "../entities/User";

const UserSchema = new Schema<User>({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  image: {type: String, required: true},
  addresses: [
    {
      street: {type: String, required: true},
      number: {type: Number, required: true},
      complement: {type: String, required: true},
      zipcode: {type: String, required: true},
      created_at: {type: Date, required: true, default: Date.now()},
    }
  ],
  favorite_products: [
    {
      _id: { type: Schema.Types.ObjectId, ref:"products"},
      created_at: {type: Date, required: true, default: Date.now()},
    }
  ],
  admin: {type: Boolean, required: true, default: false},
  created_at: {type: Date, required: true, default: Date.now()},
})

export default model<User>("users", UserSchema);