const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Product name is required'],
            trim: true,
        },
        description: {
            type: String,
            required: [true, 'Description is required'],
            trim: true,
        },
        category: {
            type: String,
            required: [true, 'Category is required'],
            trim: true,
        },
        stock: {
            type: Number,
            required: [true, 'Stock is required'],
            default: 0,
            min: [0, 'Stock cannot be negative'], // Ensure stock is not negative
        },
        originalPrice: {
            type: Number,
            required: [true, 'Original price is required'],
            min: [0, 'Original price cannot be negative'], // Ensure original price is non-negative
        },
        salePrice: {
            type: Number,
            required: [true, 'Sale price is required'],
            min: [0, 'Sale price cannot be negative'], // Ensure sale price is non-negative
            validate: {
                validator: function (v) {
                    return v >= this.originalPrice; // Sale price should be greater than or equal to original price
                },
                message:
                    'Sale price should be greater than or equal to the original price',
            },
        },
    },
    {
        timestamps: true, // Automatically manage createdAt and updatedAt
    }
);

// Optional: Index for category for better query performance
productSchema.index({ category: 1 });

const Product =
    mongoose.models.Product || mongoose.model('Product', productSchema);

module.exports = Product;
