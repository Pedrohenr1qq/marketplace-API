import { inject, injectable } from "tsyringe";
import { IUserRepositories } from "../../repositories/IUserRepositories";
import { NotFoundError } from "@/helpers/errors/apiError";
import { User } from "../../entities/User";

@injectable()
export class FindAvatarUserService{
  constructor(
    @inject("UserRepositories")
    private UserRepositories: IUserRepositories
  ){}
  
  async execute(id: string): Promise<User>{
    const user = await this.UserRepositories.findById(id);
    
    if(!user) throw new NotFoundError("User not found");
    
    return user;
  }
}