// Routes/AuthRouter.js
const express = require('express');
const { registerController } = require('../Controllers/RegisterController');
const { loginController } = require('../Controllers/LoginController');
const { authenticateToken } = require('../Middlewares/Authentication');
const { authorization } = require('../Middlewares/Authorization');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Authentication routes
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Authentication]
 *     responses:
 *       201:
 *         description: User registered
 */
router.post('/register', registerController);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Log in a user
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: User logged in
 */
router.post('/login', loginController);

/**
 * @swagger
 * /api/auth/public:
 *   get:
 *     summary: Public content
 *     tags: [Public]
 *     responses:
 *       200:
 *         description: Public content
 */
router.get('/public', (req, res) => {
    res.send('Public content');
});

/**
 * @swagger
 * /api/auth/admin:
 *   get:
 *     summary: Admin content
 *     tags: [Protected]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Admin content
 */
router.get(
    '/admin',
    authenticateToken,
    authorization(['admin']),
    (req, res) => {
        res.send('Welcome Admin');
    }
);

/**
 * @swagger
 * /api/auth/moderator:
 *   get:
 *     summary: Moderator content
 *     tags: [Protected]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Moderator content
 */
router.get(
    '/moderator',
    authenticateToken,
    authorization(['moderator']),
    (req, res) => {
        res.send('Welcome Moderator');
    }
);

module.exports = router;
