import { AuthRepositoriesMongoDB } from "@/modules/Auth/repositories/implementations/AuthRepositoriesMongoDB";
import { SinginService } from "@/modules/Auth/useCases/singin/singinService";

export const authRepository = new AuthRepositoriesMongoDB();
export const singinService = new SinginService(authRepository);