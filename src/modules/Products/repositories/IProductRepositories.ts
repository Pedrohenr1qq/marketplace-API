import { Category } from "modules/Categories/entities/Category";
import { Product } from "../entities/Product";

export interface IProductRepositories{
  create(body: Product): Promise<void>;
  findByBarCode(barCode: number): Promise<Product | null>;
  findById(id: string): Promise<Product | null>;
  findAll(limit: number, offset: number): Promise<Product[]>;
  update(id: string, data: Product): Promise<void>;
  delete(id: string): Promise<void>;
  addCategory(productId: string, categoryId: string): Promise<void>;
}