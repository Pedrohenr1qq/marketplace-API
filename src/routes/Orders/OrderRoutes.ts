import { Router } from "express";
import authMiddleware from "middlewares/authMiddleware";
import createController from "modules/Orders/useCases/create/createController";

const orderRouter = Router();

orderRouter.use(authMiddleware.execute);

// CREATE
orderRouter.post('/', createController.handle);

// READ

// UPDATE

// DELETE

export default orderRouter;