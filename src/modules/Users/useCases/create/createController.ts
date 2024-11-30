import {Request, Response} from "express";
import { CreateService } from "./createService";

export class CreateController{
  constructor(private createService: CreateService){}

  async handle(req: Request , res: Response): Promise<void>{
    try {
      const body = req.body;
      this.createService.execute(body);
      res.sendStatus(201);

    } catch (error: any) {
      console.log(`Error in CREATE USER: ${error.message}`);
      res.status(500).send({message: "Internal server error."});
    }
  }
}