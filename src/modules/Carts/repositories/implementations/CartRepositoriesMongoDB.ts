import { Cart } from "modules/Carts/entities/Cart";
import { ICartRepositories } from "../ICartRepositories";
import CartSchema from "modules/Carts/schemas/CartSchema";

export class CartRepositoriesMongoDB implements ICartRepositories {
  async create(data: Cart): Promise<void> {
    await CartSchema.create(data);
  }

  async findById(id: string): Promise<Cart | null>{
    const cart = await CartSchema.findOne({ _id: id });
    return cart;
  }
  findAll(limit: number, offset: number): Promise<Cart[]>{
    return CartSchema.find().limit(limit).skip(offset);
  }

  async update(id: string, data: Cart): Promise<void>{
    await CartSchema.updateOne({ _id: id }, data);
  }


  async delete(id: string): Promise<void>{
    await CartSchema.deleteOne({ _id: id });
  }
}