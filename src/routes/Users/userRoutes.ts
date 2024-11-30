import {Router} from "express"
import { UserRepositoriesMongoDB } from "modules/Users/repositories/implementations/UserRepositoriesMongoDB";
import { CreateController } from "modules/Users/useCases/create/createController";
import { CreateService } from "modules/Users/useCases/create/createService";

const userRoutes = Router();

const userRepository = new UserRepositoriesMongoDB();
const createService = new CreateService(userRepository);
const createController = new CreateController(createService);

userRoutes.post("/", (req, res) => createController.handle(req, res));

export default userRoutes;