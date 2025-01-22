import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByIdService } from "./findByIdService";

class FindBydIdController {
  async handle(req: Request, res: Response) {
    const {id} = req.params;

    const findBydIdService = container.resolve(FindByIdService);
    const cart = await findBydIdService.execute(id);

    res.send(cart);

  }
} export default new FindBydIdController();