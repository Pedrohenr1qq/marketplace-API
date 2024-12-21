import { IAuthRepositories } from "modules/Auth/repositories/IAuthRepositories";
import { AuthRepositoriesMongoDB } from "modules/Auth/repositories/implementations/AuthRepositoriesMongoDB";
import { ICategoyRepositories } from "modules/Categories/repositories/ICategoryRepositories";
import { CategoryRepositoriesMongoDB } from "modules/Categories/repositories/implementations/CategoryRepositoriesMongoDB";
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