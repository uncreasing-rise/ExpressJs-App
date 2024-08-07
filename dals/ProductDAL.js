const Product = require('../Models/Product')

const getAllProducts = async () => {
    return Product.find()
}

const getProductById = async (productId) => {
    return Product.findById(productId)
}

const createProduct = async (productData) => {
    const product = new Product(productData)
    return product.save()
}

const updateProduct = async (productId, productData) => {
    return Product.findByIdAndUpdate(productId, productData, { new: true })
}

const deleteProduct = async (productId) => {
    return Product.findByIdAndDelete(productId)
}

module.exports = {
    getAllProducts,
    getProductById, // Ensure this method is included and exported
    createProduct,
    updateProduct,
    deleteProduct,
}
