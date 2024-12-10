const OrderDAL = require('../dal/orderDAL');
const ProductDAL = require('../dal/productDAL');

class OrderService {
    static async createOrder(orderData) {
        try {
            const createdOrder = await OrderDAL.createOrder(orderData);
            return createdOrder;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async getOrderById(orderId) {
        try {
            const order = await OrderDAL.getOrderById(orderId);
            return order;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async getAllOrders() {
        try {
            const orders = await OrderDAL.getAllOrders();
            return orders;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async updateOrder(orderId, updateData) {
        try {
            const updatedOrder = await OrderDAL.updateOrder(
                orderId,
                updateData
            );
            return updatedOrder;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async deleteOrder(orderId) {
        try {
            await OrderDAL.deleteOrder(orderId);
            return { message: 'Order deleted successfully' };
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async calculateTotal(order) {
        let total = 0;
        for (let item of order.products) {
            const product = await ProductDAL.getProductById(item.productId);
            total += item.quantity * product.salePrice;
        }
        return total;
    }
}

module.exports = OrderService;
