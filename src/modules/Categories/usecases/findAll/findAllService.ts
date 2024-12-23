import { Category } from "modules/Categories/entities/Category";
import { ICategoyRepositories } from "modules/Categories/repositories/ICategoryRepositories";
import { inject, injectable } from "tsyringe";

@injectable()
export class FindAllService{
  constructor(
    @inject("CategoryRepositories")
    private CategoryRepositories: ICategoyRepositories
  ){}

  async execute(limit: number, offset: number): Promise<Category[]>{
    const categories =  await this.CategoryRepositories.findAll(limit, offset);
    if(!categories.length)  throw new Error("Categories not found");
    
    return categories;
  }
}