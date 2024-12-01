import {Request, Response} from "express";
import { CreateService } from "./createService";
import { container } from "tsyringe";

class CreateController{
  constructor(){}

  async handle(req: Request , res: Response): Promise<void>{
    try {
      const body = req.body;
      const createService = container.resolve(CreateService);
      createService.execute(body);
      res.sendStatus(201);

    } catch (error: any) {
      console.log(`Error in CREATE USER: ${error.message}`);
      res.status(500).send({message: "Internal server error."});
    }
  }
}

export default new CreateController();