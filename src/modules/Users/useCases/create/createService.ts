import { User } from "@/modules/Users/entities/User";
import bcrypt from 'bcrypt';
import { inject, injectable } from "tsyringe";
import { IUserRepositories } from "@/modules/Users/repositories/IUserRepositories";
import { ConflitError } from "@/helpers/errors/apiError";

@injectable()
export class CreateService{
  constructor(
    @inject("UserRepositories")
    private userRepositories: IUserRepositories
  ){}

  async execute(body: User): Promise<void>{
    const hashPassword = await bcrypt.hash(body.password, 10);

    const userExitst = await this.userRepositories.findByEmail(body.email);
    if(userExitst) throw new ConflitError("User already exists");

    await this.userRepositories.create({...body, password: hashPassword});
  }
}