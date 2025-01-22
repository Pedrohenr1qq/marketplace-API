import { Cart } from "../entities/Cart";

export interface ICartRepositories{
  create(data: Cart): Promise<void>;
}