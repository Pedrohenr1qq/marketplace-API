import { NotFoundError } from "helpers/errors/apiError";
import { User } from "modules/Users/entities/User";
import { IUserRepositories } from "modules/Users/repositories/IUserRepositories";
import { inject, injectable } from "tsyringe";

@injectable()
export class FindByIdService{
  constructor(
    @inject ("UserRepositories")
    private UserRepositories: IUserRepositories
  ){}

  async execute(id: string): Promise<User>{
    const user = await this.UserRepositories.findById(id);
    if(!user) throw new NotFoundError("User not found");
    return user;
  }
}