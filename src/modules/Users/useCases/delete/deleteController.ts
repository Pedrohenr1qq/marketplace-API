import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteService } from "./deleteService";

class DeleteController{
  async handle(req: Request, res: Response): Promise<void>{
    try {
      const {_id} = res.locals.user;
      const data = req.body;

      const deleteService = container.resolve(DeleteService);
      await deleteService.execute(_id);

      res.sendStatus(204);

    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }
}

export default new DeleteController();