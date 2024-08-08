const DiscountDAL = require('../DALs/DiscountDAL');

const createDiscount = async (discountData) => {
    return DiscountDAL.createDiscount(discountData);
};

const getAllDiscounts = async () => {
    return DiscountDAL.getAllDiscounts();
};

const updateDiscount = async (discountId, discountData) => {
    return DiscountDAL.updateDiscount(discountId, discountData);
};

const deleteDiscount = async (discountId) => {
    return DiscountDAL.deleteDiscount(discountId);
};

module.exports = {
    createDiscount,
    getAllDiscounts,
    updateDiscount,
    deleteDiscount,
};
