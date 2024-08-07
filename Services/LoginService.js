const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../Models/User'); // Adjust the path to your User model

const SECRET_KEY = process.env.SECRET_KEY;
const login = async (email, password) => {
    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }

        // Check if the password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error('Invalid password');
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user._id, role: user.role }, SECRET_KEY, {
            expiresIn: '1h', // Token expiration time
        });

        return { user, token };
    } catch (error) {
        throw new Error(`Login failed: ${error.message}`);
    }
};

module.exports = { login };
