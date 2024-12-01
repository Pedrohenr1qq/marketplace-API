import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllService } from "./findAllService";


class FindAllController{
  async handle(req: Request, res: Response): Promise<void>{
    try {
      const {limit, offset} = res.locals.pagination;
      const findAllService = container.resolve(FindAllService);
      const users = await findAllService.execute(limit, offset);

      res.send({users});

    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }
}

export default new FindAllController();