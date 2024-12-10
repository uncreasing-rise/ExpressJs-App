const StockIn = require('../Models/StockIn');

class StockInDAL {
    static async createStockIn(stockInData) {
        const stockIn = new StockIn(stockInData);
        return await stockIn.save();
    }

    static async getStockInById(stockInId) {
        return await StockIn.findById(stockInId)
            .populate('products.productId')
            .populate('createdBy updatedBy');
    }

    static async getAllStockIns() {
        return await StockIn.find()
            .populate('products.productId')
            .populate('createdBy updatedBy');
    }
}

module.exports = StockInDAL;
