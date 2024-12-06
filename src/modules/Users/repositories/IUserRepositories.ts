import { User } from "../entities/User";

export interface IUserRepositories{
  create(body: User): Promise<void>;
  findByEmail(email: string): Promise<User | null>;
  findAll(limit: number, offset: number): Promise<User[]>
  findById(id: string): Promise<User | null>;
  update(id: string, data: User): Promise<void>;
  delete(id: string): Promise<void>;
}

