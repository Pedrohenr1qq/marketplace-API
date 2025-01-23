import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateImageService } from "./updateImageService";

class UpdateAvatarController{
  async handle(req: Request, res: Response){
    const {id} = req.params;
    const image = req.file?.path as string;
    const updateImageService = container.resolve(UpdateImageService);
    await updateImageService.execute(id, image);
    res.sendStatus(204);
  }

} export default new UpdateAvatarController();