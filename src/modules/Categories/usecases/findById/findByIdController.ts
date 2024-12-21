import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByIdService } from "./findByIdService";

class FindByIdController{
  async handle(req: Request, res: Response){
    try {
      const {id} = req.params;
    
      const findAllService = container.resolve(FindByIdService);
      
      const category = await findAllService.execute(id);

      res.send(category);

    } catch (error:any) {
      res.status(500).send("Error: " + error.message);
    }

  }
}

export default new FindByIdController();