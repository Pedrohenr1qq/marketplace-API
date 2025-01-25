import { inject, injectable } from "tsyringe";
import { IAuthRepositories } from "../../repositories/IAuthRepositories";
import { IParamsGithubToken } from "../../interfaces/IParamsGithubToken";

@injectable()
export class SigninGithubService{
  constructor(
    @inject("AuthRepositories")
    private AuthRepositories: IAuthRepositories
  ){}

  async execute(code: string){
    const params: IParamsGithubToken = {
      client_id: "",
      client_secret: "",
      redirect_uri: "",
      code: code,
      grant_type: "authorization code"
    };

    


    return "token";
  }
}