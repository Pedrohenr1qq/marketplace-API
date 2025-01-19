import { NextFunction, Request, Response } from "express";
import { ApiError } from "helpers/errors/apiError";

class ErrorMiddleware{
  async execute(error: Error & ApiError, req: Request, res: Response, next: NextFunction){
    console.log("Error: " + error);
    const statusCode = error.statusCode ?? 500;
    const message = (statusCode != 500) ? error.message : "Internal Server Error";
    res.status(statusCode).send({message});
  }
} export default new ErrorMiddleware();