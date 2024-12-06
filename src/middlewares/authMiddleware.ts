import { NextFunction, Request, Response } from "express";
import "dotenv/config"
import jwt, { JwtPayload } from "jsonwebtoken"
import { container } from "tsyringe";
import { FindByIdService } from "modules/Users/useCases/findById/findByIdService";

interface IToken extends JwtPayload{
  id: string; 
}

class AuthMiddleware{
  async execute(req: Request, res: Response, next: NextFunction){
    const {authorization} = req.headers;
    if(!authorization) throw new Error("invalid token");
    
    const secret = process.env.SECRET_JWT as string;

    const parts = authorization?.split(" ");
    if(!parts.length) res.status(401).send("Invalid token")
    if(parts.length != 2) res.status(401).send("Invalid token")
    
    const [schema, token] = parts;
    if (!/^Bearer$/i.test(schema)) res.status(401).send("Invalid token");

    jwt.verify(token, secret, async(err, decoded) => {
      if(err) res.status(401).send("Invalid token");
      if(!decoded) res.status(401).send("Invalid token");
    
      const {id} = decoded as IToken;

      try {
        const findByIdService = container.resolve(FindByIdService);
        const user = await findByIdService.execute(id);
        if(!user) res.status(401).send("Invalid token");
        
        res.locals.user = user;

        return next();

      } catch (error: any) {
        return res.status(500).send(error.message);
      }


    });

  }
}

export default new AuthMiddleware();