const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        customerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customer', // Ensure the Customer model exists
            required: true,
        },
        products: [
            {
                productId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product', // Ensure the Product model exists
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                },
                salePrice: {
                    type: Number,
                    required: true,
                },
            },
        ],
        status: {
            type: String,
            enum: ['pending', 'completed', 'shipped'],
            default: 'pending',
        },
    },
    {
        timestamps: true, // This automatically adds createdAt and updatedAt fields
    }
);

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

module.exports = Order;
