import { NotFoundError } from "helpers/errors/apiError";
import { Product } from "modules/Products/entities/Product";
import { IProductRepositories } from "modules/Products/repositories/IProductRepositories";
import { inject, injectable } from "tsyringe";

@injectable()
export class FindAllService{
  constructor(
    @inject("ProductRepositories")
    private ProductRepositories: IProductRepositories
  ){}

  async execute(limit: number, offset: number): Promise<Product[]>{
    const products = await this.ProductRepositories.findAll(limit, offset);
    if(!products.length) throw new NotFoundError("Products not found");

    return products;
  }
}