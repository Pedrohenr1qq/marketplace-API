import { Category } from "modules/Categories/entities/Category";
import { ICategoyRepositories } from "modules/Categories/repositories/ICategoryRepositories";
import { inject, injectable } from "tsyringe";

@injectable()
export class FindByIdService{
  constructor(
    @inject("CategoryRepositories")
    private CategoryRepositories: ICategoyRepositories
  ){}

  async execute(id: string): Promise<Category>{
    const category = await this.CategoryRepositories.findById(id);

    if(!category) throw new Error("Category not found");

    return category;
  }
}