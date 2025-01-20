import { Router } from "express";
import authMiddleware from "middlewares/authMiddleware";
import paginationMiddleware from "middlewares/paginationMiddleware";
import validationMiddleware from "middlewares/schemaValidationMiddleware";
import { OrderSchemaJoi } from "modules/Orders/schemas/joi/OrderSchemaJoi";
import createController from "modules/Orders/useCases/create/createController";
import findAllController from "modules/Orders/useCases/findAll/findAllController";
import findByIdController from "modules/Orders/useCases/findById/findByIdController";

const orderRouter = Router();

orderRouter.use(authMiddleware.execute);

// CREATE
orderRouter.post('/', validationMiddleware.execute(OrderSchemaJoi), createController.handle);

// READ
orderRouter.get('/', paginationMiddleware.execute, findAllController.handle);
orderRouter.get('/:id', findByIdController.handle);

// UPDATE

// DELETE

export default orderRouter;