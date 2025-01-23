import { NotFoundError } from "@/helpers/errors/apiError";
import { User } from "@/modules/Users/entities/User";
import { IUserRepositories } from "@/modules/Users/repositories/IUserRepositories";
import { inject, injectable } from "tsyringe";

@injectable()
export class FindAllService{
  constructor(
    @inject ("UserRepositories")
    private userRepositories: IUserRepositories
  ){}

  async execute(limit: number, offset: number): Promise<User[]>{
    const users = await this.userRepositories.findAll(limit, offset);
    if(!users.length) throw new NotFoundError("Users not found!"); 
    
    return users;
  }

}