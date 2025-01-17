import { ConflitError } from "helpers/errors/apiError";
import { Category } from "modules/Categories/entities/Category";
import { ICategoyRepositories } from "modules/Categories/repositories/ICategoryRepositories";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateService{

  constructor(
    @inject("CategoryRepositories")
    private CategoryRepositories: ICategoyRepositories
  ){}

  async execute(body: Category){
    const category = await this.CategoryRepositories.findByName(body.name);

    if(category) throw new ConflitError("Category already exists");

    await this.CategoryRepositories.create(body);
  }
}