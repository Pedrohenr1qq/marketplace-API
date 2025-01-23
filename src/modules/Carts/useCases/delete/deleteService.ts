import { NotFoundError } from "@/helpers/errors/apiError";
import { ICartRepositories } from "@/modules/Carts/repositories/ICartRepositories";
import { inject, injectable } from "tsyringe";

@injectable()
export class DeleteService{
  constructor(
    @inject("CartRepositories")
    private CartRepositories: ICartRepositories
    
  ){}

  async execute(id: string): Promise<void>{
    const cart = await this.CartRepositories.findById(id);
    if(!cart) throw new NotFoundError("Cart not found");

    await this.CartRepositories.delete(id);
  }
}