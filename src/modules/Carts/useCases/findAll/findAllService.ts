import { NotFoundError } from "@/helpers/errors/apiError";
import { Cart } from "@/modules/Carts/entities/Cart";
import { ICartRepositories } from "@/modules/Carts/repositories/ICartRepositories";
import { inject, injectable } from "tsyringe";

@injectable()
export class FindAllService{
    constructor(
      @inject("CartRepositories")
      private CartRepositories: ICartRepositories
    ){}

    async execute(limit: number, offset: number): Promise<Cart[]>{
      const carts = await this.CartRepositories.findAll(limit, offset);
      if(!carts.length) throw new NotFoundError("Carts not found");

      return carts;
    }
}