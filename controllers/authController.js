const { register, login } = require('../services/authService');

const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log('Request Body:', req.body);

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'All fields are required: name, email, and password' });
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    const newUser = await register(name, email, password);
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Registration error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Request Body:', req.body);

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const { user, token } = await login(email, password);
    res.status(200).json({ user, token });
  } catch (error) {
    console.error('Login error:', error.message);
    res.status(400).json({ error: error.message });
  }
};

module.exports = { registerController, loginController };
