const Order = require('../Models/Order')

const getAllOrders = async () => {
    return Order.find().populate('customerId').populate('products.productId')
}

const getOrderById = async (orderId) => {
    return Order.findById(orderId)
        .populate('customerId')
        .populate('products.productId')
}

const createOrder = async (orderData) => {
    const order = new Order(orderData)
    return order.save()
}

const updateOrder = async (orderId, orderData) => {
    return Order.findByIdAndUpdate(orderId, orderData, { new: true })
        .populate('customerId')
        .populate('products.productId')
}

const deleteOrder = async (orderId) => {
    return Order.findByIdAndDelete(orderId)
}

module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
}
