import { Router } from "express";
import createController from "modules/Products/useCases/create/createController";
import findByIdController from "modules/Products/useCases/findById/findByIdController";

const productRouter = Router();

// Create
productRouter.post('/', createController.handle);

// Read
productRouter.get('/:id', findByIdController.handle);


export default productRouter;