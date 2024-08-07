const OrderDAL = require('../DALs/OrderDAL');
const CustomerDAL = require('../DALs/CustomerDAL');
const ProductDAL = require('../DALs/ProductDAL');

const calculateTotal = async (products) => {
    let total = 0;
    for (const item of products) {
        const product = await ProductDAL.getProductById(item.productId);
        if (product) {
            total += product.price * item.quantity;
        } else {
            throw new Error(`Product with ID ${item.productId} not found`);
        }
    }
    return total;
};

const createOrder = async (orderData) => {
    // Kiểm tra xem ID khách hàng có hợp lệ không
    const customer = await CustomerDAL.getCustomerById(orderData.customerId);
    if (!customer) {
        throw new Error('Customer not found');
    }

    // Kiểm tra số lượng của từng sản phẩm trong đơn hàng
    for (const item of orderData.products) {
        const product = await ProductDAL.getProductById(item.productId);
        if (!product) {
            throw new Error(`Product with ID ${item.productId} not found`);
        }

        if (product.quantity < item.quantity) {
            throw new Error(`Insufficient stock for product ${item.productId}`);
        }
    }

    // Tính tổng giá trị đơn hàng
    const totalAmount = await calculateTotal(orderData.products);

    // Nếu tất cả kiểm tra đều thành công, tạo đơn hàng
    const newOrderData = {
        ...orderData,
        totalAmount: totalAmount - (orderData.discount || 0),
    };

    return OrderDAL.createOrder(newOrderData);
};

const updateOrder = async (orderId, orderData) => {
    // Kiểm tra xem ID khách hàng có hợp lệ không
    if (orderData.customerId) {
        const customer = await CustomerDAL.getCustomerById(
            orderData.customerId
        );
        if (!customer) {
            throw new Error('Customer not found');
        }
    }

    // Kiểm tra số lượng của từng sản phẩm trong đơn hàng
    if (orderData.products) {
        for (const item of orderData.products) {
            const product = await ProductDAL.getProductById(item.productId);
            if (!product) {
                throw new Error(`Product with ID ${item.productId} not found`);
            }

            if (product.quantity < item.quantity) {
                throw new Error(
                    `Insufficient stock for product ${item.productId}`
                );
            }
        }

        // Tính tổng giá trị đơn hàng
        const totalAmount = await calculateTotal(orderData.products);
        orderData.totalAmount = totalAmount - (orderData.discount || 0);
    }

    return OrderDAL.updateOrder(orderId, orderData);
};

const getAllOrders = async () => OrderDAL.getAllOrders();

const getOrderById = async (orderId) => OrderDAL.getOrderById(orderId);

const deleteOrder = async (orderId) => OrderDAL.deleteOrder(orderId);

module.exports = {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrder,
    deleteOrder,
};
