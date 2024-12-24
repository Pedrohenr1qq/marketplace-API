import { Router } from "express";
import paginationMiddleware from "middlewares/paginationMiddleware";
import createController from "modules/Products/useCases/create/createController";
import deleteController from "modules/Products/useCases/delete/deleteController";
import findAllController from "modules/Products/useCases/findAll/findAllController";
import findByIdController from "modules/Products/useCases/findById/findByIdController";

const productRouter = Router();

// Create
productRouter.post('/', createController.handle);

// Read
productRouter.get('/:id', findByIdController.handle);
productRouter.get('/', paginationMiddleware.execute, findAllController.handle);

// Update

// Delete
productRouter.delete('/:id', deleteController.handle);


export default productRouter;