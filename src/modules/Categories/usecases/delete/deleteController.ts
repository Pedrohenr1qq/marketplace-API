import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteService } from "./deleteService";

class DeleteController{
  async handle(req: Request, res: Response){
    const {id} = req.params;

    const deleteService = container.resolve(DeleteService);
    
    await deleteService.execute(id);

    res.sendStatus(204);
  }
} export default new DeleteController();