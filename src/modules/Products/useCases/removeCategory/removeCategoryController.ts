import { Request, Response } from "express";
import { container } from "tsyringe";
import { RemoveCategoryService } from "./removeCategoryService";

class RemoveCategoryController{
  async handle(req: Request, res: Response){
    try {
      const {productId} = req.params;
      const {categoryId} = req.body;

      const removeCategoryService = container.resolve(RemoveCategoryService);
      await removeCategoryService.execute(productId, categoryId);

      res.sendStatus(204);
      
    } catch (error:any) {
      res.status(500).send("Error: "+ error.message);
    }
  }
}

export default new RemoveCategoryController();