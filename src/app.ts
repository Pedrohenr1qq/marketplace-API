// Imports
import "express-async-errors"
import "reflect-metadata";
import "@/helpers/container"
import express, {json, Express} from "express";
import cors from "cors";
import ConnectToMongoDB from "@/database";
import router from "@/routes";
import errorMiddleware from "@/middlewares/errorMiddleware";

// Configure server
const app = express();
app.use(json());
app.use(cors());

// Start routes
app.use(router);
app.use(errorMiddleware.execute);

export async function init(): Promise<Express>{
  await ConnectToMongoDB.execute();
  return Promise.resolve(app);
}

export async function close(): Promise<void>{
  await ConnectToMongoDB.close();
}

export default app;