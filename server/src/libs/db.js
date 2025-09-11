import mongoose from "mongoose";
import config from "../config/index.js";

export const connectDB = async () => {
  if (!config.MONGODB_URI) {
    throw new Error("Mongo DB URI is not defined in configuration");
  }

  try {
    const conn = await mongoose.connect(config.MONGODB_URI);
    console.log(`MongoDB connected successfully on: ${conn.connection.host}`);
  } catch (err) {
    if (err instanceof Error) {
      throw err;
    }
    console.log(`Error connecting db: `, error);
    process.exit(1);
  }
};
