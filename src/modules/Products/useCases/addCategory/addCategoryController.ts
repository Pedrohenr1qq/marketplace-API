import { Request, Response } from "express";
import { container } from "tsyringe";
import { AddCategoryService } from "./addCategoryService";

class AddCategoryController{
  async handle(req: Request, res: Response){
    try {
      const {productId} = req.params;
      const {categoryId} = req.body;

      const addCategoryService = container.resolve(AddCategoryService);
      await addCategoryService.execute(productId, categoryId);

      res.sendStatus(201);
      
    } catch (error:any) {
      res.status(500).send("Error: "+ error.message);
    }
  }
}

export default new AddCategoryController();