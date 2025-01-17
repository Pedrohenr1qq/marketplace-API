import { NextFunction, Request, Response } from "express";
import "dotenv/config"
import jwt, { JwtPayload } from "jsonwebtoken"
import { container } from "tsyringe";
import { FindByIdService } from "modules/Users/useCases/findById/findByIdService";
import { UnauthorizedError } from "helpers/errors/apiError";

interface IToken extends JwtPayload{
  id: string; 
}

class AuthMiddleware{
  async execute(req: Request, res: Response, next: NextFunction){
    const {authorization} = req.headers;
    if(!authorization) throw new UnauthorizedError("invalid token");
    
    const secret = process.env.SECRET_JWT as string;

    const parts = authorization?.split(" ");
    if(!parts.length) throw new UnauthorizedError("invalid token");
    if(parts.length != 2) throw new UnauthorizedError("invalid token");
    
    const [schema, token] = parts;
    if (!/^Bearer$/i.test(schema)) throw new UnauthorizedError("invalid token");

    jwt.verify(token, secret, async(err, decoded) => {
      if(err) throw new UnauthorizedError("invalid token");
      if(!decoded) throw new UnauthorizedError("invalid token");
    
      const {id} = decoded as IToken;

      try {
        const findByIdService = container.resolve(FindByIdService);
        const user = await findByIdService.execute(id);
        if(!user) throw new UnauthorizedError("invalid token");
        
        res.locals.user = user;

        return next();

      } catch (error: any) {
        return res.status(500).send(error.message);
      }
    });
  }
} export default new AuthMiddleware();