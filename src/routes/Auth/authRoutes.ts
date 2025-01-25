import { Router } from "express";
import signinController from "@/modules/Auth/useCases/singin/singinController";
import validationSchema from "@/middlewares/schemaValidationMiddleware";
import { AuthSchemaJoi } from "@/modules/Auth/schemas/AuthSchemaJoi";
import signinGithubController from "@/modules/Auth/useCases/signinGithub/signinGithubController";

const authRouter = Router();

authRouter.post('/signin', validationSchema.execute(AuthSchemaJoi) ,signinController.handle);
authRouter.post('/signin-github', signinGithubController.handle);



export default authRouter;