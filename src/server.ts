// Imports
import "reflect-metadata";
import "./helpers/container"
import express, {json} from "express";
import cors from "cors";
import ConnectToMongoDB from "database";
import router from "routes";

// Configure server
const app = express();
app.use(json());
app.use(cors());

// Start DB
ConnectToMongoDB.execute();

// Start routes
app.use(router);

// Start server
const port = process.env.PORT || 5000;
app.listen(port, ()=>{
  console.log(`Server running at port: ${port}`);
})