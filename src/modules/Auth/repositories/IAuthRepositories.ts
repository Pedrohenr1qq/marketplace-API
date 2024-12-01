import { User } from "modules/Users/entities/User";
import { ObjectId } from "mongodb";

export interface IAuthRepositories{
  findUserByEmail(email: string): Promise<User | null>;
  generateToken(userId: ObjectId): string;
}