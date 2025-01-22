import { ICartRepositories } from "modules/Carts/repositories/ICartRepositories";
import { ObjectId } from "mongodb";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateService{
  constructor(
    @inject("CartRepositories")
    private CartRepositories: ICartRepositories
  ){}

  async execute(_id: ObjectId, data: any): Promise<void>{
    const cart = {...data, user_id: _id};
    await this.CartRepositories.create(cart);
  }
}