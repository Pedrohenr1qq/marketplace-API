import { Request, Response } from "express";
import { container } from "tsyringe";
import { RemoveFavoriteProductService } from "./removeFavoriteProductService";

class RemoveFavoriteProductController{
  async handle(req: Request, res: Response): Promise<void>{
    try {
      const userId = res.locals.user._id;
      const {productId} = req.params;

      const removeFavoriteProduct = container.resolve(RemoveFavoriteProductService);

      await removeFavoriteProduct.execute(userId, productId);

      res.sendStatus(204);

    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }
}

export default new RemoveFavoriteProductController();