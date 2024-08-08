const ReviewDAL = require('../DALs/ReviewDAL');

const createReview = async (reviewData) => {
    return ReviewDAL.createReview(reviewData);
};

const getReviewsByProduct = async (productId) => {
    return ReviewDAL.getReviewsByProduct(productId);
};

const getReviewsByCustomer = async (customerId) => {
    return ReviewDAL.getReviewsByCustomer(customerId);
};

module.exports = {
    createReview,
    getReviewsByProduct,
    getReviewsByCustomer,
};
