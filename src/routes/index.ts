import {Router} from "express"
import userRoutes from "./Users/userRoutes";
import authRouter from "./Auth/authRoutes";
import categoryRouter from "./Categories/CategoryRoutes";

const router = Router();

router.use('/users', userRoutes);
router.use('/auth', authRouter);
router.use('/categories', categoryRouter);

export default router;