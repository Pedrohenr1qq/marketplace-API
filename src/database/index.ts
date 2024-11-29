import mongoose from "mongoose";
import "dotenv/config"

class ConnectToMongoDB{
  async execute(){
    const mongoURL = process.env.DATABASE_URL as string;


    try {
      await mongoose.connect(mongoURL); 
      console.log("DATABASE connected")
    } catch (error: any) {
      console.log(`Error in DATABASE connect: ${error.message}`)
    }

  }
}

export default new ConnectToMongoDB();