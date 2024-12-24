import {Router} from "express"
import userRoutes from "./Users/userRoutes";
import authRouter from "./Auth/authRoutes";
import categoryRouter from "./Categories/CategoryRoutes";
import productRouter from "./Products/ProductRoutes";

const router = Router();

router.use('/users', userRoutes);
router.use('/auth', authRouter);
router.use('/categories', categoryRouter);
router.use('/products', productRouter);

export default router;