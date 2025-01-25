import { Request, Response } from "express";
import { container} from "tsyringe";
import { SigninGithubService } from "./signinGithubService";

class SigninGithubController{
  async handle(req: Request, res: Response){
    const {code} = req.body;

    const signinGithubService = container.resolve(SigninGithubService);
    const token = await signinGithubService.execute(code);

    res.send(token);

  }
} export default new SigninGithubController();