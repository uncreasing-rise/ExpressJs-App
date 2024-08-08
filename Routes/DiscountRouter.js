const express = require('express');
const DiscountController = require('../Controllers/DiscountController');

const router = express.Router();

router.post('/', DiscountController.createDiscount);
router.get('/', DiscountController.getAllDiscounts);
router.put('/:id', DiscountController.updateDiscount);
router.delete('/:id', DiscountController.deleteDiscount);

module.exports = router;
