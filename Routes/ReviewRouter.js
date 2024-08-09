const express = require('express');
const ReviewController = require('../Controllers/ReviewController');

const router = express.Router();

router.post('/', ReviewController.createReview);
router.get('/product/:productId', ReviewController.getReviewsByProduct);
router.get('/customer/:customerId', ReviewController.getReviewsByCustomer);

module.exports = router;
