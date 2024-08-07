const customerService = require('../Services/CustomerService')

const getAllCustomers = async (req, res) => {
    try {
        const customers = await customerService.getAllCustomers()
        res.json(customers)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const createCustomer = async (req, res) => {
    try {
        const newCustomer = await customerService.createCustomer(req.body)
        res.status(201).json(newCustomer)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const updateCustomer = async (req, res) => {
    try {
        const updatedCustomer = await customerService.updateCustomer(
            req.params.id,
            req.body
        )
        res.json(updatedCustomer)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const deleteCustomer = async (req, res) => {
    try {
        await customerService.deleteCustomer(req.params.id)
        res.json({ message: 'Customer deleted' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = {
    getAllCustomers,
    createCustomer,
    updateCustomer,
    deleteCustomer,
}
