import { Cart } from "modules/Carts/entities/Cart";
import { ICartRepositories } from "../ICartRepositories";
import CartSchema from "modules/Carts/schemas/CartSchema";

export class CartRepositoriesMongoDB implements ICartRepositories {
  async create(data: Cart): Promise<void> {
    await CartSchema.create(data);
  }
}