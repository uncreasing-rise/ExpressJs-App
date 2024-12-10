const OrderService = require('../Services/OrderService');

class OrderController {
    static async createOrder(req, res) {
        try {
            const order = await OrderService.createOrder(req.body);
            res.status(201).json({ success: true, data: order });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    static async getOrderById(req, res) {
        try {
            const order = await OrderService.getOrderById(req.params.id);
            if (!order)
                return res
                    .status(404)
                    .json({ success: false, message: 'Order not found' });
            res.status(200).json({ success: true, data: order });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    static async getAllOrders(req, res) {
        try {
            const orders = await OrderService.getAllOrders();
            res.status(200).json({ success: true, data: orders });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    static async updateOrder(req, res) {
        try {
            const updatedOrder = await OrderService.updateOrder(
                req.params.id,
                req.body
            );
            res.status(200).json({ success: true, data: updatedOrder });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    static async deleteOrder(req, res) {
        try {
            const response = await OrderService.deleteOrder(req.params.id);
            res.status(200).json({ success: true, message: response.message });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
}

module.exports = OrderController;
