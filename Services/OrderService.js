const OrderDAL = require('../DALs/OrderDAL');
const CustomerDAL = require('../DALs/CustomerDAL');
const ProductDAL = require('../DALs/ProductDAL');

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

  // Nếu tất cả kiểm tra đều thành công, tạo đơn hàng
  return OrderDAL.createOrder(orderData);
};

const getAllOrders = async () => {
  return OrderDAL.getAllOrders();
};

const getOrderById = async (orderId) => {
  return OrderDAL.getOrderById(orderId);
};

const updateOrder = async (orderId, orderData) => {
  return OrderDAL.updateOrder(orderId, orderData);
};

const deleteOrder = async (orderId) => {
  return OrderDAL.deleteOrder(orderId);
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
};
