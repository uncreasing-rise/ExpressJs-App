const Order = require('../Models/Order');

const getAllOrders = async () =>
    Order.find().populate('customerId').populate('products.productId');

const createOrder = async (orderData) => {
    const order = new Order(orderData);
    return order.save();
};

const updateOrder = async (orderId, orderData) =>
    Order.findByIdAndUpdate(orderId, orderData, { new: true })
        .populate('customerId')
        .populate('products.productId');

const deleteOrder = async (orderId) => Order.findByIdAndDelete(orderId);

const getOrderById = async (orderId) =>
    Order.findById(orderId)
        .populate('customerId')
        .populate('products.productId');

module.exports = {
    getAllOrders,
    createOrder,
    updateOrder,
    deleteOrder,
    getOrderById,
};
