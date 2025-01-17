import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllService } from "./findAllService";

class FindAllController{
  async handle(req: Request, res: Response){
    let {limit, offset} = res.locals.pagination;

    const findAllService = container.resolve(FindAllService);
    const categories = await findAllService.execute(limit, offset);

    res.send(categories);      
  }
}

export default new FindAllController();