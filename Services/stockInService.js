const StockInDAL = require('../DALs/stockInDAL');

class StockInService {
    static async createStockIn(stockInData) {
        try {
            const stockIn = await StockInDAL.createStockIn(stockInData);
            return stockIn;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async getStockInById(stockInId) {
        try {
            const stockIn = await StockInDAL.getStockInById(stockInId);
            return stockIn;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async getAllStockIns() {
        try {
            const stockIns = await StockInDAL.getAllStockIns();
            return stockIns;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async updateStockIn(stockInId, updateData) {
        try {
            const updatedStockIn = await StockInDAL.updateStockIn(
                stockInId,
                updateData
            );
            return updatedStockIn;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async deleteStockIn(stockInId) {
        try {
            await StockInDAL.deleteStockIn(stockInId);
            return { message: 'StockIn deleted successfully' };
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = StockInService;
