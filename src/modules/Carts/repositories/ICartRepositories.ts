import { Cart } from "../entities/Cart";

export interface ICartRepositories{
  create(data: Cart): Promise<void>;
  findById(id: string): Promise<Cart | null>;
  findAll(limit: number, offset: number): Promise<Cart[]>;
}