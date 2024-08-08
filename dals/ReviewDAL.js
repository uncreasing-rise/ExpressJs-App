const Review = require('../Models/Review');

const createReview = async (reviewData) => {
    const review = new Review(reviewData);
    return review.save();
};

const getReviewsByProduct = async (productId) => {
    return Review.find({ productId })
        .populate('customerId')
        .sort({ createdAt: -1 });
};

const getReviewsByCustomer = async (customerId) => {
    return Review.find({ customerId })
        .populate('productId')
        .sort({ createdAt: -1 });
};

module.exports = {
    createReview,
    getReviewsByProduct,
    getReviewsByCustomer,
};
