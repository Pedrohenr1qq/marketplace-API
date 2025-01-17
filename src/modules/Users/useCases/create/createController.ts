import {Request, Response} from "express";
import { CreateService } from "./createService";
import { container } from "tsyringe";

class CreateController{
  constructor(){}

  async handle(req: Request , res: Response): Promise<void>{
    const body = req.body;
    const createService = container.resolve(CreateService);
    await createService.execute(body);
    res.sendStatus(201);
  }
}

export default new CreateController();