const mongoose = require('mongoose')
const { UserRole } = require('../Commons/Enums')

// Check if the model already exists to avoid redefining it
const User =
    mongoose.Models.User ||
    mongoose.model(
        'User',
        new mongoose.Schema(
            {
                name: {
                    type: String,
                    required: [true, 'Name is required'], // Validation message
                    trim: true, // Remove leading and trailing spaces
                },
                email: {
                    type: String,
                    required: [true, 'Email is required'], // Validation message
                    unique: true,
                    lowercase: true, // Store email in lowercase
                    trim: true, // Remove leading and trailing spaces
                    match: [/.+@.+\..+/, 'Please enter a valid email address'], // Basic email format validation
                },
                password: {
                    type: String,
                    required: [true, 'Password is required'], // Validation message
                },
                role: {
                    type: String,
                    enum: Object.values(UserRole), // Use enums for possible roles
                    default: UserRole.USER, // Default role
                },
            },
            {
                timestamps: true, // Automatically add createdAt and updatedAt fields
            }
        )
    )

module.exports = User
