import { Router } from "express";
import createController from "modules/Categories/usecases/create/createController";

const categoryRouter = Router();

// Create
categoryRouter.post('/', createController.handle);



export default categoryRouter;