const express = require('express')
const productController = require('../Controllers/ProductController')
const router = express.Router()

// Product Routes
router.get('/', productController.getAllProducts)
router.post('/', productController.createProduct)
router.put('/:id', productController.updateProduct)
router.delete('/:id', productController.deleteProduct)

module.exports = router
