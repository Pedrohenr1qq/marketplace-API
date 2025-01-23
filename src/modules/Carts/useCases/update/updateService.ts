import { NotFoundError } from "helpers/errors/apiError";
import { Cart } from "modules/Carts/entities/Cart";
import { ICartRepositories } from "modules/Carts/repositories/ICartRepositories";
import { inject, injectable } from "tsyringe";

@injectable()
export class UpdateService{
    constructor(
      @inject('CartRepositories')
      private CartRepositories: ICartRepositories
    ){}
    async execute(user_id: string,id: string, data: Cart): Promise<void>{
        const cart = await this.CartRepositories.findById(id);
        if(!cart) throw new NotFoundError('Cart not found');
        console.log(cart.user_id);
        console.log(user_id);
        console.log(String(cart.user_id) != user_id);
        if(String(cart.user_id) != user_id) throw new NotFoundError('Cart not found');

        await this.CartRepositories.update(id, data);
    }
}