import { NotFoundError } from "@/helpers/errors/apiError";
import { Product } from "@/modules/Products/entities/Product";
import { IProductRepositories } from "@/modules/Products/repositories/IProductRepositories";
import { injectable, inject } from "tsyringe";

@injectable()
export class FindByIdService{
  constructor(
    @inject("ProductRepositories")
    private ProductRepositories: IProductRepositories
  ){}

  async execute(id: string): Promise<Product | null>{
    const product = await this.ProductRepositories.findById(id);
    if(!product) throw new NotFoundError("Product not found");

    return product;
  }
}