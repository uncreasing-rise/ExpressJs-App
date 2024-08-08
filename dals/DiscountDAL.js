const Discount = require('../Models/Discount');

const createDiscount = async (discountData) => {
    const discount = new Discount(discountData);
    return discount.save();
};

const getAllDiscounts = async () => {
    return Discount.find();
};

const updateDiscount = async (discountId, discountData) => {
    return Discount.findByIdAndUpdate(discountId, discountData, { new: true });
};

const deleteDiscount = async (discountId) => {
    return Discount.findByIdAndDelete(discountId);
};

module.exports = {
    createDiscount,
    getAllDiscounts,
    updateDiscount,
    deleteDiscount,
};
