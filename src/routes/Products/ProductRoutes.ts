import { Router } from "express";
import paginationMiddleware from "middlewares/paginationMiddleware";
import validationMiddleware from "middlewares/schemaValidationMiddleware";
import { ProductSchemaJoi } from "modules/Products/schemas/joi/ProductSchemaJoi";
import addCategoryController from "modules/Products/useCases/addCategory/addCategoryController";
import createController from "modules/Products/useCases/create/createController";
import deleteController from "modules/Products/useCases/delete/deleteController";
import findAllController from "modules/Products/useCases/findAll/findAllController";
import findByIdController from "modules/Products/useCases/findById/findByIdController";
import removeCategoryController from "modules/Products/useCases/removeCategory/removeCategoryController";
import updateController from "modules/Products/useCases/update/updateController";

const productRouter = Router();

// Create
productRouter.post('/', validationMiddleware.execute(ProductSchemaJoi), createController.handle);
productRouter.post('/add-category/:productId', addCategoryController.handle);

// Read
productRouter.get('/:id', findByIdController.handle);
productRouter.get('/', paginationMiddleware.execute, findAllController.handle);

// Update
productRouter.put('/:id', updateController.handle);

// Delete
productRouter.delete('/:id', deleteController.handle);
productRouter.delete("/remove-category/:productId", removeCategoryController.handle);


export default productRouter;