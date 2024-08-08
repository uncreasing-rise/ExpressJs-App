const ReviewService = require('../Services/ReviewService');

const createReview = async (req, res) => {
    try {
        const review = await ReviewService.createReview(req.body);
        res.status(201).json(review);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getReviewsByProduct = async (req, res) => {
    try {
        const reviews = await ReviewService.getReviewsByProduct(
            req.params.productId
        );
        res.json(reviews);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getReviewsByCustomer = async (req, res) => {
    try {
        const reviews = await ReviewService.getReviewsByCustomer(
            req.params.customerId
        );
        res.json(reviews);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createReview,
    getReviewsByProduct,
    getReviewsByCustomer,
};
