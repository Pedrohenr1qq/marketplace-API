import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateAvatarService } from "./updateAvatarService";

class UpdateAvatarController{
  async handle(req: Request, res: Response){
    try {
      const {_id} = res.locals.user;
      const avatar = req.file?.path as string;
      const updateAvatarService = container.resolve(UpdateAvatarService);
      updateAvatarService.execute(_id, avatar);
      res.sendStatus(204);

    } catch (error:any) {
      res.status(500).send(error.message);
    }
  }

}export default new UpdateAvatarController();