import { Category } from "modules/Categories/entities/Category";
import { ICategoyRepositories } from "modules/Categories/repositories/ICategoryRepositories";
import { IProductRepositories } from "modules/Products/repositories/IProductRepositories";
import { inject, injectable } from "tsyringe";

@injectable()
export class RemoveCategoryService{
  constructor(
    @inject("ProductRepositories")
    private ProductRepositories: IProductRepositories,
    @inject("CategoryRepositories")
    private CategoryRepositories: ICategoyRepositories
  ){}

  async execute(productId: string, categoryId: string): Promise<void>{
    const product = await this.ProductRepositories.findById(productId);
    if(!product) throw new Error("Product not found");

    const category = await this.CategoryRepositories.findById(categoryId);
    if(!category) throw new Error("Category not found");

    await this.ProductRepositories.removeCategory(productId, categoryId);
  }
}