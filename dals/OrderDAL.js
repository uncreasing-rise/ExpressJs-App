const Order = require('../Models/Order');

class OrderDAL {
    static async createOrder(orderData) {
        const order = new Order(orderData);
        return await order.save();
    }

    static async getOrderById(orderId) {
        return await Order.findById(orderId)
            .populate('products.productId')
            .populate('createdBy updatedBy');
    }

    static async updateOrder(orderId, updateData) {
        return await Order.findByIdAndUpdate(orderId, updateData, {
            new: true,
        });
    }

    static async getAllOrders() {
        return await Order.find()
            .populate('products.productId')
            .populate('createdBy updatedBy');
    }
}

module.exports = OrderDAL;
