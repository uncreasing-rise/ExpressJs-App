const bcrypt = require("bcrypt");
const User = require("../Models/User");

const register = async (name, email, password, role) => {
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("User already exists");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    // Save user to the database
    await newUser.save();

    return newUser;
  } catch (error) {
    throw new Error(`Registration failed: ${error.message}`);
  }
};

module.exports = { register };
