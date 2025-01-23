import { IUserRepositories } from "@/modules/Users/repositories/IUserRepositories";
import { inject, injectable } from "tsyringe";
import { NotFoundError } from "@/helpers/errors/apiError";

@injectable()
export class DeleteService{
  constructor(
    @inject ("UserRepositories")
    private userRepositories: IUserRepositories
  ){}

  async execute(id: string){
    const user = await this.userRepositories.findById(id);
    if(!user) throw new NotFoundError("User not found");

    await this.userRepositories.delete(id);
  }
}