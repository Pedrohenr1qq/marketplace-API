import { NotFoundError } from "helpers/errors/apiError";
import { Cart } from "modules/Carts/entities/Cart";
import { ICartRepositories } from "modules/Carts/repositories/ICartRepositories";
import { inject, injectable } from "tsyringe";

@injectable()
export class FindByIdService{
  constructor(
    @inject("CartRepositories")
    private CartRepositories: ICartRepositories
  ){}

  async execute(id: string): Promise<Cart>{
    const cart = await this.CartRepositories.findById(id);
    if(!cart) throw new NotFoundError("Cart not found");

    return cart;
  }
}