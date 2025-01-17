import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByIdService } from "./findByIdService";

class FindByIdController {
  async handle(req: Request, res: Response): Promise<void>{
    const {id} = req.params;
    const findByIdService = container.resolve(FindByIdService);
    const user = await findByIdService.execute(id);

    res.send(user);  
  }
} export default new FindByIdController();