import {Router} from "express"
import paginationMiddleware from "middlewares/paginationMiddleware";
import createController from "modules/Users/useCases/create/createController";
import findAllController from "modules/Users/useCases/findAll/findAllController";
import findByIdController from "modules/Users/useCases/findById/findByIdController";

const userRoutes = Router();

// Create
userRoutes.post('/', createController.handle);

// Read
userRoutes.get('/', paginationMiddleware.execute,findAllController.handle);
userRoutes.get('/:id', findByIdController.handle);

export default userRoutes;