import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllService } from "./findAllService";

class FindAllController {
  async handle(req: Request, res: Response) {
    const { limit, offset } = res.locals;

    const findAllService = container.resolve(FindAllService);
    const carts = await findAllService.execute(limit, offset);

    res.send(carts);

  }
} export default new FindAllController();