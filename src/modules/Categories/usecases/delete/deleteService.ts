import { NotFoundError } from "@/helpers/errors/apiError";
import { ICategoyRepositories } from "@/modules/Categories/repositories/ICategoryRepositories";
import { inject, injectable } from "tsyringe";

@injectable()
export class DeleteService{
  constructor(
    @inject("CategoryRepositories")
    private CategoryRepositories: ICategoyRepositories
  ){}

  async execute(id: string): Promise<void>{
    const category = await this.CategoryRepositories.findById(id);
    if(!category) throw new NotFoundError("Category not found");

    await this.CategoryRepositories.delete(id);
  }

}