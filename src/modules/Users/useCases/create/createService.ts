import { User } from "modules/Users/entities/User";
import bcrypt from 'bcrypt';
//import { IUserRepositories } from "modules/Users/repositories/IUserRepositories";
import { UserRepositoriesMongoDB } from "modules/Users/repositories/implementations/UserRepositoriesMongoDB";

export class CreateService{
  constructor(private userRepository: UserRepositoriesMongoDB){}

  async execute(body: User): Promise<void>{
    const hashPassword = await bcrypt.hash(body.password, 10);

    const userExitst = await this.userRepository.findByEmail(body.email);
    if(userExitst) throw new Error("User already exists");

    await this.userRepository.create({...body, password: hashPassword});
  }
}