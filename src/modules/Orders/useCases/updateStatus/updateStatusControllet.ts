import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateStatusService } from "./updateStatusService";

class FindAllController{
  async handle(req: Request, res: Response){
    const {id} = req.params;

    const updateStatusService = container.resolve(UpdateStatusService);
    await updateStatusService.execute(id);

    res.sendStatus(204);
  }

} export default new FindAllController();