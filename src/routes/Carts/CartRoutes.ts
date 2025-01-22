import { Router } from "express";
import authMiddleware from "middlewares/authMiddleware";
import paginationMiddleware from "middlewares/paginationMiddleware";
import validationMiddleware from "middlewares/schemaValidationMiddleware";
import { CartSchemaJoi } from "modules/Carts/schemas/joi/CartSchemaJoi";
import createController from "modules/Carts/useCases/create/createController";


const cartRouter = Router();

cartRouter.use(authMiddleware.execute);

// CREATE
cartRouter.post('/', validationMiddleware.execute(CartSchemaJoi), createController.handle);

// READ

// UPDATE

// DELETE

export default cartRouter;