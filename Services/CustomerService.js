const customerDal = require('../DALs/CustomerDAL');

const getAllCustomers = async () => await customerDal.getAllCustomers();

const createCustomer = async (customerData) =>
    await customerDal.createCustomer(customerData);

const updateCustomer = async (customerId, customerData) =>
    await customerDal.updateCustomer(customerId, customerData);

const deleteCustomer = async (customerId) =>
    await customerDal.deleteCustomer(customerId);

module.exports = {
    getAllCustomers,
    createCustomer,
    updateCustomer,
    deleteCustomer,
};
