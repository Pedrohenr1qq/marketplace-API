import { Category } from "modules/Categories/entities/Category";
import { ICategoyRepositories } from "modules/Categories/repositories/ICategoryRepositories";
import { inject, injectable } from "tsyringe";

@injectable()
export class UpdateService{
  constructor(
    @inject("CategoryRepositories")
    private CategoryRepositories: ICategoyRepositories
  ){}

  async execute(id: string, data: Category): Promise<void>{
    const category = await this.CategoryRepositories.findById(id);
    if(!category) throw new Error("Category not found");

    await this.CategoryRepositories.update(id, data);
  }
}