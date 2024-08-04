const { register } = require("../Services/RegisterService");

const registerController = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    console.log("Request Body:", req.body);

    // Check for all required fields
    if (!name || !email || !password || !role) {
      return res.status(400).json({
        error: "All fields are required: name, email, password, and role",
      });
    }

    // Validate email format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Validate role (example: only allowing 'user' and 'admin')
    const allowedRoles = ["user", "admin"];
    if (!allowedRoles.includes(role)) {
      return res
        .status(400)
        .json({ error: "Invalid role. Allowed roles are: 'user', 'admin'" });
    }

    // Register the new user
    const newUser = await register(name, email, password, role);
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Registration error:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { registerController };
