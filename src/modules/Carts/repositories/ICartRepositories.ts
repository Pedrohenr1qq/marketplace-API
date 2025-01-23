import { Cart } from "../entities/Cart";

export interface ICartRepositories{
  create(data: Cart): Promise<void>;
  findById(id: string): Promise<Cart | null>;
  findAll(limit: number, offset: number): Promise<Cart[]>;
  update(id: string, data: Cart): Promise<void>;
  delete(id: string): Promise<void>;
}