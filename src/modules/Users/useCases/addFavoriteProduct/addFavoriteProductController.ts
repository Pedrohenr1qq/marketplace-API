import { Request, Response } from "express";
import { container } from "tsyringe";
import { AddFavoriteProductService } from "./addFavoriteProductService";

class AddFavoriteProductController{
  async handle(req: Request, res: Response): Promise<void>{
    const userId = res.locals.user._id;
    const {productId} = req.params;

    const addFavoriteProduct = container.resolve(AddFavoriteProductService);
    await addFavoriteProduct.execute(userId, productId);

    res.sendStatus(201);
  }
}

export default new AddFavoriteProductController();