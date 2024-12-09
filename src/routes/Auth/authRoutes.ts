import { Router } from "express";
import signinController from "modules/Auth/useCases/singin/singinController";
import validationSchema from "middlewares/schemaValidationMiddleware";
import { AuthSchemaJoi } from "modules/Auth/schemas/AuthSchemaJoi";

const authRouter = Router();

authRouter.post('/signin', validationSchema.execute(AuthSchemaJoi) ,signinController.handle);

export default authRouter;