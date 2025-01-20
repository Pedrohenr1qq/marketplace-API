import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByIdService } from "./findByIdService";

class FindByIdController{
  async handle(req: Request, res: Response){
    const {id} = req.params;

    const findByIdService = container.resolve(FindByIdService);
    const order = await findByIdService.execute(id);

    res.send(order);
  }

} export default new FindByIdController();