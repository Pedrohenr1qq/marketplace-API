import { User } from "modules/Users/entities/User";
import { IUserRepositories } from "../IUserRepositories";
import UserSchema from "modules/Users/schemas/UserSchema";

export class UserRepositoriesMongoDB implements IUserRepositories{
  async create(body: User): Promise<void> {
    await UserSchema.create(body);
  }

 async findByEmail(email: string): Promise<User | null> {
  const user = await UserSchema.findOne({email});
  return user;
 }

}