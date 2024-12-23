import { Router } from "express";
import paginationMiddleware from "middlewares/paginationMiddleware";
import createController from "modules/Categories/usecases/create/createController";
import deleteController from "modules/Categories/usecases/delete/deleteController";
import findAllController from "modules/Categories/usecases/findAll/findAllController";
import findByIdController from "modules/Categories/usecases/findById/findByIdController";
import updateController from "modules/Categories/usecases/update/updateController";

const categoryRouter = Router();

// Create
categoryRouter.post('/', createController.handle);

// Read
categoryRouter.get('/:id', findByIdController.handle);
categoryRouter.get('/',paginationMiddleware.execute ,findAllController.handle);

// Update
categoryRouter.put('/:id', updateController.handle);

// Delete
categoryRouter.delete('/:id', deleteController.handle);


export default categoryRouter;