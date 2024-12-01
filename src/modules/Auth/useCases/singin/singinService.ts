import { Auth } from "modules/Auth/entities/Auth";
import { IAuthRepositories } from "modules/Auth/repositories/IAuthRepositories";
import { inject, injectable } from "tsyringe";
import bcrypt from "bcrypt"

@injectable()
export class singinService{
  constructor(
    @inject("AuthRepositories")
    private AuthRepositories: IAuthRepositories
  ){}

  async execute(data: Auth){
    const user = await this.AuthRepositories.findUserByEmail(data.email);
    if(!user) throw new Error("Email or password invalid");

    const isPassowrdOk = await bcrypt.compare(data.password, user.password);
    console.log(isPassowrdOk);
    if(!isPassowrdOk) throw new Error("Email or password invalid");

    return this.AuthRepositories.generateToken(user._id);
  }
}