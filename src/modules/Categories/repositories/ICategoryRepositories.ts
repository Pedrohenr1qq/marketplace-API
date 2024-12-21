import { Category } from "../entities/Category";

export interface ICategoyRepositories{
  findByName(name: string): Promise<Category | null>;
  create(body: Category): Promise<void>;
}