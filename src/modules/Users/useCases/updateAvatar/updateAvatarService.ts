import { deleteFile } from "helpers/upload/deleteFile";
import { IUserRepositories } from "modules/Users/repositories/IUserRepositories";
import { inject, injectable } from "tsyringe";

@injectable()
export class UpdateAvatarService{
  constructor(
    @inject("UserRepositories")
    private UserRepositories: IUserRepositories
  ){}

  async execute(id: string, avatar: string): Promise<void>{
    const user = await this.UserRepositories.findById(id);

    if(!user) throw new Error('User not found');

    if(user.image) await deleteFile(user.image);

    this.UserRepositories.updateAvatar(id, avatar);
  }
}
