const Customer = require('../Models/Customer')
const getAllCustomers = async () => {
    return await Customer.find()
}

const createCustomer = async (customerData) => {
    const customer = new Customer(customerData)
    return await customer.save()
}

const updateCustomer = async (customerId, customerData) => {
    return await Customer.findByIdAndUpdate(customerId, customerData, {
        new: true,
    })
}

const deleteCustomer = async (customerId) => {
    return await Customer.findByIdAndDelete(customerId)
}

module.exports = {
    getAllCustomers,
    createCustomer,
    updateCustomer,
    deleteCustomer,
}
