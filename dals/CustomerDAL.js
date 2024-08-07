const Customer = require('../models/Customer');

const getAllCustomers = async () => Customer.find();

const getCustomerById = async (customerId) => Customer.findById(customerId);

const createCustomer = async (customerData) => {
    const customer = new Customer(customerData);
    return customer.save();
};

const updateCustomer = async (customerId, customerData) =>
    Customer.findByIdAndUpdate(customerId, customerData, { new: true });

const deleteCustomer = async (customerId) =>
    Customer.findByIdAndDelete(customerId);

module.exports = {
    getAllCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer,
};
