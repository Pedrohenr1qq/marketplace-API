import { Order } from "../entities/Order";

export interface IOrderRepositories{
  create(order: Order): Promise<void>;
  findAll(limit: number, offset: number): Promise<Order[]>;
  findById(id: string): Promise<Order | null>;
  
  delete(id: string): Promise<void>;
}