import {Router} from "express"
import authMiddleware from "@/middlewares/authMiddleware";
import paginationMiddleware from "@/middlewares/paginationMiddleware";
import addAddressController from "@/modules/Users/useCases/addAddress/addAddressController";
import addFavoriteProductController from "@/modules/Users/useCases/addFavoriteProduct/addFavoriteProductController";
import createController from "@/modules/Users/useCases/create/createController";
import deleteController from "@/modules/Users/useCases/delete/deleteController";
import findAllController from "@/modules/Users/useCases/findAll/findAllController";
import findByIdController from "@/modules/Users/useCases/findById/findByIdController";
import removeAddressController from "@/modules/Users/useCases/removeAddress/removeAddressController";
import removeFavoriteProductController from "@/modules/Users/useCases/removeFavoriteProduct/removeFavoriteProductController";
import updateController from "@/modules/Users/useCases/update/updateController";
import validateSchema from "@/middlewares/schemaValidationMiddleware";
import { UserSchemaJoi } from "@/modules/Users/schemas/joi/UserSchemaJoi";
import { AddressSchemaJoi } from "@/modules/Users/schemas/joi/AddressSchemaJoi";
import updateAvatarController from "@/modules/Users/useCases/updateAvatar/updateAvatarController";

import multer from "multer";
import uploadConfig from "../../helpers/upload/index";
import findAvatarController from "@/modules/Users/useCases/findAvatarUser/findAvatarController";

const userRoutes = Router();
const uploadAvatar = multer(uploadConfig.upload("./uploads/avatar"));

// Create
userRoutes.post('/', validateSchema.execute(UserSchemaJoi), createController.handle);

// Use auth middleware
userRoutes.use(authMiddleware.execute);
//

userRoutes.post('/add-address', validateSchema.execute(AddressSchemaJoi),addAddressController.handle);
userRoutes.post('/add-favorite-product/:productId', addFavoriteProductController.handle);

// Read
userRoutes.get('/', paginationMiddleware.execute,findAllController.handle);
userRoutes.get('/:id', findByIdController.handle);
userRoutes.get('/avatar/:id', findAvatarController.handle);

// Update
userRoutes.patch('/', updateController.handle);
userRoutes.patch('/avatar', uploadAvatar.single("avatar") ,updateAvatarController.handle);

// Delete
userRoutes.delete('/', deleteController.handle);
userRoutes.delete('/remove-address/:addressId', removeAddressController.handle);
userRoutes.delete('/remove-favorite-product/:productId', removeFavoriteProductController.handle);

export default userRoutes;