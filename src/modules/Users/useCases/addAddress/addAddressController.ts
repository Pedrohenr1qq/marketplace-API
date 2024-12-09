import { Request, Response } from "express";
import { container } from "tsyringe";
import { AddAddressService } from "./addAddressService";

class AddAddressController{
  async handle(req: Request, res: Response): Promise<void>{
    try {
      const userId = res.locals.user._id;
      const address = req.body;

      const addAddressService = container.resolve(AddAddressService);

      await addAddressService.execute(userId, address);

      res.sendStatus(201);

    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }
}

export default new AddAddressController();