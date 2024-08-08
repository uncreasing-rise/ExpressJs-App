const DiscountService = require('../Services/DiscountService');

const createDiscount = async (req, res) => {
    try {
        const discount = await DiscountService.createDiscount(req.body);
        res.status(201).json(discount);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllDiscounts = async (req, res) => {
    try {
        const discounts = await DiscountService.getAllDiscounts();
        res.json(discounts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateDiscount = async (req, res) => {
    try {
        const discount = await DiscountService.updateDiscount(
            req.params.id,
            req.body
        );
        res.json(discount);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteDiscount = async (req, res) => {
    try {
        await DiscountService.deleteDiscount(req.params.id);
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createDiscount,
    getAllDiscounts,
    updateDiscount,
    deleteDiscount,
};
