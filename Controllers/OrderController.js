const OrderService = require('../Services/OrderService')

const getAllOrders = async (req, res) => {
    try {
        const orders = await OrderService.getAllOrders()
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getOrderById = async (req, res) => {
    try {
        const order = await OrderService.getOrderById(req.params.id)
        if (!order) {
            return res.status(404).json({ error: 'Order not found' })
        }
        res.status(200).json(order)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const createOrder = async (req, res) => {
    try {
        const newOrder = await OrderService.createOrder(req.body)
        res.status(201).json(newOrder)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const updateOrder = async (req, res) => {
    try {
        const updatedOrder = await OrderService.updateOrder(
            req.params.id,
            req.body
        )
        if (!updatedOrder) {
            return res.status(404).json({ error: 'Order not found' })
        }
        res.status(200).json(updatedOrder)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const deleteOrder = async (req, res) => {
    try {
        const result = await OrderService.deleteOrder(req.params.id)
        if (!result) {
            return res.status(404).json({ error: 'Order not found' })
        }
        res.status(204).end()
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
}
