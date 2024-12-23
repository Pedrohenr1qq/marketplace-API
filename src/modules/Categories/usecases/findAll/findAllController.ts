import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllService } from "./findAllService";

class FindAllController{
  async handle(req: Request, res: Response){

    try {
      let {limit, offset} = res.locals.pagination;

      const findAllService = container.resolve(FindAllService);
      const categories = await findAllService.execute(limit, offset);
  
      res.send(categories);      
    } catch (error: any) {
      res.status(500).send("Error: "+ error.message);
    }

  }

}

export default new FindAllController();