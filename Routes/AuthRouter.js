const express = require('express')
const { registerController } = require('../Controllers/RegisterController')
const { loginController } = require('../Controllers/LoginController')
const { authenticateToken } = require('../Middlewares/Authentication')
const { authorization } = require('../Middlewares/Authorization')

const router = express.Router()

// Authentication Routes
router.post('/register', registerController)
router.post('/login', loginController)

// Public Route
router.get('/public', (req, res) => {
    res.send('Public content')
})

// Protected Routes
router.get(
    '/admin',
    authenticateToken,
    authorization(['admin']),
    (req, res) => {
        res.send('Welcome Admin')
    }
)

router.get(
    '/moderator',
    authenticateToken,
    authorization(['moderator']),
    (req, res) => {
        res.send('Welcome Moderator')
    }
)

module.exports = router
