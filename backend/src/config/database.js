import mongoose from "mongoose";
import { env } from "./env.js";

export async function connectDatabase() {
  try {
    mongoose.set("strictQuery", true);

    const options = {
      serverSelectionTimeoutMS: 10000, // Increased to 10s for better resilience
      heartbeatFrequencyMS: 10000,
    };

    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("MongoDB disconnected");
    });

    await mongoose.connect(env.mongoUri, options);
  } catch (error) {
    console.error("Critical error connecting to MongoDB:", error.message);
    if (error.message.includes("ENOTFOUND")) {
      console.error("DNS Error: Could not resolve MongoDB Atlas hostname. Check your MONGODB_URI.");
    } else if (error.message.includes("ETIMEOUT")) {
      console.error("Timeout Error: Could not reach MongoDB Atlas. Check your network/firewall (IP Whitelist).");
    } else if (error.message.includes("Authentication failed")) {
      console.error("Auth Error: MongoDB Atlas credentials (username/password) are incorrect.");
    }
    throw error;
  }
}

export async function disconnectDatabase() {
  await mongoose.disconnect();
}

