import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateAvatarService } from "./updateAvatarService";

class UpdateAvatarController{
  async handle(req: Request, res: Response){
    const {_id} = res.locals.user;
    const avatar = req.file?.path as string;
    const updateAvatarService = container.resolve(UpdateAvatarService);
    updateAvatarService.execute(_id, avatar);
    res.sendStatus(204);
  }

} export default new UpdateAvatarController();