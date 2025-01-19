import { NotFoundError } from "helpers/errors/apiError";
import { Order } from "modules/Orders/entities/Order";
import { IOrderRepositories } from "modules/Orders/repositories/IOrderRepositories";
import { IUserRepositories } from "modules/Users/repositories/IUserRepositories";
import { ObjectId } from "mongodb";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateService{
  constructor(
    @inject("OrderRepositories")
    private OrderRepositories: IOrderRepositories,
  ){}

  async execute(_id: ObjectId, order: Order): Promise<void>{
    const new_order = {...order, user_id:_id};
    await this.OrderRepositories.create(new_order);
  }
}