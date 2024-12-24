import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateService } from "./updateService";

class UpdateController {
  async handle(req: Request, res: Response){
    try {
      const {id} = req.params;
      const data = req.body;
  
      const updateService = container.resolve(UpdateService);
      await updateService.execute(id, data);
  
      res.sendStatus(204);
  
    } catch (error:any) {
      res.status(500).send("Error: "+ error.message);
    }
  }
}

export default new UpdateController();