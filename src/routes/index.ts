import {Router} from "express"
import userRoutes from "./Users/userRoutes";

const router = Router();

router.use("/users", userRoutes);

export default router;