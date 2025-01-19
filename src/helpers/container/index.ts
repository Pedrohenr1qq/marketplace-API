import { IAuthRepositories } from "modules/Auth/repositories/IAuthRepositories";
import { AuthRepositoriesMongoDB } from "modules/Auth/repositories/implementations/AuthRepositoriesMongoDB";
import { ICategoyRepositories } from "modules/Categories/repositories/ICategoryRepositories";
import { CategoryRepositoriesMongoDB } from "modules/Categories/repositories/implementations/CategoryRepositoriesMongoDB";
import { OrderRepositoriesMongoDB } from "modules/Orders/repositories/Implementations/OrderRepositoriesMongoDB";
import { IOrderRepositories } from "modules/Orders/repositories/IOrderRepositories";
import { ProductRepositoriesMongoDB } from "modules/Products/repositories/Implementations/ProductRepositoriesMongoDB";
import { IProductRepositories } from "modules/Products/repositories/IProductRepositories";
import { UserRepositoriesMongoDB } from "modules/Users/repositories/implementations/UserRepositoriesMongoDB";
import { IUserRepositories } from "modules/Users/repositories/IUserRepositories";
import { container } from "tsyringe";

container.registerSingleton<IUserRepositories>(
  "UserRepositories", 
  UserRepositoriesMongoDB
)

container.registerSingleton<IAuthRepositories>(
  "AuthRepositories", 
  AuthRepositoriesMongoDB
)

container.registerSingleton<ICategoyRepositories>(
  "CategoryRepositories",
  CategoryRepositoriesMongoDB
)

container.registerSingleton<IProductRepositories>(
  "ProductRepositories",
  ProductRepositoriesMongoDB
)

container.registerSingleton<IOrderRepositories>(
  "OrderRepositories",
  OrderRepositoriesMongoDB
)