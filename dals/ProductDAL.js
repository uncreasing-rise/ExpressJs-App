const Product = require('../Models/Product');

const getAllProducts = async () => Product.find();

const getProductById = async (productId) => Product.findById(productId);

const createProduct = async (productData) => {
    const product = new Product(productData);
    return product.save();
};

const updateProduct = async (productId, productData) =>
    Product.findByIdAndUpdate(productId, productData, { new: true });

const deleteProduct = async (productId) => Product.findByIdAndDelete(productId);

module.exports = {
    getAllProducts,
    getProductById, // Ensure this method is included and exported
    createProduct,
    updateProduct,
    deleteProduct,
};
