import { ConflitError } from "@/helpers/errors/apiError";
import { Product } from "@/modules/Products/entities/Product";
import { IProductRepositories } from "@/modules/Products/repositories/IProductRepositories";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateService{
  constructor(
    @inject("ProductRepositories")
    private ProductRepositories: IProductRepositories
  ){}

  async execute(body: Product): Promise<void>{
    const product = await this.ProductRepositories.findByBarCode(body.bar_code);

    if(product) throw new ConflitError("Bar code invalid");

    this.ProductRepositories.create(body);
  }
}