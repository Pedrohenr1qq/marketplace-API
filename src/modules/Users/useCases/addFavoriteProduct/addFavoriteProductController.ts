import { Request, Response } from "express";
import { container } from "tsyringe";
import { AddFavoriteProductService } from "./addFavoriteProductService";

class AddFavoriteProductController{
  async handle(req: Request, res: Response): Promise<void>{
    try {
      const userId = res.locals.user._id;
      const {productId} = req.params;

      const addFavoriteProduct = container.resolve(AddFavoriteProductService);

      await addFavoriteProduct.execute(userId, productId);

      res.sendStatus(201);

    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }
}

export default new AddFavoriteProductController();