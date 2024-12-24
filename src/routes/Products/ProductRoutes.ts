import { Router } from "express";
import paginationMiddleware from "middlewares/paginationMiddleware";
import createController from "modules/Products/useCases/create/createController";
import findAllController from "modules/Products/useCases/findAll/findAllController";
import findByIdController from "modules/Products/useCases/findById/findByIdController";

const productRouter = Router();

// Create
productRouter.post('/', createController.handle);

// Read
productRouter.get('/:id', findByIdController.handle);
productRouter.get('/', paginationMiddleware.execute, findAllController.handle);


export default productRouter;