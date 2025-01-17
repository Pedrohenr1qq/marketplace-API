import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByIdService } from "./findByIdService";

class FindByIdController{
  async handle(req: Request, res: Response){
    const {id} = req.params;
  
    const findAllService = container.resolve(FindByIdService);
    const category = await findAllService.execute(id);

    res.send(category);
  }
} export default new FindByIdController();