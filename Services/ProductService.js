const ProductDAL = require('../dal/productDAL');

class ProductService {
    static async createProduct(productData) {
        try {
            const product = await ProductDAL.createProduct(productData);
            return product;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async getProductById(productId) {
        try {
            const product = await ProductDAL.getProductById(productId);
            return product;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async getAllProducts() {
        try {
            const products = await ProductDAL.getAllProducts();
            return products;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async updateProduct(productId, updateData) {
        try {
            const updatedProduct = await ProductDAL.updateProduct(
                productId,
                updateData
            );
            return updatedProduct;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async deleteProduct(productId) {
        try {
            await ProductDAL.deleteProduct(productId);
            return { message: 'Product deleted successfully' };
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = ProductService;
