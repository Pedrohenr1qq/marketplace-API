import {Request, Response, NextFunction } from "express";
import { ConflitError } from "helpers/errors/apiError";
import { UserSchemaJoi } from "modules/Users/schemas/joi/UserSchemaJoi";

class ValidateSchema{
  execute(schema: any){
    return (req: Request, res: Response, next: NextFunction) => {
      const {error} = schema.validate(req.body, {abortEarly: false});
      if(error) {
        const errors = error?.details.map((detail: any) => detail.message);
        throw new ConflitError(errors);
      }
      else return next();
    }
  }

}

export default new ValidateSchema();