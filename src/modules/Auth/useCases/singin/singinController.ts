import { Request, Response } from "express";
import { container } from "tsyringe";
import { SinginService } from "./singinService";

class SigninController {
  handle =  async(req: Request, res: Response): Promise<void> => {
    try {
      const body = req.body;
      const singinService = container.resolve(SinginService);
      const token = await singinService.execute(body);

      res.send({Token: token});

    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }
}

export default new SigninController();