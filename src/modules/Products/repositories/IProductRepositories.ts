import { Product } from "../entities/Product";

export interface IProductRepositories{
  create(body: Product): Promise<void>;
  findByBarCode(barCode: number): Promise<Product | null>;
}