import express, {json} from "express";
import cors from "cors";
import ConnectToMongoDB from "database";

const app = express();
app.use(json());
app.use(cors());

ConnectToMongoDB.execute();

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
  console.log(`Server running at port: ${port}`);
})