import { Request, Response } from "express";
import { container } from "tsyringe";
import { RemoveCategoryService } from "./removeCategoryService";

class RemoveCategoryController{
  async handle(req: Request, res: Response){
      const {productId} = req.params;
      const {categoryId} = req.body;

      const removeCategoryService = container.resolve(RemoveCategoryService);
      await removeCategoryService.execute(productId, categoryId);

      res.sendStatus(204);
  }
}

export default new RemoveCategoryController();