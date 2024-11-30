import { User } from "../entities/User";

export interface IUserRepositories{
  create(body: User): Promise<void>;
  findByEmail(email: string): Promise<User | null>;
}

