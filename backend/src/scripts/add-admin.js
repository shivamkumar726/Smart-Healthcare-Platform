import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { User } from "../models/User.js";
import { connectDatabase, disconnectDatabase } from "../config/database.js";

async function addAdmin() {
  try {
    await connectDatabase();
    
    const email = "shivam@gmail.com";
    const password = "Shivam@2031";
    
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      console.log("User already exists. Updating password and role...");
      const passwordHash = await bcrypt.hash(password, 10);
      existingUser.passwordHash = passwordHash;
      existingUser.role = "admin";
      await existingUser.save();
      console.log("User updated successfully.");
    } else {
      const passwordHash = await bcrypt.hash(password, 10);
      await User.create({
        name: "Shivam",
        email: email.toLowerCase(),
        passwordHash,
        role: "admin",
        avatar: "S",
        adminProfile: {
          title: "System Administrator",
          organizationName: "MEDIrxCARE Hospitals",
        },
      });
      console.log("Admin user created successfully.");
    }
  } catch (error) {
    console.error("Error adding admin:", error);
  } finally {
    await disconnectDatabase();
  }
}

addAdmin();
