import mongoose from "mongoose";
import config from "../config/index.js";

export const connectDB = async () => {
  if (!config.MONGODB_URI) {
    throw new Error("Mongo DB URI is not defined in configuration");
  }

  try {
    const conn = await mongoose.connect(config.MONGODB_URI);
    console.log(
      `✅ MongoDB connected successfully on: ${conn.connection.host}`
    );
  } catch (error) {
    console.error("❌ MongoDB connection error: ", error);
    throw error;
  }
};

export const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    console.log("🛑 MongoDB disconnected successfully");
  } catch (error) {
    console.error("❌ MongoDB disconnection error: ", error);
    throw error;
  }
};
