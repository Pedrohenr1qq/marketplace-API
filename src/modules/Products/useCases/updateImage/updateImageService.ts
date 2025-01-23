import { NotFoundError } from "helpers/errors/apiError";
import { deleteFile } from "helpers/upload/deleteFile";
import { IProductRepositories } from "modules/Products/repositories/IProductRepositories";
import { inject, injectable } from "tsyringe";

@injectable()
export class UpdateImageService{
  constructor(
    @inject("ProductRepositories")
    private ProductRepositories: IProductRepositories
  ){}

  async execute(id: string, image: string): Promise<void>{
    const product = await this.ProductRepositories.findById(id);

    if(!product) throw new NotFoundError('Product not found');

    if(product.image != "") await deleteFile(product.image);

    await this.ProductRepositories.updateImage(id, image);
  }
}
