const express = require('express')
const customerController = require('../Controllers/CustomerController')
const router = express.Router()

// Customer Routes
router.get('/', customerController.getAllCustomers)
router.post('/', customerController.createCustomer)
router.put('/:id', customerController.updateCustomer)
router.delete('/:id', customerController.deleteCustomer)

module.exports = router
