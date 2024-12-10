const express = require('express');
const productController = require('../Controllers/ProductController'); // Assuming you have a controller layer
const router = express.Router();

// CREATE a new product
router.post('/', productController.createProduct);

// READ all products
router.get('/', productController.getAllProducts);

// READ a single product by ID
router.get('/:id', productController.getProductById);

// UPDATE a product by ID
router.put('/:id', productController.updateProduct);

// DELETE a product by ID
router.delete('/:id', productController.deleteProduct);

module.exports = router;
