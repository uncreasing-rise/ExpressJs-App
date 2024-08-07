const productService = require('../Services/ProductService')

const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts()
        res.json(products)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const createProduct = async (req, res) => {
    try {
        const newProduct = await productService.createProduct(req.body)
        res.status(201).json(newProduct)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await productService.updateProduct(
            req.params.id,
            req.body
        )
        res.json(updatedProduct)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const deleteProduct = async (req, res) => {
    try {
        await productService.deleteProduct(req.params.id)
        res.json({ message: 'Product deleted' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
}
