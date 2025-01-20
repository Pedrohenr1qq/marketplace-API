import { Order } from "modules/Orders/entities/Order";
import { IOrderRepositories } from "../IOrderRepositories";
import OrderSchema from "modules/Orders/schemas/OrderSchema";

export class OrderRepositoriesMongoDB implements IOrderRepositories{
  async create(order: Order): Promise<void>{
    await OrderSchema.create(order);
  }

  async findAll(limit: number, offset: number): Promise<Order[]>{
    const orders = await OrderSchema.find().limit(limit).skip(offset);
    return orders;
  }

  async findById(id: string): Promise<Order | null>{
    const order = await OrderSchema.findOne({_id: id});
    return order;
  }

  async delete(id: string): Promise<void>{
    await OrderSchema.deleteOne({_id: id});
  }
}