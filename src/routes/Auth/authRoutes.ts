import { Router } from "express";
import signinController from "modules/Auth/useCases/singin/singinController";

const authRouter = Router();

authRouter.post('/signin', signinController.handle);

export default authRouter;