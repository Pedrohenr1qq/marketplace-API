import {Router} from "express"
import userRoutes from "./Users/userRoutes";
import authRouter from "./Auth/authRoutes";

const router = Router();

router.use("/users", userRoutes);
router.use('/auth', authRouter);

export default router;