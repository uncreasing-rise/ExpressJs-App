const productDal = require('../DALs/ProductDAL');

const getAllProducts = async () => await productDal.getAllProducts();

const createProduct = async (productData) =>
    await productDal.createProduct(productData);

const updateProduct = async (productId, productData) =>
    await productDal.updateProduct(productId, productData);

const deleteProduct = async (productId) =>
    await productDal.deleteProduct(productId);

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
};
