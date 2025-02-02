import { Product } from "@/modules/Products/entities/Product";
import { IProductRepositories } from "../IProductRepositories";
import ProductSchema from "@/modules/Products/schemas/ProductSchema";

export class ProductRepositoriesMongoDB implements IProductRepositories{

  async findByBarCode(barCode: number): Promise<Product | null>{
    const product = await ProductSchema.findOne({bar_code: barCode});
    return product;
  }

  async create(body: Product): Promise<void>{
    await ProductSchema.create(body);
  }

  async findById(id: string): Promise<Product | null>{
    const product = await ProductSchema.findById(id);
    return product;
  }

  async findAll(limit: number, offset: number): Promise<Product[]>{
    const products = await ProductSchema.find().limit(limit).skip(offset);
    return products;
  }

  async update(id: string, data: Product): Promise<void>{
    await ProductSchema.findByIdAndUpdate(id, data);
  }

  async delete(id: string): Promise<void>{
    await ProductSchema.findByIdAndDelete(id);
  }

  async addCategory(productId: string, categoryId: string): Promise<void>{
    await ProductSchema.findOneAndUpdate(
      {_id: productId},
      {
        $push:{
          categories: {
            _id: categoryId
          }
        }
      }
    );
  }

  async removeCategory(productId: string, categoryId: string): Promise<void>{
    await ProductSchema.findOneAndUpdate(
      {_id: productId},
      {
        $pull:{
          categories: {
            _id: categoryId
          }
        }
      }
    );
  }

  async updateImage(id: string, image: string): Promise<void>{
    await ProductSchema.updateOne({_id: id}, {$set: {image: image}});
  }
}