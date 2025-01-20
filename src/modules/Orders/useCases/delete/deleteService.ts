import { NotFoundError } from "helpers/errors/apiError";
import { IOrderRepositories } from "modules/Orders/repositories/IOrderRepositories";
import { inject, injectable } from "tsyringe";

@injectable()
export class DeleteService{
  constructor(
    @inject("OrderRepositories")
    private OrderRepositories: IOrderRepositories
  ){}

  async execute(id: string){
    const order = await this.OrderRepositories.findById(id);
    if(!order) throw new NotFoundError("Order not found");

    await this.OrderRepositories.delete(id);
  }
}