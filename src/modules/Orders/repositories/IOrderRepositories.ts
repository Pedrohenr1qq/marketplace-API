import { Order } from "../entities/Order";

export interface IOrderRepositories{
  create(order: Order): Promise<void>;
}