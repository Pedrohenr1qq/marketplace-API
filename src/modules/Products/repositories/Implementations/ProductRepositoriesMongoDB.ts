import { Product } from "modules/Products/entities/Product";
import { IProductRepositories } from "../IProductRepositories";
import ProductSchema from "modules/Products/schemas/ProductSchema";

export class ProductRepositoriesMongoDB implements IProductRepositories{

  async findByBarCode(barCode: number): Promise<Product | null>{
    const product = await ProductSchema.findOne({bar_code: barCode});
    return product;
  }


  async create(body: Product): Promise<void>{
    const product = await this.findByBarCode(body.bar_code);

    if(product) throw new Error("Bar code invalid");

    await ProductSchema.create(body);
  }
}