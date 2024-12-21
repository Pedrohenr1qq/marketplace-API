import { Category } from "modules/Categories/entities/Category";
import { ICategoyRepositories } from "../ICategoryRepositories";
import CategorySchema from "modules/Categories/schemas/CategorySchema";

export class CategoryRepositoriesMongoDB implements ICategoyRepositories{

  async findByName(name: string): Promise<Category | null>{
    return CategorySchema.findOne({name: name});
  }

  async create(body: Category): Promise<void> {
    await CategorySchema.create(body);
  }

}