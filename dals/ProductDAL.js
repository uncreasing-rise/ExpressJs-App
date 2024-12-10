const Product = require('../Models/Product');

class ProductDAL {
    static async createProduct(productData) {
        const product = new Product(productData);
        return await product.save();
    }

    static async getProductById(productId) {
        return await Product.findById(productId);
    }

    static async updateProduct(productId, updateData) {
        return await Product.findByIdAndUpdate(productId, updateData, {
            new: true,
        });
    }

    static async getAllProducts() {
        return await Product.find();
    }

    static async deleteProduct(productId) {
        return await Product.findByIdAndDelete(productId);
    }
}

module.exports = ProductDAL;
