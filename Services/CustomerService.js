const customerDal = require('../DALs/CustomerDAL')

const getAllCustomers = async () => {
    return await customerDal.getAllCustomers()
}

const createCustomer = async (customerData) => {
    return await customerDal.createCustomer(customerData)
}

const updateCustomer = async (customerId, customerData) => {
    return await customerDal.updateCustomer(customerId, customerData)
}

const deleteCustomer = async (customerId) => {
    return await customerDal.deleteCustomer(customerId)
}

module.exports = {
    getAllCustomers,
    createCustomer,
    updateCustomer,
    deleteCustomer,
}
