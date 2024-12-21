import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateService } from "./createService";

class CreateController{
  async handle(req: Request, res: Response){
    try {
      const body = req.body;

      const createService = container.resolve(CreateService);
      await createService.execute(body);

      res.sendStatus(201);

    } catch (error: any) {
      res.send("Error: "+ error.getMessage);
    }
  }

}

export default new CreateController();