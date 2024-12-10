// Routes/AuthRouter.js
const express = require('express');
const { loginController } = require('../Controllers/LoginController');

const router = express.Router();

router.post('/login', loginController);

router.get('/public', (req, res) => {
    res.send('Public content');
});

module.exports = router;
