import { NotFoundError } from "@/helpers/errors/apiError";
import { IOrderRepositories } from "@/modules/Orders/repositories/IOrderRepositories";
import { inject, injectable } from "tsyringe";

@injectable()
export class FindAllService{
  constructor(
    @inject("OrderRepositories")
    private OrderRepositories: IOrderRepositories
  ){}

  async execute(limit: number, offset: number){
    const orders = await this.OrderRepositories.findAll(limit, offset);
    if(!orders.length) throw new NotFoundError("Orders not found");

    return orders;
  }
}