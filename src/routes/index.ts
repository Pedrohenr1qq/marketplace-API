import {Router} from "express"
import userRoutes from "./Users/userRoutes";
import authRouter from "./Auth/authRoutes";
import categoryRouter from "./Categories/CategoryRoutes";
import productRouter from "./Products/ProductRoutes";
import orderRouter from "./Orders/OrderRoutes";

const router = Router();

router.use('/users', userRoutes);
router.use('/auth', authRouter);
router.use('/categories', categoryRouter);
router.use('/products', productRouter);
router.use('/orders', orderRouter);

export default router;