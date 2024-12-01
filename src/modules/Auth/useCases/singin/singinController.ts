import { Request, Response } from "express";
import { container } from "tsyringe";
import { singinService } from "./singinService";

class SigninController {
  handle =  async(req: Request, res: Response): Promise<void> => {
    try {
      const body = req.body;
      const signinService = container.resolve(singinService);
      const token = await signinService.execute(body);

      res.send({Token: token});

    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }
}

export default new SigninController();