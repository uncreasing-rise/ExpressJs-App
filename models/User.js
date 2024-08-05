const mongoose = require('mongoose');
const { UserRole } = require('../Commons/Enums'); // Make sure this path is correct

// Define the User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  role: {
    type: String,
    enum: Object.values(UserRole), // Use enums for possible roles
    default: UserRole.USER, // Default role
  },
}, {
  timestamps: true,
});

// Check if the model already exists to avoid redefining it
const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;
