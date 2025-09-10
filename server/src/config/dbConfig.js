import mongoose from "mongoose";
import { MONGO_DB_URI } from "./envConfig.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_DB_URI);
    console.log(`MongoDB successfully connected on: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error while connecting to MongoDB: `, error);
    process.exit(1);
  }
};
