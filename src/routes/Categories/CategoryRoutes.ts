import { Router } from "express";
import createController from "modules/Categories/usecases/create/createController";
import findByIdController from "modules/Categories/usecases/findById/findByIdController";

const categoryRouter = Router();

// Create
categoryRouter.post('/', createController.handle);


// Read
categoryRouter.get('/:id', findByIdController.handle); 

export default categoryRouter;