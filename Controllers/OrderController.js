const OrderService = require('../Services/OrderService')

const createOrderController = async (req, res) => {
    try {
        const orderData = req.body
        const newOrder = await OrderService.createOrder(orderData)
        res.status(201).json(newOrder)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getAllOrdersController = async (req, res) => {
    try {
        const orders = await OrderService.getAllOrders()
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
}

const getOrderByIdController = async (req, res) => {
    try {
        const { id } = req.params
        const order = await OrderService.getOrderById(id)
        if (!order) {
            return res.status(404).json({ error: 'Order not found' })
        }
        res.status(200).json(order)
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
}

const updateOrderController = async (req, res) => {
    try {
        const { id } = req.params
        const orderData = req.body
        const updatedOrder = await OrderService.updateOrder(id, orderData)
        if (!updatedOrder) {
            return res.status(404).json({ error: 'Order not found' })
        }
        res.status(200).json(updatedOrder)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const deleteOrderController = async (req, res) => {
    try {
        const { id } = req.params
        const deletedOrder = await OrderService.deleteOrder(id)
        if (!deletedOrder) {
            return res.status(404).json({ error: 'Order not found' })
        }
        res.status(204).send()
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
}

module.exports = {
    createOrderController,
    getAllOrdersController,
    getOrderByIdController,
    updateOrderController,
    deleteOrderController,
}
