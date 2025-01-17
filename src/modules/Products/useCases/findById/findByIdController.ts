import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByIdService } from "./findByIdService";

class FindByIdController{
  async handle(req: Request, res: Response){
    const {id} = req.params;

    const findByIdService = container.resolve(FindByIdService);
    const product = await findByIdService.execute(id); 

    res.send(product);
  }
}

export default new FindByIdController();