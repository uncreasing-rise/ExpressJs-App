const express = require('express');
const orderController = require('../Controllers/orderController'); // Assuming you have a controller layer
const router = express.Router();

// CREATE an order
router.post('/', orderController.createOrder);

// READ all orders
router.get('/', orderController.getAllOrders);

// READ a single order by ID
router.get('/:id', orderController.getOrderById);

// UPDATE an order status by ID
router.put('/:id', orderController.updateOrderStatus);

// DELETE an order by ID
router.delete('/:id', orderController.deleteOrder);

module.exports = router;
