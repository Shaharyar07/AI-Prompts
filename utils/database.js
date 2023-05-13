import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }
  try {
    const { connection } = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "ai-prompts",
    });
    isConnected = true;
    console.log(`MongoDB is connected ${connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
