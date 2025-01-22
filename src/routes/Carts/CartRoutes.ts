import { Router } from "express";
import authMiddleware from "middlewares/authMiddleware";
import paginationMiddleware from "middlewares/paginationMiddleware";
import validationMiddleware from "middlewares/schemaValidationMiddleware";
import { CartSchemaJoi } from "modules/Carts/schemas/joi/CartSchemaJoi";
import createController from "modules/Carts/useCases/create/createController";
import findAllControler from "modules/Carts/useCases/findAll/findAllControler";
import findByIdController from "modules/Carts/useCases/findById/findByIdController";


const cartRouter = Router();

cartRouter.use(authMiddleware.execute);

// CREATE
cartRouter.post('/', validationMiddleware.execute(CartSchemaJoi), createController.handle);

// READ
cartRouter.get('/', paginationMiddleware.execute, findAllControler.handle);
cartRouter.get('/:id', findByIdController.handle);

// UPDATE

// DELETE

export default cartRouter;