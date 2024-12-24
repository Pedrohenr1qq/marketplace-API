import { Router } from "express";
import createController from "modules/Products/useCases/create/createController";

const productRouter = Router();

// Create
productRouter.post('/', createController.handle);



export default productRouter;