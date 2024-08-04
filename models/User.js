const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true, // Store email in lowercase
      trim: true, // Remove leading and trailing spaces
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin", "moderator"], // Define possible roles
      default: "user", // Default role
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  },
);

module.exports = mongoose.model("User", userSchema);
