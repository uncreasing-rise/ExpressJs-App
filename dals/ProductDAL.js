const Product = require('../Models/Product')

const getAllProducts = async () => {
    return await Product.find()
}

const createProduct = async (productData) => {
    const product = new Product(productData)
    return await product.save()
}

const updateProduct = async (productId, productData) => {
    return await Product.findByIdAndUpdate(productId, productData, {
        new: true,
    })
}

const deleteProduct = async (productId) => {
    return await Product.findByIdAndDelete(productId)
}

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
}
