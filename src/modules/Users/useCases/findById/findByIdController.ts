import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByIdService } from "./findByIdService";

class FindByIdController {
  async handle(req: Request, res: Response): Promise<void>{
    try {
      const {id} = req.params;
      const findByIdService = container.resolve(FindByIdService);
      const user = await findByIdService.execute(id);

      res.send(user);
      
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }
}

export default new FindByIdController();