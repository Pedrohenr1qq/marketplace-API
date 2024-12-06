import {Router} from "express"
import authMiddleware from "middlewares/authMiddleware";
import paginationMiddleware from "middlewares/paginationMiddleware";
import createController from "modules/Users/useCases/create/createController";
import findAllController from "modules/Users/useCases/findAll/findAllController";
import findByIdController from "modules/Users/useCases/findById/findByIdController";
import updateController from "modules/Users/useCases/update/updateController";

const userRoutes = Router();

// Create
userRoutes.post('/', createController.handle);

// Use auth middleware
userRoutes.use(authMiddleware.execute);

// Read
userRoutes.get('/', paginationMiddleware.execute,findAllController.handle);
userRoutes.get('/:id', findByIdController.handle);

// Update
userRoutes.put('/', updateController.handle);

export default userRoutes;