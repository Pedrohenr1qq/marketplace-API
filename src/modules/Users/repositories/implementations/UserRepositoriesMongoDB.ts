import { User } from "modules/Users/entities/User";
import { IUserRepositories } from "../IUserRepositories";
import UserSchema from "modules/Users/schemas/UserSchema";
import { Address } from "modules/Users/entities/Address";

export class UserRepositoriesMongoDB implements IUserRepositories{
  async create(body: User): Promise<void> {
    await UserSchema.create(body);
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await UserSchema.findOne({email});
    return user;
  }

  async findAll(limit: number, offset: number): Promise<User[]> {
    return await UserSchema.find().select(["-password", "-__v"]).limit(limit).skip(offset);
  }

  async findById(id: string): Promise<User | null> {
    const user = await UserSchema.findById(id).select(["-password", "-__v"]);
    return user;
  }

  async update(id: string, data: User): Promise<void> {
    await UserSchema.findByIdAndUpdate(id, data);
  }

  async delete(id: string): Promise<void> {
    await UserSchema.findByIdAndDelete(id);
  }

  async addNewAddress(userId: string, address: Address): Promise<void> {
    await UserSchema.findOneAndUpdate(
      {
        _id: userId
      },
      {
        $push: {
          addresses: address
        }
      }
    );
  }
}