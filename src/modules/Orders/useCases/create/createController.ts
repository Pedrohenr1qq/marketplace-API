import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateService } from "./createService";

class CreateController{
  async handle(req: Request, res: Response){
    const {_id} = res.locals.user;
    const body = req.body;

    const createService = container.resolve(CreateService);
    await createService.execute(_id, body);
    res.sendStatus(201);
  }
} export default new CreateController();