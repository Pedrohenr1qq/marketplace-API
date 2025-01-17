import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateService } from "./updateService";

class UpdateController{
  async handle(req: Request, res: Response): Promise<void>{
    const {_id} = res.locals.user;
    const data = req.body;

    const updateService = container.resolve(UpdateService);
    await updateService.execute(_id, data);

    res.sendStatus(204);
  }
} export default new UpdateController();