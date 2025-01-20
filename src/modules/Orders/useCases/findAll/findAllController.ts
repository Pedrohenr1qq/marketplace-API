import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllService } from "./findAllService";

class FindAllController{
  async handle(req: Request, res: Response){
    const limit = res.locals.limit;
    const offset = res.locals.offset;

    const findAllService = container.resolve(FindAllService);
    const orders = await findAllService.execute(limit, offset);

    res.send(orders);

  }

} export default new FindAllController();