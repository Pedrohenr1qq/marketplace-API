import { Category } from "modules/Categories/entities/Category";
import { ICategoyRepositories } from "../ICategoryRepositories";
import CategorySchema from "modules/Categories/schemas/CategorySchema";

export class CategoryRepositoriesMongoDB implements ICategoyRepositories{

  async create(body: Category): Promise<void> {
    await CategorySchema.create(body);
  }

  async findByName(name: string): Promise<Category | null>{
    const category = await CategorySchema.findOne({name: name});
    return category;
  }

  async findById(id: string): Promise<Category | null>{
    const category = await CategorySchema.findById(id);
    return category;
  }

  async findAll(limit: number, offset: number): Promise<Category[]>{
    return await CategorySchema.find().limit(limit).skip(offset);
  }




  async delete(id: string): Promise<void>{
    await CategorySchema.findByIdAndDelete(id);
  }
}