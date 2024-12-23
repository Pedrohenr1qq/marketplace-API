import { Router } from "express";
import paginationMiddleware from "middlewares/paginationMiddleware";
import createController from "modules/Categories/usecases/create/createController";
import findAllController from "modules/Categories/usecases/findAll/findAllController";
import findByIdController from "modules/Categories/usecases/findById/findByIdController";

const categoryRouter = Router();

// Create
categoryRouter.post('/', createController.handle);


// Read
categoryRouter.get('/:id', findByIdController.handle);
categoryRouter.get('/',paginationMiddleware.execute ,findAllController.handle);

export default categoryRouter;