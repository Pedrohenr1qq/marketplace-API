import { Order } from "modules/Orders/entities/Order";
import { IOrderRepositories } from "../IOrderRepositories";
import OrderSchema from "modules/Orders/schemas/OrderSchema";

export class OrderRepositoriesMongoDB implements IOrderRepositories{
  async create(order: Order): Promise<void>{
    await OrderSchema.create(order);
  }
}