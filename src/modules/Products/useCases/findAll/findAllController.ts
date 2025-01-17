import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllService } from "./findAllService";

class FindAllController{
  async handle(req: Request, res: Response){
    const {limit, offset} = res.locals.pagination;

    const findAllService = container.resolve(FindAllService);
    const products = await findAllService.execute(limit, offset);

    res.send(products);
  }
} export default new FindAllController();