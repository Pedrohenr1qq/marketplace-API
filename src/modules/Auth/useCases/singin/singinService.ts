import { Auth } from "modules/Auth/entities/Auth";
import { IAuthRepositories } from "modules/Auth/repositories/IAuthRepositories";
import { inject, injectable } from "tsyringe";
import bcrypt from "bcrypt"
import { ConflitError } from "@/helpers/errors/apiError";

@injectable()
export class SinginService{
  constructor(
    @inject("AuthRepositories")
    private AuthRepositories: IAuthRepositories
  ){}

  async execute(data: Auth){
    const user = await this.AuthRepositories.findUserByEmail(data.email);
    if(!user) throw new ConflitError("Email or password invalid");

    const isPassowrdOk = bcrypt.compareSync(data.password, user.password);
    if(!isPassowrdOk) throw new ConflitError("Email or password invalid");

    return this.AuthRepositories.generateToken(user._id);
  }
}