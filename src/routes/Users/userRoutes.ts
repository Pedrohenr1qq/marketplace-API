import {Router} from "express"
import authMiddleware from "middlewares/authMiddleware";
import paginationMiddleware from "middlewares/paginationMiddleware";
import addAddressController from "modules/Users/useCases/addAddress/addAddressController";
import addFavoriteProductController from "modules/Users/useCases/addFavoriteProduct/addFavoriteProductController";
import createController from "modules/Users/useCases/create/createController";
import deleteController from "modules/Users/useCases/delete/deleteController";
import findAllController from "modules/Users/useCases/findAll/findAllController";
import findByIdController from "modules/Users/useCases/findById/findByIdController";
import removeAddressController from "modules/Users/useCases/removeAddress/removeAddressController";
import removeFavoriteProductController from "modules/Users/useCases/removeFavoriteProduct/removeFavoriteProductController";
import updateController from "modules/Users/useCases/update/updateController";

const userRoutes = Router();

// Create
userRoutes.post('/', createController.handle);

// Use auth middleware
userRoutes.use(authMiddleware.execute);
//

userRoutes.post('/add-address', addAddressController.handle);
userRoutes.post('/add-favorite-product/:productId', addFavoriteProductController.handle);


// Read
userRoutes.get('/', paginationMiddleware.execute,findAllController.handle);
userRoutes.get('/:id', findByIdController.handle);

// Update
userRoutes.put('/', updateController.handle);

// Delete
userRoutes.delete('/', deleteController.handle);
userRoutes.delete('/remove-address/:addressId', removeAddressController.handle);
userRoutes.delete('/remove-favorite-product/:productId', removeFavoriteProductController.handle);

export default userRoutes;