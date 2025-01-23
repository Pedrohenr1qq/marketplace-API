import mongoose from "mongoose";
import "dotenv/config"

class ConnectToMongoDB{
  async execute(){
    const mongoURL = process.env.DATABASE_URL as string;
    try {
      await mongoose.connect(mongoURL); 
    } catch (error: any) {
      console.log(`Error in DATABASE connect: ${error.message}`)
    }
  }

  async close(){
    await mongoose.disconnect()
  }
}

export default new ConnectToMongoDB();