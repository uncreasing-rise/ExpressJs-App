const mongoose = require('mongoose');

const discountSchema = new mongoose.Schema({
    name: { type: String, required: true },
    discountType: {
        type: String,
        enum: ['percentage', 'fixed'],
        required: true,
    },
    value: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    isActive: { type: Boolean, default: true },
});

module.exports = mongoose.model('Discount', discountSchema);
