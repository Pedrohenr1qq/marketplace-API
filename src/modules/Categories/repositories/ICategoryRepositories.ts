import { Category } from "../entities/Category";

export interface ICategoyRepositories{
  create(body: Category): Promise<void>;
  findByName(name: string): Promise<Category | null>;
  findById(id: string): Promise<Category | null>;
  findAll(limit: number, offset: number): Promise<Category[]>;
  update(id: string, data: Category): Promise<void>;
  delete(id: string): Promise<void>;
}