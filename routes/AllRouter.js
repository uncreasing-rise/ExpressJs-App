const express = require('express')
const { registerController } = require('../Controllers/RegisterController')
const { loginController } = require('../Controllers/LoginController')

const { authenticateToken } = require('../Middlewares/Authentication')
const { authorization } = require('../Middlewares/Authorization')
const productController = require('../Controllers/ProductController')
const customerController = require('../Controllers/CustomerController')

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

router.get('/', productController.getAllProducts)
router.post('/', productController.createProduct)
router.put('/:id', productController.updateProduct)
router.delete('/:id', productController.deleteProduct)
router.get('/', customerController.getAllCustomers)
router.post('/', customerController.createCustomer)
router.put('/:id', customerController.updateCustomer)
router.delete('/:id', customerController.deleteCustomer)
module.exports = router
