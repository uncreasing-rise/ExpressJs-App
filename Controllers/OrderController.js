const OrderService = require('../Services/OrderService');

const createOrder = async (req, res) => {
    try {
        const orderData = req.body;
        const newOrder = await OrderService.createOrder(orderData);
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllOrders = async (req, res) => {
    try {
        const orders = await OrderService.getAllOrders();
        res.status(200).json(orders);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getOrderById = async (req, res) => {
    try {
        const order = await OrderService.getOrderById(req.params.id);
        res.status(200).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateOrder = async (req, res) => {
    try {
        const updatedOrder = await OrderService.updateOrder(
            req.params.id,
            req.body
        );
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteOrder = async (req, res) => {
    try {
        await OrderService.deleteOrder(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrder,
    deleteOrder,
};
