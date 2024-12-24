import { Product } from "../entities/Product";

export interface IProductRepositories{
  create(body: Product): Promise<void>;
  findByBarCode(barCode: number): Promise<Product | null>;
  findById(id: string): Promise<Product | null>;
  findAll(limit: number, offset: number): Promise<Product[]>;

  delete(id: string): Promise<void>;
}