import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByIdService } from "./findByIdService";

class FindByIdController{
  async handle(req: Request, res: Response){

    try {
     
    const {id} = req.params;

    const findByIdService = container.resolve(FindByIdService);
    const product = await findByIdService.execute(id); 

    res.send(product);

    } catch (error: any) {
      res.status(500).send("Error: "+ error.message);
    }
  }
}

export default new FindByIdController();