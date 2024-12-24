import { Product } from "modules/Products/entities/Product";
import { IProductRepositories } from "modules/Products/repositories/IProductRepositories";
import { injectable, inject } from "tsyringe";

@injectable()
export class DeleteService{
  constructor(
    @inject("ProductRepositories")
    private ProductRepositories: IProductRepositories
  ){}

  async execute(id: string): Promise<void>{
    const product = await this.ProductRepositories.findById(id);
    if(!product) throw new Error("Product not found");

    await this.ProductRepositories.delete(id);
  }
}