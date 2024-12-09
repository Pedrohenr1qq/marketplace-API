import { Request, Response } from "express";
import { container } from "tsyringe";
import {RemoveAddressService } from "./removeAddressService";

class RemoveAddressController{
  async handle(req: Request, res: Response): Promise<void>{
    try {
      const userId = res.locals.user._id;
      const {addressId} = req.params;

      const removeAddressService = container.resolve(RemoveAddressService);

      await removeAddressService.execute(userId, addressId);

      res.sendStatus(204);

    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }
}

export default new RemoveAddressController();