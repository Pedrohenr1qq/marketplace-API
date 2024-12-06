import {Router} from "express"
import authMiddleware from "middlewares/authMiddleware";
import paginationMiddleware from "middlewares/paginationMiddleware";
import addAddressController from "modules/Users/useCases/addAddress/addAddressController";
import createController from "modules/Users/useCases/create/createController";
import deleteController from "modules/Users/useCases/delete/deleteController";
import findAllController from "modules/Users/useCases/findAll/findAllController";
import findByIdController from "modules/Users/useCases/findById/findByIdController";
import updateController from "modules/Users/useCases/update/updateController";

const userRoutes = Router();

// Create
userRoutes.post('/', createController.handle);

// Use auth middleware
userRoutes.use(authMiddleware.execute);
//

userRoutes.post('/add-address', addAddressController.handle);

// Read
userRoutes.get('/', paginationMiddleware.execute,findAllController.handle);
userRoutes.get('/:id', findByIdController.handle);

// Update
userRoutes.put('/', updateController.handle);

// Delete
userRoutes.delete('/', deleteController.handle);

export default userRoutes;