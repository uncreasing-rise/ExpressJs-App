const Customer = require('../models/Customer')

const getAllCustomers = async () => {
    return Customer.find()
}

const getCustomerById = async (customerId) => {
    return Customer.findById(customerId)
}

const createCustomer = async (customerData) => {
    const customer = new Customer(customerData)
    return customer.save()
}

const updateCustomer = async (customerId, customerData) => {
    return Customer.findByIdAndUpdate(customerId, customerData, { new: true })
}

const deleteCustomer = async (customerId) => {
    return Customer.findByIdAndDelete(customerId)
}

module.exports = {
    getAllCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer,
}
