const productDal = require('../DALs/ProductDAL')

const getAllProducts = async () => {
    return await productDal.getAllProducts()
}

const createProduct = async (productData) => {
    return await productDal.createProduct(productData)
}

const updateProduct = async (productId, productData) => {
    return await productDal.updateProduct(productId, productData)
}

const deleteProduct = async (productId) => {
    return await productDal.deleteProduct(productId)
}

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
}
